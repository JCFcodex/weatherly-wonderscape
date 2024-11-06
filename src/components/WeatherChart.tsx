import { Card } from "@/components/ui/card";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { motion } from "framer-motion";

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
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                <XAxis 
                  dataKey="time" 
                  stroke="#ffffff50"
                  tickFormatter={formatTime}
                  interval="preserveStartEnd"
                  tick={{ fontSize: 10, fill: "#ffffff80" }}
                  tickMargin={8}
                />
                <YAxis 
                  stroke="#ffffff50"
                  tickFormatter={(value) => `${value}°`}
                  tick={{ fontSize: 10, fill: "#ffffff80" }}
                  tickMargin={8}
                  width={30}
                />
                <Tooltip 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-[#2C2C2E] p-2 rounded-lg border border-white/10">
                          <p className="text-white/90 text-sm">{`${payload[0].value}°C`}</p>
                          <p className="text-white/50 text-xs">{formatTime(payload[0].payload.time)}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="temp" 
                  stroke="#FFB200" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};