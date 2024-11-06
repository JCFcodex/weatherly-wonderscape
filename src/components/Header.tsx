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

const navigationMenuTriggerStyle = "group inline-flex h-10 w-max items-center justify-center rounded-md bg-white/5 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/10 data-[state=open]:bg-white/10";

export const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full mb-8 py-4 border-b border-white/10"
    >
      <div className="flex items-center justify-between max-w-[1200px] mx-auto px-4">
        <div className="flex items-center gap-2">
          <div className="flex">
            <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-weather-sunny animate-pulse" />
            <Cloud className="w-5 h-5 sm:w-6 sm:h-6 text-weather-cloudy -ml-2" />
          </div>
          <Link to="/" className="text-lg sm:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
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
              <NavigationMenuTrigger className="bg-white/5 text-white hover:bg-white/10 hover:text-white">
                Features
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-[#1C1C1E] border border-white/10">
                <ul className="grid gap-3 p-4 w-[200px]">
                  <li>
                    <Link to="/hourly-forecast" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 hover:text-white">
                      <div className="text-sm font-medium text-white">Hourly Forecast</div>
                      <p className="text-sm leading-snug text-white/70">
                        View detailed hourly predictions
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/weekly-forecast" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 hover:text-white">
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

        {/* Mobile Menu Button */}
        <Button variant="ghost" className="md:hidden p-2">
          <Menu className="h-6 w-6 text-white" />
        </Button>
      </div>
    </motion.header>
  );
};