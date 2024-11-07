import { Github, Twitter, Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
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
      className="w-full py-8 mt-auto border-t border-white/10"
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-4">About ForeCastify</h3>
            <p className="text-sm text-white/50">
              Your trusted source for accurate weather forecasts and real-time updates. Making weather information accessible and reliable since 2024.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-white/50">
                <Mail className="w-4 h-4" />
                <span>support@forecastify.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/50">
                <Phone className="w-4 h-4" />
                <span>+63 (2) 8123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/50">
                <MapPin className="w-4 h-4" />
                <span>123 Weather Street, Cloud City</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation("/about")}
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/features")}
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center gap-4 flex-wrap">
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
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/50">
              © 2024 ForeCastify. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-white/50">
              <button
                onClick={() => handleNavigation("/privacy")}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNavigation("/terms")}
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};