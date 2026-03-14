import React, { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { BookOpen, Users, Trophy, Star, Sparkles } from "lucide-react";

// --- ANIMATED COUNTER ---
const AnimatedCounter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  
  const spring = useSpring(0, { mass: 1, stiffness: 50, damping: 20 });
  const display = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    if (isInView) spring.set(numericValue);
  }, [isInView, numericValue, spring]);

  return (
    <span ref={ref} className="flex items-baseline">
      <motion.span className="tabular-nums">{display}</motion.span>
      <span className="text-2xl sm:text-3xl ml-1">{suffix}</span>
    </span>
  );
};

// --- FLOATING DOTS COMPONENT ---
const FloatingDots = ({ color, count = 6, speed = 20, direction = 1 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${color}`}
          style={{
            width: Math.random() * 8 + 4 + "px",
            height: Math.random() * 8 + 4 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, -30 * direction, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: speed + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

// --- DATA ---
const stats = [
  { 
    number: "25", 
    suffix: "+",
    label: "Years of Excellence", 
    desc: "Nurturing young minds",
    icon: Trophy,
    color: "bg-amber-400",
    gradient: "from-amber-400 to-orange-400",
    lightGradient: "from-amber-50 to-orange-50",
    dots: "bg-amber-400",
  },
  { 
    number: "50", 
    suffix: "+",
    label: "Expert Teachers", 
    desc: "Dedicated educators",
    icon: BookOpen,
    color: "bg-blue-400",
    gradient: "from-blue-400 to-cyan-400",
    lightGradient: "from-blue-50 to-cyan-50",
    dots: "bg-blue-400",
  },
  { 
    number: "2000", 
    suffix: "+",
    label: "Happy Students", 
    desc: "Learning with joy",
    icon: Users,
    color: "bg-rose-400",
    gradient: "from-rose-400 to-pink-400",
    lightGradient: "from-rose-50 to-pink-50",
    dots: "bg-rose-400",
  },
  { 
    number: "100", 
    suffix: "%",
    label: "Results", 
    desc: "Academic success",
    icon: Star,
    color: "bg-emerald-400",
    gradient: "from-emerald-400 to-teal-400",
    lightGradient: "from-emerald-50 to-teal-50",
    dots: "bg-emerald-400",
  },
];

// --- MAIN COMPONENT ---

const StatsSection = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      
      {/* --- PREMIUM BACKGROUND LAYERS --- */}
      
      {/* Soft Mesh Gradient */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-amber-100/40 to-rose-100/40 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-50/30 to-cyan-50/30 rounded-full blur-[120px]" />
      </div>

      {/* Floating Dots - Multiple Colors & Layers */}
      <FloatingDots color="bg-blue-400/40" count={8} speed={15} direction={1} />
      <FloatingDots color="bg-rose-400/40" count={6} speed={20} direction={-1} />
      <FloatingDots color="bg-amber-400/40" count={5} speed={18} direction={1} />
      <FloatingDots color="bg-emerald-400/40" count={7} speed={22} direction={-1} />
      <FloatingDots color="bg-purple-400/30" count={4} speed={25} direction={1} />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-bold tracking-widest text-slate-600 uppercase">Our Achievements</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6"
          >
            Building Bright <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Futures</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            For over two decades, we have been shaping young minds with dedication, 
            innovation, and a commitment to excellence in education.
          </motion.p>
        </div>

        {/* --- STATS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Card */}
                <div className={`relative h-full rounded-3xl p-8 bg-gradient-to-br ${stat.lightGradient} border border-white/50 shadow-xl shadow-slate-200/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-${stat.color}/20`}>
                  
                  {/* Floating dots inside card */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <FloatingDots color={stat.dots} count={4} speed={10} />
                  </div>

                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${stat.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                  {/* Icon */}
                  <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Number */}
                  <div className={`text-5xl sm:text-6xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                    <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-slate-900 transition-colors">
                    {stat.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-slate-500">
                    {stat.desc}
                  </p>

                  {/* Decorative corner */}
                  <div className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br ${stat.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- BOTTOM TRUST BADGES --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {["CBSE Affiliated", "ISO Certified", "Best School Award 2023"].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm font-medium text-slate-600">{badge}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default StatsSection;