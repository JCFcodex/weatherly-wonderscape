import { Cloud, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only render theme toggle after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full mb-8 py-4 border-b border-gray-200 dark:border-white/10"
    >
      <div className="flex items-center justify-between max-w-[1200px] mx-auto px-4">
        <div className="flex items-center gap-2">
          <div className="flex">
            <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-weather-sunny animate-pulse" />
            <Cloud className="w-5 h-5 sm:w-6 sm:h-6 text-weather-cloudy -ml-2" />
          </div>
          <h1 className="text-lg sm:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Weather Dashboard
          </h1>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="hidden sm:inline text-sm text-gray-500 dark:text-white/50">Real-time Updates</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hover:bg-gray-100 dark:hover:bg-white/10"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-gray-700 dark:text-white/70" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700 dark:text-white/70" />
            )}
          </Button>
        </div>
      </div>
    </motion.header>
  );
};