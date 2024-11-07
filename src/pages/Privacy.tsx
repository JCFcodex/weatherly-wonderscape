import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LoadingCard } from "@/components/LoadingCard";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const Privacy = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#1C1C1E] to-[#2C2C2E]">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mt-20 sm:mt-24">
        {isLoading ? (
          <div className="max-w-4xl mx-auto">
            <LoadingCard />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
              <p className="text-white/70">Last updated: March 2024</p>
            </div>

            <div className="grid gap-8">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
                  <p className="text-white/80 leading-relaxed">
                    We collect information that you provide directly to us, including location data, search history, and device information to provide accurate weather forecasts and improve our services.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
                  <p className="text-white/80 leading-relaxed">
                    We use the collected information to provide weather forecasts, improve our services, and send you important updates about severe weather conditions in your area.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">3. Data Security</h2>
                  <p className="text-white/80 leading-relaxed">
                    We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;