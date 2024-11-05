import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const city = formData.get("city") as string;
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="relative w-full max-w-md mx-auto mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Input
        name="city"
        placeholder="Search for a city..."
        className="pl-10 h-12 bg-white rounded-xl border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-gray-300 focus:ring-gray-300"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
    </motion.form>
  );
};