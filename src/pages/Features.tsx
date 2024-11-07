import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cloud, Sun, Wind, Droplets, ThermometerSun, Lock, Crown, Bell, Smartphone, Map, Zap } from "lucide-react";

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

  const upcomingFeatures = [
    {
      icon: <Lock className="w-6 h-6 text-purple-400" />,
      title: "User Accounts",
      description: "Save your favorite locations and personalize your weather experience.",
      comingSoon: true
    },
    {
      icon: <Crown className="w-6 h-6 text-yellow-400" />,
      title: "Premium Features",
      description: "Access advanced forecasts, historical data, and detailed weather analysis.",
      comingSoon: true
    },
    {
      icon: <Bell className="w-6 h-6 text-red-400" />,
      title: "Weather Alerts",
      description: "Get instant notifications for severe weather conditions in your area.",
      comingSoon: true
    },
    {
      icon: <Smartphone className="w-6 h-6 text-blue-400" />,
      title: "Mobile App",
      description: "Take ForeCastify with you everywhere with our upcoming mobile application.",
      comingSoon: true
    },
    {
      icon: <Map className="w-6 h-6 text-green-400" />,
      title: "Interactive Maps",
      description: "Explore weather patterns with detailed interactive weather maps.",
      comingSoon: true
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-400" />,
      title: "AI Predictions",
      description: "Get personalized weather insights powered by artificial intelligence.",
      comingSoon: true
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
              className="mt-12 sm:mt-16"
            >
              <div className="text-center mb-8">
                <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
                  Coming Soon
                </h2>
                <p className="text-white/70 text-sm sm:text-base">
                  Get excited! These amazing features are just around the corner
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {upcomingFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="bg-white/5 p-4 sm:p-6 rounded-lg relative overflow-hidden group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-white/10 p-2 rounded-lg shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white mb-1 flex items-center gap-2">
                          {feature.title}
                          <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">Soon</span>
                        </h3>
                        <p className="text-white/70 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;