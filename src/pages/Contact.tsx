import { motion } from "framer-motion";
import { Header } from "@/components/weather/Header";
import { Footer } from "@/components/weather/Footer";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#1C1C1E] font-['Outfit'] overflow-hidden flex flex-col">
      <Header />
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 mt-16 sm:mt-20">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="text-center space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
                Have questions or feedback? We'd love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 p-4 sm:p-6 rounded-lg space-y-4 sm:space-y-6"
              >
                <h2 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-4">Get in Touch</h2>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3 text-white/70">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    <span className="text-sm sm:text-base">support@forecastify.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    <span className="text-sm sm:text-base">+63 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    <span className="text-sm sm:text-base">Live Chat Support</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 p-4 sm:p-6 rounded-lg"
              >
                <h2 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-4">Send us a Message</h2>
                <form className="space-y-3 sm:space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-3 sm:px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-primary text-sm sm:text-base"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-3 sm:px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-primary text-sm sm:text-base"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-primary text-sm sm:text-base"
                  />
                  <Button className="w-full text-sm sm:text-base py-2 sm:py-2.5">Send Message</Button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
