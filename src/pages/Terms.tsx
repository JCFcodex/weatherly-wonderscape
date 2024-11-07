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
                  <h2 className="text-2xl font-semibold text-white mb-4">1. Service Description</h2>
                  <p className="text-white/80 leading-relaxed">
                    ForeCastify is a free weather forecasting service powered by WeatherAPI.com that provides:
                  </p>
                  <ul className="list-disc pl-6 mt-4 text-white/80 space-y-2">
                    <li>Real-time weather updates</li>
                    <li>Hourly and weekly forecasts</li>
                    <li>Location-based weather information</li>
                    <li>Weather charts and data visualization</li>
                  </ul>
                  <p className="mt-4 text-white/80">
                    No account creation or login is required to use our services. All weather data is provided through our integration with WeatherAPI.com.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">2. Use of Service</h2>
                  <p className="text-white/80 leading-relaxed">
                    By using ForeCastify, you agree to:
                  </p>
                  <ul className="list-disc pl-6 mt-4 text-white/80 space-y-2">
                    <li>Use the service for personal, non-commercial purposes only</li>
                    <li>Not attempt to manipulate or abuse the service</li>
                    <li>Not use automated systems to access the service</li>
                    <li>Not redistribute or sell our weather data</li>
                    <li>Comply with WeatherAPI.com's terms of service</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">3. Weather Data and API Usage</h2>
                  <p className="text-white/80 leading-relaxed">
                    Our weather data is sourced from WeatherAPI.com:
                  </p>
                  <ul className="list-disc pl-6 mt-4 text-white/80 space-y-2">
                    <li>Weather data accuracy and availability are subject to WeatherAPI.com's service</li>
                    <li>Weather forecasts are provided "as is" without any guarantees</li>
                    <li>Service availability depends on WeatherAPI.com's uptime and reliability</li>
                    <li>We are not responsible for any decisions made based on the weather data provided</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">4. Changes to Service</h2>
                  <p className="text-white/80 leading-relaxed">
                    We reserve the right to:
                  </p>
                  <ul className="list-disc pl-6 mt-4 text-white/80 space-y-2">
                    <li>Modify or discontinue any part of the service</li>
                    <li>Update these terms at any time</li>
                    <li>Change our weather data provider if necessary</li>
                  </ul>
                  <p className="mt-4 text-white/80">
                    Continued use of ForeCastify after changes constitutes acceptance of the modified terms.
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