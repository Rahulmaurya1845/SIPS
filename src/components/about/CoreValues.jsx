import React, { useRef, useState } from "react";
import { GraduationCap, Target, Users, Award, Sparkles, ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// --- DATA ---
const values = [
  {
    id: 1,
    icon: GraduationCap,
    title: "Academic Excellence",
    desc: "Commitment to high educational standards and rigorous learning methodologies that empower minds.",
    theme: "blue",
  },
  {
    id: 2,
    icon: Target,
    title: "Discipline",
    desc: "Instilling a strong ethical and moral foundation to guide students in every walk of life.",
    theme: "rose",
  },
  {
    id: 3,
    icon: Users,
    title: "Inclusivity",
    desc: "Fostering a diverse environment where equal opportunities are provided for every learner.",
    theme: "amber",
  },
  {
    id: 4,
    icon: Award,
    title: "Holistic Growth",
    desc: "Balancing academic mastery with diverse extracurricular engagements for complete development.",
    theme: "violet",
  },
];

// --- THEME CONFIGURATION ---
const colorMap = {
  blue: {
    gradientText: "from-blue-600 to-cyan-500",
    gradientBg: "from-blue-600 to-cyan-500",
    bgGlow: "bg-blue-500/20",
    border: "group-hover:border-blue-500/50",
    shadow: "group-hover:shadow-blue-500/20",
    iconColor: "text-blue-600",
  },
  rose: {
    gradientText: "from-rose-600 to-pink-500",
    gradientBg: "from-rose-600 to-pink-500",
    bgGlow: "bg-rose-500/20",
    border: "group-hover:border-rose-500/50",
    shadow: "group-hover:shadow-rose-500/20",
    iconColor: "text-rose-600",
  },
  amber: {
    gradientText: "from-amber-500 to-orange-500",
    gradientBg: "from-amber-500 to-orange-500",
    bgGlow: "bg-amber-500/20",
    border: "group-hover:border-amber-500/50",
    shadow: "group-hover:shadow-amber-500/20",
    iconColor: "text-amber-600",
  },
  violet: {
    gradientText: "from-violet-600 to-purple-500",
    gradientBg: "from-violet-600 to-purple-500",
    bgGlow: "bg-violet-500/20",
    border: "group-hover:border-violet-500/50",
    shadow: "group-hover:shadow-violet-500/20",
    iconColor: "text-violet-600",
  },
};

// --- PREMIUM SVG COMPONENTS ---

const BackgroundGrid = () => (
  <div className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-300"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);

const FloatingBlob = ({ className, color }) => (
  <motion.div 
    animate={{ 
      scale: [1, 1.1, 1], 
      rotate: [0, 90, 0],
      opacity: [0.3, 0.5, 0.3] 
    }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    className={`absolute rounded-full blur-[100px] pointer-events-none z-0 ${className}`}
    style={{ background: color }}
  />
);

// --- 3D TILT CARD COMPONENT ---

const TiltCard = ({ children, theme }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative h-full"
    >
      <div style={{ transform: "translateZ(50px)" }} className="h-full">
        {children}
      </div>
      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" style={{ transform: "translateZ(75px)" }} />
    </motion.div>
  );
};

// --- MAIN COMPONENT ---

const CoreValues = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 relative overflow-hidden font-sans selection:bg-indigo-100">
      
      {/* --- AMBIENT BACKGROUND --- */}
      <BackgroundGrid />
      <FloatingBlob className="top-0 left-0 w-[500px] h-[500px]" color="rgba(99, 102, 241, 0.15)" />
      <FloatingBlob className="bottom-0 right-0 w-[600px] h-[600px]" color="rgba(244, 63, 94, 0.1)" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[120px] opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6 backdrop-blur-sm"
          >
            <Sparkles size={16} className="text-amber-500 animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              Our Foundation
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6"
          >
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Values</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1.5 mx-auto mb-6 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed font-light"
          >
            We don't just teach — we nurture character and ambition.  
            Our philosophy is built upon four powerful pillars that guide
            excellence, leadership, and holistic development.
          </motion.p>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 perspective-1000">
          {values.map((value, index) => {
            const colors = colorMap[value.theme];
            const Icon = value.icon;

            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group h-full"
              >
                <TiltCard theme={value.theme}>
                  <div className={`relative h-full bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 transition-all duration-500 ${colors.border} ${colors.shadow} overflow-hidden flex flex-col`}>
                    
                    {/* Background Glow on Hover */}
                    <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[60px] transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${colors.bgGlow}`} />

                    {/* Card Number */}
                    <div className="absolute top-6 right-6 text-5xl sm:text-6xl font-bold text-slate-100/50 select-none transition-colors group-hover:text-slate-200">
                      0{index + 1}
                    </div>

                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${colors.gradientBg} shadow-lg shadow-slate-300/50 group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                        <Icon className="text-white w-7 h-7 sm:w-8 sm:h-8" strokeWidth={1.5} />
                      </div>
                      {/* Decorative line */}
                      <div className={`absolute top-1/2 left-14 sm:left-16 w-0 h-[2px] bg-gradient-to-r ${colors.gradientBg} group-hover:w-12 transition-all duration-500 delay-100`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${colors.gradientText} transition-all duration-300">
                      {value.title}
                    </h3>
                    
                    <p className="text-slate-500 leading-relaxed mb-6 sm:mb-8 flex-grow text-sm sm:text-base">
                      {value.desc}
                    </p>

                    {/* Footer / Action */}
                    <div className="mt-auto pt-4 sm:pt-6 border-t border-slate-100 flex items-center justify-between">
                      <div className={`h-1.5 flex-grow rounded-full bg-slate-100 overflow-hidden mr-4`}>
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.5 + (index * 0.2) }}
                          className={`h-full bg-gradient-to-r ${colors.gradientBg}`}
                        />
                      </div>
                      <div className="p-2 rounded-full bg-slate-50 text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 cursor-pointer">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>

                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CoreValues;