import { Card } from "@/components/ui/card";
import { LoaderCircle } from "lucide-react";
import { motion } from "framer-motion";

export const LoadingCard = () => {
  return (
    <Card className="w-full h-[300px] p-8 bg-[#2C2C2E]/80 backdrop-blur-xl rounded-3xl border-0">
      <div className="flex flex-col justify-center items-center h-full gap-6">
        <div className="relative">
          {/* Outer rotating circle */}
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              rotate: { duration: 3, repeat: Infinity, ease: "linear" },
              scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <LoaderCircle className="w-16 h-16 text-primary/30" />
          </motion.div>

          {/* Middle rotating circle */}
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1.1, 0.9, 1.1],
            }}
            transition={{ 
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <LoaderCircle className="w-12 h-12 text-primary/60" />
          </motion.div>

          {/* Center rotating circle */}
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{ 
              rotate: { duration: 1.5, repeat: Infinity, ease: "linear" },
              scale: { duration: 0.8, repeat: Infinity, ease: "easeInOut" }
            }}
            className="flex items-center justify-center"
          >
            <LoaderCircle className="w-8 h-8 text-primary animate-pulse" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/70 text-sm font-medium"
          >
            Loading weather data...
          </motion.p>
          <motion.div 
            animate={{ width: ["0%", "100%", "0%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-[2px] bg-primary/30 mt-2 rounded-full"
          />
        </motion.div>
      </div>
    </Card>
  );
};