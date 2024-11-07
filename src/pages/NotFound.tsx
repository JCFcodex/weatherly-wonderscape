import { motion } from "framer-motion";
import { AlertOctagon } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1C1C1E] text-white p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6 max-w-md"
      >
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="inline-block"
        >
          <AlertOctagon className="w-24 h-24 text-primary mx-auto" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"
        >
          404 - Page Not Found
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-lg"
        >
          Oops! It seems the weather took an unexpected turn.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link 
            to="/"
            className="inline-block px-6 py-3 bg-primary hover:bg-primary/80 rounded-lg transition-colors duration-300 text-white font-medium"
          >
            Return Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;