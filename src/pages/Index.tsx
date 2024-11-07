import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { SearchBar } from "@/components/SearchBar";
import { WeatherCard } from "@/components/WeatherCard";
import { WeatherChart } from "@/components/WeatherChart";
import { WeatherForecast } from "@/components/WeatherForecast";
import { fetchWeatherData } from "@/lib/api/weatherApi";
import { LoadingCard } from "@/components/LoadingCard";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { Helmet } from "react-helmet";
import { toast } from "sonner";

const Index = () => {
  const [city, setCity] = useState("Manila");
  const [activeTab, setActiveTab] = useState("hourly");
  const [isTabLoading, setIsTabLoading] = useState(false);

  useEffect(() => {
    const getUserLocation = () => {
      if ("geolocation" in navigator) {
        toast("Requesting location access...");
        
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const response = await fetch(
                `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=YOUR_API_KEY`
              );
              const data = await response.json();
              if (data.results && data.results[0]) {
                const cityName = data.results[0].components.city || 
                               data.results[0].components.town ||
                               data.results[0].components.village;
                if (cityName) {
                  setCity(cityName);
                  toast.success("Using your current location");
                }
              }
            } catch (error) {
              console.error("Error fetching city name:", error);
              toast.error("Could not determine your city. Using default location.");
            }
          },
          (error) => {
            console.error("Geolocation error:", error);
            toast.error("Location access denied. Using default location.");
          }
        );
      } else {
        toast.error("Geolocation is not supported by your browser. Using default location.");
      }
    };

    getUserLocation();
  }, []);

  const { data: weather, isLoading, isError } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeatherData(city),
    retry: false,
    retryOnMount: false
  });

  const handleSearch = (newCity: string) => {
    setCity(newCity);
  };

  const handleTabChange = (value: string) => {
    setIsTabLoading(true);
    setActiveTab(value);
    setTimeout(() => {
      setIsTabLoading(false);
    }, 500);
  };

  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <div className="min-h-screen flex flex-col bg-[#1C1C1E] dark:bg-[#1C1C1E] font-['Outfit']">
        <Helmet>
          <title>ForeCastify - Weather Forecast for {city}</title>
          <meta name="description" content={`Get real-time weather updates and forecast for ${city}. View temperature, humidity, wind speed, and more.`} />
          <meta name="keywords" content={`${city} weather, weather forecast, temperature, humidity, wind speed, weather updates`} />
          <link rel="canonical" href={`https://forecastify.com/weather/${city.toLowerCase()}`} />
        </Helmet>
        <Header />
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 mt-20 sm:mt-24">
          <div className="max-w-[1200px] mx-auto h-full flex flex-col">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 flex-1"
            >
              <section aria-label="Weather Search">
                <h1 className="sr-only">Weather Forecast for {city}</h1>
                <SearchBar onSearch={handleSearch} />
              </section>

              {isLoading ? (
                <LoadingCard />
              ) : weather && !isError ? (
                <div className="grid lg:grid-cols-12 gap-3 sm:gap-4">
                  <section aria-label="Current Weather" className="lg:col-span-4">
                    <WeatherCard weather={weather} />
                  </section>
                  <section aria-label="Weather Forecast" className="lg:col-span-8">
                    <Tabs 
                      defaultValue="hourly" 
                      className="w-full"
                      value={activeTab}
                      onValueChange={handleTabChange}
                    >
                      <TabsList className="mb-4">
                        <TabsTrigger 
                          value="hourly" 
                          className="flex-1 text-white/70 hover:text-white transition-colors"
                        >
                          Hourly Forecast
                        </TabsTrigger>
                        <TabsTrigger 
                          value="weekly" 
                          className="flex-1 text-white/70 hover:text-white transition-colors"
                        >
                          Weekly Forecast
                        </TabsTrigger>
                      </TabsList>
                      {isTabLoading ? (
                        <LoadingCard />
                      ) : (
                        <>
                          <TabsContent value="hourly" className="mt-0">
                            <WeatherChart forecast={weather.forecast} />
                          </TabsContent>
                          <TabsContent value="weekly" className="mt-0">
                            <WeatherForecast forecast={weather.forecast} />
                          </TabsContent>
                        </>
                      )}
                    </Tabs>
                  </section>
                </div>
              ) : (
                <section aria-label="Error Message" className="flex-1">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center p-4 sm:p-8 bg-white/5 rounded-lg text-white/70"
                  >
                    <AlertCircle className="w-8 h-8 sm:w-12 sm:h-12 mb-4 text-red-400" />
                    <p className="text-base sm:text-lg font-medium text-center">No weather data available</p>
                    <p className="text-xs sm:text-sm mt-2 text-center">Please try searching for a valid location</p>
                  </motion.div>
                </section>
              )}
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;