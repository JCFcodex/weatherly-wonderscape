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
      className="w-full py-8 mt-auto bg-gradient-to-b from-[#1C1C1E]/80 to-[#1C1C1E]"
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4 text-lg">About ForeCastify</h3>
            <p className="text-sm text-white/60 leading-relaxed hover:text-white/80 transition-colors">
              Your trusted source for accurate weather forecasts and real-time updates. Making weather information accessible and reliable since 2024.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
            <div className="space-y-3">
              <a href="mailto:support@forecastify.com" className="flex items-center gap-3 text-sm text-white/60 hover:text-white/90 transition-all group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>support@forecastify.com</span>
              </a>
              <a href="tel:+6328123456" className="flex items-center gap-3 text-sm text-white/60 hover:text-white/90 transition-all group">
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>+63 (2) 8123-4567</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-white/60 group">
                <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>123 Weather Street, Cloud City</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Features", "Contact"].map((link, index) => (
                <li key={link}>
                  <button
                    onClick={() => handleNavigation(`/${link.toLowerCase().replace(" ", "")}`)}
                    className="text-sm text-white/60 hover:text-white transition-colors hover:translate-x-1 transform duration-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-white font-semibold mb-4 text-lg">Follow Us</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Github, url: "https://github.com" },
                { icon: Twitter, url: "https://twitter.com" },
                { icon: Facebook, url: "https://facebook.com" },
                { icon: Instagram, url: "https://instagram.com" },
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Youtube, url: "https://youtube.com" }
              ].map((social, index) => (
                <motion.a
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-all hover:scale-110 flex items-center justify-center p-2 rounded-lg hover:bg-white/5"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="pt-6 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60">
              © 2024 ForeCastify. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/60">
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
        </motion.div>
      </div>
    </motion.footer>
  );
};