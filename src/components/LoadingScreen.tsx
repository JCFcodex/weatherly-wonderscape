import { motion } from "framer-motion";

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C1C1E]"
    >
      <div className="relative">
        {/* Outer rotating circle */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute inset-0"
        >
          <div className="h-32 w-32 rounded-full border-4 border-primary/30" />
        </motion.div>

        {/* Middle circle with gradient */}
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.1, 0.9, 1.1],
          }}
          transition={{ 
            rotate: { duration: 1.5, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute inset-0"
        >
          <div className="h-24 w-24 rounded-full border-4 border-primary/60" />
        </motion.div>

        {/* Inner pulsing circle */}
        <motion.div
          animate={{ 
            scale: [0.8, 1.1, 0.8],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="h-16 w-16 rounded-full bg-primary"
        />

        {/* Loading text */}
        <motion.p
          animate={{ 
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium"
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
};