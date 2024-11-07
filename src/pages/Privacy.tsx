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
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>At ForeCastify, we collect and process the following types of information:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Location data (GPS coordinates, city names, and postal codes)</li>
                      <li>Device information (browser type, operating system, and device identifiers)</li>
                      <li>Usage data (search history, favorite locations, and weather preferences)</li>
                      <li>IP addresses for location approximation</li>
                      <li>Time zone settings for accurate forecast delivery</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>Your information helps us provide and improve our weather forecasting services:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Delivering accurate, location-based weather forecasts</li>
                      <li>Sending severe weather alerts and notifications</li>
                      <li>Improving our forecasting algorithms and accuracy</li>
                      <li>Personalizing your weather dashboard experience</li>
                      <li>Analyzing usage patterns to enhance our services</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">3. Data Security</h2>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>We implement robust security measures to protect your data:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>End-to-end encryption for data transmission</li>
                      <li>Regular security audits and updates</li>
                      <li>Secure data storage with industry-standard protocols</li>
                      <li>Limited employee access to personal information</li>
                      <li>Automated threat detection and prevention systems</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">4. Your Rights</h2>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>You have the following rights regarding your personal data:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access your personal data</li>
                      <li>Request data correction or deletion</li>
                      <li>Opt-out of non-essential data collection</li>
                      <li>Export your data in a portable format</li>
                      <li>Withdraw consent for data processing</li>
                    </ul>
                  </div>
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