import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { SearchBar } from "@/components/SearchBar";
import { WeatherCard } from "@/components/WeatherCard";
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
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8 font-['Outfit']">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        <SearchBar onSearch={handleSearch} />
        {isLoading ? (
          <LoadingCard />
        ) : weather ? (
          <WeatherCard weather={weather} />
        ) : null}
      </motion.div>
    </div>
  );
};

export default Index;