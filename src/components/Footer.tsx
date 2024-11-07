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
    { icon: Instagram, href: "https://instagram.com" },
    { icon: Linkedin, href: "https://linkedin.com" },
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="w-full py-4 mt-auto bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] border-t border-white/5"
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start gap-6">
          {/* Brand */}
          <div className="flex-shrink-0">
            <h3 className="text-sm font-medium text-white">ForeCastify</h3>
            <p className="text-xs text-white/60 mt-1">Your trusted weather companion</p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-8">
            <div className="space-y-2">
              {["About", "Features", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavigation(`/${item.toLowerCase()}`)}
                  className="block text-xs text-white/60 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="space-y-2">
              {["Terms", "Privacy"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavigation(`/${item.toLowerCase()}`)}
                  className="block text-xs text-white/60 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center group transition-all duration-300"
              >
                <Icon className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 pt-3 border-t border-white/5">
          <p className="text-[11px] text-white/40">
            © {new Date().getFullYear()} ForeCastify. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};