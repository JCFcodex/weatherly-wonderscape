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
      className="w-full py-6 mt-auto bg-gradient-to-b from-[#1C1C1E]/95 to-[#2C2C2E] border-t border-white/10 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Brand Section */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-white text-left">ForeCastify</h3>
            <p className="text-xs text-white/60 leading-relaxed text-left">
              Your trusted weather companion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-white text-left">Quick Links</h3>
            <div className="flex flex-col space-y-1">
              {["About", "Features", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavigation(`/${item.toLowerCase()}`)}
                  className="text-xs text-white/60 hover:text-white transition-colors text-left w-fit"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-white text-left">Legal</h3>
            <div className="flex flex-col space-y-1">
              {["Terms", "Privacy"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavigation(`/${item.toLowerCase()}`)}
                  className="text-xs text-white/60 hover:text-white transition-colors text-left w-fit"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-white text-left">Connect</h3>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center group transition-all duration-300"
                >
                  <Icon className="w-3.5 h-3.5 text-white/60 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <p className="text-xs text-white/60 text-left">
            © {new Date().getFullYear()} ForeCastify. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};