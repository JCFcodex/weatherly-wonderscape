import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { SearchBar } from "@/components/SearchBar";
import { WeatherCard } from "@/components/WeatherCard";
import { WeatherChart } from "@/components/WeatherChart";
import { WeatherForecast } from "@/components/WeatherForecast";
import { fetchWeatherData } from "@/services/weatherApi";
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
  const [city, setCity] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("hourly");
  const [isTabLoading, setIsTabLoading] = useState(false);

  useEffect(() => {
    const getLocation = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const response = await fetch(
                `http://localhost:5000/api/location?lat=${position.coords.latitude}&lon=${position.coords.longitude}`
              );
              const data = await response.json();
              if (data.city) {
                setCity(data.city);
                toast.success("Location detected successfully");
              } else {
                toast.error("Could not determine your location");
              }
            } catch (error) {
              toast.error("Error detecting location");
            }
          },
          (error) => {
            switch (error.code) {
              case error.PERMISSION_DENIED:
                toast.error("Please allow location access or search for a city");
                break;
              case error.POSITION_UNAVAILABLE:
                toast.error("Location information unavailable");
                break;
              case error.TIMEOUT:
                toast.error("Location request timed out");
                break;
              default:
                toast.error("Error detecting location");
            }
          }
        );
      } else {
        toast.error("Geolocation is not supported by your browser");
      }
    };

    getLocation();
  }, []);

  const { data: weather, isLoading, isError } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => (city ? fetchWeatherData(city) : null),
    enabled: !!city,
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
          <title>ForeCastify - {city ? `Weather Forecast for ${city}` : 'Weather Forecast'}</title>
          <meta 
            name="description" 
            content={city ? `Get real-time weather updates and forecast for ${city}` : 'Get real-time weather updates and forecast for your location'} 
          />
          <meta 
            name="keywords" 
            content={`${city ? city + ' weather,' : ''} weather forecast, temperature, humidity, wind speed, weather updates`} 
          />
          <link 
            rel="canonical" 
            href={`https://forecastify.com${city ? `/weather/${city.toLowerCase()}` : ''}`} 
          />
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
                <h1 className="sr-only">Weather Forecast {city ? `for ${city}` : ''}</h1>
                <SearchBar onSearch={handleSearch} />
              </section>

              {!city && !isLoading && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center p-8 text-white/70 text-center"
                >
                  <AlertCircle className="w-12 h-12 mb-4" />
                  <p className="text-lg">Please allow location access or search for a city</p>
                </motion.div>
              )}

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
              ) : null}
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;