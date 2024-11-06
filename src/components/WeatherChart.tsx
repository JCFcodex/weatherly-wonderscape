import { lazy, Suspense } from 'react';
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { LoadingCard } from "./LoadingCard";

const LazyChart = lazy(() => import('./LazyChart'));

interface WeatherChartProps {
  forecast: any;
}

export const WeatherChart = ({ forecast }: WeatherChartProps) => {
  const data = forecast.forecastday[0].hour.map((hour: any) => ({
    time: new Date(hour.time).getHours(),
    temp: Math.round(hour.temp_c),
  }));

  const formatTime = (hour: number) => {
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}${ampm}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="w-full"
    >
      <Card className="w-full h-full p-4 sm:p-6 bg-[#2C2C2E]/80 backdrop-blur-xl rounded-3xl border-0">
        <div className="space-y-3 sm:space-y-4">
          <div>
            <p className="text-white/50 text-xs sm:text-sm">12-hour temperature trend</p>
          </div>
          
          <div className="h-[200px] sm:h-[300px]">
            <Suspense fallback={<LoadingCard />}>
              <LazyChart data={data} formatTime={formatTime} />
            </Suspense>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};