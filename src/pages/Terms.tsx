import { motion } from "framer-motion";
import { Header } from "@/components/weather/Header";
import { Footer } from "@/components/weather/Footer";

import { LoadingCard } from "@/components/LoadingCard";
import { useState, useEffect } from "react";

const Terms = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smoother transition
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#1C1C1E]">
      <Header />
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 mt-20 sm:mt-24">
        {isLoading ? (
          <div className="max-w-[1200px] mx-auto">
            <LoadingCard />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-[1200px] mx-auto"
          >
            <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-white/70 mb-4">Last updated: March 2024</p>
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-white/70">
                  By accessing and using ForeCastify, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                </p>
              </section>
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">2. Use License</h2>
                <p className="text-white/70">
                  We grant you a limited, non-exclusive, non-transferable license to access and use our services for personal, non-commercial purposes.
                </p>
              </section>
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">3. Disclaimer</h2>
                <p className="text-white/70">
                  While we strive to provide accurate weather information, we cannot guarantee the accuracy of all forecasts. Use our services at your own discretion.
                </p>
              </section>
            </div>
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
