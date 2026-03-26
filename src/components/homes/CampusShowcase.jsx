import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import your local images
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg"; 
import img5 from "../../assets/5.jpg"

const PremiumCampusShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const containerRef = useRef(null);

  // UPDATED campus data with 5th image - Independence Day
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
      description: "Heartwarming Farewell party 2024-2025 batch. Wishing our graduating students success and bright futures ahead.",
      image: img3,
      icon: "🎉",
      stats: "All Round Development",
      date: "Annual Events",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      accentColor: "bg-emerald-500",
      theme: "emerald"
    },
    {
      id: 4,
      title: "2nd Annual Function 2023-24",
      subtitle: "Annual Day Celebration",
      description: "Grand celebration of our 2nd Annual Function showcasing student talents, cultural performances, and academic achievements. A memorable evening of joy and pride.",
      image: img4,
      icon: "🎭",
      stats: "Cultural Excellence",
      date: "Annual Day 2024",
      gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
      accentColor: "bg-rose-500",
      theme: "rose"
    },
    {
      id: 5,
      title: "Independence Day Celebration",
      subtitle: "Patriotic Festival",
      description: "Proud moments of 15th August celebration with flag hoisting, cultural programs, and patriotic performances instilling national pride and unity among students.",
      image: img5,
      icon: "🇮🇳",
      stats: "Patriotic Spirit",
      date: "15th August 2024",
      gradient: "from-orange-500 via-white to-green-500",
      accentColor: "bg-orange-500",
      theme: "tricolor"
    }
  ];

  // Preload images for smooth transitions
  useEffect(() => {
    campusData.forEach((item, index) => {
      const img = new Image();
      img.src = item.image;
      img.onload = () => {
        setImagesLoaded(prev => ({ ...prev, [index]: true }));
      };
    });
  }, []);

  // Auto-slide functionality - optimized timing
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % campusData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, campusData.length]);

  const goToSlide = useCallback((index) => {
    if (index === currentIndex) return;
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

  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section 
      id="campus-showcase"
      ref={containerRef}
      className="relative w-full min-h-screen bg-slate-950 overflow-hidden font-sans selection:bg-amber-500/30"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        
        <motion.div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
          style={{
            background: `linear-gradient(135deg, ${
              currentIndex === 0 ? "#3b82f6, #8b5cf6" : 
              currentIndex === 1 ? "#f59e0b, #ef4444" : 
              currentIndex === 2 ? "#10b981, #06b6d4" :
              currentIndex === 3 ? "#f43f5e, #ec4899" :
              "#f97316, #22c55e"
            })`
          }}
          animate={{
            x: ["-10%", "10%", "-10%"],
            y: ["-10%", "10%", "-10%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8"
          >
            <motion.span 
              className={`w-2.5 h-2.5 rounded-full ${campusData[currentIndex].accentColor}`}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm uppercase tracking-[0.3em] text-white/70 font-semibold">Life at Our School</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
            <span className="block">Cherished</span>
            <motion.span 
              className={`block text-transparent bg-clip-text bg-gradient-to-r ${campusData[currentIndex].gradient}`}
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Memories
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed font-light"
          >
            Glimpses of our journey together - from dedicated faculty to memorable celebrations
          </motion.p>
        </motion.div>

        {/* SHOWCASE CARD - SIDE BY SIDE LAYOUT */}
        <div className="relative max-w-6xl mx-auto" style={{ perspective: "1500px" }}>
          <motion.div 
            className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-[2.5rem] border border-white/20 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={`absolute -inset-1 bg-gradient-to-r ${campusData[currentIndex].gradient} opacity-20 blur-2xl`} />
            
            {/* SIDE BY SIDE GRID LAYOUT */}
            <div className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[600px] lg:min-h-[650px]">
              
              {/* LEFT SIDE - Text Content (5 cols) */}
              <div className="lg:col-span-5 relative p-6 sm:p-8 lg:p-10 flex flex-col justify-center bg-gradient-to-br from-slate-900/90 to-slate-950/90 order-2 lg:order-1 z-10">
                <motion.div
                  className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${campusData[currentIndex].gradient} opacity-5`}
                  animate={{ opacity: [0.05, 0.08, 0.05] }}
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
                    className="space-y-4 sm:space-y-5 relative z-10"
                  >
                    {/* Subtitle */}
                    <motion.div variants={itemVariants} className="flex items-center gap-4">
                      <motion.div 
                        className={`h-px flex-1 bg-gradient-to-r ${campusData[currentIndex].gradient}`}
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      />
                      <span className={`text-xs font-bold uppercase tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r ${campusData[currentIndex].gradient}`}>
                        {campusData[currentIndex].subtitle}
                      </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h2 
                      variants={itemVariants}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                    >
                      {campusData[currentIndex].title}
                    </motion.h2>

                    {/* Description */}
                    <motion.p 
                      variants={itemVariants}
                      className="text-white/60 text-sm sm:text-base lg:text-lg leading-relaxed"
                    >
                      {campusData[currentIndex].description}
                    </motion.p>

                    {/* Stats Row */}
                    <motion.div variants={itemVariants} className="flex items-center gap-3 sm:gap-4 pt-2 flex-wrap">
                      <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <span className="text-xl sm:text-2xl">{campusData[currentIndex].icon}</span>
                        <span className="text-xs sm:text-sm font-bold text-white">{campusData[currentIndex].stats}</span>
                      </div>
                      <span className="text-xs sm:text-sm text-white/40 font-medium">{campusData[currentIndex].date}</span>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 lg:left-10 flex items-center gap-3">
                  <motion.button
                    onClick={prevSlide}
                    className="group w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>
                  
                  {/* Slide counter */}
                  <div className="px-3 sm:px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <span className="text-white font-mono text-xs sm:text-sm">
                      <span className="text-white">{String(currentIndex + 1).padStart(2, '0')}</span>
                      <span className="text-white/30"> / {String(campusData.length).padStart(2, '0')}</span>
                    </span>
                  </div>

                  <motion.button
                    onClick={nextSlide}
                    className="group w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white text-slate-900 flex items-center justify-center hover:bg-white/90 transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* RIGHT SIDE - Image (7 cols) - PERFECTLY INCLINED */}
              <div className="lg:col-span-7 relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-auto lg:min-h-[650px] overflow-hidden order-1 lg:order-2 bg-slate-800">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full flex items-center justify-center"
                  >
                    {/* LOADING */}
                    {!imagesLoaded[currentIndex] && (
                      <div className="absolute inset-0 bg-slate-800 flex items-center justify-center z-10">
                        <div className="w-12 h-12 border-4 border-white/10 border-t-white/50 rounded-full animate-spin" />
                      </div>
                    )}
                    
                    {/* PERFECTLY INCLINED IMAGE */}
                    <img
                      src={campusData[currentIndex].image}
                      alt={campusData[currentIndex].title}
                      className="w-full h-full object-contain bg-slate-900"
                      style={{ 
                        opacity: imagesLoaded[currentIndex] ? 1 : 0,
                        transition: "opacity 0.3s ease"
                      }}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* GRADIENT OVERLAY FOR TEXT READABILITY */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/20 to-transparent pointer-events-none hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none lg:hidden" />
              </div>
            </div>

            {/* PROGRESS BAR */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
              <motion.div
                className={`h-full bg-gradient-to-r ${campusData[currentIndex].gradient}`}
                initial={{ width: "0%" }}
                animate={{ width: isAutoPlaying ? "100%" : "0%" }}
                transition={{ duration: 5, ease: "linear" }}
                key={currentIndex + (isAutoPlaying ? "-play" : "-pause")}
              />
            </div>
          </motion.div>
        </div>

        {/* STATS SECTION */}
        <motion.div 
          className="mt-12 sm:mt-16 lg:mt-24 max-w-5xl mx-auto px-4 sm:px-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="text-center mb-8 sm:mb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Our Legacy</h3>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[
              { number: "5+", label: "Years Excellence", icon: "🏆", gradient: "from-amber-500 to-orange-600", delay: 0 },
              { number: "50+", label: "Expert Faculty", icon: "👨‍🏫", gradient: "from-blue-500 to-indigo-600", delay: 0.1 },
              { number: "1000+", label: "Students", icon: "⭐", gradient: "from-emerald-500 to-teal-600", delay: 0.2 },
              { number: "100%", label: "Success", icon: "🎯", gradient: "from-purple-500 to-pink-600", delay: 0.3 }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: stat.delay, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10 overflow-hidden group-hover:border-white/20 transition-all duration-300">
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  
                  <div className="relative z-10 text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center text-xl sm:text-2xl transition-colors duration-300">
                      {stat.icon}
                    </div>
                    
                    <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-1">
                      {stat.number}
                    </div>
                    
                    <div className="text-[10px] sm:text-xs font-semibold text-white/50 group-hover:text-white/70 uppercase tracking-wider transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
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