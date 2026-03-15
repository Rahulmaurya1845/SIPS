import {
  Sparkles,
  CalendarCheck,
  FileText,
  Bell,
  MessageSquare,
  GraduationCap,
  BookOpen,
  Users,
  Shield,
  Zap,
  Star,
  Heart,
  Award,
  Clock,
  Smartphone,
  Globe,
  Lock,
  TrendingUp,
  Diamond,
  Crown,
  Gem,
} from "lucide-react";
import {
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

// SVG Icon Components
const AttendanceIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
    <path d="m9 16 2 2 4-4"></path>
  </svg>
);

const HomeworkIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <line x1="10" y1="9" x2="8" y2="9"></line>
  </svg>
);

const BellIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
  </svg>
);

const MessageIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const AcademicIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
  </svg>
);

const SecurityIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const SmartSchoolApp = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const features = [
    {
      icon: <AttendanceIcon className="w-7 h-7" />,
      title: "Daily Attendance",
      desc: "Real-time attendance alerts sent directly to parents with instant notifications.",
      gradient: "from-amber-300 via-orange-300 to-rose-300",
      shadow: "shadow-amber-200",
      iconBg: "bg-gradient-to-br from-amber-100 to-orange-100",
      iconColor: "text-amber-500",
    },
    {
      icon: <HomeworkIcon className="w-7 h-7" />,
      title: "Homework & Results",
      desc: "Assignments, grades & academic reports accessible anytime, anywhere.",
      gradient: "from-emerald-300 via-teal-300 to-cyan-300",
      shadow: "shadow-emerald-200",
      iconBg: "bg-gradient-to-br from-emerald-100 to-teal-100",
      iconColor: "text-emerald-500",
    },
    {
      icon: <BellIcon className="w-7 h-7" />,
      title: "Instant Updates",
      desc: "Emergency alerts & school announcements delivered instantly to your device.",
      gradient: "from-rose-300 via-pink-300 to-fuchsia-300",
      shadow: "shadow-rose-200",
      iconBg: "bg-gradient-to-br from-rose-100 to-pink-100",
      iconColor: "text-rose-500",
    },
    {
      icon: <MessageIcon className="w-7 h-7" />,
      title: "Direct Messaging",
      desc: "Secure parent-teacher communication channel with end-to-end encryption.",
      gradient: "from-violet-300 via-purple-300 to-indigo-300",
      shadow: "shadow-violet-200",
      iconBg: "bg-gradient-to-br from-violet-100 to-purple-100",
      iconColor: "text-violet-500",
    },
    {
      icon: <AcademicIcon className="w-7 h-7" />,
      title: "Academic Progress",
      desc: "Track your child's learning journey with detailed analytics and insights.",
      gradient: "from-cyan-300 via-sky-300 to-blue-300",
      shadow: "shadow-cyan-200",
      iconBg: "bg-gradient-to-br from-cyan-100 to-sky-100",
      iconColor: "text-cyan-500",
    },
    {
      icon: <SecurityIcon className="w-7 h-7" />,
      title: "Safety First",
      desc: "Advanced security protocols ensuring your child's data remains protected.",
      gradient: "from-indigo-300 via-blue-300 to-slate-300",
      shadow: "shadow-indigo-200",
      iconBg: "bg-gradient-to-br from-indigo-100 to-blue-100",
      iconColor: "text-indigo-500",
    },
  ];

  const stats = [
    { icon: <Users size={22} />, value: "50K+", label: "Active Parents", color: "text-amber-500" },
    { icon: <BookOpen size={22} />, value: "200+", label: "Schools", color: "text-emerald-500" },
    { icon: <Star size={22} />, value: "4.9", label: "App Rating", color: "text-rose-500" },
    { icon: <Zap size={22} />, value: "99.9%", label: "Uptime", color: "text-violet-500" },
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 md:py-40 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-800"
    >
      {/* Advanced SVG Background - Soft Mesh Gradient */}
      <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mesh1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e0e7ff" />
            <stop offset="50%" stopColor="#fce7f3" />
            <stop offset="100%" stopColor="#fef3c7" />
          </linearGradient>
          <linearGradient id="mesh2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="50%" stopColor="#d1fae5" />
            <stop offset="100%" stopColor="#fce7f3" />
          </linearGradient>
        </defs>
        <ellipse cx="20%" cy="20%" rx="40%" ry="30%" fill="url(#mesh1)" filter="blur(80px)" />
        <ellipse cx="80%" cy="80%" rx="35%" ry="25%" fill="url(#mesh2)" filter="blur(80px)" />
      </svg>

      {/* Advanced Floating Orbs - Soft Pastel */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-20 w-64 h-64"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <radialGradient id="softOrb1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#c7d2fe" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#c7d2fe" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="url(#softOrb1)" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ y: [0, 25, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-10 w-80 h-80"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <radialGradient id="softOrb2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fbcfe8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#fbcfe8" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="90" fill="url(#softOrb2)" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 right-1/4 w-48 h-48"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
          <defs>
            <linearGradient id="softOrb3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a5f3fc" />
              <stop offset="100%" stopColor="#ddd6fe" />
            </linearGradient>
          </defs>
          <polygon points="50,5 95,50 50,95 5,50" fill="url(#softOrb3)" />
        </svg>
      </motion.div>

      {/* Advanced Decorative Stars */}
      <motion.div
        animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-40 right-40"
      >
        <svg width="50" height="50" viewBox="0 0 50 50" className="text-amber-300 drop-shadow-lg">
          <path fill="currentColor" d="M25 0L30 20L50 25L30 30L25 50L20 30L0 25L20 20L25 0Z" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ rotate: [360, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-48 left-32"
      >
        <svg width="35" height="35" viewBox="0 0 35 35" className="text-rose-300 drop-shadow-lg">
          <path fill="currentColor" d="M17.5 0L21 14L35 17.5L21 21L17.5 35L14 21L0 17.5L14 14L17.5 0Z" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-60 left-1/3"
      >
        <svg width="25" height="25" viewBox="0 0 25 25" className="text-violet-300">
          <path fill="currentColor" d="M12.5 0L15 10L25 12.5L15 15L12.5 25L10 15L0 12.5L10 10L12.5 0Z" />
        </svg>
      </motion.div>

      {/* Advanced Dots Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#6366f1" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Advanced Floating Diamonds */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-1/4"
      >
        <Diamond size={24} className="text-cyan-300 opacity-60" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-32 right-1/3"
      >
        <Gem size={20} className="text-amber-300 opacity-50" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -25, 0], rotate: [0, 60, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 right-20"
      >
        <Crown size={22} className="text-rose-300 opacity-40" />
      </motion.div>

      {/* Advanced Wave Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-20 sm:h-28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Advanced Decorative Circles */}
      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-48 left-16">
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-amber-300 to-orange-300 shadow-lg shadow-amber-200" />
      </motion.div>
      <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 6, repeat: Infinity, delay: 1 }} className="absolute top-72 right-24">
        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-rose-300 to-pink-300 shadow-lg shadow-rose-200" />
      </motion.div>
      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity, delay: 2 }} className="absolute bottom-56 left-32">
        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-emerald-300 to-teal-300 shadow-lg shadow-emerald-200" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 text-center">

        {/* Advanced Premium Badge */}
        <motion.div initial="hidden" animate={controls} variants={itemVariants} className="mb-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-white/50 shadow-xl shadow-indigo-100">
            <div className="p-1.5 rounded-full bg-gradient-to-r from-amber-300 to-orange-300">
              <Award size={18} className="text-white" />
            </div>
            <span className="text-sm font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent tracking-widest uppercase">
              Premium Experience
            </span>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
              <Sparkles size={16} className="text-amber-400" />
            </motion.div>
          </div>
        </motion.div>

        {/* Advanced Heading */}
        <motion.div initial="hidden" animate={controls} variants={itemVariants} className="mb-16 sm:mb-20">
          <div className="flex justify-center items-center gap-4 sm:gap-6 mb-8">
            <motion.div animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }}>
              <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 shadow-lg shadow-amber-100">
                <Sparkles className="text-amber-500" size={32} />
              </div>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-slate-800 via-indigo-700 to-violet-700 bg-clip-text text-transparent">
                Smart School
              </span>
              <br className="sm:hidden" />
              <span className="bg-gradient-to-r from-violet-600 to-rose-500 bg-clip-text text-transparent">
                {" "}App
              </span>
            </h2>
            <motion.div animate={{ rotate: [0, -20, 20, 0], scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}>
              <div className="p-3 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 shadow-lg shadow-violet-100">
                <Sparkles className="text-violet-500" size={32} />
              </div>
            </motion.div>
          </div>

          <p className="max-w-3xl mx-auto text-slate-500 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
            A next-generation digital ecosystem connecting parents, teachers,
            and students through intelligent real-time communication and premium features.
          </p>
        </motion.div>

        {/* Advanced Stats */}
        <motion.div initial="hidden" animate={controls} variants={containerVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.05 }}
              className="group relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-lg shadow-slate-100 hover:shadow-xl hover:shadow-indigo-100 transition-all duration-500"
            >
              <div className="flex flex-col items-center gap-3">
                <div className={`p-3 rounded-2xl bg-gradient-to-br from-white to-slate-50 shadow-md ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-semibold uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
              <svg className="absolute top-3 right-3 w-8 h-8 text-slate-100" viewBox="0 0 20 20">
                <path d="M0 0L20 0L20 20" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </motion.div>
          ))}
        </motion.div>

        {/* Advanced Feature Cards */}
        <motion.div initial="hidden" animate={controls} variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative bg-white/80 backdrop-blur-2xl border border-white/70 rounded-3xl p-8 sm:p-10 overflow-hidden transition-all duration-500 hover:shadow-2xl ${card.shadow} hover:border-white`}
            >
              {/* Advanced Card Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
              
              {/* Advanced Icon */}
              <div className="relative mb-6 flex justify-center">
                <div className={`relative w-20 h-20 flex items-center justify-center rounded-3xl ${card.iconBg} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <div className={card.iconColor}>
                    {card.icon}
                  </div>
                  <div className={`absolute -inset-2 bg-gradient-to-r ${card.gradient} opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-opacity duration-500`} />
                </div>
              </div>

              {/* Advanced Content */}
              <h3 className="relative text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-violet-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {card.title}
              </h3>
              <p className="relative text-slate-500 text-sm sm:text-base leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                {card.desc}
              </p>

              {/* Advanced Hover Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent group-hover:w-1/2 transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Advanced CTA */}
        <motion.div initial="hidden" animate={controls} variants={itemVariants} className="mt-20 sm:mt-24">
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 rounded-full font-bold text-white shadow-2xl shadow-indigo-200 cursor-pointer group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center gap-4">
              <div className="p-2 rounded-full bg-white/20">
                <Smartphone size={24} />
              </div>
              <span className="text-lg">Get Premium Access</span>
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <Globe size={22} className="opacity-80" />
              </motion.div>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-400 blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
          </motion.div>

          <div className="mt-10 flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-slate-400">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/60">
              <Lock size={16} className="text-emerald-500" />
              <span className="text-sm font-medium">Bank-Grade Security</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/60">
              <Heart size={16} className="text-rose-500" />
              <span className="text-sm font-medium">Loved by 50K+ Parents</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/60">
              <TrendingUp size={16} className="text-cyan-500" />
              <span className="text-sm font-medium">99.9% Uptime</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Advanced Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-20 sm:h-28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Advanced Corner Decorations */}
      <svg className="absolute top-0 right-0 w-56 h-56 text-indigo-50" viewBox="0 0 200 200">
        <path fill="currentColor" d="M200 0L200 200L0 200C100 200 200 100 200 0Z" />
      </svg>
      <svg className="absolute bottom-0 left-0 w-40 h-40 text-rose-50" viewBox="0 0 200 200">
        <path fill="currentColor" d="M0 200L0 0L200 0C100 0 0 100 0 200Z" />
      </svg>
    </section>
  );
};

export default SmartSchoolApp;