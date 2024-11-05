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

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <Card className="w-full h-full p-8 bg-[#2C2C2E]/80 backdrop-blur-xl rounded-3xl border-0">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-white/90">Temperature Trend</h3>
            <p className="text-white/50 text-sm">24-hour forecast</p>
          </div>
          
          <div className="h-[300px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis 
                  dataKey="time" 
                  stroke="#ffffff50"
                  tickFormatter={(value) => `${value}:00`}
                />
                <YAxis 
                  stroke="#ffffff50"
                  tickFormatter={(value) => `${value}°`}
                />
                <Tooltip 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-[#2C2C2E] p-2 rounded-lg border border-white/10">
                          <p className="text-white/90">{`${payload[0].value}°C`}</p>
                          <p className="text-white/50 text-sm">{`${payload[0].payload.time}:00`}</p>
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