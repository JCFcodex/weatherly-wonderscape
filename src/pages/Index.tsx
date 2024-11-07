import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { SearchBar } from "@/components/SearchBar";
import { WeatherCard } from "@/components/WeatherCard";
import { LazyChart } from "@/components/LazyChart";
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

const Index = () => {
  const [city, setCity] = useState("Manila");
  const [activeTab, setActiveTab] = useState("hourly");
  const [isTabLoading, setIsTabLoading] = useState(false);

  const { data: weather, isLoading, isError } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeatherData(city),
    staleTime: 300000, // 5 minutes
    gcTime: 3600000, // 1 hour (formerly cacheTime)
    retry: 1
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
        </Helmet>
        <Header />
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 mt-20 sm:mt-24">
          <div className="max-w-[1200px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <SearchBar onSearch={handleSearch} />

              {isLoading ? (
                <LoadingCard />
              ) : weather && !isError ? (
                <div className="grid lg:grid-cols-12 gap-3 sm:gap-4">
                  <section className="lg:col-span-4">
                    <WeatherCard weather={weather} />
                  </section>
                  <section className="lg:col-span-8">
                    <Tabs 
                      defaultValue="hourly" 
                      value={activeTab}
                      onValueChange={handleTabChange}
                    >
                      <TabsList className="w-full bg-white/5 border-0">
                        <TabsTrigger value="hourly">Hourly Forecast</TabsTrigger>
                        <TabsTrigger value="weekly">Weekly Forecast</TabsTrigger>
                      </TabsList>
                      {isTabLoading ? (
                        <LoadingCard />
                      ) : (
                        <>
                          <TabsContent value="hourly">
                            <LazyChart forecast={weather.forecast} />
                          </TabsContent>
                          <TabsContent value="weekly">
                            <WeatherForecast forecast={weather.forecast} />
                          </TabsContent>
                        </>
                      )}
                    </Tabs>
                  </section>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center p-4 sm:p-8 bg-white/5 rounded-lg"
                >
                  <AlertCircle className="w-12 h-12 text-red-400 mb-4" />
                  <p className="text-white/70 text-center">No weather data available</p>
                </motion.div>
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