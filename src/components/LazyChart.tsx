import { memo } from 'react';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

interface LazyChartProps {
  data: Array<{ time: number; temp: number }>;
  formatTime: (hour: number) => string;
}

const LazyChart = memo(({ data, formatTime }: LazyChartProps) => {
  return (
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
  );
});

LazyChart.displayName = 'LazyChart';

export default LazyChart;