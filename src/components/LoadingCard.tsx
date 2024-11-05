import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export const LoadingCard = () => {
  return (
    <Card className="w-full p-8 bg-white rounded-3xl shadow-sm">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="flex justify-center py-12"
      >
        <Loader2 className="w-12 h-12 text-gray-400" />
      </motion.div>
    </Card>
  );
};