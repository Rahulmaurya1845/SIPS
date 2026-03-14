import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import your local images
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";

const PremiumCampusShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  // CORRECTED campus data - Text matches your images exactly as you provided
  const campusData = [
    {
      id: 1,
      title: "Our Esteemed Faculty",
      subtitle: "Leadership Team",
      description: "School staff with our honorable Director Mr. Shebin Abraham Sir, guiding students towards excellence with dedication and vision.",
      image: img1,
      icon: "👨‍🏫",
      stats: "15+ Years Excellence",
      date: "Academic Year 2025-26",
      gradient: "from-blue-600 via-indigo-600 to-purple-600",
      accentColor: "bg-blue-500",
      theme: "blue"
    },
    {
      id: 2,
      title: "School Events & Activities",
      subtitle: "Memorable Moments",
      description: "Vibrant campus life filled with cultural programs, competitions, and co-curricular activities for holistic development.",
      image: img2,
      icon: "🎓",
      stats: "Batch 2024-25",
      date: "February 2025",
      gradient: "from-amber-500 via-orange-500 to-red-500",
      accentColor: "bg-amber-500",
      theme: "amber"
    },
    {
      id: 3,
      title: "Farewell Celebrations 2024-25",
      subtitle: "Beyond Academics",
      description: "Heartwarming farewell party 2024-2025 batch. Wishing our graduating students success and bright futures ahead.",
      image: img3,
      icon: "🎉",
      stats: "All Round Development",
      date: "Annual Events",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      accentColor: "bg-emerald-500",
      theme: "emerald"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % campusData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, campusData.length]);

  const goToSlide = useCallback((index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % campusData.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  }, [campusData.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + campusData.length) % campusData.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  }, [campusData.length]);

  // EXTREME CINEMATIC slide variants
  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.2,
      rotateY: direction > 0 ? 45 : -45,
      filter: "blur(20px) brightness(0.5)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: "blur(0px) brightness(1)",
      transition: {
        x: { type: "spring", stiffness: 200, damping: 30, mass: 1 },
        opacity: { duration: 0.8, ease: "easeOut" },
        scale: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] },
        rotateY: { duration: 1, ease: "easeOut" },
        filter: { duration: 0.8 }
      }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
      filter: "blur(20px) brightness(0.5)",
      transition: {
        x: { type: "spring", stiffness: 200, damping: 30 },
        opacity: { duration: 0.6 },
        scale: { duration: 0.8 },
        rotateY: { duration: 0.8 },
        filter: { duration: 0.6 }
      }
    })
  };

  // Text reveal with 3D perspective
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60, 
      rotateX: -40,
      filter: "blur(15px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        mass: 0.8
      }
    },
    exit: {
      opacity: 0,
      y: -40,
      rotateX: 20,
      filter: "blur(10px)",
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-slate-950 overflow-hidden font-sans selection:bg-amber-500/30">
      {/* EXTREME BACKGROUND - Animated Mesh Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        
        {/* Animated gradient orbs that change color based on slide */}
        <motion.div 
          className="absolute w-[800px] h-[800px] rounded-full opacity-20 blur-[120px]"
          style={{
            background: `linear-gradient(135deg, ${
              currentIndex === 0 ? "#3b82f6, #8b5cf6" : 
              currentIndex === 1 ? "#f59e0b, #ef4444" : 
              "#10b981, #06b6d4"
            })`
          }}
          animate={{
            x: ["-20%", "10%", "-20%"],
            y: ["-10%", "20%", "-10%"],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full opacity-15 blur-[100px]"
          style={{
            background: `linear-gradient(225deg, ${
              currentIndex === 0 ? "#6366f1, #a855f7" : 
              currentIndex === 1 ? "#fbbf24, #f97316" : 
              "#34d399, #22d3ee"
            })`
          }}
          animate={{
            x: ["10%", "-20%", "10%"],
            y: ["10%", "-10%", "10%"],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Noise texture overlay for cinema feel */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        
        {/* LUXURY HEADER with Animated Gradient Text */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8 shadow-2xl"
          >
            <motion.span 
              className={`w-2.5 h-2.5 rounded-full ${campusData[currentIndex].accentColor}`}
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [1, 0.6, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm uppercase tracking-[0.4em] text-white/70 font-semibold">Life at Our School</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
            <span className="block">Cherished</span>
            <motion.span 
              className={`block text-transparent bg-clip-text bg-gradient-to-r ${campusData[currentIndex].gradient}`}
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Memories
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed font-light"
          >
            Glimpses of our journey together - from dedicated faculty to memorable celebrations
          </motion.p>
        </motion.div>

        {/* CINEMATIC SHOWCASE CARD - FIXED FOR LAPTOP SCREENS */}
        <div className="relative max-w-6xl mx-auto" style={{ perspective: "2000px" }}>
          <motion.div 
            className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden"
            initial={{ opacity: 0, y: 100, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className={`absolute -inset-1 bg-gradient-to-r ${campusData[currentIndex].gradient} opacity-20 blur-3xl`} />
            
            {/* FIXED GRID - Better ratio for laptop screens */}
            <div className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[550px] lg:min-h-[600px]">
              
              {/* LEFT SIDE - Text Content (5 cols) */}
              <div className="lg:col-span-5 relative p-8 lg:p-10 flex flex-col justify-center bg-gradient-to-br from-slate-900/80 to-slate-950/80 order-2 lg:order-1">
                {/* Dynamic ambient glow */}
                <motion.div
                  className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${campusData[currentIndex].gradient} opacity-5`}
                  animate={{ opacity: [0.05, 0.1, 0.05] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-6 relative z-10"
                  >
                    {/* Subtitle with animated line */}
                    <motion.div variants={itemVariants} className="flex items-center gap-4">
                      <motion.div 
                        className={`h-px flex-1 bg-gradient-to-r ${campusData[currentIndex].gradient}`}
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      />
                      <span className={`text-xs font-bold uppercase tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r ${campusData[currentIndex].gradient}`}>
                        {campusData[currentIndex].subtitle}
                      </span>
                    </motion.div>

                    {/* Main Title with 3D effect */}
                    <motion.h2 
                      variants={itemVariants}
                      className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
                    >
                      {campusData[currentIndex].title}
                    </motion.h2>

                    {/* Description with blur reveal */}
                    <motion.p 
                      variants={itemVariants}
                      className="text-white/60 text-base lg:text-lg leading-relaxed"
                    >
                      {campusData[currentIndex].description}
                    </motion.p>

                    {/* Stats Row */}
                    <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4">
                      <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <span className="text-2xl">{campusData[currentIndex].icon}</span>
                        <span className="text-sm font-bold text-white">{campusData[currentIndex].stats}</span>
                      </div>
                      <span className="text-sm text-white/40 font-medium">{campusData[currentIndex].date}</span>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="absolute bottom-8 left-8 lg:left-10 flex items-center gap-3">
                  <motion.button
                    onClick={prevSlide}
                    className="group w-12 h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, x: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>
                  
                  {/* Slide counter */}
                  <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <span className="text-white font-mono text-sm">
                      <span className="text-white">{String(currentIndex + 1).padStart(2, '0')}</span>
                      <span className="text-white/30"> / {String(campusData.length).padStart(2, '0')}</span>
                    </span>
                  </div>

                  <motion.button
                    onClick={nextSlide}
                    className="group w-12 h-12 rounded-2xl bg-white text-slate-900 flex items-center justify-center hover:bg-white/90 transition-all duration-300 shadow-lg shadow-white/10"
                    whileHover={{ scale: 1.1, x: 2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* RIGHT SIDE - Cinematic Image (7 cols) - FIXED FOR FULL VISIBILITY */}
              <div className="lg:col-span-7 relative h-[400px] sm:h-[450px] lg:h-auto overflow-hidden order-1 lg:order-2 bg-slate-900">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* FULL IMAGE - object-contain for laptop to prevent cropping */}
                    <motion.img
                      src={campusData[currentIndex].image}
                      alt={campusData[currentIndex].title}
                      className="w-full h-full object-contain lg:object-contain p-4"
                      initial={{ scale: 1.3 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                    
                    {/* Cinematic overlays - only on edges */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-slate-900/60 lg:to-slate-900/80 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none lg:hidden" />
                    
                    {/* Animated shine sweep */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                      initial={{ x: "-200%" }}
                      animate={{ x: "200%" }}
                      transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Vertical indicators with fill animation */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
                  {campusData.map((item, index) => (
                    <motion.button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className="group relative w-1 h-12 rounded-full overflow-hidden bg-white/20"
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.div 
                        className={`absolute inset-0 ${item.accentColor}`}
                        initial={{ scaleY: 0 }}
                        animate={{ 
                          scaleY: currentIndex === index ? 1 : 0,
                        }}
                        style={{ originY: 0 }}
                        transition={{ duration: currentIndex === index && isAutoPlaying ? 6 : 0.3 }}
                      />
                      {currentIndex === index && (
                        <motion.div
                          layoutId="activeGlow"
                          className="absolute inset-0 bg-white/50 blur-sm"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Corner accent */}
                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${campusData[currentIndex].gradient} opacity-20 blur-2xl pointer-events-none`} />
              </div>
            </div>

            {/* Bottom progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
              <motion.div
                className={`h-full bg-gradient-to-r ${campusData[currentIndex].gradient}`}
                initial={{ width: "0%" }}
                animate={{ width: isAutoPlaying ? "100%" : "0%" }}
                transition={{ duration: 6, ease: "linear" }}
                key={currentIndex + (isAutoPlaying ? "-play" : "-pause")}
              />
            </div>
          </motion.div>
        </div>

        {/* EXTREME PREMIUM STATS SECTION - Your Original Design */}
        <motion.div 
          className="mt-20 lg:mt-28 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-white mb-3">Our Legacy</h3>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { number: "15+", label: "Years Excellence", icon: "🏆", gradient: "from-amber-500 to-orange-600", delay: 0 },
              { number: "50+", label: "Expert Faculty", icon: "👨‍🏫", gradient: "from-blue-500 to-indigo-600", delay: 0.1 },
              { number: "1000+", label: "Students", icon: "⭐", gradient: "from-emerald-500 to-teal-600", delay: 0.2 },
              { number: "100%", label: "Success", icon: "🎯", gradient: "from-purple-500 to-pink-600", delay: 0.3 }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="group relative"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: stat.delay,
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-white/10 overflow-hidden group-hover:border-white/20 transition-all duration-500 shadow-2xl">
                  {/* Hover gradient fill */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  
                  {/* Floating background icon */}
                  <motion.div
                    className="absolute -top-2 -right-2 text-6xl opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {stat.icon}
                  </motion.div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <motion.div 
                      className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center text-3xl backdrop-blur-sm border border-white/10 group-hover:border-white/30 transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {stat.icon}
                    </motion.div>
                    
                    <motion.div 
                      className="text-3xl lg:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: stat.delay + 0.4,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    
                    <div className="text-xs font-semibold text-white/50 group-hover:text-white/80 uppercase tracking-wider transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full group-hover:from-white/10 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumCampusShowcase;