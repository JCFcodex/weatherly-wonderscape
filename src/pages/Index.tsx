import { useState } from "react";
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

const Index = () => {
  const [city, setCity] = useState("London");

  const { data: weather, isLoading, isError } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeatherData(city),
    retry: false,
    retryOnMount: false
  });

  const handleSearch = (newCity: string) => {
    setCity(newCity);
  };

  return (
    <div className="min-h-screen bg-[#1C1C1E] px-4 py-6 sm:p-6 md:p-8 font-['Outfit'] overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <h1 className="text-white/90 text-2xl sm:text-3xl font-medium">Weather Dashboard</h1>
            <span className="text-white/50">Real-time Updates</span>
          </div>
          <SearchBar onSearch={handleSearch} />
          {isLoading ? (
            <LoadingCard />
          ) : weather && !isError ? (
            <div className="grid lg:grid-cols-12 gap-4 sm:gap-6">
              <div className="lg:col-span-4">
                <WeatherCard weather={weather} />
              </div>
              <div className="lg:col-span-8">
                <Tabs defaultValue="hourly" className="w-full">
                  <TabsList className="w-full bg-white/5 border-0 mb-4">
                    <TabsTrigger 
                      value="hourly" 
                      className="flex-1 data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70"
                    >
                      Hourly Forecast
                    </TabsTrigger>
                    <TabsTrigger 
                      value="weekly" 
                      className="flex-1 data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70"
                    >
                      Weekly Forecast
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="hourly" className="mt-0">
                    <WeatherChart forecast={weather.forecast} />
                  </TabsContent>
                  <TabsContent value="weekly" className="mt-0">
                    <WeatherForecast forecast={weather.forecast} />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center p-8 bg-white/5 rounded-lg text-white/70"
            >
              <AlertCircle className="w-12 h-12 mb-4 text-red-400" />
              <p className="text-lg font-medium">No weather data available</p>
              <p className="text-sm mt-2">Please try searching for a valid city name</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Index;