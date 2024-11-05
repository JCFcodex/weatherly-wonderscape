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
      <Card className="w-full p-6 bg-[#EBEBEB]/80 backdrop-blur-lg">
        <h3 className="text-lg font-medium text-[#333333] mb-4">Weekly Forecast</h3>
        <div className="space-y-4">
          {forecast.forecastday.map((day: any, index: number) => (
            <motion.div
              key={day.date}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center justify-between"
            >
              <span className="text-[#ADADAD]">
                {new Date(day.date).toLocaleDateString("en-US", {
                  weekday: "short",
                })}
              </span>
              <div className="flex items-center space-x-4">
                <WeatherIcon condition={day.day.condition.text} className="w-6 h-6" />
                <span className="text-[#333333]">
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