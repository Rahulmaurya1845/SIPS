import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionTemplate, useMotionValue } from "framer-motion";
import { 
  Rocket, 
  ArrowRight, 
  Sparkles, 
  Play, 
  Award,
  Users,
  Star,
  TrendingUp,
  CheckCircle2,
  GraduationCap,
  BookOpen
} from "lucide-react";

// --- CUSTOM SVG ASSETS FOR PREMIUM LOOK ---
// Using inline SVGs to ensure they load instantly and match the theme perfectly.

const FloatingShape = ({ className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1, y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
    transition={{ 
      opacity: { duration: 1 },
      scale: { duration: 1 },
      y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
      rotate: { duration: 10, repeat: Infinity, ease: "easeInOut", delay }
    }}
    className={`absolute pointer-events-none z-0 ${className}`}
  >
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-60">
      <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.3C87.4,-33.5,90.1,-18,89.2,-2.9C88.3,12.2,83.8,27,75.6,39.5C67.4,52,55.5,62.2,42.2,69.6C28.9,77,14.5,81.6,0.3,81.1C-13.9,80.6,-27.8,75,-40.5,67.1C-53.2,59.2,-64.7,49,-72.3,36.3C-79.9,23.6,-83.6,8.4,-81.7,-6.2C-79.8,-20.8,-72.3,-34.8,-61.9,-45.6C-51.5,-56.4,-38.2,-64,-24.6,-71.7C-11,-79.4,2.9,-87.2,17.1,-85.8C31.3,-84.4,45.8,-74.8,44.7,-76.4Z" transform="translate(100 100)" />
    </svg>
  </motion.div>
);

const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
  </svg>
);

// --- COMPONENT ---

const AboutHero = () => {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Mouse tracking for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Smooth parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "150px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  // Mouse move handler for spotlight/tilt
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    mouseX.set(x);
    mouseY.set(y);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Stats data
  const stats = [
    { icon: Award, value: "25+", label: "Years Legacy", color: "from-amber-400 to-orange-600", delay: 0.1 },
    { icon: Users, value: "10K+", label: "Alumni Network", color: "from-blue-400 to-indigo-600", delay: 0.2 },
    { icon: Star, value: "98%", label: "Placement Rate", color: "from-purple-400 to-pink-600", delay: 0.3 },
    { icon: TrendingUp, value: "#1", label: "Regional Rank", color: "from-emerald-400 to-teal-600", delay: 0.4 },
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950 selection:bg-amber-500/30"
    >
      {/* --- CINEMATIC BACKGROUND LAYERS --- */}
      
      {/* Deep Base Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black" />

      {/* Animated Background Image with Parallax & Blur */}
      <motion.div 
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950" />
      </motion.div>

      {/* Dynamic Gradient Orbs - 3D Mouse Responsive */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
        style={{
          background: useMotionTemplate`
            radial-gradient(600px circle at ${mouseX.get() * 100}% ${mouseY.get() * 100}%, rgba(79, 70, 229, 0.15), transparent 40%)
          `
        }}
      />
      
      {/* Floating Ambient Orbs */}
      <motion.div 
        className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"
        animate={{ 
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Noise Texture Overlay for Film Grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />

      {/* Floating SVG Shapes */}
      <FloatingShape className="top-20 left-10 w-32 h-32 text-indigo-500/20 hidden lg:block" delay={0} />
      <FloatingShape className="bottom-32 right-10 w-48 h-48 text-amber-500/10 hidden lg:block" delay={2} />
      <FloatingShape className="top-1/2 left-1/4 w-24 h-24 text-purple-500/20 hidden xl:block" delay={4} />

      {/* --- MAIN CONTENT --- */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20 lg:pt-40 lg:pb-32"
        style={{ y: textY, opacity, scale }}
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Text Content (Spans 7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={isLoaded ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 group cursor-default"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
              </motion.div>
              <span className="text-xs font-medium tracking-widest uppercase text-slate-300 group-hover:text-white transition-colors">
                Established 1998 • 25 Years of Legacy
              </span>
            </motion.div>

            {/* Main Heading with Staggered Reveal */}
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={isLoaded ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tighter"
              >
                Building
                <br />
                <span className="relative inline-block mt-2">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600">
                    Futures
                  </span>
                  <motion.svg 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="absolute -bottom-2 left-0 w-full h-3 text-amber-500/50" 
                    viewBox="0 0 100 10" 
                    preserveAspectRatio="none"
                  >
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </motion.svg>
                </span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              We don't just teach; we ignite potential. Join a community dedicated to excellence, innovation, and shaping the leaders of tomorrow through world-class education.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              {/* Primary Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-full font-bold text-slate-950 bg-gradient-to-r from-amber-300 to-yellow-500 shadow-[0_0_40px_-10px_rgba(251,191,36,0.5)] hover:shadow-[0_0_60px_-10px_rgba(251,191,36,0.7)] transition-all duration-500 overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
                  Start Journey
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <RocketIcon />
                  </motion.span>
                </span>
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12" />
              </motion.button>

              {/* Secondary Button */}
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-medium text-white border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto group hover:border-white/30"
              >
                <span className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                  <Play className="w-3 h-3 fill-current" />
                </span>
                <span className="text-sm uppercase tracking-wider">Watch Film</span>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-slate-500 text-sm"
            >
              {['CBSE Affiliated', 'ISO 9001:2015', 'Top 10 Schools'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-slate-400 font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Stats Cards Grid (Spans 5 cols) */}
          <div className="lg:col-span-5 order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-none">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={isLoaded ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + stat.delay }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group relative"
                  >
                    {/* Spotlight Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    
                    <div className="relative h-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-300 shadow-2xl shadow-black/50">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                      </div>
                      <div className="text-3xl font-bold text-white mb-1 tracking-tight group-hover:text-amber-400 transition-colors duration-300">
                        {stat.value}
                      </div>
                      <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Decorative Element below stats */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.2 }}
              className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-white/10 backdrop-blur-md flex items-center gap-4"
            >
              <div className="p-3 rounded-full bg-white/10">
                 <GraduationCap className="w-6 h-6 text-indigo-300" />
              </div>
              <div>
                <div className="text-white font-semibold">Admissions Open</div>
                <div className="text-xs text-indigo-200">Session 2024-25</div>
              </div>
              <ArrowRight className="w-5 h-5 text-white/50 ml-auto group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* --- SCROLL INDICATOR --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-3"
      >
        <span className="text-[10px] font-medium text-slate-500 uppercase tracking-[0.2em]">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-amber-400"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* --- BOTTOM GRADIENT FADE --- */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default AboutHero;