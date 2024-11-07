import { Link } from "react-router-dom";
import { Github } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1C1C1E]/80 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        <Link to="/" className="text-white font-semibold text-lg sm:text-xl">
          ForeCastify
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <Link to="/about" className="text-white/70 hover:text-white text-sm sm:text-base">
            About
          </Link>
          <Link to="/features" className="text-white/70 hover:text-white text-sm sm:text-base">
            Features
          </Link>
          <Link to="/contact" className="text-white/70 hover:text-white text-sm sm:text-base">
            Contact
          </Link>
          <a
            href="https://github.com/JCFcodex/forecastify"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </header>
  );
};