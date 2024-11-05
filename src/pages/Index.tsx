import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { SearchBar } from "@/components/SearchBar";
import { WeatherCard } from "@/components/WeatherCard";
import { WeatherForecast } from "@/components/WeatherForecast";
import { OtherCities } from "@/components/OtherCities";
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
    <div className="min-h-screen bg-gradient-to-b from-[#4965F2] to-[#333333] p-4 sm:p-6 md:p-8 font-['SF_Pro']">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto space-y-6"
      >
        <SearchBar onSearch={handleSearch} />

        {isLoading ? (
          <LoadingCard />
        ) : weather ? (
          <>
            <WeatherCard weather={weather} />
            <WeatherForecast forecast={weather.forecast} />
            <OtherCities currentCity={city} onCitySelect={setCity} />
          </>
        ) : null}
      </motion.div>
    </div>
  );
};

export default Index;