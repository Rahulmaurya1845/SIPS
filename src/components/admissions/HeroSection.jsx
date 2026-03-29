import React, { useState, useEffect } from "react";
import img1 from "../../assets/images/admissionheroimg.png";
import { 
  GraduationCap, 
  Menu,
  X,
  ArrowRight,
  Play,
  Baby,
  School,
  Building2,
  GraduationCap as GradIcon,
  Plus,
  Minus,
  HelpCircle,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
  Users,
  Star,
  BookOpen,
  PhoneCall,
  Sparkles,
  Lightbulb,
  Shield,
  Clock,
  Bus,
  Home,
  Trophy,
  Palette,
  Microscope
} from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeGrade, setActiveGrade] = useState("kindergarten");
  const [openFaq, setOpenFaq] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", color: "text-emerald-600", hover: "hover:text-emerald-700", bg: "bg-emerald-50" },
    { name: "About", color: "text-rose-600", hover: "hover:text-rose-700", bg: "bg-rose-50" },
    { name: "Facilities", color: "text-cyan-600", hover: "hover:text-cyan-700", bg: "bg-cyan-50" },
    { name: "Blog", color: "text-amber-600", hover: "hover:text-amber-700", bg: "bg-amber-50" },
    { name: "Admission", color: "text-violet-600", hover: "hover:text-violet-700", bg: "bg-violet-50" },
    { name: "Alumni", color: "text-orange-600", hover: "hover:text-orange-700", bg: "bg-orange-50" },
    { name: "Shop", color: "text-red-600", hover: "hover:text-red-700", bg: "bg-red-50" },
    { name: "Contact", color: "text-blue-600", hover: "hover:text-blue-700", bg: "bg-blue-50" },
  ];

  const gradeLevels = [
    {
      id: "kindergarten",
      icon: Baby,
      label: "Kindergarten",
      age: "2-5 Years",
      color: "bg-rose-500",
      lightColor: "bg-rose-50",
      textColor: "text-rose-600",
      borderColor: "border-rose-200",
      gradient: "from-rose-400 to-rose-600",
      description: "A nurturing environment where young minds explore, play, and develop foundational skills through guided discovery and creative expression.",
      features: ["Montessori Methods", "Motor Skills Development", "Social-Emotional Learning", "Creative Expression"],
      activities: ["Art & Craft", "Music & Movement", "Nature Exploration", "Story Sessions"],
      stats: { students: "15 per class", ratio: "1:8", hours: "8:30 AM - 12:30 PM" }
    },
    {
      id: "small",
      icon: School,
      label: "Primary School",
      age: "6-10 Years",
      color: "bg-amber-500",
      lightColor: "bg-amber-50",
      textColor: "text-amber-600",
      borderColor: "border-amber-200",
      gradient: "from-amber-400 to-amber-600",
      description: "Building strong academic foundations with innovative teaching methods that foster curiosity, critical thinking, and a lifelong love for learning.",
      features: ["Inquiry-Based Learning", "Literacy & Numeracy", "STEM Introduction", "Character Building"],
      activities: ["Science Labs", "Reading Clubs", "Sports Training", "Drama & Arts"],
      stats: { students: "25 per class", ratio: "1:15", hours: "8:00 AM - 2:30 PM" }
    },
    {
      id: "mid",
      icon: Building2,
      label: "Middle School",
      age: "11-13 Years",
      color: "bg-cyan-500",
      lightColor: "bg-cyan-50",
      textColor: "text-cyan-600",
      borderColor: "border-cyan-200",
      gradient: "from-cyan-400 to-cyan-600",
      description: "Preparing adolescents for higher education through advanced academics, leadership opportunities, and personalized guidance for individual growth.",
      features: ["Advanced Academics", "Leadership Programs", "Digital Literacy", "Career Exploration"],
      activities: ["Robotics Club", "Debate Competitions", "Sports Teams", "Community Service"],
      stats: { students: "28 per class", ratio: "1:18", hours: "8:00 AM - 3:00 PM" }
    },
    {
      id: "high",
      icon: GradIcon,
      label: "High School",
      age: "14-17 Years",
      color: "bg-violet-500",
      lightColor: "bg-violet-50",
      textColor: "text-violet-600",
      borderColor: "border-violet-200",
      gradient: "from-violet-400 to-violet-600",
      description: "Comprehensive secondary education with board exam preparation, career counseling, and university readiness programs for future success.",
      features: ["Board Exam Excellence", "Career Counseling", "Research Projects", "Internship Programs"],
      activities: ["JEE/NEET Prep", "Model UN", "Sports Championships", "Entrepreneurship"],
      stats: { students: "30 per class", ratio: "1:20", hours: "8:00 AM - 3:30 PM" }
    }
  ];

  const admissionSteps = [
    {
      icon: Calendar,
      title: "Schedule a Visit",
      subtitle: "Step 1",
      description: "Experience our world-class campus firsthand with a personalized tour guided by our admissions team.",
      details: ["Personalized campus tour", "Meet department heads", "Interactive faculty sessions"],
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      accent: "bg-blue-500"
    },
    {
      icon: BookOpen,
      title: "Submit Application",
      subtitle: "Step 2",
      description: "Complete our streamlined digital application with secure document upload and online payment.",
      details: ["Digital application portal", "Secure document upload", "Online fee payment"],
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      accent: "bg-emerald-500"
    },
    {
      icon: Users,
      title: "Assessment",
      subtitle: "Step 3",
      description: "Age-appropriate evaluation and personal interaction to understand your child's unique potential.",
      details: ["Skill assessment", "Parent interaction", "Student interview"],
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      accent: "bg-amber-500"
    },
    {
      icon: Award,
      title: "Enrollment",
      subtitle: "Step 4",
      description: "Receive acceptance confirmation and complete enrollment with our comprehensive welcome program.",
      details: ["Admission confirmation", "Fee structure guidance", "Orientation program"],
      color: "from-rose-500 to-pink-600",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
      accent: "bg-rose-500"
    }
  ];

  // FAQs with icons - REMOVED curriculum question
  const gradeFaqs = {
    kindergarten: [
      { question: "What are the school timings for kindergarten?", answer: "Our kindergarten operates from 8:30 AM to 12:30 PM, Monday through Friday. We also offer an extended daycare facility until 5:00 PM with structured activities, snacks, and rest time for working parents.", icon: Clock },
      { question: "How safe are the school transport facilities?", answer: "All our vehicles are equipped with GPS tracking, CCTV cameras, first-aid kits, and fire extinguishers. Trained female attendants accompany children at all times, and drivers are verified professionals with 10+ years of experience.", icon: Bus },
      { question: "Does learning happen outside the classroom?", answer: "Absolutely! We believe in experiential learning. Children participate in daily nature walks, garden activities, sand play, water activities, and monthly field trips to farms, parks, and interactive museums.", icon: MapPin },
      { question: "What are the qualifications of kindergarten teachers?", answer: "Our kindergarten teachers hold diplomas in Early Childhood Education (ECE) with an average of 8+ years of experience. They are certified in child psychology, first aid, and international teaching methodologies.", icon: Users },
      { question: "What facilities are available for young children?", answer: "We provide a dedicated sensory play area, sand pit, splash pool, indoor gym, activity centers, nap rooms with individual beds, and a full-time medical room with a qualified nurse. All spaces are air-conditioned and child-safe.", icon: Home }
    ],
    small: [
      { question: "How much experience do teachers have?", answer: "Our primary faculty holds B.Ed or M.Ed degrees with an average teaching experience of 10+ years. Teachers undergo 40+ hours of annual professional development in innovative pedagogies and child psychology.", icon: Users },
      { question: "What kind of learning approach is followed?", answer: "We employ an inquiry-based, experiential learning approach that combines direct instruction with hands-on activities. Our methodology emphasizes conceptual understanding, critical thinking, and real-world application over rote memorization.", icon: Lightbulb },
      { question: "What technology is integrated into learning?", answer: "Smart classrooms feature interactive whiteboards, tablets for collaborative projects, dedicated computer labs, and educational robotics kits. We maintain a healthy balance between digital learning and traditional methods.", icon: Microscope },
      { question: "What is the campus safety policy?", answer: "For security, children can only leave with authorized guardians after biometric/ID verification. All exits are monitored by security personnel, and parents receive instant notifications when children leave the campus.", icon: Shield },
      { question: "How do you assess student progress?", answer: "We use Comprehensive Continuous Evaluation (CCE) including observations, portfolios, projects, presentations, and skills assessments. Formal examinations begin from Grade 5 onwards; prior grades focus on developmental milestones.", icon: Trophy }
    ],
    mid: [
      { question: "Is the teaching approach student-centered?", answer: "Yes, our pedagogy is fundamentally student-centered. We encourage active participation, collaborative projects, Socratic questioning, and independent research. Teachers serve as facilitators guiding students to construct their own knowledge.", icon: Users },
      { question: "How can parents support learning at home?", answer: "We partner with parents through our Learning Management System (LMS), monthly workshops, and home activity guides. We recommend creating a reading culture, discussing current affairs, and supporting project work without over-involvement.", icon: Home },
      { question: "What are the transport safety measures?", answer: "Our fleet includes GPS tracking, speed governors, CCTV surveillance, emergency exits, and first-aid kits. Female attendants are present on all routes, and parents receive real-time location updates via our mobile application.", icon: Bus },
      { question: "What is the campus exit policy?", answer: "Students cannot leave campus without written parental consent and principal authorization. Security maintains strict gate protocols with ID verification for all visitors. Early departure requires advance notice through our parent portal.", icon: Shield },
      { question: "How do you ensure academic excellence?", answer: "We provide differentiated instruction, remedial support for struggling students, advanced enrichment for gifted learners, peer tutoring programs, and comprehensive study resources. Regular diagnostic assessments track progress.", icon: Trophy }
    ],
    high: [
      { question: "What teaching methodology is used in high school?", answer: "Senior classes blend direct instruction for complex theoretical concepts with project-based learning for application. We emphasize research skills, academic writing, seminar presentations, and independent study habits essential for university success.", icon: Lightbulb },
      { question: "How do you prepare students for competitive exams?", answer: "Beyond board preparation, we offer integrated coaching for JEE, NEET, and other entrance exams. This includes specialized faculty, daily practice papers, doubt-clearing sessions, mock tests, and stress management workshops.", icon: Trophy },
      { question: "What transport facilities exist for senior students?", answer: "Senior students have access to all safety features plus RFID card attendance tracking, route optimization, and direct communication channels between parents, transport managers, and school authorities via our dedicated app.", icon: Bus },
      { question: "What is the policy for leaving campus?", answer: "Grades 11-12 students may leave during free periods with parental consent and valid ID cards. All exits are digitally logged, and students must sign out at the security desk. Violation of protocols results in privilege suspension.", icon: Shield },
      { question: "How do you support career planning?", answer: "Our career counseling cell offers psychometric assessments, university fairs, alumni mentoring, internship placements, and guidance for international applications. We maintain partnerships with leading universities worldwide.", icon: Award }
    ]
  };

  const activeGradeData = gradeLevels.find(g => g.id === activeGrade);
  const currentFaqs = gradeFaqs[activeGrade];

  return (
    <section className="relative min-h-screen bg-white overflow-hidden font-sans selection:bg-rose-200 selection:text-rose-900">
      
      {/* Background Elements - Responsive sizing */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-rose-100/40 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/3 right-0 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full blur-3xl translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-tr from-amber-100/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Navigation - Fully Responsive */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-white/90 backdrop-blur-xl shadow-lg' : 'bg-white'}`}>
        <div className="max-w-[1920px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Logo - Responsive sizing */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-400 via-amber-400 to-cyan-400 rounded-xl sm:rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-gradient-to-br from-slate-900 to-slate-700 rounded-lg sm:rounded-xl flex items-center justify-center shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                  <GraduationCap size={20} className="text-white sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white shadow-md animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Sahodara</h1>
                <p className="text-xs lg:text-sm font-medium text-slate-500 tracking-wide hidden md:block">International School</p>
              </div>
            </div>

            {/* Desktop Navigation - Hidden on mobile/tablet */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className={`relative px-3 xl:px-4 py-2 text-sm xl:text-base font-semibold ${item.color} ${item.hover} transition-all duration-300 rounded-lg hover:${item.bg} group`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4 rounded-full"></span>
                </a>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <button className="px-4 xl:px-6 py-2 xl:py-2.5 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full font-semibold text-sm xl:text-base shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 hover:scale-105 transition-all duration-300">
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} className="text-slate-700" /> : <Menu size={24} className="text-slate-700" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Responsive */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-xl">
            <div className="px-3 sm:px-4 py-4 space-y-1">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold ${item.color} hover:${item.bg} transition-colors`}
                >
                  <span className={`w-2 h-2 rounded-full ${item.bg.replace('bg-', 'bg-').replace('50', '400')}`}></span>
                  {item.name}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-slate-100">
                <button className="w-full py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-xl font-semibold text-sm shadow-lg">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Fully Responsive with Fluid Typography */}
      <div className="relative z-10">
        <div className="max-w-[1920px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
            {/* Left Content */}
            <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              {/* Decorative Elements - Responsive */}
              <div className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-rose-200 to-amber-200 rounded-full opacity-60 blur-2xl animate-pulse"></div>
              <div className="absolute top-10 right-4 sm:top-20 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full opacity-40 blur-xl"></div>

              <div className="relative">
                {/* Badge - Responsive padding/text */}
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-rose-50 to-pink-50 rounded-full mb-4 sm:mb-6 border border-rose-100 shadow-sm">
                  <Sparkles size={14} className="text-rose-500 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-semibold text-rose-700">Excellence in Education Since 2010</span>
                </div>

                {/* Headline - Fluid Typography using CSS clamp via Tailwind arbitrary values */}
                <h1 className="text-[clamp(1.75rem,5vw,4rem)] font-bold text-slate-900 leading-[1.1] mb-4 sm:mb-6">
                  Begin Your Child's{" "}
                  <span className="bg-gradient-to-r from-rose-500 via-amber-500 to-cyan-500 bg-clip-text text-transparent">Extraordinary</span>{" "}
                  Journey
                </h1>

                {/* Description - Responsive text */}
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 max-w-xl leading-relaxed">
                  Join Sahodara International School and provide your child with world-class education, innovative learning environments, and a nurturing community that fosters excellence.
                </p>

                {/* CTA Buttons - Responsive sizing/stacking */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  <button className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-slate-900 text-white rounded-full font-semibold text-sm sm:text-base hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 hover:shadow-slate-900/30 hover:scale-105">
                    Start Admission
                    <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="group flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-700 rounded-full font-semibold text-sm sm:text-base border-2 border-slate-200 hover:border-rose-400 hover:text-rose-600 transition-all shadow-lg hover:shadow-xl">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={14} className="sm:w-4 sm:h-4 ml-0.5 text-rose-600 fill-rose-600" />
                    </div>
                    Watch Campus Tour
                  </button>
                </div>

                {/* Trust Indicators - Responsive */}
                <div className="flex items-center gap-4 sm:gap-6 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-200">
                  <div className="flex -space-x-2 sm:-space-x-3">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-xs font-bold text-slate-600 shadow-md">
                        {String.fromCharCode(64+i)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-0.5 sm:gap-1">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} size={12} className="sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 sm:mt-1">Trusted by <span className="font-bold text-slate-900">2,000+</span> parents</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image - Responsive */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <div className="relative">
                {/* Main Image Container - Responsive height */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/20 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={img1} 
                    alt="Students at Sahodara International School" 
                    className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Badge - Responsive */}
                  <div className="absolute top-3 right-3 sm:top-6 sm:right-6 z-20 bg-white/95 backdrop-blur-md px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-xl border border-white/50">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
                      <span className="text-xs sm:text-sm font-bold text-slate-800">Admissions Open 2025-26</span>
                    </div>
                  </div>
                </div>

                {/* Floating Elements - Responsive sizing/positioning */}
                <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-400 to-orange-400 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl animate-bounce">
                  <Palette size={20} className="sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center shadow-xl">
                  <BookOpen size={18} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="absolute top-1/2 -right-3 sm:-right-8 w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-lg sm:rounded-xl flex items-center justify-center shadow-xl rotate-12">
                  <Trophy size={16} className="sm:w-6 sm:h-6 text-white" />
                </div>

                {/* Stats Card - Responsive */}
                <div className="absolute -bottom-4 sm:-bottom-6 left-4 sm:left-8 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-100 z-20">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <Award size={18} className="sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xl sm:text-2xl font-bold text-slate-900">98%</p>
                      <p className="text-xs sm:text-sm text-slate-600">Board Success Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider - Responsive height */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[40px] sm:h-[60px] lg:h-[80px]">
            <path d="M0 50L48 45.7C96 41 192 32 288 35.3C384 38 480 53 576 58.7C672 64 768 60 864 50C960 40 1056 24 1152 21.3C1248 18 1344 28 1392 33.3L1440 38V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 60 80H0Z" fill="#F8FAFC"/>
          </svg>
        </div>
      </div>

      {/* ADMISSION JOURNEY SECTION - Fully Responsive */}
      <div className="relative z-10 bg-slate-50 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="max-w-[1920px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
          {/* Section Header - Responsive */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white rounded-full shadow-md border border-slate-100 mb-4 sm:mb-6">
              <Sparkles size={16} className="sm:w-[18px] sm:h-[18px] text-amber-500" />
              <span className="text-xs sm:text-sm font-bold text-slate-700">Seamless Admission Process</span>
            </div>
            <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-bold text-slate-900 mb-3 sm:mb-4">
              Your Path to <span className="bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto px-4">
              Four simple steps to join our community of learners and leaders
            </p>
          </div>

          {/* Desktop Timeline - Hidden on mobile/tablet */}
          <div className="hidden lg:block">
            <div className="relative max-w-7xl mx-auto">
              {/* Animated Connecting Line */}
              <div className="absolute top-16 sm:top-20 left-[12.5%] right-[12.5%] h-1 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 via-emerald-500 via-amber-500 to-rose-500 rounded-full transition-all duration-500" style={{width: `${(activeStep + 1) * 25}%`}}></div>
              </div>

              <div className="grid grid-cols-4 gap-4 xl:gap-8">
                {admissionSteps.map((step, idx) => (
                  <div key={idx} className="relative">
                    <div 
                      className={`relative bg-white rounded-2xl xl:rounded-3xl p-4 xl:p-8 shadow-xl border-2 transition-all duration-500 cursor-pointer group hover:-translate-y-2 ${
                        activeStep === idx ? step.borderColor : 'border-transparent'
                      } ${step.bgColor}`}
                      onMouseEnter={() => setActiveStep(idx)}
                    >
                      {/* Step Number */}
                      <div className={`absolute -top-4 sm:-top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg group-hover:scale-110 transition-transform`}>
                        {idx + 1}
                      </div>

                      {/* Icon */}
                      <div className="mt-6 sm:mt-8 mb-4 sm:mb-6 flex justify-center">
                        <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
                          <step.icon size={24} className="sm:w-8 sm:h-8 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="text-center">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider sm:tracking-widest">{step.subtitle}</span>
                        <h3 className="text-base sm:text-lg xl:text-xl font-bold text-slate-900 mt-1 sm:mt-2 mb-2 sm:mb-3">{step.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3 sm:mb-5">{step.description}</p>

                        {/* Details */}
                        <ul className="space-y-2 text-left">
                          {step.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-700 bg-white/70 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg">
                              <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${step.accent} flex items-center justify-center flex-shrink-0`}>
                                <CheckCircle2 size={12} className="sm:w-[14px] sm:h-[14px] text-white" />
                              </div>
                              <span className="font-medium">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Cards - Visible on small screens */}
          <div className="lg:hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {admissionSteps.map((step, idx) => (
                <div key={idx} className={`relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border-l-4 ${step.borderColor} hover:shadow-xl transition-shadow`}>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <step.icon size={24} className="sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-bold text-slate-400">{step.subtitle}</span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 sm:mt-2 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA - Responsive */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-12">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-full font-semibold text-sm sm:text-base shadow-xl shadow-slate-900/20 hover:shadow-slate-900/30 hover:scale-105 transition-all">
              <PhoneCall size={18} className="sm:w-5 sm:h-5" />
              Speak to Admissions
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-700 rounded-full font-semibold text-sm sm:text-base border-2 border-slate-200 hover:border-rose-400 hover:text-rose-600 transition-all shadow-lg">
              <Calendar size={18} className="sm:w-5 sm:h-5" />
              Book Campus Tour
            </button>
          </div>
        </div>
      </div>

      {/* PROGRAMS & FAQ SECTION - Fully Responsive */}
      <div className="relative z-10 bg-white py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="max-w-[1920px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
          {/* Section Header - Responsive */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-slate-100 rounded-full mb-4 sm:mb-6">
              <Lightbulb size={16} className="sm:w-[18px] sm:h-[18px] text-amber-500" />
              <span className="text-xs sm:text-sm font-bold text-slate-700">Discover Excellence</span>
            </div>
            <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-bold text-slate-900 mb-3 sm:mb-4">
              Explore Our <span className="bg-gradient-to-r from-rose-500 to-violet-500 bg-clip-text text-transparent">Programs</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto px-4">
              Tailored educational pathways designed to nurture every child's unique potential
            </p>
          </div>

          {/* Grade Level Tabs - Responsive Scrollable on mobile */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-10 lg:mb-12">
            {gradeLevels.map((grade) => (
              <button
                key={grade.id}
                onClick={() => {
                  setActiveGrade(grade.id);
                  setOpenFaq(0);
                }}
                className={`group flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full font-semibold text-xs sm:text-sm lg:text-base transition-all duration-500 ${
                  activeGrade === grade.id
                    ? `${grade.color} text-white shadow-lg sm:shadow-xl scale-105`
                    : `bg-slate-100 text-slate-600 hover:bg-slate-200 hover:scale-105`
                }`}
              >
                <grade.icon size={16} className={`sm:w-5 sm:h-5 transition-transform ${activeGrade === grade.id ? 'scale-110' : 'group-hover:scale-110'}`} />
                <span className="hidden sm:inline">{grade.label}</span>
                <span className="sm:hidden">{grade.label.split(' ')[0]}</span>
                <span className={`text-xs px-1.5 sm:px-2 py-0.5 rounded-full ${activeGrade === grade.id ? 'bg-white/30' : 'bg-slate-200'}`}>
                  {grade.age}
                </span>
              </button>
            ))}
          </div>

          {/* Two Column Layout - Responsive: Stack on mobile, side-by-side on lg+ */}
          {activeGradeData && (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
              {/* Left Column - Program Info */}
              <div className={`lg:col-span-2 ${activeGradeData.lightColor} rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 xl:p-10 border-2 ${activeGradeData.borderColor} relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-white/40 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${activeGradeData.color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl`}>
                      <activeGradeData.icon size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">{activeGradeData.label}</h3>
                      <span className={`text-xs sm:text-sm font-bold ${activeGradeData.textColor} bg-white/80 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full`}>{activeGradeData.age}</span>
                    </div>
                  </div>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                    {activeGradeData.description}
                  </p>

                  {/* Stats Grid - Responsive: 3 cols on mobile, better spacing on larger */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
                    <div className="bg-white/80 rounded-lg sm:rounded-xl p-2 sm:p-4 text-center shadow-sm">
                      <Users size={16} className={`sm:w-5 sm:h-5 mx-auto mb-1 sm:mb-2 ${activeGradeData.textColor}`} />
                      <p className="text-sm sm:text-lg font-bold text-slate-900">{activeGradeData.stats.ratio}</p>
                      <p className="text-[10px] sm:text-xs text-slate-600">Teacher Ratio</p>
                    </div>
                    <div className="bg-white/80 rounded-lg sm:rounded-xl p-2 sm:p-4 text-center shadow-sm">
                      <Star size={16} className={`sm:w-5 sm:h-5 mx-auto mb-1 sm:mb-2 ${activeGradeData.textColor}`} />
                      <p className="text-sm sm:text-lg font-bold text-slate-900">{activeGradeData.stats.students}</p>
                      <p className="text-[10px] sm:text-xs text-slate-600">Class Size</p>
                    </div>
                    <div className="bg-white/80 rounded-lg sm:rounded-xl p-2 sm:p-4 text-center shadow-sm">
                      <Clock size={16} className={`sm:w-5 sm:h-5 mx-auto mb-1 sm:mb-2 ${activeGradeData.textColor}`} />
                      <p className="text-[10px] sm:text-xs font-bold text-slate-900 leading-tight">{activeGradeData.stats.hours}</p>
                      <p className="text-[10px] sm:text-xs text-slate-600">School Hours</p>
                    </div>
                  </div>

                  {/* Features - Responsive grid */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className={`font-bold text-sm sm:text-base ${activeGradeData.textColor} mb-3 sm:mb-4 flex items-center gap-2`}>
                      <span className={`w-2 h-2 rounded-full ${activeGradeData.color}`}></span>
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {activeGradeData.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-700 bg-white/70 px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-sm">
                          <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${activeGradeData.color}`}></div>
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Activities */}
                  <div>
                    <h4 className={`font-bold text-sm sm:text-base ${activeGradeData.textColor} mb-3 sm:mb-4 flex items-center gap-2`}>
                      <span className={`w-2 h-2 rounded-full ${activeGradeData.color}`}></span>
                      Co-Curricular Activities
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {activeGradeData.activities.map((activity, idx) => (
                        <span key={idx} className="text-xs sm:text-sm bg-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-slate-700 border border-slate-200 font-medium shadow-sm">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - FAQs */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 lg:mb-8">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 ${activeGradeData.color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg`}>
                    <HelpCircle size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">Frequently Asked Questions</h3>
                    <span className={`text-xs sm:text-sm font-semibold ${activeGradeData.textColor}`}>About {activeGradeData.label}</span>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {currentFaqs.map((faq, idx) => (
                    <div 
                      key={idx} 
                      className={`bg-slate-50 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 border-2 ${
                        openFaq === idx ? `${activeGradeData.borderColor} bg-white shadow-lg` : 'border-transparent hover:border-slate-200'
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                        className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-5 text-left transition-colors group"
                      >
                        <div className="flex items-center gap-3 sm:gap-4 pr-3 sm:pr-4">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                            openFaq === idx ? `${activeGradeData.color} text-white shadow-lg` : 'bg-slate-200 text-slate-600 group-hover:bg-slate-300'
                          }`}>
                            <faq.icon size={16} className="sm:w-5 sm:h-5" />
                          </div>
                          <span className="font-bold text-slate-800 text-sm sm:text-base leading-snug">{faq.question}</span>
                        </div>
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                          openFaq === idx ? `${activeGradeData.color} text-white rotate-180` : 'bg-slate-200 text-slate-600'
                        }`}>
                          {openFaq === idx ? <Minus size={16} className="sm:w-5 sm:h-5" /> : <Plus size={16} className="sm:w-5 sm:h-5" />}
                        </div>
                      </button>

                      <div className={`overflow-hidden transition-all duration-500 ${
                        openFaq === idx ? 'max-h-[500px]' : 'max-h-0'
                      }`}>
                        <div className="px-3 sm:px-4 lg:px-5 pb-3 sm:pb-4 lg:pb-5 pl-14 sm:pl-[72px] lg:pl-[76px]">
                          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact CTA - Responsive */}
                <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl sm:rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                  <div className="text-center sm:text-left">
                    <h4 className="font-bold text-base sm:text-lg mb-0.5 sm:mb-1">Still have questions?</h4>
                    <p className="text-slate-300 text-xs sm:text-sm">Our admission team is here to help you</p>
                  </div>
                  <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-slate-900 rounded-full font-semibold text-sm hover:bg-slate-100 transition-colors shadow-lg">
                    <PhoneCall size={16} className="sm:w-[18px] sm:h-[18px]" />
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Spacer */}
      <div className="h-12 sm:h-16 lg:h-20 bg-gradient-to-t from-slate-50 to-white"></div>
    </section>
  );
};

export default HeroSection;