import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { SearchBar } from "@/components/SearchBar";
import { WeatherCard } from "@/components/WeatherCard";
import { WeatherChart } from "@/components/WeatherChart";
import { WeatherForecast } from "@/components/WeatherForecast";
import { fetchWeatherData } from "@/services/weatherApi";
import { LoadingCard } from "@/components/LoadingCard";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "next-themes";

const Index = () => {
  const [city, setCity] = useState("Manila");

  const { data: weather, isLoading, isError } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeatherData(city),
    retry: false,
    retryOnMount: false
  });

  const handleSearch = (newCity: string) => {
    setCity(newCity);
  };

  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <div className="min-h-screen bg-[#1C1C1E] dark:bg-[#1C1C1E] font-['Outfit'] overflow-hidden flex flex-col">
        <Header />
        <main className="flex-1 px-4 py-6 mt-20">
          <div className="max-w-[1200px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <SearchBar onSearch={handleSearch} />
              {isLoading ? (
                <LoadingCard />
              ) : weather && !isError ? (
                <div className="grid lg:grid-cols-12 gap-4">
                  <div className="lg:col-span-4">
                    <WeatherCard weather={weather} />
                  </div>
                  <div className="lg:col-span-8">
                    <Tabs defaultValue="hourly" className="w-full">
                      <TabsList className="w-full bg-white/5 border-0 mb-4">
                        <TabsTrigger 
                          value="hourly" 
                          className="flex-1 data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70"
                        >
                          Hourly
                        </TabsTrigger>
                        <TabsTrigger 
                          value="weekly" 
                          className="flex-1 data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70"
                        >
                          Weekly
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="hourly" className="mt-0">
                        <WeatherChart forecast={weather.forecast} />
                      </TabsContent>
                      <TabsContent value="weekly" className="mt-0">
                        <WeatherForecast forecast={weather.forecast} />
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center p-8 bg-white/5 rounded-lg text-white/70"
                >
                  <AlertCircle className="w-12 h-12 mb-4 text-red-400" />
                  <p className="text-lg font-medium">No weather data available</p>
                  <p className="text-sm mt-2">Please try searching for a valid location</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;