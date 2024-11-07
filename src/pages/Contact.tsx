import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Phone, Send, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-blue-400" />,
      title: "Email",
      value: "support@forecastify.com"
    },
    {
      icon: <Phone className="w-5 h-5 text-green-400" />,
      title: "Phone",
      value: "+1 (555) 123-4567"
    },
    {
      icon: <MapPin className="w-5 h-5 text-purple-400" />,
      title: "Location",
      value: "San Francisco, CA"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1C1C1E] font-['Outfit'] overflow-hidden flex flex-col">
      <Header />
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 mt-16 sm:mt-20">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center space-y-3">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                Get in Touch
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base"
              >
                Have questions or feedback? We'd love to hear from you
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-3 gap-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="bg-white/5 p-4 rounded-lg text-center hover:bg-white/10 transition-colors"
                    >
                      <div className="bg-white/10 p-2 rounded-lg w-fit mx-auto mb-3">
                        {info.icon}
                      </div>
                      <h3 className="text-white font-medium mb-1">{info.title}</h3>
                      <p className="text-white/60 text-sm">{info.value}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <h2 className="text-xl font-semibold text-white">Live Chat</h2>
                  </div>
                  <p className="text-white/70 mb-4">
                    Live chat support is coming soon! Stay tuned for real-time assistance.
                  </p>
                  <Button className="w-full opacity-50 cursor-not-allowed" disabled>
                    Coming Soon
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
              >
                <h2 className="text-xl font-semibold text-white mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-primary resize-none"
                  />
                  <Button type="submit" className="w-full">
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
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