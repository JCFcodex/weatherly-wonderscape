import { Cloud, Sun, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom";

const navigationMenuTriggerStyle = "group inline-flex h-10 w-max items-center justify-center rounded-md bg-white/5 px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/20 hover:text-primary focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/10 data-[state=open]:bg-white/10";

export const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full mb-8 py-6 border-b border-white/10 backdrop-blur-sm bg-[#1C1C1E]/80 fixed top-0 z-50"
    >
      <div className="flex items-center justify-between max-w-[1200px] mx-auto px-4">
        <div className="flex items-center gap-2">
          <div className="flex">
            <Sun className="w-6 h-6 sm:w-7 sm:h-7 text-weather-sunny animate-pulse" />
            <Cloud className="w-6 h-6 sm:w-7 sm:h-7 text-weather-cloudy -ml-2" />
          </div>
          <Link to="/" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all">
            ForeCastify
          </Link>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <Link to="/" className={navigationMenuTriggerStyle}>
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-white/5 text-white hover:bg-primary/20 hover:text-primary">
                Features
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-[#1C1C1E]/95 border border-white/10 backdrop-blur-sm">
                <ul className="grid gap-3 p-4 w-[220px]">
                  <li>
                    <Link to="/hourly-forecast" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/20 hover:text-primary">
                      <div className="text-sm font-medium text-white">Hourly Forecast</div>
                      <p className="text-sm leading-snug text-white/70">
                        View detailed hourly predictions
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/weekly-forecast" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/20 hover:text-primary">
                      <div className="text-sm font-medium text-white">Weekly Forecast</div>
                      <p className="text-sm leading-snug text-white/70">
                        Check the weather for the week
                      </p>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about" className={navigationMenuTriggerStyle}>
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact" className={navigationMenuTriggerStyle}>
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button variant="ghost" className="md:hidden p-2 hover:bg-primary/20 hover:text-primary">
          <Menu className="h-6 w-6 text-white" />
        </Button>
      </div>
    </motion.header>
  );
};