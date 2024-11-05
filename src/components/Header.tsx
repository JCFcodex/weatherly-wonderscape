import { Cloud, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full mb-8 py-4 border-b border-white/10"
    >
      <div className="flex items-center justify-between max-w-[1200px] mx-auto">
        <div className="flex items-center gap-2">
          <div className="flex">
            <Sun className="w-6 h-6 text-weather-sunny animate-pulse" />
            <Cloud className="w-6 h-6 text-weather-cloudy -ml-2" />
          </div>
          <h1 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Weather Dashboard
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-white/50">Real-time Updates</span>
          <Moon className="w-5 h-5 text-white/70" />
        </div>
      </div>
    </motion.header>
  );
};