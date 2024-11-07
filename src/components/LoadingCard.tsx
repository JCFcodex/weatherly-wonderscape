import { Card } from "@/components/ui/card";
import { LoaderCircle } from "lucide-react";
import { motion } from "framer-motion";

export const LoadingCard = () => {
  return (
    <Card className="w-full h-[300px] p-8 bg-[#2C2C2E]/80 backdrop-blur-xl rounded-3xl border-0">
      <div className="flex flex-col justify-center items-center h-full gap-4">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
          }}
          className="flex justify-center items-center"
        >
          <LoaderCircle className="w-12 h-12 text-primary animate-pulse" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white/70 text-sm font-medium"
        >
          Loading weather data...
        </motion.p>
      </div>
    </Card>
  );
};