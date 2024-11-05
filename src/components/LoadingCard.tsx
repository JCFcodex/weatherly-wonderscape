import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export const LoadingCard = () => {
  return (
    <Card className="w-full p-6 bg-[#EBEBEB]/80 backdrop-blur-lg animate-fade-in">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="flex justify-center"
      >
        <Loader2 className="w-8 h-8 text-[#6B85FF]" />
      </motion.div>
    </Card>
  );
};