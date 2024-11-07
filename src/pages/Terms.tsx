import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LoadingCard } from "@/components/LoadingCard";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const Terms = () => {
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
              <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
              <p className="text-white/70">Last updated: March 2024</p>
            </div>

            <div className="grid gap-8">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">1. Service Agreement</h2>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>By using ForeCastify, you agree to the following terms:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access to real-time weather data and forecasts</li>
                      <li>Use of location-based services for accurate predictions</li>
                      <li>Compliance with our usage guidelines and policies</li>
                      <li>Acceptance of our data collection practices</li>
                      <li>Agreement to receive weather-related notifications</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">2. User Responsibilities</h2>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>As a ForeCastify user, you are responsible for:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Providing accurate location information</li>
                      <li>Maintaining the security of your account</li>
                      <li>Using the service for personal, non-commercial purposes</li>
                      <li>Not attempting to reverse engineer the service</li>
                      <li>Reporting any security vulnerabilities or bugs</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">3. Service Limitations</h2>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>Please be aware of the following limitations:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Weather forecasts are provided "as is" without guarantees</li>
                      <li>Service availability may vary based on location</li>
                      <li>Data accuracy depends on third-party weather services</li>
                      <li>Features may be modified or discontinued</li>
                      <li>Access may be restricted during maintenance periods</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property</h2>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>ForeCastify's intellectual property rights include:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>All software code and algorithms</li>
                      <li>User interface designs and graphics</li>
                      <li>Weather data presentation formats</li>
                      <li>Brand names, logos, and trademarks</li>
                      <li>Documentation and marketing materials</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">5. Termination</h2>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>ForeCastify reserves the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Suspend or terminate accounts for violations</li>
                      <li>Modify or discontinue services with notice</li>
                      <li>Remove access to specific features</li>
                      <li>Delete inactive accounts after extended periods</li>
                      <li>Refuse service to anyone at our discretion</li>
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

export default Terms;