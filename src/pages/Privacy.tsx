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
                    ForeCastify collects only essential information needed to provide accurate weather forecasts:
                  </p>
                  <ul className="list-disc pl-6 mt-4 text-white/80 space-y-2">
                    <li>Location data (when you search for a location)</li>
                    <li>Device information (browser type and version)</li>
                    <li>IP address (for location-based services)</li>
                  </ul>
                  <p className="mt-4 text-white/80">
                    We do not require user accounts or login credentials, and we do not collect any personal identification information.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Information</h2>
                  <p className="text-white/80 leading-relaxed">
                    The information we collect is used solely to:
                  </p>
                  <ul className="list-disc pl-6 mt-4 text-white/80 space-y-2">
                    <li>Provide accurate weather forecasts for your searched locations</li>
                    <li>Improve our weather forecasting service</li>
                    <li>Analyze usage patterns to enhance user experience</li>
                    <li>Maintain and optimize our service performance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">3. Data Protection</h2>
                  <p className="text-white/80 leading-relaxed">
                    While we don't collect personal data or require accounts, we still implement industry-standard security measures to protect any data that passes through our service:
                  </p>
                  <ul className="list-disc pl-6 mt-4 text-white/80 space-y-2">
                    <li>Secure HTTPS encryption for all data transfers</li>
                    <li>Regular security audits of our systems</li>
                    <li>Limited data retention periods</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">4. Third-Party Services</h2>
                  <p className="text-white/80 leading-relaxed">
                    We use WeatherAPI.com to provide weather data. Their use of information is governed by their own privacy policy. We do not share any user information with third parties beyond what is necessary for providing our weather forecasting service.
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