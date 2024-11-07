import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface OtherCitiesProps {
  currentCity: string;
  onCitySelect: (city: string) => void;
}

export const OtherCities = ({ currentCity, onCitySelect }: OtherCitiesProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newCity, setNewCity] = useState("");
  const { toast } = useToast();
  const [cities, setCities] = useState(["London", "New York", "Tokyo", "Paris"]);

  const handleAddCity = () => {
    if (newCity.trim()) {
      if (!cities.includes(newCity.trim())) {
        setCities([...cities, newCity.trim()]);
        setNewCity("");
        setIsAdding(false);
        toast({
          title: "City added",
          description: `${newCity.trim()} has been added to your cities.`,
        });
      } else {
        toast({
          title: "City already exists",
          description: "This city is already in your list.",
          variant: "destructive",
        });
      }
    }
  };

  const filteredCities = cities.filter((city) => city !== currentCity);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    >
      <Card className="w-full p-6 bg-white/10 backdrop-blur-lg">
        <h3 className="text-lg font-medium text-white mb-4">Other Cities</h3>
        <div className="space-y-4">
          {filteredCities.map((city, index) => (
            <motion.button
              key={city}
              onClick={() => onCitySelect(city)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="w-full text-left p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white/90"
            >
              <span>{city}</span>
            </motion.button>
          ))}
          
          {isAdding ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="space-y-2"
            >
              <Input
                value={newCity}
                onChange={(e) => setNewCity(e.target.value)}
                placeholder="Enter city name..."
                className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
              />
              <div className="flex space-x-2">
                <Button
                  onClick={handleAddCity}
                  className="flex-1 bg-[#6B85FF] hover:bg-[#4965F2] text-white"
                >
                  Add
                </Button>
                <Button
                  onClick={() => setIsAdding(false)}
                  variant="outline"
                  className="flex-1 bg-white/5 border-white/10 text-white hover:bg-white/10"
                >
                  Cancel
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.button
              onClick={() => setIsAdding(true)}
              className="w-full flex items-center justify-center p-4 rounded-lg bg-[#6B85FF] hover:bg-[#4965F2] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Plus className="w-6 h-6 text-white" />
            </motion.button>
          )}
        </div>
      </Card>
    </motion.div>
  );
};
