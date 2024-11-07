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
      setInputValue("");
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="relative w-full max-w-md mx-auto mb-4 sm:mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search location..."
        className={`pl-10 h-10 sm:h-12 text-sm sm:text-base backdrop-blur-xl rounded-2xl placeholder:text-white/50 transition-all duration-200 ${
          isFocused 
            ? "bg-white text-gray-900 border-transparent" 
            : "bg-[#2C2C2E]/80 text-white border-white/10"
        }`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-200 ${
        isFocused ? "text-gray-500" : "text-white/50"
      }`} />
    </motion.form>
  );
};