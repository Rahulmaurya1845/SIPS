import {
  Award,
  Smartphone,
  Globe,
  Lock,
  Heart,
  Zap,
  Users,
  Star,
  GraduationCap,
  Clock,
  Shield,
  Sparkles,
  BookOpen,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Play,
  CalendarCheck,
  FileText,
  Bell,
  MessageSquare,
  BarChart3,
  Fingerprint,
  MapPin, 
  Phone, 
  Mail,
  ChevronRight,
  Target,
  Lightbulb,
  HeartHandshake,
  Trophy,
  BadgeCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

// ========== DECORATIVE SVG COMPONENTS ==========
const FloatingShape = ({ className, color }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="40" stroke={color} strokeWidth="0.5" strokeDasharray="4 4" opacity="0.2" />
    <circle cx="50" cy="50" r="30" stroke={color} strokeWidth="0.5" opacity="0.15" />
    <circle cx="50" cy="50" r="20" fill={color} opacity="0.05" />
  </svg>
);

const Hexagon = ({ className, color }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" stroke={color} strokeWidth="1" fill={color} opacity="0.08" />
  </svg>
);

const StarBurst = ({ className, color }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <path d="M50 0L61 39L100 50L61 61L50 100L39 61L0 50L39 39L50 0Z" fill={color} opacity="0.1" />
  </svg>
);

const DiamondShape = ({ className, color }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <rect x="20" y="20" width="60" height="60" transform="rotate(45 50 50)" stroke={color} strokeWidth="1" fill={color} opacity="0.08" />
  </svg>
);

const WavePattern = ({ className, color }) => (
  <svg className={className} viewBox="0 0 200 50" fill="none" preserveAspectRatio="none">
    <path d="M0 25 Q50 0 100 25 T200 25" stroke={color} strokeWidth="1" opacity="0.15" fill="none"/>
    <path d="M0 35 Q50 10 100 35 T200 35" stroke={color} strokeWidth="1" opacity="0.1" fill="none"/>
  </svg>
);

const SmartSchoolApp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const ctaRef = useRef(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  useEffect(() => {
    if (location.hash === '#cta-section' && ctaRef.current) {
      setTimeout(() => {
        ctaRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location]);

  // ========== PREMIUM FEATURES WITH LIGHT THEME ==========
  const features = [
    {
      icon: <CalendarCheck size={36} strokeWidth={1.5} />,
      title: "Smart Attendance",
      desc: "Real-time tracking with instant parent notifications and detailed monthly reports.",
      color: "from-amber-300 via-orange-300 to-rose-300",
      bgColor: "bg-gradient-to-br from-amber-50/80 to-orange-50/80",
      borderColor: "border-amber-200/60",
      iconColor: "text-amber-500",
      shadowColor: "shadow-amber-100",
    },
    {
      icon: <FileText size={36} strokeWidth={1.5} />,
      title: "Digital Homework",
      desc: "Seamless assignment submission, automated grading, and academic progress tracking.",
      color: "from-emerald-300 via-teal-300 to-cyan-300",
      bgColor: "bg-gradient-to-br from-emerald-50/80 to-teal-50/80",
      borderColor: "border-emerald-200/60",
      iconColor: "text-emerald-500",
      shadowColor: "shadow-emerald-100",
    },
    {
      icon: <Bell size={36} strokeWidth={1.5} />,
      title: "Instant Alerts",
      desc: "Emergency notifications and important school announcements delivered instantly.",
      color: "from-rose-300 via-pink-300 to-fuchsia-300",
      bgColor: "bg-gradient-to-br from-rose-50/80 to-pink-50/80",
      borderColor: "border-rose-200/60",
      iconColor: "text-rose-500",
      shadowColor: "shadow-rose-100",
    },
    {
      icon: <MessageSquare size={36} strokeWidth={1.5} />,
      title: "Direct Connect",
      desc: "Secure encrypted messaging channel between parents and teachers.",
      color: "from-violet-300 via-purple-300 to-indigo-300",
      bgColor: "bg-gradient-to-br from-violet-50/80 to-purple-50/80",
      borderColor: "border-violet-200/60",
      iconColor: "text-violet-500",
      shadowColor: "shadow-violet-100",
    },
    {
      icon: <BarChart3 size={36} strokeWidth={1.5} />,
      title: "Academic Insights",
      desc: "Comprehensive analytics dashboard with personalized learning recommendations.",
      color: "from-cyan-300 via-sky-300 to-blue-300",
      bgColor: "bg-gradient-to-br from-cyan-50/80 to-sky-50/80",
      borderColor: "border-cyan-200/60",
      iconColor: "text-cyan-500",
      shadowColor: "shadow-cyan-100",
    },
    {
      icon: <Fingerprint size={36} strokeWidth={1.5} />,
      title: "Maximum Security",
      desc: "Bank-grade encryption protecting all student data and communications.",
      color: "from-indigo-300 via-blue-300 to-slate-300",
      bgColor: "bg-gradient-to-br from-indigo-50/80 to-blue-50/80",
      borderColor: "border-indigo-200/60",
      iconColor: "text-indigo-500",
      shadowColor: "shadow-indigo-100",
    },
  ];

  // ========== UPDATED STATS - 5+ YEARS ==========
  const stats = [
    { 
      icon: <Users size={26} />, 
      value: "1000+", 
      label: "Students Enrolled", 
      color: "from-amber-300 to-orange-400",
      bgGlow: "bg-amber-100",
      description: "Growing community"
    },
    { 
      icon: <GraduationCap size={26} />, 
      value: "35+", 
      label: "Expert Faculty", 
      color: "from-emerald-300 to-teal-400",
      bgGlow: "bg-emerald-100",
      description: "Qualified teachers"
    },
    { 
      icon: <Trophy size={26} />, 
      value: "5+", 
      label: "Years Legacy", 
      color: "from-rose-300 to-pink-400",
      bgGlow: "bg-rose-100",
      description: "Excellence journey"
    },
    { 
      icon: <Shield size={26} />, 
      value: "100%", 
      label: "Safe Campus", 
      color: "from-violet-300 to-purple-400",
      bgGlow: "bg-violet-100",
      description: "Secure environment"
    },
  ];

  const highlights = [
    "Real-time Updates",
    "Secure Platform", 
    "24/7 Support",
    "Easy to Use",
    "Mobile Ready",
    "Cloud Based"
  ];

  const trustBadges = [
    { icon: <BadgeCheck size={16} />, text: "ISO Certified" },
    { icon: <Shield size={16} />, text: "Data Protected" },
    { icon: <Star size={16} />, text: "Top Rated" },
  ];

  const handleAdmissionClick = () => navigate('/admissions', { state: { fromCta: true } });
  const handleContactClick = () => navigate('/contact', { state: { fromCta: true } });
  const handleGalleryClick = () => navigate('/gallery', { state: { fromCta: true } });

  // ========== ENHANCED ANIMATION VARIANTS ==========
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } 
    }
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  const staggerContainer = {
    hidden: {},
    visible: { 
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.05 
      } 
    }
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      
      {/* ========== PREMIUM BACKGROUND ELEMENTS ========== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft gradient orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-40 right-10 w-80 h-80 bg-gradient-to-br from-violet-200/30 to-purple-200/30 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.35, 0.2]
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 4 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-emerald-100/20 to-teal-100/20 rounded-full blur-3xl" 
        />

        {/* Decorative shapes */}
        <FloatingShape className="absolute top-32 left-[10%] w-24 h-24" color="#fbbf24" />
        <Hexagon className="absolute top-48 right-[15%] w-20 h-20" color="#a78bfa" />
        <StarBurst className="absolute bottom-60 left-[20%] w-16 h-16" color="#f472b6" />
        <DiamondShape className="absolute top-1/3 right-[8%] w-14 h-14" color="#34d399" />
        
        {/* Wave patterns */}
        <WavePattern className="absolute bottom-0 left-0 w-full h-20" color="#e2e8f0" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========== PREMIUM BADGE WITH TRUST INDICATORS ========== */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={fadeInUp} 
          className="flex flex-col items-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200/60 shadow-lg shadow-slate-200/30 hover:shadow-xl transition-shadow duration-300">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="p-1.5 rounded-full bg-gradient-to-r from-amber-300 to-orange-300"
            >
              <Sparkles size={16} className="text-white" />
            </motion.div>
            <span className="text-sm font-semibold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent tracking-wider uppercase">
              Premium Education Platform
            </span>
            <Star size={12} className="text-amber-400 fill-amber-400" />
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {trustBadges.map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.3 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-slate-200/50 shadow-sm"
              >
                <span className="text-slate-500">{badge.icon}</span>
                <span className="text-xs font-medium text-slate-600">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ========== ENHANCED MAIN HEADING ========== */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={fadeInUp} 
          className="text-center mb-10"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-slate-700 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Smart School
            </span>
            <span className="block sm:inline bg-gradient-to-r from-violet-500 via-purple-500 to-rose-400 bg-clip-text text-transparent">
              {" "}App
            </span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-slate-500 leading-relaxed font-normal mb-8">
            Revolutionizing education through seamless connection between 
            <span className="text-indigo-500 font-medium"> parents</span>, 
            <span className="text-purple-500 font-medium"> teachers</span>, and 
            <span className="text-rose-500 font-medium"> students</span>.
          </p>

          {/* Enhanced highlight pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-3xl mx-auto">
            {highlights.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.8, y: 10 }} 
                whileInView={{ opacity: 1, scale: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: idx * 0.08, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-md shadow-slate-200/30 hover:shadow-lg hover:border-slate-300/60 transition-all duration-300"
              >
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span className="text-sm font-medium text-slate-600">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ========== ENHANCED STATS SECTION ========== */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={staggerContainer} 
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-24 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp} 
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3, type: "spring", stiffness: 300 } 
              }}
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl shadow-slate-200/40 border border-slate-100 overflow-hidden"
            >
              {/* Top gradient line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} opacity-80`} />
              
              {/* Background glow on hover */}
              <div className={`absolute -inset-4 ${stat.bgGlow} opacity-0 group-hover:opacity-30 blur-2xl rounded-full transition-opacity duration-500`} />
              
              <div className="relative flex flex-col items-center gap-3">
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className={`p-3.5 rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg shadow-slate-200/50`}
                >
                  <div className="text-white">{stat.icon}</div>
                </motion.div>
                
                <div className="text-center">
                  <div className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {stat.description}
                  </div>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-3 right-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <Star size={16} className="text-slate-400" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ========== PREMIUM FEATURES GRID ========== */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={staggerContainer} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, type: "spring", stiffness: 300 }
              }}
              className={`group relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-lg ${feature.shadowColor}/30 border ${feature.borderColor} overflow-hidden transition-all duration-500 hover:shadow-2xl`}
            >
              {/* Subtle gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />
              
              {/* Icon container with enhanced effects */}
              <div className="relative mb-6">
                <motion.div 
                  animate={hoveredFeature === index ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`relative w-16 h-16 flex items-center justify-center rounded-2xl ${feature.bgColor} shadow-inner`}
                >
                  <div className={`${feature.iconColor} transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  
                  {/* Glow effect */}
                  <motion.div 
                    animate={hoveredFeature === index ? { opacity: 0.3, scale: 1.2 } : { opacity: 0, scale: 1 }}
                    className={`absolute -inset-3 bg-gradient-to-r ${feature.color} blur-xl rounded-full`}
                  />
                </motion.div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center"
                >
                  <CheckCircle2 size={12} className={`${feature.iconColor}`} />
                </motion.div>
              </div>

              <h3 className="text-xl font-bold text-slate-700 mb-3 group-hover:text-slate-900 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm mb-5">
                {feature.desc}
              </p>

              {/* Enhanced learn more link */}
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-400 group-hover:text-slate-600 transition-colors duration-300">
                <span>Explore feature</span>
                <motion.div
                  animate={hoveredFeature === index ? { x: 5 } : { x: 0 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight size={16} />
                </motion.div>
              </div>

              {/* Bottom accent line with animation */}
              <motion.div 
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color}`}
              />
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                <div 
                  className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${feature.color} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`} 
                  style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} 
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ========== ENHANCED CTA SECTION ========== */}
        <div id="cta-section" ref={ctaRef}>
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }} 
            variants={fadeInUp} 
            className="mt-28 text-center"
          >
            
            {/* Section Header */}
            <div className="mb-14">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-6"
              >
                <HeartHandshake size={18} className="text-indigo-500" />
                <span className="text-sm font-medium text-indigo-600">Join Our Community</span>
              </motion.div>

              <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-5">
                Ready to <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">Join Us</span>?
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Take the first step towards excellence. Contact us for admissions or any inquiries.
              </p>
            </div>

            {/* CTA Cards with enhanced styling */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
              
              {/* Admission Enquiry */}
              <motion.div 
                whileHover={{ 
                  y: -12, 
                  transition: { duration: 0.3, type: "spring", stiffness: 300 } 
                }}
                className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-lg shadow-slate-200/40 border border-slate-100 hover:shadow-2xl hover:border-amber-200/60 transition-all duration-500 cursor-pointer relative overflow-hidden"
                onClick={handleAdmissionClick}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center shadow-inner"
                  >
                    <GraduationCap size={32} className="text-amber-500" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-700 mb-3 group-hover:text-amber-600 transition-colors">Admission Enquiry</h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">Start your child's journey with us. Apply for admissions today.</p>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleAdmissionClick(); }}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-300 to-orange-300 text-white font-semibold shadow-lg shadow-amber-200/50 hover:shadow-xl hover:from-amber-400 hover:to-orange-400 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Apply Now</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>

              {/* Contact Us - POPULAR */}
              <motion.div 
                whileHover={{ 
                  y: -12, 
                  transition: { duration: 0.3, type: "spring", stiffness: 300 } 
                }}
                className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl shadow-indigo-100/50 border-2 border-indigo-200/60 hover:shadow-2xl transition-all duration-500 relative overflow-hidden cursor-pointer"
                onClick={handleContactClick}
              >
                {/* Popular badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400 text-white text-xs font-bold shadow-md">
                  POPULAR
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-violet-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: -5 }}
                    className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center shadow-inner"
                  >
                    <MessageSquare size={32} className="text-indigo-500" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-700 mb-3 group-hover:text-indigo-600 transition-colors">Contact Us</h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">Have questions? Reach out to us for any inquiries or support.</p>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleContactClick(); }}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-400 to-violet-400 text-white font-semibold shadow-lg shadow-indigo-200/50 hover:shadow-xl hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Get in Touch</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>

              {/* Visit Campus */}
              <motion.div 
                whileHover={{ 
                  y: -12, 
                  transition: { duration: 0.3, type: "spring", stiffness: 300 } 
                }}
                className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-lg shadow-slate-200/40 border border-slate-100 hover:shadow-2xl hover:border-emerald-200/60 transition-all duration-500 cursor-pointer relative overflow-hidden"
                onClick={handleGalleryClick}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center shadow-inner"
                  >
                    <MapPin size={32} className="text-emerald-500" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-700 mb-3 group-hover:text-emerald-600 transition-colors">Visit Campus</h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">Experience our world-class facilities. Schedule a campus tour.</p>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleGalleryClick(); }}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-300 to-teal-300 text-white font-semibold shadow-lg shadow-emerald-200/50 hover:shadow-xl hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Book Tour</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Enhanced Contact Info Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center gap-4"
            >
              {[
                { icon: <Phone size={18} />, text: "+91 98765 43210", color: "blue", bg: "bg-blue-50", textCol: "text-blue-600" },
                { icon: <Mail size={18} />, text: "info@sahodaraschool.edu", color: "rose", bg: "bg-rose-50", textCol: "text-rose-600" },
                { icon: <Clock size={18} />, text: "Mon-Sat: 8AM - 4PM", color: "amber", bg: "bg-amber-50", textCol: "text-amber-600" },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`flex items-center gap-3 px-5 py-3 rounded-full bg-white/90 backdrop-blur-sm shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300`}
                >
                  <div className={`p-2 rounded-full ${item.bg}`}>
                    <span className={item.textCol}>{item.icon}</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-600">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SmartSchoolApp;