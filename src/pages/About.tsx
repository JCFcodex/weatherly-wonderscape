import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-[#1C1C1E] font-['Outfit'] overflow-hidden flex flex-col">
      <Header />
      <main className="flex-1 px-4 py-6 mt-20">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About ForeCastify
              </h1>
              <p className="text-white/70 max-w-2xl mx-auto">
                Your trusted companion for accurate weather forecasts and real-time updates
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 p-6 rounded-lg"
              >
                <h2 className="text-xl font-semibold text-white mb-4">Our Mission</h2>
                <p className="text-white/70">
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
                className="bg-white/5 p-6 rounded-lg"
              >
                <h2 className="text-xl font-semibold text-white mb-4">Why Choose Us</h2>
                <ul className="text-white/70 space-y-2">
                  <li>• Real-time weather updates</li>
                  <li>• Accurate hourly forecasts</li>
                  <li>• Detailed weather information</li>
                  <li>• User-friendly interface</li>
                  <li>• Global coverage</li>
                </ul>
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