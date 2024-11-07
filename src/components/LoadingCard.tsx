import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export const LoadingCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="w-full h-full p-4 sm:p-6 bg-[#2C2C2E]/80 backdrop-blur-xl rounded-3xl border-0">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-white/10 animate-pulse" />
            <div className="h-4 w-32 bg-white/10 rounded animate-pulse" />
          </div>
          
          <div className="space-y-3">
            <div className="h-8 w-24 bg-white/10 rounded animate-pulse" />
            <div className="h-4 w-48 bg-white/10 rounded animate-pulse" />
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="h-20 bg-white/5 rounded-2xl animate-pulse" />
            <div className="h-20 bg-white/5 rounded-2xl animate-pulse" />
          </div>
          
          <div className="space-y-2">
            <div className="h-4 w-20 bg-white/10 rounded animate-pulse" />
            <div className="flex space-x-1">
              {[1,2,3,4,5].map((_, i) => (
                <div 
                  key={i}
                  className="h-1 flex-1 rounded-full bg-white/10 animate-pulse"
                />
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};