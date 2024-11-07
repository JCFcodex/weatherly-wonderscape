import { motion } from "framer-motion";
import { Header } from "@/components/weather/Header";
import { Footer } from "@/components/weather/Footer";

const About = () => {
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
                About ForeCastify
              </h1>
              <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
                Your trusted companion for accurate weather forecasts and real-time updates
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 p-4 sm:p-6 rounded-lg"
              >
                <h2 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Our Mission</h2>
                <p className="text-white/70 text-sm sm:text-base">
                  At ForeCastify, we strive to provide the most accurate and reliable weather 
                  information to help you plan your day with confidence. Our advanced 
                  forecasting technology ensures you're always prepared for whatever 
                  weather comes your way.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 p-4 sm:p-6 rounded-lg"
              >
                <h2 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Why Choose Us</h2>
                <ul className="text-white/70 space-y-2 text-sm sm:text-base">
                  <li>• Real-time weather updates</li>
                  <li>• Accurate hourly forecasts</li>
                  <li>• Detailed weather information</li>
                  <li>• User-friendly interface</li>
                  <li>• Global coverage</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white/5 p-4 sm:p-6 rounded-lg md:col-span-2"
              >
                <h2 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Our Technology</h2>
                <p className="text-white/70 text-sm sm:text-base">
                  ForeCastify is powered by <a href="https://www.weatherapi.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">WeatherAPI.com</a>, 
                  a leading provider of weather data. This integration allows us to deliver highly accurate 
                  weather forecasts, real-time updates, and detailed weather information for locations worldwide. 
                  We combine this powerful API with our user-friendly interface to give you the best weather 
                  forecasting experience possible.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
