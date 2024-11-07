import { Github, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
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

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="w-full py-6 mt-auto bg-gradient-to-b from-[#1C1C1E] to-[#2C2C2E] border-t border-white/10"
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-4">
          {/* Logo and Copyright */}
          <div className="text-sm text-white/60">
            © 2024 ForeCastify
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            {["About", "Features", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(`/${item.toLowerCase()}`)}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-4">
            <a href="mailto:support@forecastify.com" className="text-white/60 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};