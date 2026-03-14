import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import img1 from "../assets/images/academics1.png";
import img2 from "../assets/images/academics2.png";
import img3 from "../assets/images/academics3.png";
import Curriculum from "../components/academics/Curriculam";

// Premium Custom SVG Icons
const IconGraduationCap = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6B6B" />
        <stop offset="100%" stopColor="#FF8E53" />
      </linearGradient>
    </defs>
    <motion.path
      d="M32 8L4 24L32 40L60 24L32 8Z"
      stroke="url(#grad1)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    <motion.path
      d="M16 30V44C16 48 32 56 32 56C32 56 48 48 48 44V30"
      stroke="url(#grad1)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
    />
    <motion.circle
      cx="32"
      cy="24"
      r="4"
      fill="url(#grad1)"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    />
    <motion.path
      d="M48 36L56 40V48"
      stroke="url(#grad1)"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    />
  </svg>
);

const IconBookOpen = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4FACFE" />
        <stop offset="100%" stopColor="#00F2FE" />
      </linearGradient>
    </defs>
    <motion.path
      d="M8 16C8 16 20 12 32 20C44 12 56 16 56 16V48C56 48 44 44 32 52C20 44 8 48 8 48V16Z"
      stroke="url(#grad2)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1.5 }}
    />
    <motion.path
      d="M32 20V52"
      stroke="url(#grad2)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    />
    <motion.path
      d="M16 24C16 24 20 22 24 24"
      stroke="url(#grad2)"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1 }}
    />
    <motion.path
      d="M40 24C40 24 44 22 48 24"
      stroke="url(#grad2)"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1.1 }}
    />
  </svg>
);

const IconMicroscope = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#43E97B" />
        <stop offset="100%" stopColor="#38F9D7" />
      </linearGradient>
    </defs>
    <motion.circle
      cx="24"
      cy="20"
      r="8"
      stroke="url(#grad3)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1 }}
    />
    <motion.path
      d="M24 28V44"
      stroke="url(#grad3)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    />
    <motion.path
      d="M16 44H32"
      stroke="url(#grad3)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    />
    <motion.path
      d="M40 16H48V32H40"
      stroke="url(#grad3)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    />
    <motion.path
      d="M44 32V48"
      stroke="url(#grad3)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    />
    <motion.rect
      x="36"
      y="48"
      width="16"
      height="4"
      rx="2"
      fill="url(#grad3)"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: 1.2 }}
    />
  </svg>
);

const IconUsers = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FA709A" />
        <stop offset="100%" stopColor="#FEE140" />
      </linearGradient>
    </defs>
    <motion.circle
      cx="32"
      cy="20"
      r="8"
      stroke="url(#grad4)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1 }}
    />
    <motion.path
      d="M16 52V44C16 38 22 36 32 36C42 36 48 38 48 44V52"
      stroke="url(#grad4)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1.2, delay: 0.3 }}
    />
    <motion.circle
      cx="52"
      cy="24"
      r="6"
      stroke="url(#grad4)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    />
    <motion.path
      d="M56 44V40C56 36 52 34 48 34"
      stroke="url(#grad4)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    />
    <motion.circle
      cx="12"
      cy="24"
      r="6"
      stroke="url(#grad4)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    />
    <motion.path
      d="M8 44V40C8 36 12 34 16 34"
      stroke="url(#grad4)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    />
  </svg>
);

const IconBrain = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A18CD1" />
        <stop offset="100%" stopColor="#FBC2EB" />
      </linearGradient>
    </defs>
    <motion.path
      d="M20 32C20 32 16 28 16 24C16 20 20 16 24 16C28 16 32 20 32 24"
      stroke="url(#grad5)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1 }}
    />
    <motion.path
      d="M44 32C44 32 48 28 48 24C48 20 44 16 40 16C36 16 32 20 32 24"
      stroke="url(#grad5)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    />
    <motion.path
      d="M20 32C20 40 24 48 32 48C40 48 44 40 44 32"
      stroke="url(#grad5)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1.2, delay: 0.4 }}
    />
    <motion.circle
      cx="32"
      cy="24"
      r="3"
      fill="url(#grad5)"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: 1.2 }}
    />
    <motion.path
      d="M24 36C24 36 28 40 32 40C36 40 40 36 40 36"
      stroke="url(#grad5)"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
    />
    <motion.path
      d="M28 28L24 32M36 28L40 32"
      stroke="url(#grad5)"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1.3 }}
    />
  </svg>
);

const IconTrophy = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38F9D7" />
        <stop offset="100%" stopColor="#43E97B" />
      </linearGradient>
    </defs>
    <motion.path
      d="M20 12H44V20C44 28 38 32 32 32C26 32 20 28 20 20V12Z"
      stroke="url(#grad6)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1.2 }}
    />
    <motion.path
      d="M20 16H12V20C12 26 16 30 20 30"
      stroke="url(#grad6)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    />
    <motion.path
      d="M44 16H52V20C52 26 48 30 44 30"
      stroke="url(#grad6)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    />
    <motion.path
      d="M32 32V44"
      stroke="url(#grad6)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    />
    <motion.rect
      x="24"
      y="44"
      width="16"
      height="4"
      rx="2"
      fill="url(#grad6)"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: 1.2 }}
    />
    <motion.path
      d="M28 48L26 56H38L36 48"
      stroke="url(#grad6)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 1.3 }}
    />
    <motion.circle
      cx="32"
      cy="22"
      r="3"
      fill="url(#grad6)"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: 1.5 }}
    />
  </svg>
);

const IconGlobe = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const IconLightbulb = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
  </svg>
);

// Animated Counter Component
const AnimatedCounter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView.current) {
          isInView.current = true;
          let start = 0;
          const end = target;
          const duration = 2000;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

// Floating Blob Component
const FloatingBlob = ({ className, delay = 0 }) => (
  <motion.div
    className={`absolute rounded-full mix-blend-multiply filter blur-xl opacity-30 ${className}`}
    animate={{
      x: [0, 30, 0],
      y: [0, -30, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut",
    }}
  />
);

// Decorative Grid Pattern
const GridPattern = () => (
  <div className="absolute inset-0 opacity-[0.03]">
    <svg width="100%" height="100%">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);

export default function Academics() {
  const images = [img1, img2, img3];
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: IconGraduationCap,
      title: "Early Childhood Learning",
      desc: "Activity-based programs fostering creativity and curiosity in young minds through play-based pedagogy.",
      gradient: "from-rose-400 to-orange-300",
      shadow: "shadow-rose-200",
      iconBg: "bg-rose-50",
    },
    {
      icon: IconBookOpen,
      title: "Conceptual Foundation",
      desc: "Building strong subject clarity through smart classrooms, digital aids, and interactive learning modules.",
      gradient: "from-cyan-400 to-blue-400",
      shadow: "shadow-cyan-200",
      iconBg: "bg-cyan-50",
    },
    {
      icon: IconMicroscope,
      title: "Laboratory Excellence",
      desc: "State-of-the-art science, computer, and robotics labs for hands-on experimental learning.",
      gradient: "from-emerald-400 to-teal-400",
      shadow: "shadow-emerald-200",
      iconBg: "bg-emerald-50",
    },
    {
      icon: IconUsers,
      title: "Collaborative Learning",
      desc: "Team-based projects, peer mentoring, and leadership workshops for holistic personality development.",
      gradient: "from-amber-400 to-orange-400",
      shadow: "shadow-amber-200",
      iconBg: "bg-amber-50",
    },
    {
      icon: IconBrain,
      title: "Skill Development",
      desc: "Advanced coding, communication skills, critical thinking, and emotional intelligence programs.",
      gradient: "from-violet-400 to-purple-400",
      shadow: "shadow-violet-200",
      iconBg: "bg-violet-50",
    },
    {
      icon: IconTrophy,
      title: "Board Excellence",
      desc: "Strategic preparation for CBSE boards and competitive examinations with expert faculty guidance.",
      gradient: "from-fuchsia-400 to-pink-400",
      shadow: "shadow-fuchsia-200",
      iconBg: "bg-fuchsia-50",
    },
  ];

  const stats = [
    { value: 98, suffix: "%", label: "Board Success Rate" },
    { value: 25, suffix: "+", label: "Years of Excellence" },
    { value: 50, suffix: "+", label: "Expert Faculty" },
    { value: 15, suffix: ":", label: "Student-Teacher Ratio" },
  ];

  return (
    <div ref={containerRef} className="bg-white overflow-hidden relative">
      <GridPattern />
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <FloatingBlob className="bg-purple-300 w-96 h-96 -top-20 -left-20" delay={0} />
        <FloatingBlob className="bg-blue-300 w-96 h-96 top-40 right-0" delay={2} />
        <FloatingBlob className="bg-pink-300 w-80 h-80 bottom-0 left-1/3" delay={4} />
        
        {/* Glassmorphism Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30" />
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ y, opacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-indigo-100 shadow-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-sm font-medium text-indigo-600">Excellence in Education</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Building{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Strong Foundations
              </span>
              <br />
              <span className="text-slate-600 font-light">From Nursery to Senior Secondary</span>
            </h1>

            <motion.p 
              className="mt-8 text-lg text-slate-600 leading-relaxed max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Academic excellence begins with joyful early childhood education and continues 
              through structured senior secondary programs designed for future leaders.
            </motion.p>

            <motion.div 
              className="mt-10 flex gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl shadow-lg shadow-indigo-200 cursor-pointer"
              >
                <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                  <IconGlobe className="w-5 h-5" />
                </div>
                <span className="font-semibold">CBSE Curriculum</span>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 bg-white text-slate-700 px-8 py-4 rounded-2xl shadow-lg shadow-pink-100 border border-pink-100 cursor-pointer"
              >
                <div className="p-2 bg-pink-50 rounded-lg group-hover:bg-pink-100 transition-colors">
                  <IconLightbulb className="w-5 h-5 text-pink-500" />
                </div>
                <span className="font-semibold">Holistic Development</span>
              </motion.div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              className="mt-12 grid grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {stats.slice(0, 2).map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="text-3xl font-bold text-slate-900">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-slate-500 leading-tight">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE SLIDER */}
          <motion.div 
            className="relative h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl shadow-indigo-200"
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ perspective: 1000 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent z-10" />
            
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                alt="Academics"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Slider Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {images.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-slate-700">Live Campus</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-xs text-slate-400 uppercase tracking-widest">Scroll</span>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-slate-300 flex justify-center pt-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 px-6 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-slate-900" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-32 px-6 relative overflow-hidden bg-slate-50">
        <FloatingBlob className="bg-indigo-200 w-[500px] h-[500px] -top-40 -right-40" delay={1} />
        <FloatingBlob className="bg-purple-200 w-[400px] h-[400px] bottom-0 left-0" delay={3} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Academic{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We combine traditional values with modern pedagogy to create an unmatched learning experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item, i) => {
              const Icon = item.icon;
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl`} />
                  
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden group-hover:shadow-2xl transition-all duration-500 h-full">
                    {/* Animated Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Icon Container */}
                    <motion.div 
                      className={`relative w-20 h-20 ${item.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-10 h-10" />
                      
                      {/* Decorative Ring */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-current opacity-0 group-hover:opacity-20 transition-all duration-500`}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        style={{ color: item.gradient.includes('rose') ? '#f43f5e' : item.gradient.includes('cyan') ? '#06b6d4' : '#10b981' }}
                      />
                    </motion.div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700">
                      {item.desc}
                    </p>

                    {/* Hover Arrow */}
                    <div className="mt-6 flex items-center text-sm font-semibold text-slate-400 group-hover:text-indigo-600 transition-colors">
                      <span>Learn more</span>
                      <motion.svg 
                        className="w-4 h-4 ml-2"
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PREMIUM DIVIDER */}
      <div className="h-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
        </div>
      </div>

      <Curriculum />
    </div>
  );
}