import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { Cloud, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const queryClient = new QueryClient();

const About = () => (
  <div className="max-w-[1200px] mx-auto px-4 py-8 mt-24">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About ForeCastify</h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          Your reliable weather forecasting companion, providing accurate and real-time weather updates for locations worldwide.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
          <Cloud className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Real-Time Updates</h3>
          <p className="text-white/70">Get instant weather updates with our advanced forecasting system.</p>
        </div>
        <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
          <MapPin className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Global Coverage</h3>
          <p className="text-white/70">Access weather data from any location around the world.</p>
        </div>
        <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
          <Cloud className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Detailed Forecasts</h3>
          <p className="text-white/70">View hourly and weekly forecasts with comprehensive weather data.</p>
        </div>
      </div>
    </motion.div>
  </div>
);

const Contact = () => (
  <div className="max-w-[1200px] mx-auto px-4 py-8 mt-24">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Contact Us</h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          Have questions or feedback? We'd love to hear from you. Get in touch with our team.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        <div className="space-y-6">
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
            <Mail className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <p className="text-white/70">support@forecastify.com</p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
            <Phone className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
            <p className="text-white/70">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-3 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-3 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea 
              placeholder="Your Message" 
              rows={4}
              className="w-full p-3 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-md transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hourly-forecast" element={<Index />} />
          <Route path="/weekly-forecast" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;