import { motion } from "framer-motion";
import { Heart, ChevronRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    if (location.pathname !== path) {
      navigate(path, { replace: true });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const links = [
    { title: "About", path: "/about" },
    { title: "Features", path: "/features" },
    { title: "Contact", path: "/contact" },
    { title: "Terms", path: "/terms" },
    { title: "Privacy", path: "/privacy" }
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full py-4 mt-auto bg-gradient-to-b from-[#1C1C1E]/90 to-[#2C2C2E]/95 border-t border-white/10 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ForeCastify
            </span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-3">
            {links.map(({ title, path }) => (
              <button
                key={path}
                onClick={() => handleNavigation(path)}
                className="group flex items-center text-sm text-white/60 hover:text-white transition-colors"
              >
                {title}
                <ChevronRight className="w-3 h-3 ml-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} ForeCastify. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};