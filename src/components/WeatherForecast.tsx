import { Card } from "@/components/ui/card";
import { WeatherIcon } from "./WeatherIcon";
import { motion } from "framer-motion";

interface WeatherForecastProps {
  forecast: any;
}

export const WeatherForecast = ({ forecast }: WeatherForecastProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <Card className="w-full p-6 bg-white/80 dark:bg-[#2C2C2E]/80 backdrop-blur-xl rounded-3xl border-0 shadow-lg">
        <div className="space-y-4">
          <p className="text-gray-500 dark:text-white/50 text-sm">7-day forecast</p>
          {forecast.forecastday.map((day: any, index: number) => (
            <motion.div
              key={day.date}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-white/5"
            >
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 dark:text-white/70 w-24">
                  {new Date(day.date).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric"
                  })}
                </span>
                <WeatherIcon condition={day.day.condition.text} className="w-6 h-6" />
                <span className="text-gray-700 dark:text-white/70">{day.day.condition.text}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-500 dark:text-white/50">
                  {Math.round(day.day.mintemp_c)}°
                </span>
                <span className="text-gray-900 dark:text-white">
                  {Math.round(day.day.maxtemp_c)}°
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};