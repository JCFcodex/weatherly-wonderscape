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
      <Card className="w-full h-full p-4 sm:p-6 bg-[#2C2C2E]/80 backdrop-blur-xl rounded-3xl border-0">
        <div className="space-y-6 text-white">
          <div>
            <div className="flex items-center space-x-2">
              <WeatherIcon condition={weather.current.condition.text} className="w-5 h-5 sm:w-6 sm:h-6 text-white/70" />
              <div>
                <h2 className="text-lg sm:text-xl font-medium text-white/90">{weather.location.name}</h2>
                <p className="text-sm text-white/50">{weather.location.country}</p>
              </div>
            </div>
            <p className="text-white/50 mt-1 text-xs sm:text-sm">{date}</p>
          </div>

          <div>
            <div className="flex items-start">
              <span className="text-5xl sm:text-6xl font-light leading-none">
                {Math.round(weather.current.temp_c)}°
              </span>
            </div>
            <p className="text-white/70 text-base sm:text-lg mt-2">{weather.current.condition.text}</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/5 rounded-2xl p-3 sm:p-4">
              <p className="text-white/50 text-xs sm:text-sm mb-1">Wind</p>
              <p className="text-base sm:text-xl font-medium">{Math.round(weather.current.wind_kph)} km/h</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-3 sm:p-4">
              <p className="text-white/50 text-xs sm:text-sm mb-1">Humidity</p>
              <p className="text-base sm:text-xl font-medium">{weather.current.humidity}%</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-white/50 text-xs sm:text-sm">Air Quality</p>
            <div className="flex space-x-1">
              {[1,2,3,4,5].map((_, i) => (
                <div 
                  key={i}
                  className={`h-1 flex-1 rounded-full ${i < 3 ? 'bg-green-400' : 'bg-white/10'}`}
                />
              ))}
            </div>
            <p className="text-white/70 text-xs">Generally acceptable</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};