import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#1C1C1E]/80 backdrop-blur-xl border-t border-white/10 py-6 sm:py-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-sm">
            © 2024 ForeCastify. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link to="/privacy" className="text-white/70 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/70 hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};