import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/acedemicsimg/1.png";
import img2 from "../assets/acedemicsimg/2.png";
import img3 from "../assets/acedemicsimg/3.png";

// Lucide-style premium icons
const IconGraduationCap = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const IconBookOpen = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const IconMicroscope = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 18h8" />
    <path d="M3 22h18" />
    <path d="M14 22a7 7 0 1 0 0-14h-1" />
    <path d="M9 14h2" />
    <path d="M9 12a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
  </svg>
);

const IconUsers = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconBrain = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
);

const IconTrophy = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

const IconTarget = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const IconSchool = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m4 6 8-4 8 4" />
    <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
    <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
    <path d="M18 5v17" />
    <path d="M6 5v17" />
    <circle cx="12" cy="9" r="2" />
  </svg>
);

const IconClock = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconCheck = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconStar = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const IconShield = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const IconHeart = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const IconAward = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

export default function Academics() {
  const images = [img1, img2, img3];
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check for mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slide interval
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  const features = [
    {
      icon: IconGraduationCap,
      title: "Early Childhood Education",
      desc: "Play-based learning for Nursery to UKG with focus on motor skills and social development.",
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50",
    },
    {
      icon: IconBookOpen,
      title: "Primary Education",
      desc: "Strong foundation in core subjects for Classes 1-5 with emphasis on reading and writing skills.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: IconMicroscope,
      title: "Middle School",
      desc: "Practical learning for Classes 6-8 with science labs and critical thinking development.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
    },
    {
      icon: IconBrain,
      title: "Secondary School",
      desc: "CBSE board preparation for Classes 9-10 with career guidance and comprehensive study material.",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50",
    },
    {
      icon: IconUsers,
      title: "Qualified Teachers",
      desc: "Experienced faculty dedicated to understanding every student's learning needs.",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
    },
    {
      icon: IconTrophy,
      title: "Excellent Results",
      desc: "Consistent academic performance with students achieving top marks in board examinations.",
      color: "from-fuchsia-500 to-pink-500",
      bgColor: "bg-fuchsia-50",
    },
  ];

  const learningPathways = [
    {
      stage: "Pre-Primary",
      classes: "Nursery - UKG",
      age: "3-6 Years",
      color: "from-rose-500 to-pink-500",
      features: ["Play Way Learning", "Motor Skills Development", "Rhymes & Stories", "Creative Activities", "Social Skills"],
      icon: IconSchool,
      ratio: "1:15",
    },
    {
      stage: "Primary",
      classes: "Class 1 - 5",
      age: "6-11 Years",
      color: "from-blue-500 to-cyan-500",
      features: ["Reading & Writing", "Mathematics", "Environmental Studies", "Moral Education", "Art & Craft"],
      icon: IconBookOpen,
      ratio: "1:25",
    },
    {
      stage: "Middle School",
      classes: "Class 6 - 8",
      age: "11-14 Years",
      color: "from-emerald-500 to-teal-500",
      features: ["Science Labs", "Mathematics Lab", "Computer Education", "Social Studies", "Languages"],
      icon: IconMicroscope,
      ratio: "1:30",
    },
    {
      stage: "Secondary",
      classes: "Class 9 - 10",
      age: "14-16 Years",
      color: "from-violet-500 to-purple-500",
      features: ["CBSE Curriculum", "Board Preparation", "Career Counselling", "Practical Exams", "Test Series"],
      icon: IconTarget,
      ratio: "1:35",
    },
  ];

  // Premium Why Choose Us Data - Removed fancy words like NEP
  const trustFeatures = [
    {
      icon: IconGraduationCap,
      title: "Early Childhood Excellence",
      subtitle: "Foundation Years",
      description: "Our play-based approach nurtures young minds through proven teaching methods, fostering creativity, motor skills, and social development in a safe, stimulating environment.",
      stats: [
        { value: "1:15", label: "Teacher Ratio" },
        { value: "100%", label: "Safety" }
      ],
      tags: ["Play-Based", "Activity Learning", "Safe Environment"],
      gradient: "from-rose-500 via-pink-500 to-rose-400",
      bgGradient: "from-rose-50/80 via-pink-50/60 to-white",
      iconBg: "bg-gradient-to-br from-rose-500 to-pink-600",
      featured: true
    },
    {
      icon: IconBookOpen,
      title: "Primary Education",
      subtitle: "Building Foundations",
      description: "Strong emphasis on reading, writing, and conceptual clarity with smart classrooms and activity-based learning methodologies.",
      stats: [
        { value: "1:25", label: "Teacher Ratio" },
        { value: "Smart", label: "Classes" }
      ],
      tags: ["Smart Classes", "Activity Based"],
      gradient: "from-blue-500 via-cyan-500 to-blue-400",
      bgGradient: "from-blue-50/80 via-cyan-50/60 to-white",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-600",
      featured: false
    },
    {
      icon: IconMicroscope,
      title: "Middle School",
      subtitle: "Exploration Phase",
      description: "Practical learning with science labs, coding classes, and STEM education fostering critical thinking.",
      stats: [
        { value: "STEM", label: "Curriculum" },
        { value: "5+", label: "Labs" }
      ],
      tags: ["STEM", "Labs", "Coding"],
      gradient: "from-emerald-500 via-teal-500 to-emerald-400",
      bgGradient: "from-emerald-50/80 via-teal-50/60 to-white",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
      featured: false
    },
    {
      icon: IconBrain,
      title: "Secondary Excellence",
      subtitle: "Board Preparation",
      description: "Comprehensive CBSE board preparation with career counseling, extensive test series, and personalized mentorship programs.",
      stats: [
        { value: "100%", label: "Pass Rate" },
        { value: "A+", label: "Results" }
      ],
      tags: ["CBSE", "Career Guidance", "Tests"],
      gradient: "from-violet-500 via-purple-500 to-violet-400",
      bgGradient: "from-violet-50/80 via-purple-50/60 to-white",
      iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
      featured: false
    },
    {
      icon: IconUsers,
      title: "Expert Faculty",
      subtitle: "Dedicated Mentors",
      description: "Our experienced teachers provide personalized attention, understanding each student's unique learning style for holistic development.",
      stats: [
        { value: "25+", label: "Teachers" },
        { value: "5+", label: "Years Avg Exp" }
      ],
      tags: ["Experienced", "Mentorship"],
      gradient: "from-amber-500 via-orange-500 to-amber-400",
      bgGradient: "from-amber-50/80 via-orange-50/60 to-white",
      iconBg: "bg-gradient-to-br from-amber-500 to-orange-600",
      featured: true
    },
    {
      icon: IconTrophy,
      title: "Proven Excellence",
      subtitle: "Outstanding Results",
      description: "Consistent academic excellence with students achieving top ranks in CBSE examinations year after year.",
      stats: [
        { value: "100%", label: "Board Pass" },
        { value: "95%+", label: "First Division" }
      ],
      tags: ["Excellence", "Toppers"],
      gradient: "from-fuchsia-500 via-pink-500 to-fuchsia-400",
      bgGradient: "from-fuchsia-50/80 via-pink-50/60 to-white",
      iconBg: "bg-gradient-to-br from-fuchsia-500 to-pink-600",
      featured: false
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      
      {/* PREMIUM HERO SECTION - Fully Responsive with Zoom Effect */}
      <section className="relative min-h-[600px] md:min-h-screen flex items-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/50" />
        
        {/* Decorative Elements - Hidden on small mobile */}
        <div className="hidden md:block absolute top-20 right-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="hidden md:block absolute bottom-20 left-20 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 lg:order-1 text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm mb-4 sm:mb-6"
              >
                <IconStar className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">Excellence in Education</span>
              </motion.div>

              {/* Main Heading - Responsive sizes */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight mb-4 sm:mb-6">
                Building{" "}
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  Bright Futures
                </span>
                <br />
                <span className="text-slate-600 font-light text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                  Nursery to Class 10th
                </span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8">
                Providing quality education with modern facilities and experienced teachers. 
                Focus on academic excellence and character development.
              </p>

              {/* Stats Row - Responsive */}
              <motion.div 
                className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {[
                  { icon: IconSchool, label: "Nursery - 10th", sublabel: "All Classes" },
                  { icon: IconClock, label: "8AM - 2:30PM", sublabel: "School Hours" },
                  { icon: IconUsers, label: "1:25 Ratio", sublabel: "Teacher-Student" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3 bg-white px-2.5 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl border border-slate-200 shadow-sm">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                    <div className="text-left">
                      <p className="text-slate-900 font-semibold text-xs sm:text-sm">{item.label}</p>
                      <p className="text-slate-500 text-[10px] sm:text-xs hidden sm:block">{item.sublabel}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons - Responsive */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <button className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-lg sm:rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl transition-all hover:-translate-y-0.5 text-sm sm:text-base">
                  Explore Classes
                </button>
                <button className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white text-slate-700 font-semibold rounded-lg sm:rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50 transition-all text-sm sm:text-base">
                  Contact Us
                </button>
              </motion.div>
            </motion.div>

            {/* RIGHT - Image Slider with Zoom Effect - FULLY RESPONSIVE */}
            <motion.div 
              className="order-1 lg:order-2 relative w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Main Image Container */}
              <div className="relative w-full mx-auto max-w-[95%] sm:max-w-[90%] md:max-w-full">
                {/* Background Decorative Shape */}
                <div className="absolute -inset-1.5 sm:-inset-2 md:-inset-3 lg:-inset-4 bg-gradient-to-br from-blue-100 to-rose-100 rounded-2xl sm:rounded-3xl lg:rounded-[2rem] transform rotate-1 sm:rotate-2 md:rotate-3 opacity-60" />
                
                {/* Main Image Frame with Slider - RESPONSIVE ASPECT RATIO */}
                <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl shadow-slate-200/50 border-2 sm:border-4 border-white">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[4/3] overflow-hidden"
                    >
                      {/* Zoom In/Out Effect - Responsive for all screens */}
                      <motion.img
                        src={images[index]}
                        alt={`School Campus ${index + 1}`}
                        initial={{ scale: 1 }}
                        animate={{ 
                          scale: [1, isMobile ? 1.08 : 1.12, 1],
                        }}
                        transition={{ 
                          duration: 6,
                          ease: "easeInOut",
                          times: [0, 0.5, 1]
                        }}
                        className="w-full h-full object-cover object-center"
                      />
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                  
                  {/* Slider Dots - Responsive sizing */}
                  <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                          i === index ? "w-4 sm:w-6 md:w-8 bg-white" : "w-1.5 sm:w-2 bg-white/50 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating Card - Stats - RESPONSIVE POSITIONING */}
                <motion.div
                  className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 md:-bottom-6 md:-left-6 bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 shadow-lg sm:shadow-xl border border-slate-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg">
                      <IconTrophy className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900">5+</p>
                      <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 font-medium">Years Excellence</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Card - Students - RESPONSIVE POSITIONING */}
                <motion.div
                  className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 md:-top-4 md:-right-4 bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 shadow-lg sm:shadow-xl border border-slate-100"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                
                </motion.div>

                {/* Decorative Dots - Hidden on mobile */}
                <div className="hidden lg:flex absolute -right-4 xl:-right-8 top-1/4 flex-col gap-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-blue-300/50" />
                  ))}
                </div>
                <div className="hidden lg:flex absolute -left-4 xl:-left-8 bottom-1/4 flex-col gap-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-rose-300/50" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CLASSES SECTION - Premium Cards - RESPONSIVE */}
      <section className="py-10 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Complete Education
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
              Classes We Offer
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto px-4">
              From early childhood to secondary education, we provide quality learning at every stage
            </p>
          </motion.div>

          {/* 4 Premium Cards - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {learningPathways.map((pathway, i) => {
              const Icon = pathway.icon;
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-slate-100"
                >
                  {/* Top Gradient Bar */}
                  <div className={`h-1.5 sm:h-2 bg-gradient-to-r ${pathway.color}`} />
                  
                  <div className="p-4 sm:p-5 lg:p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div className={`p-2 sm:p-2.5 lg:p-3 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-br ${pathway.color} text-white shadow-md sm:shadow-lg`}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                        {pathway.ratio} Ratio
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-0.5 sm:mb-1">{pathway.stage}</h3>
                    <p className="text-blue-600 font-semibold text-xs sm:text-sm mb-2 sm:mb-3">{pathway.classes}</p>
                    
                    <div className="flex items-center gap-2 mb-3 sm:mb-4 text-slate-500 text-xs sm:text-sm">
                      <IconClock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>Age: {pathway.age}</span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-1.5 sm:space-y-2">
                      {pathway.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                          <IconCheck className={`w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 bg-gradient-to-r ${pathway.color} rounded-full p-0.5 text-white`} />
                          <span className="truncate">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY PARENTS TRUST US - Ultra Premium Light Design - RESPONSIVE */}
      <section className="relative py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Premium Light Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59 130 246) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Floating Gradient Orbs - Responsive sizes */}
        <div className="absolute top-0 left-1/4 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-gradient-to-br from-blue-200/30 to-violet-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[250px] sm:w-[350px] md:w-[450px] lg:w-[600px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] bg-gradient-to-br from-rose-200/20 to-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] lg:w-[800px] h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px] bg-gradient-to-br from-emerald-100/20 to-cyan-100/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto">
          
          {/* Section Header - Responsive */}
          <motion.div 
            className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full bg-white border border-slate-200 shadow-md sm:shadow-lg shadow-slate-200/50 mb-4 sm:mb-6"
            >
              <IconStar className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
              <span className="text-xs sm:text-sm font-semibold text-slate-700 tracking-wide uppercase">Excellence Defined</span>
              <IconStar className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
            </motion.div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-3 sm:mb-4 lg:mb-6 tracking-tight">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600">Parents</span> Trust Us
            </h2>
            
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-light px-4">
              Discover what sets us apart in nurturing the next generation of leaders, thinkers, and innovators through our comprehensive educational approach
            </p>
          </motion.div>

          {/* Premium Bento Grid Layout - RESPONSIVE */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
            
            {/* Featured Card 1 - Large */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="lg:col-span-7 group"
            >
              <div className="relative h-full overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white border border-slate-200 shadow-lg sm:shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-200/30 transition-all duration-500">
                {/* Top Gradient Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r ${trustFeatures[0].gradient}`} />
                
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${trustFeatures[0].bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative p-4 sm:p-6 lg:p-8 xl:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-3 sm:gap-4 lg:gap-6">
                    {/* Icon */}
                    <div className={`p-2.5 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl lg:rounded-2xl ${trustFeatures[0].iconBg} shadow-md sm:shadow-lg shadow-rose-500/20 shrink-0 group-hover:scale-110 transition-transform duration-500 w-fit`}>
                      <IconGraduationCap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                        {trustFeatures[0].tags.map((tag, idx) => (
                          <span key={idx} className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-semibold border border-rose-100">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-slate-900 mb-1 sm:mb-2 group-hover:text-rose-600 transition-colors">
                        {trustFeatures[0].title}
                      </h3>
                      <p className="text-rose-600 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{trustFeatures[0].subtitle}</p>
                      
                      <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">
                        {trustFeatures[0].description}
                      </p>
                      
                      {/* Stats */}
                      <div className="flex gap-3 sm:gap-4 lg:gap-6">
                        {trustFeatures[0].stats.map((stat, idx) => (
                          <div key={idx} className="flex items-center gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg sm:rounded-xl bg-rose-50 flex items-center justify-center">
                              <span className="text-sm sm:text-base lg:text-lg font-bold text-rose-600">{stat.value}</span>
                            </div>
                            <span className="text-xs sm:text-sm text-slate-500 font-medium">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats Card - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="lg:col-span-5 group"
            >
              <div className="relative h-full overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-br from-blue-600 to-violet-600 shadow-lg sm:shadow-xl shadow-blue-500/20 p-4 sm:p-6 lg:p-8">
                {/* Pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '24px 24px'
                }} />
                
                <div className="relative">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-sm">
                      <IconAward className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <span className="text-white/80 font-medium text-sm sm:text-base">Academic Excellence</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-5 border border-white/10">
                      <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-0.5 sm:mb-1">100%</div>
                      <div className="text-blue-100 text-xs sm:text-sm">Board Pass Rate</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-5 border border-white/10">
                      <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-0.5 sm:mb-1">95%+</div>
                      <div className="text-blue-100 text-xs sm:text-sm">First Division</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-5 border border-white/10">
                      <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-0.5 sm:mb-1">A+</div>
                      <div className="text-blue-100 text-xs sm:text-sm">Average Grade</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-5 border border-white/10">
                      <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-0.5 sm:mb-1">25+</div>
                      <div className="text-blue-100 text-xs sm:text-sm">Expert Teachers</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Regular Cards Row */}
            {trustFeatures.slice(1, 4).map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="lg:col-span-4 group"
              >
                <div className="relative h-full overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white border border-slate-200 shadow-md sm:shadow-lg shadow-slate-200/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500">
                  {/* Top Gradient Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient}`} />
                  
                  {/* Hover Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative p-4 sm:p-5 lg:p-6 xl:p-8">
                    {/* Icon */}
                    <div className={`p-2 sm:p-2.5 lg:p-3 rounded-lg sm:rounded-xl ${feature.iconBg} shadow-md sm:shadow-lg w-fit mb-3 sm:mb-4 lg:mb-5 group-hover:scale-110 transition-transform duration-500`}>
                      <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                      {feature.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 sm:px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium mb-2 sm:mb-3">{feature.subtitle}</p>
                    
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 lg:mb-5">
                      {feature.description}
                    </p>
                    
                    {/* Mini Stats */}
                    <div className="flex gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-slate-100">
                      {feature.stats.map((stat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 sm:gap-2">
                          <span className="text-sm sm:text-base lg:text-lg font-bold text-slate-900">{stat.value}</span>
                          <span className="text-xs text-slate-500">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Featured Card 2 - Faculty (Large) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="lg:col-span-7 group"
            >
              <div className="relative h-full overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white border border-slate-200 shadow-lg sm:shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-amber-200/30 transition-all duration-500">
                {/* Top Gradient Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r ${trustFeatures[4].gradient}`} />
                
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${trustFeatures[4].bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative p-4 sm:p-6 lg:p-8 xl:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-3 sm:gap-4 lg:gap-6">
                    {/* Content */}
                    <div className="flex-1 order-2 lg:order-1">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                        {trustFeatures[4].tags.map((tag, idx) => (
                          <span key={idx} className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-semibold border border-amber-100">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-slate-900 mb-1 sm:mb-2 group-hover:text-amber-600 transition-colors">
                        {trustFeatures[4].title}
                      </h3>
                      <p className="text-amber-600 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{trustFeatures[4].subtitle}</p>
                      
                      <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">
                        {trustFeatures[4].description}
                      </p>
                      
                      {/* Stats Row */}
                      <div className="flex gap-3 sm:gap-4 lg:gap-6">
                        {trustFeatures[4].stats.map((stat, idx) => (
                          <div key={idx} className="flex items-center gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-amber-50 flex items-center justify-center border border-amber-100">
                              <span className="text-base sm:text-lg lg:text-xl font-bold text-amber-600">{stat.value}</span>
                            </div>
                            <span className="text-xs sm:text-sm text-slate-500 font-medium">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className={`p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl ${trustFeatures[4].iconBg} shadow-md sm:shadow-lg shadow-amber-500/20 shrink-0 order-1 lg:order-2 group-hover:scale-110 transition-transform duration-500 w-fit`}>
                      <IconUsers className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Excellence Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="lg:col-span-5 group"
            >
              <div className="relative h-full overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-br from-fuchsia-50 to-pink-50 border border-fuchsia-100 shadow-md sm:shadow-lg shadow-fuchsia-100/50 hover:shadow-xl transition-all duration-500">
                <div className="p-4 sm:p-6 lg:p-8 xl:p-10 h-full flex flex-col justify-between">
                  <div>
                    <div className={`p-2.5 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl ${trustFeatures[5].iconBg} shadow-md sm:shadow-lg shadow-fuchsia-500/20 w-fit mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <IconTrophy className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-1 sm:mb-2 group-hover:text-fuchsia-600 transition-colors">
                      {trustFeatures[5].title}
                    </h3>
                    <p className="text-fuchsia-600 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{trustFeatures[5].subtitle}</p>
                    
                    <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                      {trustFeatures[5].description}
                    </p>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex gap-2 sm:gap-3 lg:gap-4">
                    {trustFeatures[5].stats.map((stat, idx) => (
                      <div key={idx} className="flex-1 bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-2.5 sm:p-3 lg:p-4 text-center shadow-sm border border-fuchsia-100">
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-fuchsia-600 mb-0.5 sm:mb-1">{stat.value}</div>
                        <div className="text-xs text-slate-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom Trust Indicators - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 sm:mt-12 lg:mt-16 xl:mt-20"
          >
            <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl border border-slate-200 shadow-lg sm:shadow-xl shadow-slate-200/30 p-4 sm:p-6 lg:p-8 xl:p-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8">
                {[
                  { icon: IconShield, title: "Safe Environment", desc: "24/7 Security & CCTV", color: "text-emerald-600", bg: "bg-emerald-50" },
                  { icon: IconHeart, title: "Holistic Care", desc: "Emotional & Physical", color: "text-rose-600", bg: "bg-rose-50" },
                  { icon: IconStar, title: "Quality Education", desc: "CBSE Curriculum", color: "text-amber-600", bg: "bg-amber-50" },
                  { icon: IconCheck, title: "Proven Results", desc: "Consistent Excellence", color: "text-blue-600", bg: "bg-blue-50" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                    <div className={`p-2 sm:p-2.5 lg:p-3 rounded-lg sm:rounded-xl lg:rounded-2xl ${item.bg} ${item.color}`}>
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm lg:text-base">{item.title}</h4>
                      <p className="text-slate-500 text-[10px] sm:text-xs lg:text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}