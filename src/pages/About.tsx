import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cloud, Sun, Wind, Droplets, Users, Target, Award } from "lucide-react";

const About = () => {
  const teamValues = [
    {
      icon: <Target className="w-6 h-6 text-blue-400" />,
      title: "Our Mission",
      description: "Providing accurate and reliable weather information to help you plan your day with confidence."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: "Our Team",
      description: "A dedicated group of meteorologists and developers working to deliver the best weather forecasting experience."
    },
    {
      icon: <Award className="w-6 h-6 text-green-400" />,
      title: "Our Commitment",
      description: "Continuous improvement and innovation in weather forecasting technology."
    }
  ];

  const technologies = [
    {
      icon: <Sun className="w-6 h-6 text-weather-sunny" />,
      title: "Advanced Algorithms",
      description: "State-of-the-art weather prediction models"
    },
    {
      icon: <Cloud className="w-6 h-6 text-weather-cloudy" />,
      title: "Cloud Computing",
      description: "Powerful infrastructure for real-time updates"
    },
    {
      icon: <Wind className="w-6 h-6 text-primary" />,
      title: "Data Analysis",
      description: "Comprehensive weather pattern analysis"
    },
    {
      icon: <Droplets className="w-6 h-6 text-weather-rainy" />,
      title: "Precision Metrics",
      description: "Accurate precipitation forecasting"
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
                About ForeCastify
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base"
              >
                Your trusted companion for accurate weather forecasts and real-time updates
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {teamValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-white/5 p-6 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <div className="bg-white/10 p-3 rounded-lg w-fit mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-white/70">{value.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-white/5 p-4 rounded-lg text-center hover:bg-white/10 transition-colors"
                >
                  <div className="bg-white/10 p-3 rounded-lg w-fit mx-auto mb-3">
                    {tech.icon}
                  </div>
                  <h3 className="text-white font-medium mb-1">{tech.title}</h3>
                  <p className="text-white/60 text-sm">{tech.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;