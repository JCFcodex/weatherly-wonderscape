import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const About = () => (
  <div className="max-w-[1200px] mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4 text-white">About ForeCastify</h1>
    <p className="text-white/70">
      ForeCastify is your reliable weather forecasting companion, providing accurate and real-time weather updates for locations worldwide.
    </p>
  </div>
);

const Contact = () => (
  <div className="max-w-[1200px] mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4 text-white">Contact Us</h1>
    <p className="text-white/70">
      Have questions or feedback? Reach out to us at support@forecastify.com
    </p>
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