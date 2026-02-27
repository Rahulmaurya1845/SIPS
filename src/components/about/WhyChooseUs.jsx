import React, { useMemo } from "react";
import { Shield, Star, Zap, Globe, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

// Floating Dots Component (Like CoreValues)
const FloatingDots = ({ color }) => {
  const dots = useMemo(() => [
    { top: "10%", left: "15%" },
    { top: "30%", left: "80%" },
    { top: "60%", left: "20%" },
    { top: "80%", left: "70%" },
    { top: "45%", left: "50%" },
  ], []);

  return (
    <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
      {dots.map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 rounded-full opacity-40 ${color}`}
          style={{ top: pos.top, left: pos.left }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
};

const features = [
  {
    icon: Shield,
    title: "Safe & Secure Campus",
    desc: "Advanced security systems and 24/7 monitoring ensure complete safety for every student.",
    theme: "emerald",
  },
  {
    icon: Star,
    title: "Top Academic Results",
    desc: "Consistent academic excellence with industry-leading pass rates and scholarship records.",
    theme: "amber",
  },
  {
    icon: Zap,
    title: "Modern Infrastructure",
    desc: "Smart classrooms, digital labs, and technology-driven learning ecosystem.",
    theme: "blue",
  },
  {
    icon: Globe,
    title: "Global Exposure",
    desc: "International partnerships, exchange programs, and global career opportunities.",
    theme: "violet",
  },
];

// Theme configurations
const themeConfig = {
  emerald: {
    gradient: "from-emerald-500 to-teal-400",
    gradientBg: "bg-gradient-to-br from-emerald-500 to-teal-400",
    dotColor: "bg-emerald-500",
    shadow: "hover:shadow-emerald-500/20",
  },
  amber: {
    gradient: "from-amber-500 to-orange-400",
    gradientBg: "bg-gradient-to-br from-amber-500 to-orange-400",
    dotColor: "bg-amber-500",
    shadow: "hover:shadow-amber-500/20",
  },
  blue: {
    gradient: "from-blue-500 to-cyan-400",
    gradientBg: "bg-gradient-to-br from-blue-500 to-cyan-400",
    dotColor: "bg-blue-500",
    shadow: "hover:shadow-blue-500/20",
  },
  violet: {
    gradient: "from-violet-500 to-purple-400",
    gradientBg: "bg-gradient-to-br from-violet-500 to-purple-400",
    dotColor: "bg-violet-500",
    shadow: "hover:shadow-violet-500/20",
  },
};

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* --- Ambient Background --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
        {/* Floating Icons Background */}
        <div className="absolute inset-0 opacity-20">
          {[Shield, Star, Zap, Globe].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute text-slate-400"
              style={{
                top: `${20 + i * 20}%`,
                left: `${10 + i * 20}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i,
              }}
            >
              <Icon size={40} strokeWidth={1} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- Main Container with Scroll Delay --- */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        {/* --- Premium Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-4"
          >
            <Star size={14} className="text-amber-500 fill-amber-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Our Strength</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Why Choose Our Institution
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We provide a nurturing environment where academic excellence meets holistic development, preparing students for a bright future.
          </p>
        </motion.div>

        {/* --- Features Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((item, i) => {
            const config = themeConfig[item.theme];
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.7 + (i * 0.1),
                  ease: "easeOut" 
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 h-full flex flex-col ${config.shadow}`}
              >
                {/* --- Floating Dots (Always Visible) --- */}
                <FloatingDots color={config.dotColor} />

                {/* --- Glossy Shine Effect (On Hover) --- */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent"></div>
                  <div className="absolute -top-[100%] left-0 w-[150%] h-[200%] bg-gradient-to-b from-transparent via-white/20 to-transparent -rotate-45 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </div>

                {/* --- Content --- */}
                <div className="relative z-10 flex flex-col h-full text-center">
                  
                  {/* --- Icon Box --- */}
                  <div className="relative inline-block mx-auto mb-6 mt-2">
                    {/* Pulsing Glow */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-20 blur-xl rounded-2xl`}
                    ></motion.div>
                    
                    <div className="relative w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center shadow-inner border border-slate-100 group-hover:border-transparent transition-all duration-500 overflow-hidden">
                      <item.icon 
                        className="text-slate-700 transition-all duration-500 group-hover:text-white relative z-10" 
                        size={32} 
                      />
                      <div className={`absolute inset-0 ${config.gradientBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    </div>
                  </div>

                  {/* --- Title --- */}
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-600 transition-all">
                    {item.title}
                  </h3>

                  {/* --- Description --- */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 group-hover:text-slate-600 transition-colors flex-grow">
                    {item.desc}
                  </p>

                  {/* --- Bottom Indicator --- */}
                  <div className="mt-auto pt-4 border-t border-slate-50 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <div className={`h-2 w-2 rounded-full ${config.dotColor} shadow-md`}></div>
                    <div className={`h-0.5 w-8 rounded-full ${config.gradient} opacity-50`}></div>
                    <div className={`h-2 w-2 rounded-full ${config.dotColor} shadow-md`}></div>
                  </div>
                </div>

                {/* --- Corner Glow (On Hover) --- */}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className={`w-full h-full ${config.gradientBg} opacity-20 rounded-full blur-2xl`}></div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
};

export default WhyChooseUs;