import { Cloud, Sun, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "" },
    { name: "Features", path: "features" },
    { name: "About", path: "about" },
    { name: "Contact", path: "contact" },
  ];

  const isActive = (path: string) => location.pathname.replace('/', '') === path;

  const handleNavigation = (path: string) => {
    if (location.pathname.replace('/', '') !== path) {
      navigate(path, { replace: true });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#1C1C1E]/80 border-b border-white/10"
    >
      <div className="flex items-center justify-between max-w-[1200px] mx-auto px-4 py-4">
        <div onClick={() => handleNavigation("")} className="flex items-center gap-2 cursor-pointer">
          <div className="flex">
            <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-weather-sunny animate-pulse" />
            <Cloud className="w-5 h-5 sm:w-6 sm:h-6 text-weather-cloudy -ml-2" />
          </div>
          <h1 className="text-lg sm:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ForeCastify
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.path) 
                  ? "text-primary" 
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white/70"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#1C1C1E] border-b border-white/10 md:hidden"
          >
            <nav className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`text-sm font-medium transition-colors text-left ${
                    isActive(item.path) 
                      ? "text-primary" 
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};