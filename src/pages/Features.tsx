import { motion } from "framer-motion";
import { Header } from "@/components/weather/Header";
import { Footer } from "@/components/weather/Footer";

import { Cloud, Sun, Wind, Droplets, ThermometerSun } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <ThermometerSun className="w-6 h-6 sm:w-8 sm:h-8 text-weather-sunny" />,
      title: "Real-time Temperature",
      description: "Get accurate, up-to-the-minute temperature readings for any location worldwide."
    },
    {
      icon: <Cloud className="w-6 h-6 sm:w-8 sm:h-8 text-weather-cloudy" />,
      title: "Cloud Coverage",
      description: "Detailed cloud coverage information and precipitation predictions."
    },
    {
      icon: <Wind className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
      title: "Wind Conditions",
      description: "Track wind speed and direction with our advanced wind monitoring system."
    },
    {
      icon: <Droplets className="w-6 h-6 sm:w-8 sm:h-8 text-weather-rainy" />,
      title: "Humidity Levels",
      description: "Monitor humidity levels and get comfort index recommendations."
    }
  ];

  return (
    <div className="min-h-screen bg-[#1C1C1E] font-['Outfit'] overflow-hidden flex flex-col">
      <Header />
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 mt-16 sm:mt-20">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="text-center space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Features
              </h1>
              <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
                Discover the powerful features that make ForeCastify your ultimate weather companion
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 p-4 sm:p-6 rounded-lg flex items-start gap-3 sm:gap-4"
                >
                  <div className="bg-white/10 p-2 sm:p-3 rounded-lg shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{feature.title}</h3>
                    <p className="text-white/70 text-sm sm:text-base">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 p-4 sm:p-8 rounded-lg mt-8 sm:mt-12 text-center"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Premium Features</h2>
              <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
                Get access to advanced features like extended forecasts, weather alerts, 
                and detailed weather maps with our premium subscription.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
