import { motion } from "framer-motion";
import { Header } from "@/components/weather/Header";
import { Footer } from "@/components/weather/Footer";
import { LoadingCard } from "@/components/LoadingCard";
import { useState, useEffect } from "react";

const Privacy = () => {
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
            <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-white/70 mb-4">Last updated: March 2024</p>
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">1. Information We Collect</h2>
                <p className="text-white/70">
                  We collect information that you provide directly to us, including location data, search history, and device information to provide accurate weather forecasts and improve our services.
                </p>
              </section>
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
                <p className="text-white/70">
                  We use the collected information to provide weather forecasts, improve our services, and send you important updates about severe weather conditions in your area.
                </p>
              </section>
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">3. Data Security</h2>
                <p className="text-white/70">
                  We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
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

export default Privacy;
