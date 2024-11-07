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
      className="w-full py-6 mt-auto bg-gradient-to-b from-[#1C1C1E] to-[#2C2C2E] border-t border-white/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Copyright and Quick Links */}
          <div className="flex flex-wrap items-center gap-6">
            <p className="text-sm text-white/60">
              © 2024 ForeCastify
            </p>
            <div className="flex items-center gap-4">
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
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center group transition-all duration-300"
              >
                <Icon className="w-4 h-4 text-white/60 group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};