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
      className="relative w-full max-w-md mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Input
        name="city"
        placeholder="Search location..."
        className="pl-10 h-12 bg-[#2C2C2E]/80 backdrop-blur-xl border-white/10 text-white rounded-2xl placeholder:text-white/50 focus:border-white/20 focus:ring-white/20"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
    </motion.form>
  );
};