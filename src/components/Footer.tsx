import { Github, Twitter, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
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
      className="w-full py-8 mt-auto bg-gradient-to-b from-[#1C1C1E]/95 to-[#2C2C2E] border-t border-white/10 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">ForeCastify</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Your trusted companion for accurate weather forecasts and real-time updates worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {["About", "Features", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavigation(`/${item.toLowerCase()}`)}
                  className="text-sm text-white/60 hover:text-white transition-colors text-left w-fit"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Legal</h3>
            <div className="flex flex-col space-y-2">
              {["Terms", "Privacy"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavigation(`/${item.toLowerCase()}`)}
                  className="text-sm text-white/60 hover:text-white transition-colors text-left w-fit"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center group transition-all duration-300"
                >
                  <Icon className="w-4 h-4 text-white/60 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-sm text-center text-white/60">
            © {new Date().getFullYear()} ForeCastify. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};