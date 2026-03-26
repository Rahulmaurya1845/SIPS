import React, { useRef, useMemo } from "react";
import { Shield, Star, Zap, Globe, Sparkles, ArrowUpRight } from "lucide-react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

// --- 3D TILT CARD COMPONENT ---
const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [15, -15]);
  const rotateY = useTransform(x, [0, 1], [-15, 15]);

  const springConfig = { stiffness: 150, damping: 15 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: rotateXSpring, rotateY: rotateYSpring, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- FLOATING DOTS COMPONENT ---
const FloatingDots = ({ color, count = 6, speed = 20, direction = 1 }) => {
  const dots = useMemo(() => 
    [...Array(count)].map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 6 + 4,
      delay: Math.random() * 5,
    })), [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${color}`}
          style={{
            width: dot.size,
            height: dot.size,
            top: `${dot.top}%`,
            left: `${dot.left}%`,
          }}
          animate={{
            y: [0, -30 * direction, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: speed + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
        />
      ))}
    </div>
  );
};

// --- SVG CORNER ACCENT ---
const CornerAccent = ({ color }) => (
  <svg className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none" viewBox="0 0 100 100">
    <path d="M100 0 L100 100 L0 0 Z" fill={`url(#gradient-${color})`} />
    <defs>
      <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
      </linearGradient>
    </defs>
  </svg>
);

// --- DATA ---
const features = [
  {
    icon: Shield,
    title: "Safe & Secure Campus",
    desc: "Advanced security systems and 24/7 monitoring ensure complete safety for every student.",
    theme: "emerald",
    stats: "100% Safe",
  },
  {
    icon: Star,
    title: "Top Academic Results",
    desc: "Consistent academic excellence with industry-leading pass rates and scholarship records.",
    theme: "amber",
    stats: "98% Success",
  },
  {
    icon: Zap,
    title: "Modern Infrastructure",
    desc: "Smart classrooms, digital labs, and technology-driven learning ecosystem.",
    theme: "blue",
    stats: "50+ Labs",
  },
  {
    icon: Globe,
    title: "Global Exposure",
    desc: "International partnerships, exchange programs, and global career opportunities.",
    theme: "violet",
    stats: "20+ Countries",
  },
];

// Theme configurations
const themeConfig = {
  emerald: {
    gradient: "from-emerald-500 to-teal-400",
    gradientBg: "bg-gradient-to-br from-emerald-500 to-teal-400",
    lightBg: "from-emerald-50/50 to-teal-50/50",
    dotColor: "bg-emerald-400",
    shadow: "shadow-emerald-500/20",
    text: "text-emerald-600",
  },
  amber: {
    gradient: "from-amber-500 to-orange-400",
    gradientBg: "bg-gradient-to-br from-amber-500 to-orange-400",
    lightBg: "from-amber-50/50 to-orange-50/50",
    dotColor: "bg-amber-400",
    shadow: "shadow-amber-500/20",
    text: "text-amber-600",
  },
  blue: {
    gradient: "from-blue-500 to-cyan-400",
    gradientBg: "bg-gradient-to-br from-blue-500 to-cyan-400",
    lightBg: "from-blue-50/50 to-cyan-50/50",
    dotColor: "bg-blue-400",
    shadow: "shadow-blue-500/20",
    text: "text-blue-600",
  },
  violet: {
    gradient: "from-violet-500 to-purple-400",
    gradientBg: "bg-gradient-to-br from-violet-500 to-purple-400",
    lightBg: "from-violet-50/50 to-purple-50/50",
    dotColor: "bg-violet-400",
    shadow: "shadow-violet-500/20",
    text: "text-violet-600",
  },
};

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-28 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      
      {/* --- PREMIUM BACKGROUND --- */}
      
      {/* Soft Mesh Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-50/20 rounded-full blur-[150px]" />
      </div>

      {/* Continuous Floating Dots - Multiple Colors */}
      <FloatingDots color="bg-emerald-400/40" count={8} speed={18} direction={1} />
      <FloatingDots color="bg-amber-400/40" count={6} speed={22} direction={-1} />
      <FloatingDots color="bg-blue-400/40" count={7} speed={20} direction={1} />
      <FloatingDots color="bg-violet-400/40" count={5} speed={25} direction={-1} />

      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* --- PREMIUM HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-lg shadow-slate-200/50 mb-8"
          >
            <Sparkles size={16} className="text-amber-500 animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-slate-600 uppercase">Our Strengths</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Us</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            We provide a nurturing environment where academic excellence meets holistic development, 
            preparing students for a bright future.
          </motion.p>

          {/* Animated Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "120px" } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-1 mx-auto mt-8 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          />
        </motion.div>

        {/* --- FEATURES GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => {
            const config = themeConfig[item.theme];
            const Icon = item.icon;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60, rotateX: 10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4 + (i * 0.15),
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <TiltCard className="h-full group">
                  <div className={`relative h-full rounded-3xl p-8 bg-gradient-to-br ${config.lightBg} backdrop-blur-xl border border-white/60 shadow-xl shadow-slate-200/50 overflow-hidden transition-all duration-500 hover:shadow-2xl ${config.shadow} hover:border-white`}>
                    
                    {/* Floating Dots Inside Card */}
                    <FloatingDots color={config.dotColor} count={5} speed={12} />
                    
                    {/* Corner Accent */}
                    <CornerAccent color={config.dotColor} />

                    {/* Top Gradient Line */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${config.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />

                    {/* Icon Container */}
                    <div className="relative mb-8">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className={`absolute inset-0 w-20 h-20 rounded-2xl ${config.gradientBg} opacity-20 blur-xl`} 
                      />
                      
                      <div className={`relative w-20 h-20 rounded-2xl bg-white shadow-lg shadow-slate-200/50 flex items-center justify-center border border-slate-100 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <div className={`absolute inset-0 rounded-2xl ${config.gradientBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                        <Icon className={`w-10 h-10 ${config.text} group-hover:text-white relative z-10 transition-colors duration-500`} strokeWidth={1.5} />
                      </div>

                      {/* Stats Badge */}
                      <div className={`absolute -top-2 -right-2 px-3 py-1 rounded-full text-xs font-bold text-white ${config.gradientBg} shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500`}>
                        {item.stats}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-600 transition-all duration-300">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed mb-6 group-hover:text-slate-600 transition-colors">
                      {item.desc}
                    </p>

                    {/* Bottom Action */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-400 group-hover:text-slate-600 transition-colors">
                      <span>Learn more</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>

                    {/* Hover Glow */}
                    <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full ${config.gradientBg} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* --- BOTTOM CTA --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 text-center"
        >
        
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;