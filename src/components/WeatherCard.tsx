import { Card } from "@/components/ui/card";
import { WeatherIcon } from "./WeatherIcon";
import { WeatherData } from "@/services/weatherApi";
import { motion } from "framer-motion";

interface WeatherCardProps {
  weather: WeatherData;
}

export const WeatherCard = ({ weather }: WeatherCardProps) => {
  const date = new Date().toLocaleDateString('en-US', { 
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  const time = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit'
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="w-full p-8 bg-white rounded-3xl shadow-sm">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-2xl font-medium text-gray-800">
              {weather.location.name}
            </h2>
            <p className="text-gray-500">{date}</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-medium text-gray-800">Good Morning</p>
            <p className="text-gray-500">{time}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <span className="text-[120px] font-light text-gray-800 leading-none">
                {Math.round(weather.current.temp_c)}°
              </span>
            </div>
            <p className="text-xl text-gray-600 mt-2">{weather.current.condition.text}</p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <p className="text-gray-500 text-sm">Wind</p>
              <p className="text-gray-800 font-medium">{Math.round(weather.current.wind_kph)} km/h</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-sm">Humidity</p>
              <p className="text-gray-800 font-medium">{weather.current.humidity}%</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {weather.forecast.forecastday[0].hour
            .filter((_, index) => index % 4 === 0)
            .map((hour, index) => (
              <motion.div
                key={hour.time}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-3 rounded-lg bg-gray-50"
              >
                <p className="text-gray-500 text-sm mb-1">
                  {new Date(hour.time).getHours()}:00
                </p>
                <WeatherIcon
                  condition={hour.condition.text}
                  className="w-6 h-6 mx-auto my-2"
                />
                <p className="text-gray-800 font-medium">
                  {Math.round(hour.temp_c)}°
                </p>
              </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};