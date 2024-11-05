import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

interface OtherCitiesProps {
  currentCity: string;
  onCitySelect: (city: string) => void;
}

export const OtherCities = ({ currentCity, onCitySelect }: OtherCitiesProps) => {
  const cities = ["London", "New York", "Tokyo", "Paris"].filter(
    (city) => city !== currentCity
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    >
      <Card className="w-full p-6 bg-[#EBEBEB]/80 backdrop-blur-lg">
        <h3 className="text-lg font-medium text-[#333333] mb-4">Other Cities</h3>
        <div className="space-y-4">
          {cities.map((city, index) => (
            <motion.button
              key={city}
              onClick={() => onCitySelect(city)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="w-full text-left p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors"
            >
              <span className="text-[#333333]">{city}</span>
            </motion.button>
          ))}
          <motion.button
            className="w-full flex items-center justify-center p-4 rounded-lg bg-[#6B85FF] hover:bg-[#4965F2] transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Plus className="w-6 h-6 text-white" />
          </motion.button>
        </div>
      </Card>
    </motion.div>
  );
};