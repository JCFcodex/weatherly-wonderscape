import { Github, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="w-full mt-12 py-6 border-t border-white/10"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
        <p className="text-sm text-white/50">
          © 2024 ForeCastify. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};