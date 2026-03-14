import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useInView, useSpring, useMotionValue } from "framer-motion";
import { 
  BookOpen, 
  ChevronDown, 
  FlaskConical, 
  Calculator, 
  Laptop, 
  Atom,
  Heart,
  Briefcase,
  Landmark,
  ArrowRight,
  Sparkles,
  Clock,
  Users,
  Target,
  Award,
  Star,
  Zap,
  CheckCircle2,
  Play,
  GraduationCap,
  Lightbulb,
  Globe,
  TrendingUp,
  Palette,
  Monitor,
  Menu,
  X
} from "lucide-react";

// --- PREMIUM 3D DATA ---
const curriculumData = [
  {
    level: "Nursery & Kindergarten",
    age: "2.5 - 5 Years",
    description: "Where learning transforms into magical discovery. Our Montessori-inspired environment nurtures curiosity through sensory exploration, creative expression, and joyful play-based pedagogy.",
    highlights: ["Montessori Method", "Sensory Gardens", "Creative Arts", "Emotional Intelligence"],
    icon: Palette,
    gradient: "from-pink-500 via-rose-500 to-orange-400",
    bgGradient: "from-rose-50 via-pink-50 to-orange-50",
    stats: { students: "150+", ratio: "1:8", years: "25+" },
    color: "rose",
    features: ["Play-based Learning", "Motor Development", "Social Skills"]
  },
  {
    level: "Primary Education",
    age: "5 - 10 Years",
    description: "Building the bedrock of academic excellence. Our innovative approach combines traditional values with smart classroom technology, fostering conceptual clarity and creative thinking.",
    highlights: ["Smart Classrooms", "STEAM Integration", "Digital Literacy", "Critical Thinking"],
    icon: Lightbulb,
    gradient: "from-blue-500 via-cyan-500 to-teal-400",
    bgGradient: "from-cyan-50 via-blue-50 to-indigo-50",
    stats: { students: "300+", ratio: "1:15", years: "20+" },
    color: "cyan",
    features: ["Conceptual Learning", "Tech Integration", "Holistic Growth"]
  },
  {
    level: "Middle School",
    age: "10 - 13 Years",
    description: "The transformative bridge to intellectual independence. Students explore advanced concepts through project-based learning, developing analytical skills and leadership qualities.",
    highlights: ["Advanced Sciences", "Coding & AI", "Debate & MUN", "Leadership Labs"],
    icon: Monitor,
    gradient: "from-violet-500 via-purple-500 to-fuchsia-400",
    bgGradient: "from-violet-50 via-purple-50 to-fuchsia-50",
    stats: { students: "250+", ratio: "1:20", years: "18+" },
    color: "violet",
    features: ["STEM Focus", "Digital Creation", "Global Awareness"]
  },
  {
    level: "Secondary School",
    age: "13 - 15 Years",
    description: "Excellence redefined. Rigorous board preparation meets career counseling, with specialized mentoring for competitive examinations and future-ready skill development.",
    highlights: ["Board Mastery", "Olympiad Training", "Career Guidance", "Research Projects"],
    icon: TrendingUp,
    gradient: "from-emerald-500 via-teal-500 to-cyan-400",
    bgGradient: "from-emerald-50 via-teal-50 to-cyan-50",
    stats: { students: "200+", ratio: "1:25", years: "15+" },
    color: "emerald",
    features: ["Exam Excellence", "Competitive Prep", "Future Ready"]
  },
];

const streams = [
  {
    title: "Science",
    subtitle: "Engineering & Technology",
    subjects: ["Physics", "Chemistry", "Mathematics", "CS/AI"],
    icon: Atom,
    gradient: "from-blue-600 via-indigo-600 to-violet-700",
    accent: "blue",
    desc: "For future innovators and tech leaders",
    features: ["Robotics Lab", "AI Integration", "IIT-JEE Foundation", "Research Programs"],
    stats: "98% Success Rate"
  },
  {
    title: "Biology",
    subtitle: "Medical & Health Sciences",
    subjects: ["Physics", "Chemistry", "Biology", "Psychology"],
    icon: Heart,
    gradient: "from-rose-600 via-pink-600 to-fuchsia-700",
    accent: "rose",
    desc: "For aspiring doctors and researchers",
    features: ["Bio-Tech Lab", "NEET Preparation", "Medical Internships", "Research Papers"],
    stats: "95% Medical Admissions"
  },
  {
    title: "Commerce",
    subtitle: "Business & Finance",
    subjects: ["Accounts", "Business", "Economics", "Maths"],
    icon: Briefcase,
    gradient: "from-amber-600 via-orange-600 to-red-700",
    accent: "amber",
    desc: "For business leaders and entrepreneurs",
    features: ["Trading Simulator", "CA Foundation", "Startup Incubator", "Market Analysis"],
    stats: "92% CA/CMA Success"
  },
  {
    title: "Humanities",
    subtitle: "Liberal Arts & Sciences",
    subjects: ["History", "Pol Sci", "Psychology", "Sociology"],
    icon: Globe,
    gradient: "from-purple-600 via-violet-600 to-indigo-700",
    accent: "purple",
    desc: "For changemakers and thought leaders",
    features: ["Policy Research", "Media Lab", "Law Foundation", "Cultural Studies"],
    stats: "Top Law/Design Schools"
  },
];

// --- PREMIUM 3D COMPONENTS ---

// Magnetic Button with Spring Physics
const MagneticButton = ({ children, className, onClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.3);
    y.set((clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.button>
  );
};

// Animated Counter with Spring
const AnimatedCounter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const springValue = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    if (isInView) {
      springValue.set(parseInt(target));
      const unsubscribe = springValue.on("change", (latest) => {
        setCount(Math.floor(latest));
      });
      return () => unsubscribe();
    }
  }, [isInView, target, springValue]);

  return (
    <span ref={ref} className="tabular-nums font-bold">
      {count}{suffix}
    </span>
  );
};

// 3D Card Tilt Effect
const TiltCard = ({ children, className, tiltAmount = 10 }) => {
  const ref = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setRotateX((y - 0.5) * -tiltAmount);
    setRotateY((x - 0.5) * tiltAmount);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

// Glow Effect Component
const GlowEffect = ({ color, children }) => {
  return (
    <div className="relative group">
      <div className={`absolute -inset-1 bg-gradient-to-r ${color} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`} />
      <div className="relative">{children}</div>
    </div>
  );
};

// --- MAIN PREMIUM COMPONENT ---
export default function Curriculum() {
  // Changed from single openIndex to array of open indices - allows multiple items to stay open
  const [openIndices, setOpenIndices] = useState([]);
  const [hoveredStream, setHoveredStream] = useState(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Toggle function that allows multiple items to stay open
  const toggle = (index) => {
    setOpenIndices(prev => {
      if (prev.includes(index)) {
        // If already open, close it when clicked again
        return prev.filter(i => i !== index);
      } else {
        // If closed, open it (add to array)
        return [...prev, index];
      }
    });
  };

  // Check if specific index is open
  const isOpen = (index) => openIndices.includes(index);

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-indigo-100 overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* --- PREMIUM CURRICULUM ACCORDION --- */}
        <div className="py-16 sm:py-24">
          <motion.div 
            className="text-center mb-12 sm:mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 sm:px-4 rounded-full bg-indigo-100 text-indigo-700 text-xs sm:text-sm font-bold tracking-wider uppercase mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight">
              Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Journey</span>
            </h2>
            <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Four transformative stages designed to unlock every child's potential
            </p>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {curriculumData.map((item, index) => {
              const Icon = item.icon;
              const open = isOpen(index);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60, rotateX: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="perspective-1000"
                >
                  <GlowEffect color={item.gradient}>
                    <div 
                      className={`relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 transition-all duration-700 ${
                        open 
                          ? "bg-white border-transparent shadow-2xl" 
                          : "bg-white/80 border-slate-100 shadow-lg hover:shadow-xl"
                      }`}
                    >
                      {/* Background Gradient Animation */}
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: open ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      {/* Shimmer Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                        initial={{ x: "-200%" }}
                        animate={{ x: open ? "200%" : "-200%" }}
                        transition={{ duration: 1.5, repeat: open ? Infinity : 0, repeatDelay: 3 }}
                      />

                      <MagneticButton
                        onClick={() => toggle(index)}
                        className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 sm:p-8 md:p-10 text-left relative z-10 bg-transparent gap-4 sm:gap-0"
                      >
                        <div className="flex items-center gap-4 sm:gap-8 w-full sm:w-auto">
                          {/* 3D Icon Container */}
                          <TiltCard className="relative shrink-0" tiltAmount={15}>
                            <motion.div 
                              className={`p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-xl relative overflow-hidden`}
                              whileHover={{ scale: 1.1 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <Icon className="w-6 h-6 sm:w-8 sm:h-8 relative z-10" />
                            </motion.div>
                          </TiltCard>
                          
                          <div className="min-w-0 flex-1">
                            <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-1 sm:mb-2 truncate">
                              {item.level}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-slate-500 text-xs sm:text-sm">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                                {item.age}
                              </span>
                              <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-300" />
                              <span className="hidden sm:inline text-xs sm:text-sm font-medium">{item.stats.ratio} Teacher Ratio</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 w-full sm:w-auto mt-2 sm:mt-0">
                          {/* Preview Stats - Hidden on mobile, visible on lg */}
                          <div className={`hidden lg:flex gap-6 transition-all duration-500 ${open ? 'opacity-0 translate-x-4' : 'opacity-60'}`}>
                            <div className="text-right">
                              <div className="text-xl sm:text-2xl font-bold text-slate-900">{item.stats.students}</div>
                              <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">Students</div>
                            </div>
                            <div className="text-right">
                              <div className="text-xl sm:text-2xl font-bold text-slate-900">{item.stats.years}</div>
                              <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">Years</div>
                            </div>
                          </div>
                          
                          <motion.div 
                            className={`p-2 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-500 ${open ? 'bg-indigo-100 text-indigo-600 rotate-180' : 'bg-slate-100 text-slate-600'}`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
                          </motion.div>
                        </div>
                      </MagneticButton>
                      
                      <AnimatePresence>
                        {open && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <div className="px-5 sm:px-8 md:px-10 pb-6 sm:pb-10 pt-2 sm:pt-4 border-t border-slate-100">
                              <div className="grid lg:grid-cols-3 gap-6 sm:gap-10">
                                {/* Description Column */}
                                <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                                  <motion.p 
                                    className="text-slate-600 text-sm sm:text-lg leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                  >
                                    {item.description}
                                  </motion.p>
                                  
                                  {/* Features Grid */}
                                  <motion.div 
                                    className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                  >
                                    {item.features.map((feature, i) => (
                                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                                        <div className={`p-1 rounded-full bg-${item.color}-100 shrink-0`}>
                                          <CheckCircle2 className={`w-3 h-3 sm:w-4 sm:h-4 text-${item.color}-600`} />
                                        </div>
                                        <span className="truncate">{feature}</span>
                                      </div>
                                    ))}
                                  </motion.div>

                                  {/* Highlights */}
                                  <motion.div 
                                    className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                  >
                                    {item.highlights.map((tag, i) => (
                                      <motion.span 
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        transition={{ delay: 0.4 + i * 0.05 }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className={`px-3 sm:px-5 py-1.5 sm:py-2.5 bg-white text-slate-700 text-xs sm:text-sm font-bold rounded-lg sm:rounded-xl border-2 border-slate-100 shadow-sm hover:border-${item.color}-300 hover:text-${item.color}-600 hover:shadow-md transition-all cursor-default flex items-center gap-1 sm:gap-2`}
                                      >
                                        <Star className={`w-3 h-3 sm:w-4 sm:h-4 text-${item.color}-500`} />
                                        <span className="truncate">{tag}</span>
                                      </motion.span>
                                    ))}
                                  </motion.div>
                                </div>

                                {/* Stats Card - Key Metrics */}
                                <motion.div 
                                  className="bg-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white relative overflow-hidden"
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.3 }}
                                >
                                  <div className={`absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br ${item.gradient} opacity-20 rounded-full blur-2xl`} />
                                  
                                  <h4 className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 sm:mb-6 relative z-10">Key Metrics</h4>
                                  <div className="space-y-3 sm:space-y-6 relative z-10">
                                    <div className="flex justify-between items-center border-b border-slate-700 pb-2 sm:pb-4">
                                      <span className="text-slate-300 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                                        <Users className="w-3 h-3 sm:w-5 sm:h-5" /> 
                                        <span className="hidden sm:inline">Enrollment</span>
                                        <span className="sm:hidden">Students</span>
                                      </span>
                                      <span className="text-xl sm:text-3xl font-bold">
                                        <AnimatedCounter target={parseInt(item.stats.students)} suffix="+" />
                                      </span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-slate-700 pb-2 sm:pb-4">
                                      <span className="text-slate-300 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                                        <Target className="w-3 h-3 sm:w-5 sm:h-5" /> 
                                        Ratio
                                      </span>
                                      <span className="text-xl sm:text-3xl font-bold">{item.stats.ratio}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span className="text-slate-300 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                                        <Award className="w-3 h-3 sm:w-5 sm:h-5" /> 
                                        <span className="hidden sm:inline">Legacy</span>
                                        <span className="sm:hidden">Years</span>
                                      </span>
                                      <span className="text-xl sm:text-3xl font-bold">
                                        <AnimatedCounter target={parseInt(item.stats.years)} suffix="+" />
                                      </span>
                                    </div>
                                  </div>
                                </motion.div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </GlowEffect>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* --- PREMIUM STREAMS SECTION --- */}
        <div className="py-16 sm:py-32">
          <motion.div 
            className="text-center mb-12 sm:mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 sm:px-4 rounded-full bg-purple-100 text-purple-700 text-xs sm:text-sm font-bold tracking-wider uppercase mb-4">
              Class 11-12
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight">
              Senior Secondary <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Streams</span>
            </h2>
            <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Specialized pathways designed for future leaders, innovators, and changemakers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {streams.map((stream, index) => {
              const Icon = stream.icon;
              const isHovered = hoveredStream === index;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setHoveredStream(index)}
                  onMouseLeave={() => setHoveredStream(null)}
                  className="group h-full"
                >
                  <TiltCard className="h-full" tiltAmount={8}>
                    <div className={`relative h-full rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-700 ${isHovered ? 'shadow-2xl scale-[1.02]' : 'shadow-lg'}`}>
                      {/* Background Layers */}
                      <div className="absolute inset-0 bg-white" />
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${stream.gradient}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      {/* Pattern Overlay */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[length:20px_20px]`} />

                      <div className="relative z-10 p-5 sm:p-8 h-full flex flex-col">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-6 sm:mb-8">
                          <motion.div 
                            className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-500 ${isHovered ? 'bg-white/20' : 'bg-slate-50'}`}
                            animate={{ rotate: isHovered ? [0, -10, 10, 0] : 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon className={`w-7 h-7 sm:w-10 sm:h-10 transition-colors duration-500 ${isHovered ? 'text-white' : `text-${stream.accent}-600`}`} />
                          </motion.div>
                          
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                            className="bg-white/20 backdrop-blur-md px-2 sm:px-3 py-1 rounded-full"
                          >
                            <span className="text-white text-[10px] sm:text-xs font-bold">{stream.stats}</span>
                          </motion.div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-grow">
                          <h3 className={`text-xl sm:text-2xl font-bold mb-1 transition-colors duration-500 ${isHovered ? 'text-white' : 'text-slate-900'}`}>
                            {stream.title}
                          </h3>
                          <p className={`text-xs sm:text-sm font-semibold mb-3 sm:mb-4 transition-colors duration-500 ${isHovered ? 'text-white/80' : 'text-slate-400'}`}>
                            {stream.subtitle}
                          </p>
                          
                          <p className={`text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 transition-colors duration-500 ${isHovered ? 'text-white/90' : 'text-slate-600'}`}>
                            {stream.desc}
                          </p>

                          {/* Animated Feature List */}
                          <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                            {stream.features.map((feature, i) => (
                              <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: isHovered ? 1 : 0.5, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className={`flex items-center gap-2 text-xs sm:text-sm font-medium transition-colors duration-500 ${isHovered ? 'text-white' : 'text-slate-500'}`}
                              >
                                <motion.div
                                  animate={{ rotate: isHovered ? 360 : 0 }}
                                  transition={{ duration: 0.5, delay: i * 0.1 }}
                                >
                                  <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                                </motion.div>
                                <span className="truncate">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Subjects */}
                        <div className={`pt-4 sm:pt-6 border-t transition-colors duration-500 ${isHovered ? 'border-white/20' : 'border-slate-100'}`}>
                          <p className={`text-[10px] font-bold uppercase tracking-wider mb-2 sm:mb-3 transition-colors duration-500 ${isHovered ? 'text-white/60' : 'text-slate-400'}`}>
                            Core Curriculum
                          </p>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {stream.subjects.map((sub, i) => (
                              <motion.span
                                key={i}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className={`px-2 sm:px-3 py-1 rounded-lg text-[10px] sm:text-xs font-bold transition-all duration-500 ${
                                  isHovered 
                                    ? 'bg-white/20 text-white border border-white/30' 
                                    : 'bg-slate-100 text-slate-600 border border-transparent'
                                }`}
                              >
                                {sub}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <motion.button
                          className={`mt-4 sm:mt-6 w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition-all duration-500 flex items-center justify-center gap-2 ${
                            isHovered 
                              ? 'bg-white text-slate-900 shadow-xl' 
                              : 'bg-slate-100 text-slate-600'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Explore Pathway
                          <motion.div
                            animate={{ x: isHovered ? 5 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                          </motion.div>
                        </motion.button>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* --- ULTIMATE CTA SECTION --- */}
        <motion.div 
          className="relative rounded-2xl sm:rounded-[3rem] overflow-hidden mb-16 sm:mb-32"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Dynamic Background */}
          <div className="absolute inset-0 bg-slate-900">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900" />
            
            {/* Animated Blobs */}
            <motion.div 
              className="absolute top-0 left-0 w-full h-full"
              animate={{ 
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)"
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
          </div>

          <div className="relative z-10 px-4 sm:px-8 md:px-20 py-12 sm:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-indigo-300 text-xs sm:text-sm font-semibold mb-6 sm:mb-8"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="tracking-wider">Begin Your Journey</span>
              </motion.div>
              
              <h2 className="text-2xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-8 tracking-tight leading-tight">
                Ready to Shape<br className="sm:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                  Your Future?
                </span>
              </h2>
              
              <p className="text-sm sm:text-xl text-slate-300 max-w-3xl mx-auto mb-6 sm:mb-12 leading-relaxed px-2 sm:px-0">
                Join thousands of successful alumni who began their journey here. 
                Our admissions team is ready to guide you toward excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center">
                <GlowEffect color="from-indigo-500 via-purple-500 to-pink-500">
                  <motion.button
                    className="group px-6 sm:px-10 py-3 sm:py-5 bg-white text-slate-900 font-bold rounded-xl sm:rounded-2xl shadow-2xl flex items-center justify-center gap-2 text-sm sm:text-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                    Start Application
                    <motion.div
                      className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-900/10 flex items-center justify-center"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </motion.div>
                  </motion.button>
                </GlowEffect>
                
                <motion.button
                  className="px-6 sm:px-10 py-3 sm:py-5 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all text-sm sm:text-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.6)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule Visit
                </motion.button>
              </div>

              {/* Trust Badges */}
              <motion.div 
                className="mt-8 sm:mt-16 flex flex-wrap justify-center gap-4 sm:gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                {[
                  { icon: CheckCircle2, text: "AI-Powered Assessment" },
                  { icon: Users, text: "1-on-1 Counseling" },
                  { icon: Award, text: "25+ Years Excellence" }
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-1.5 sm:gap-2 text-slate-400">
                    <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
                    <span className="text-xs sm:text-sm font-medium">{badge.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}