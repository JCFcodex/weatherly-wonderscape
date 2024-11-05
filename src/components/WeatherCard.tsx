import { Card } from "@/components/ui/card";
import { WeatherIcon } from "./WeatherIcon";
import { WeatherData } from "@/services/weatherApi";
import { motion } from "framer-motion";

interface WeatherCardProps {
  weather: WeatherData;
}

export const WeatherCard = ({ weather }: WeatherCardProps) => {
  const date = new Date().toLocaleDateString('en-US', { 
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="w-full h-full p-8 bg-white/80 dark:bg-[#2C2C2E]/80 backdrop-blur-xl rounded-3xl border-0 shadow-lg">
        <div className="space-y-8 text-gray-900 dark:text-white">
          <div>
            <div className="flex items-center space-x-2">
              <WeatherIcon condition={weather.current.condition.text} className="w-6 h-6 text-gray-700 dark:text-white/70" />
              <h2 className="text-xl font-medium text-gray-900 dark:text-white/90">{weather.location.name}</h2>
            </div>
            <p className="text-gray-500 dark:text-white/50 mt-1 text-sm">{date}</p>
          </div>

          <div>
            <div className="flex items-start">
              <span className="text-[72px] font-light leading-none">
                {Math.round(weather.current.temp_c)}°
              </span>
            </div>
            <p className="text-gray-700 dark:text-white/70 text-lg mt-2">{weather.current.condition.text}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 dark:bg-white/5 rounded-2xl p-4">
              <p className="text-gray-500 dark:text-white/50 text-sm mb-1">Wind</p>
              <p className="text-xl font-medium">{Math.round(weather.current.wind_kph)} km/h</p>
            </div>
            <div className="bg-gray-100 dark:bg-white/5 rounded-2xl p-4">
              <p className="text-gray-500 dark:text-white/50 text-sm mb-1">Humidity</p>
              <p className="text-xl font-medium">{weather.current.humidity}%</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-gray-500 dark:text-white/50 text-sm">Air Quality</p>
            <div className="flex space-x-1">
              {[1,2,3,4,5].map((_, i) => (
                <div 
                  key={i}
                  className={`h-1 flex-1 rounded-full ${i < 3 ? 'bg-green-400' : 'bg-gray-200 dark:bg-white/10'}`}
                />
              ))}
            </div>
            <p className="text-gray-600 dark:text-white/70 text-xs">Generally acceptable</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};