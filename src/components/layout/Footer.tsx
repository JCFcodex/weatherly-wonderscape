import { Motion } from "framer-motion";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-[#1C1C1E] text-white">
      <div className="max-w-[1200px] mx-auto py-6 px-4">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} ForeCastify. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
