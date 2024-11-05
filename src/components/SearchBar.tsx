import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
      setInputValue(""); // Clear input after search
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
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search location..."
        className={`pl-10 h-12 backdrop-blur-xl rounded-2xl transition-all duration-200 ${
          isFocused 
            ? "bg-white text-gray-900 border-gray-300" 
            : "bg-gray-100 dark:bg-[#2C2C2E]/80 text-gray-900 dark:text-white border-transparent"
        }`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
        isFocused ? "text-gray-500" : "text-gray-400 dark:text-white/50"
      }`} />
    </motion.form>
  );
};