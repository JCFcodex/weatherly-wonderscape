import { Suspense, lazy } from 'react';
import { Card } from "@/components/ui/card";

const Chart = lazy(() => import('./WeatherChart'));

export const LazyChart = ({ forecast }: { forecast: any }) => {
  return (
    <Suspense fallback={
      <Card className="w-full h-[300px] bg-[#2C2C2E]/80 backdrop-blur-xl rounded-3xl border-0 animate-pulse">
        <div className="w-full h-full flex items-center justify-center text-white/50">
          Loading chart...
        </div>
      </Card>
    }>
      <Chart forecast={forecast} />
    </Suspense>
  );
};