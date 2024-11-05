import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { SearchBar } from "@/components/SearchBar";
import { WeatherCard } from "@/components/WeatherCard";
import { WeatherChart } from "@/components/WeatherChart";
import { fetchWeatherData } from "@/services/weatherApi";
import { LoadingCard } from "@/components/LoadingCard";
import { motion } from "framer-motion";

const Index = () => {
  const [city, setCity] = useState("London");

  const { data: weather, isLoading } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeatherData(city),
  });

  const handleSearch = (newCity: string) => {
    setCity(newCity);
  };

  return (
    <div className="min-h-screen bg-[#1C1C1E] p-4 sm:p-6 md:p-8 font-['Outfit']">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-white/90 text-2xl font-medium">Weather Dashboard</h1>
            <span className="text-white/50">2024</span>
          </div>
          <SearchBar onSearch={handleSearch} />
          {isLoading ? (
            <LoadingCard />
          ) : weather ? (
            <div className="grid lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <WeatherCard weather={weather} />
              </div>
              <div className="lg:col-span-8">
                <WeatherChart forecast={weather.forecast} />
              </div>
            </div>
          ) : null}
        </motion.div>
      </div>
    </div>
  );
};

export default Index;