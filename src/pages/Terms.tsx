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
                    <p>By using ForeCastify, you agree to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Comply with all applicable laws and regulations</li>
                      <li>Provide accurate information when required</li>
                      <li>Use the service for personal, non-commercial purposes only</li>
                      <li>Not attempt to circumvent any security measures</li>
                      <li>Accept updates and modifications to the service</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">2. User Responsibilities</h2>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>As a user, you are responsible for:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Maintaining the confidentiality of your account</li>
                      <li>All activities that occur under your account</li>
                      <li>Ensuring your device meets minimum system requirements</li>
                      <li>Reporting any security vulnerabilities or misuse</li>
                      <li>Understanding that weather forecasts are predictions and may not be 100% accurate</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">3. Intellectual Property</h2>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>All content and features in ForeCastify are protected by:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Copyright laws and international treaties</li>
                      <li>Trademark rights and service marks</li>
                      <li>Patents and pending patent applications</li>
                      <li>Trade secrets and proprietary rights</li>
                    </ul>
                    <p>You may not copy, modify, distribute, or create derivative works without our explicit permission.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">4. Limitation of Liability</h2>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>ForeCastify and its team:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide weather data "as is" without any warranties</li>
                      <li>Are not liable for decisions made based on our forecasts</li>
                      <li>Do not guarantee uninterrupted or error-free service</li>
                      <li>May experience occasional downtime for maintenance</li>
                      <li>Reserve the right to modify or discontinue services</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">5. Termination</h2>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>We reserve the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Terminate or suspend accounts for violations</li>
                      <li>Remove content that violates these terms</li>
                      <li>Modify or discontinue services without notice</li>
                      <li>Take legal action if necessary</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">6. Changes to Terms</h2>
                  <p className="text-white/80 leading-relaxed">
                    We may update these terms at any time. Continued use of ForeCastify after changes constitutes acceptance of the new terms. For questions about these terms, contact us at legal@forecastify.com.
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

export default Terms;