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

  const socialLinks = [
    { icon: Github, href: "https://github.com" },
    { icon: Twitter, href: "https://twitter.com" },
    { icon: Facebook, href: "https://facebook.com" },
    { icon: Instagram, href: "https://instagram.com" },
    { icon: Linkedin, href: "https://linkedin.com" },
    { icon: Youtube, href: "https://youtube.com" },
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="w-full py-12 mt-auto bg-gradient-to-b from-[#1C1C1E] to-[#2C2C2E] border-t border-white/10"
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-6 text-lg">About ForeCastify</h3>
            <p className="text-sm leading-relaxed text-white/60 hover:text-white/80 transition-colors">
              Your trusted source for accurate weather forecasts and real-time updates. Making weather information accessible and reliable since 2024.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-white font-semibold mb-6 text-lg">Contact Us</h3>
            <div className="space-y-4">
              <a href="mailto:support@forecastify.com" className="flex items-center gap-3 text-sm text-white/60 hover:text-white/90 transition-colors group">
                <Mail className="w-4 h-4 group-hover:text-primary transition-colors" />
                <span>support@forecastify.com</span>
              </a>
              <a href="tel:+6328123456" className="flex items-center gap-3 text-sm text-white/60 hover:text-white/90 transition-colors group">
                <Phone className="w-4 h-4 group-hover:text-primary transition-colors" />
                <span>+63 (2) 8123-4567</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-white/60 group">
                <MapPin className="w-4 h-4 text-white/60" />
                <span>123 Weather Street, Cloud City</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-4">
              {["About", "Features", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavigation(`/${item.toLowerCase()}`)}
                    className="text-sm text-white/60 hover:text-white transition-colors hover:translate-x-1 transform duration-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-white font-semibold mb-6 text-lg">Follow Us</h3>
            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center group transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5 text-white/60 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40 hover:text-white/60 transition-colors">
              © 2024 ForeCastify. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavigation(`/${item.toLowerCase().replace(" ", "-")}`)}
                  className="text-sm text-white/40 hover:text-white/90 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};