import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Heart,
  BadgeCheck,
  GraduationCap,
  Users,
  Award,
  ArrowRight,
  Play,
  Pause
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Teaching here has been a journey of passion and purpose. Watching students grow into confident individuals is the greatest reward.",
    author: "Mrs. Anjali Sharma",
    role: "Senior English Teacher",
    experience: "15+ Years",
    rating: 5,
    color: "blue",
    subject: "English Literature",
    students: "2,500+",
  },
  {
    id: 2,
    text: "Our focus has always been on holistic development. Academic excellence combined with values creates future leaders.",
    author: "Mr. Rajesh Verma",
    role: "Head of Mathematics",
    experience: "20+ Years",
    rating: 5,
    color: "indigo",
    subject: "Mathematics",
    students: "3,000+",
  },
  {
    id: 3,
    text: "Innovation in classrooms and modern labs empower students with real-world skills beyond textbooks.",
    author: "Dr. Priya Nair",
    role: "Science Faculty",
    experience: "12+ Years",
    rating: 5,
    color: "violet",
    subject: "Physics & Chemistry",
    students: "1,800+",
  },
  {
    id: 4,
    text: "Discipline, creativity, and compassion define our institution. We nurture not just minds, but character.",
    author: "Mr. Arvind Singh",
    role: "Vice Principal",
    experience: "25+ Years",
    rating: 5,
    color: "cyan",
    subject: "Administration",
    students: "5,000+",
  },
];

const themeConfig = {
  blue: { 
    gradient: "from-blue-400 via-blue-500 to-blue-600", 
    gradientSolid: "from-blue-500 to-blue-600", 
    text: "text-blue-600",
    soft: "bg-blue-50",
    border: "border-blue-200",
    light: "bg-blue-100",
    glow: "shadow-blue-500/30",
    accent: "blue"
  },
  indigo: { 
    gradient: "from-indigo-400 via-indigo-500 to-indigo-600", 
    gradientSolid: "from-indigo-500 to-indigo-600", 
    text: "text-indigo-600",
    soft: "bg-indigo-50",
    border: "border-indigo-200",
    light: "bg-indigo-100",
    glow: "shadow-indigo-500/30",
    accent: "indigo"
  },
  violet: { 
    gradient: "from-violet-400 via-violet-500 to-violet-600", 
    gradientSolid: "from-violet-500 to-violet-600", 
    text: "text-violet-600",
    soft: "bg-violet-50",
    border: "border-violet-200",
    light: "bg-violet-100",
    glow: "shadow-violet-500/30",
    accent: "violet"
  },
  cyan: { 
    gradient: "from-cyan-400 via-cyan-500 to-cyan-600", 
    gradientSolid: "from-cyan-500 to-cyan-600", 
    text: "text-cyan-600",
    soft: "bg-cyan-50",
    border: "border-cyan-200",
    light: "bg-cyan-100",
    glow: "shadow-cyan-500/30",
    accent: "cyan"
  },
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const currentTestimonial = testimonials[currentIndex];
  const config = themeConfig[currentTestimonial.color];

  // Spring animations for smooth interactions
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  // Mouse move handler for 3D tilt effect
  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, currentIndex]);

  const navigate = useCallback((newDirection) => {
    setDirection(newDirection);
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => {
      if (newDirection === 1) return (prev + 1) % testimonials.length;
      return (prev - 1 + testimonials.length) % testimonials.length;
    });
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  // Variants for smooth transitions
  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      rotateY: direction > 0 ? 15 : -15,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      rotateY: direction < 0 ? 15 : -15,
      scale: 0.9,
    }),
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative py-24 md:py-32 overflow-hidden bg-slate-50"
    >
      {/* Ultra Premium Background */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-[100px]"
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-white/60 shadow-xl shadow-blue-500/10 mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={18} className="text-amber-500" />
            </motion.div>
            <span className="text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Faculty Excellence
            </span>
            <BadgeCheck size={16} className="text-blue-500" />
          </motion.div>

          {/* Main Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Voices of{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Inspiration
              </span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-4 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 -z-0 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Discover the stories and wisdom from our dedicated educators who shape the future every day.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side - Stats & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-200/60 shadow-lg">
                <Users className="w-8 h-8 text-blue-500 mb-3" />
                <div className="text-3xl font-black text-slate-900">50+</div>
                <div className="text-sm text-slate-500 font-medium">Expert Faculty</div>
              </div>
              <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-200/60 shadow-lg">
                <Award className="w-8 h-8 text-purple-500 mb-3" />
                <div className="text-3xl font-black text-slate-900">15+</div>
                <div className="text-sm text-slate-500 font-medium">Years Average</div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-200/60 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Navigation</span>
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>
              </div>
              
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(-1)}
                  className="flex-1 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center gap-2 font-semibold text-slate-700 transition-colors"
                >
                  <ChevronLeft size={20} /> Previous
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(1)}
                  className="flex-1 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center gap-2 font-semibold shadow-lg shadow-blue-500/25"
                >
                  Next <ChevronRight size={20} />
                </motion.button>
              </div>

              {/* Progress Indicators */}
              <div className="flex gap-2 mt-6 justify-center">
                {testimonials.map((item, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      idx === currentIndex 
                        ? `w-12 bg-gradient-to-r ${themeConfig[item.color].gradientSolid}` 
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Center - Main Testimonial Card */}
          <div className="lg:col-span-8 perspective-1000">
            <div className="relative h-[500px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                    rotateY: { duration: 0.4 },
                  }}
                  style={{
                    rotateX: springRotateX,
                    rotateY: springRotateY,
                    transformStyle: "preserve-3d",
                  }}
                  className="absolute inset-0"
                >
                  {/* Glow Effect */}
                  <div className={`absolute -inset-4 bg-gradient-to-r ${config.gradient} opacity-20 blur-2xl rounded-3xl`} />
                  
                  {/* Main Card */}
                  <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200/60">
                    {/* Top Gradient Bar */}
                    <div className={`h-2 bg-gradient-to-r ${config.gradientSolid}`} />
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient}`} />
                      <Quote className="absolute top-10 right-10 w-64 h-64 text-slate-900" strokeWidth={0.5} />
                    </div>

                    <div className="relative h-full p-8 md:p-12 flex flex-col justify-between">
                      {/* Header */}
                      <div className="flex justify-between items-start">
                        <motion.div 
                          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-xl ${config.glow}`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Quote size={40} className="text-white" strokeWidth={2} />
                        </motion.div>

                        <div className="flex flex-col items-end gap-3">
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <Star size={20} className="text-amber-400 fill-amber-400" />
                              </motion.div>
                            ))}
                          </div>
                          <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${config.soft} ${config.text} border ${config.border}`}>
                            {currentTestimonial.experience} Experience
                          </span>
                        </div>
                      </div>

                      {/* Quote Content */}
                      <div className="flex-1 flex items-center py-8">
                        <div className="relative">
                          <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-800 leading-relaxed"
                          >
                            "{currentTestimonial.text}"
                          </motion.p>
                        </div>
                      </div>

                      {/* Author Info */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 border-t border-slate-100">
                        <div className="flex items-center gap-5">
                          <motion.div 
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${config.gradient} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}
                            whileHover={{ scale: 1.1 }}
                          >
                            {currentTestimonial.author.charAt(0)}
                          </motion.div>
                          <div>
                            <h4 className="text-xl font-bold text-slate-900">
                              {currentTestimonial.author}
                            </h4>
                            <p className={`font-semibold ${config.text}`}>
                              {currentTestimonial.role}
                            </p>
                            <p className="text-sm text-slate-500 mt-1">
                              {currentTestimonial.subject}
                            </p>
                          </div>
                        </div>

                        {/* Stats Badge */}
                        <div className="flex items-center gap-4">
                          <div className={`flex items-center gap-2 px-5 py-3 rounded-xl ${config.soft} border ${config.border}`}>
                            <GraduationCap size={20} className={config.text} />
                            <div>
                              <div className="text-lg font-black text-slate-900">{currentTestimonial.students}</div>
                              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Students Taught</div>
                            </div>
                          </div>
                          <motion.div 
                            className={`p-3 rounded-xl ${config.soft}`}
                            whileHover={{ scale: 1.1 }}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Heart size={24} className={`${config.text} fill-current`} />
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                      className={`absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-br ${config.gradient} opacity-10 blur-xl`}
                      animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.div
                      className={`absolute bottom-32 right-10 w-32 h-32 rounded-full bg-gradient-to-br ${config.gradient} opacity-10 blur-xl`}
                      animate={{ y: [0, 20, 0], scale: [1.2, 1, 1.2] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              {testimonials.map((item, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`relative p-1 rounded-2xl transition-all duration-300 ${
                    idx === currentIndex 
                      ? `bg-gradient-to-r ${themeConfig[item.color].gradient} scale-110` 
                      : "bg-slate-200 hover:bg-slate-300"
                  }`}
                  whileHover={{ scale: idx === currentIndex ? 1.1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`w-16 h-16 rounded-xl ${themeConfig[item.color].soft} flex items-center justify-center font-bold text-lg ${themeConfig[item.color].text}`}>
                    {item.author.charAt(0)}
                  </div>
                  {idx === currentIndex && (
                    <motion.div 
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rounded-full"
                      layoutId="activeIndicator"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-2xl shadow-slate-900/20">
            <span className="font-semibold">Want to join our team?</span>
            <motion.button 
              className="flex items-center gap-2 px-6 py-2 rounded-xl bg-white text-slate-900 font-bold hover:bg-blue-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Careers <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;