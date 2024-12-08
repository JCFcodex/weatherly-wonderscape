import { Card } from "@/components/ui/card";
import { WeatherIcon } from "./WeatherIcon";
import { motion } from "framer-motion";

interface WeatherForecastProps {
  forecast: any;
}

export const WeatherForecast = ({ forecast }: WeatherForecastProps) => {
  console.log('Forecast data:', forecast);
  console.log('Number of forecast days:', forecast.forecastday.length);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="w-full"
    >
      <Card className="w-full p-4 sm:p-6 bg-[#2C2C2E]/80 backdrop-blur-xl rounded-3xl border-0">
        <div className="space-y-3">
          <p className="text-white/50 text-sm">{forecast.forecastday.length}-day forecast</p>

          {forecast.forecastday.map((day: any, index: number) => (
            <motion.div
              key={day.date}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center justify-between p-2 sm:p-3 rounded-xl bg-white/5"
            >
              <div className="flex items-center gap-2 sm:gap-4">
                <span className="text-white/70 text-sm sm:text-base min-w-[90px] sm:min-w-[100px]">
                  {new Date(day.date).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric"
                  })}
                </span>
                <WeatherIcon condition={day.day.condition.text} className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-white/70 text-sm sm:text-base hidden sm:block">{day.day.condition.text}</span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-white/50 text-sm sm:text-base">
                  {Math.round(day.day.mintemp_c)}°
                </span>
                <span className="text-white text-sm sm:text-base">
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
