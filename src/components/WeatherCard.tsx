import { Card } from "@/components/ui/card";
import { WeatherIcon } from "./WeatherIcon";
import { WeatherData } from "@/services/weatherApi";
import { motion } from "framer-motion";

interface WeatherCardProps {
  weather: WeatherData;
}

export const WeatherCard = ({ weather }: WeatherCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="w-full p-6 bg-white/10 backdrop-blur-lg">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-medium text-white">
            {weather.location.name}
          </h2>
          <div className="flex justify-center items-center space-x-4">
            <WeatherIcon
              condition={weather.current.condition.text}
              className="w-24 h-24"
            />
            <span className="text-7xl font-light text-white">
              {Math.round(weather.current.temp_c)}°
            </span>
          </div>
          <p className="text-white/70">{weather.current.condition.text}</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="text-center">
            <p className="text-white/50 text-sm">Precipitation</p>
            <p className="text-white font-medium">
              {weather.current.precip_mm}%
            </p>
          </div>
          <div className="text-center">
            <p className="text-white/50 text-sm">Wind</p>
            <p className="text-white font-medium">
              {Math.round(weather.current.wind_kph)} km/h
            </p>
          </div>
          <div className="text-center">
            <p className="text-white/50 text-sm">Humidity</p>
            <p className="text-white font-medium">
              {weather.current.humidity}%
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};