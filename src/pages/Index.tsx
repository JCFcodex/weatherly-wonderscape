import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { SearchBar } from "@/components/SearchBar";
import { WeatherCard } from "@/components/WeatherCard";
import { fetchWeatherData } from "@/services/weatherApi";
import { Skeleton } from "@/components/ui/skeleton";

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
    <div className="min-h-screen bg-weather-gradient p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-secondary-foreground">
          Weather Forecast
        </h1>
        
        <SearchBar onSearch={handleSearch} />

        {isLoading ? (
          <div className="w-full max-w-md mx-auto">
            <Skeleton className="h-[500px] w-full rounded-lg" />
          </div>
        ) : weather ? (
          <WeatherCard weather={weather} />
        ) : null}
      </div>
    </div>
  );
};

export default Index;