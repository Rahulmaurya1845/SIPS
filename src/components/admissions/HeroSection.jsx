
import React, { useState, useEffect } from "react";
import img1 from "../../assets/images/admissionheroimg.png";
import { 
  GraduationCap, 
  Phone, 
  Mail,
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
  ArrowUpRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Heart,
  Sparkles,
  Lightbulb
} from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeGrade, setActiveGrade] = useState("kindergarten");
  const [openFaq, setOpenFaq] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navItems = [
    { name: "Home", color: "text-green-500", hover: "hover:text-green-600" },
    { name: "About", color: "text-pink-500", hover: "hover:text-pink-600" },
    { name: "Facilities", color: "text-cyan-500", hover: "hover:text-cyan-600" },
    { name: "Blog", color: "text-yellow-500", hover: "hover:text-yellow-600" },
    { name: "Admission", color: "text-purple-500", hover: "hover:text-purple-600" },
    { name: "Alumni", color: "text-orange-500", hover: "hover:text-orange-600" },
    { name: "Shop", color: "text-red-500", hover: "hover:text-red-600" },
    { name: "Contact", color: "text-blue-500", hover: "hover:text-blue-600" },
  ];

  const gradeLevels = [
    {
      id: "kindergarten",
      icon: Baby,
      label: "Kindergarten",
      age: "2-5 Years",
      color: "bg-pink-500",
      lightColor: "bg-pink-50",
      textColor: "text-pink-500",
      borderColor: "border-pink-200",
      description: "A nurturing environment where young minds explore, play, and learn through interactive activities.",
      features: ["Play-based Learning", "Motor Skills Development", "Social Interaction", "Creative Expression"],
      activities: ["Drawing & Painting", "Story Telling", "Music & Dance", "Outdoor Play"]
    },
    {
      id: "small",
      icon: School,
      label: "Primary School",
      age: "6-10 Years",
      color: "bg-yellow-400",
      lightColor: "bg-yellow-50",
      textColor: "text-yellow-600",
      borderColor: "border-yellow-200",
      description: "Building strong foundations with focus on literacy, numeracy, and holistic development.",
      features: ["Core Subject Mastery", "Reading Programs", "Basic Science", "Art Integration"],
      activities: ["Science Projects", "Reading Club", "Sports Training", "Art Classes"]
    },
    {
      id: "mid",
      icon: Building2,
      label: "Middle School",
      age: "11-13 Years",
      color: "bg-cyan-400",
      lightColor: "bg-cyan-50",
      textColor: "text-cyan-600",
      borderColor: "border-cyan-200",
      description: "Preparing students for higher education with advanced curriculum and critical thinking skills.",
      features: ["Advanced Mathematics", "Science Labs", "Language Skills", "Technology Integration"],
      activities: ["Robotics Club", "Debate Competitions", "Sports Teams", "Drama Club"]
    },
    {
      id: "high",
      icon: GradIcon,
      label: "High School",
      age: "14-17 Years",
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      textColor: "text-purple-600",
      borderColor: "border-purple-200",
      description: "Comprehensive secondary education preparing students for board exams and future careers.",
      features: ["Board Exam Preparation", "Career Counseling", "Advanced Labs", "Leadership Programs"],
      activities: ["Career Workshops", "Internships", "Sports Championships", "Cultural Events"]
    }
  ];

  // Premium Admission Journey Steps
  const admissionSteps = [
    {
      icon: Calendar,
      title: "Schedule a Visit",
      subtitle: "Step 1",
      description: "Book a campus tour to experience our world-class facilities and meet our dedicated faculty members.",
      details: ["Personalized campus tour", "Meet department heads", "Interactive session with teachers"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: BookOpen,
      title: "Submit Application",
      subtitle: "Step 2",
      description: "Complete our streamlined online application form with all required documents.",
      details: ["Online application portal", "Document upload facility", "Application fee payment"],
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      icon: Users,
      title: "Assessment & Interview",
      subtitle: "Step 3",
      description: "Age-appropriate assessment and personal interview to understand your child's potential.",
      details: ["Skill assessment test", "Parent interaction", "Student interview"],
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    },
    {
      icon: Award,
      title: "Admission Confirmation",
      subtitle: "Step 4",
      description: "Receive your acceptance letter and complete the enrollment process.",
      details: ["Admission letter", "Fee structure details", "Welcome kit & orientation"],
      color: "from-rose-500 to-rose-600",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200"
    }
  ];

  // Grade-specific FAQs
  const gradeFaqs = {
    kindergarten: [
      {
        question: "What are the school timings for kindergarten?",
        answer: "Our kindergarten operates from 8:30 AM to 12:30 PM, Monday through Friday. We also offer an optional daycare facility until 5:00 PM for working parents."
      },
      {
        question: "What type of curriculum is followed?",
        answer: "We follow a play-based, child-centered curriculum that focuses on early childhood development through Montessori and Waldorf-inspired methods, aligned with CBSE guidelines."
      },
      {
        question: "How safe are the school transport facilities?",
        answer: "All our vehicles are equipped with GPS tracking, CCTV cameras, first-aid kits, and fire extinguishers. Trained female attendants accompany children, and drivers are verified professionals with years of experience."
      },
      {
        question: "Does learning happen outside the classroom?",
        answer: "Yes! We believe in experiential learning. Children regularly participate in nature walks, garden activities, field trips to parks, and outdoor play sessions that enhance their motor skills and social development."
      },
      {
        question: "What are the qualifications of kindergarten teachers?",
        answer: "Our kindergarten teachers are certified in early childhood education with an average of 8+ years of experience. They are trained in child psychology, first aid, and innovative teaching methodologies."
      },
      {
        question: "What facilities are available for young children?",
        answer: "We offer a dedicated play area, sand pit, splash pool, activity rooms, nap rooms, and a medical room with a full-time nurse. All classrooms are air-conditioned and equipped with child-safe furniture."
      }
    ],
    small: [
      {
        question: "How much experience do teachers have?",
        answer: "Our primary school teachers hold B.Ed or M.Ed degrees with an average teaching experience of 10+ years. They undergo regular professional development training to stay updated with modern teaching techniques."
      },
      {
        question: "What kind of learning is followed in the classroom?",
        answer: "We follow an interactive, activity-based learning approach that combines traditional teaching with digital tools. Emphasis is given on conceptual understanding rather than rote memorization."
      },
      {
        question: "What technology is used in the school?",
        answer: "Smart classrooms with interactive whiteboards, tablets for digital learning, computer labs, and educational apps are integrated into daily lessons to make learning engaging and effective."
      },
      {
        question: "What is the policy for leaving school campus?",
        answer: "For safety reasons, children can only leave with authorized guardians after proper ID verification. Written permission is required for any changes in pickup arrangements."
      },
      {
        question: "How do you assess student progress?",
        answer: "We use continuous comprehensive evaluation (CCE) that includes regular class tests, projects, presentations, and co-curricular activities. No formal exams till Grade 5."
      },
      {
        question: "What facilities are available for primary students?",
        answer: "Facilities include science labs, computer labs, library, art room, music room, dance studio, sports ground, and an auditorium. We also have a counseling center for student well-being."
      }
    ],
    mid: [
      {
        question: "Is the teaching approach child-centered or teacher-centered?",
        answer: "Our approach is primarily child-centered, encouraging active participation, critical thinking, and collaborative learning. Teachers act as facilitators guiding students to discover knowledge."
      },
      {
        question: "How can parents support learning at home?",
        answer: "At school, students learn academic subjects, life skills, and values. We encourage parental involvement through homework, projects, and reading programs that bridge school and home learning."
      },
      {
        question: "What are the safety facilities in school transport?",
        answer: "All transport vehicles have GPS tracking, speed governors, CCTV cameras, emergency exits, and first-aid kits. Female attendants are present, and parents receive real-time location updates via our app."
      },
      {
        question: "What is the campus exit policy?",
        answer: "Students cannot leave campus without written permission from parents and authorization from the principal. Strict security protocols are followed at the gate with ID checks for all visitors."
      },
      {
        question: "What are the qualifications of middle school teachers?",
        answer: "Our middle school teachers are post-graduates in their respective subjects with B.Ed degrees. Many hold additional certifications in specialized teaching methods and have 12+ years of experience."
      },
      {
        question: "How can my child achieve academic success?",
        answer: "We provide personalized attention, remedial classes for weak students, advanced coaching for gifted learners, regular parent-teacher meetings, and comprehensive study materials to ensure academic excellence."
      }
    ],
    high: [
      {
        question: "What teaching approach is used in high school?",
        answer: "Senior classes follow a balanced approach with teacher-led instruction for complex topics and student-centered projects for application. We prepare students for independent learning required in higher education."
      },
      {
        question: "How do you prepare students for competitive exams?",
        answer: "Beyond academics, students learn time management, research skills, and career planning. We assign meaningful homework that reinforces concepts and encourage self-study habits for board preparation."
      },
      {
        question: "What transport safety measures exist for older students?",
        answer: "Transport for high schoolers includes all safety features plus route optimization, attendance tracking via RFID cards, and direct communication lines between parents, drivers, and school authorities."
      },
      {
        question: "What is the policy for leaving campus?",
        answer: "Senior students (Grades 11-12) may leave during free periods with parental consent and valid ID. All exits are logged, and students must sign out at the security desk."
      },
      {
        question: "What are the qualifications of high school teachers?",
        answer: "Our senior faculty includes PhD holders, NET-qualified teachers, and subject matter experts with 15+ years of experience. Many are board examiners and authors of reference books."
      },
      {
        question: "How do you ensure board exam success?",
        answer: "We offer intensive board exam coaching, career counseling, entrance exam preparation (JEE/NEET), mock tests, doubt-clearing sessions, and mentorship programs to ensure excellent results."
      }
    ]
  };

  const activeGradeData = gradeLevels.find(g => g.id === activeGrade);
  const currentFaqs = gradeFaqs[activeGrade];

  return (
    <section className="relative min-h-screen bg-white overflow-hidden font-sans">

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="relative">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-yellow-400 via-pink-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg transform -rotate-6">
                  <GraduationCap size={24} className="text-white lg:w-7 lg:h-7" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 lg:w-4 lg:h-4 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg lg:text-xl font-bold text-slate-800 leading-tight">Sahodara</h1>
                <p className="text-xs lg:text-sm text-slate-500">International School</p>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className={`px-3 xl:px-4 py-2 text-sm font-semibold ${item.color} ${item.hover} transition-colors`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <button 
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} className="text-slate-700" /> : <Menu size={24} className="text-slate-700" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className={`block px-4 py-3 rounded-lg text-sm font-semibold ${item.color} hover:bg-slate-50 transition-colors`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Updated Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="absolute -top-4 -left-4 lg:-top-8 lg:-left-8 w-20 h-20 lg:w-32 lg:h-32 bg-yellow-300 rounded-full opacity-60 blur-2xl"></div>
              <div className="absolute top-10 right-4 lg:top-20 lg:right-10 w-16 h-16 lg:w-24 lg:h-24 bg-pink-300 rounded-full opacity-40 blur-xl"></div>

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-pink-50 rounded-full mb-4 lg:mb-6">
                  <Heart size={14} className="text-pink-500 fill-pink-500" />
                  <span className="text-xs lg:text-sm font-semibold text-pink-600">Where Every Child Matters</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 leading-tight mb-4 lg:mb-6">
                  Begin Your Child&apos;s{" "}
                  <span className="text-pink-500">Journey</span> With Us
                </h1>

                <p className="text-base lg:text-lg xl:text-xl text-slate-600 mb-6 lg:mb-8 max-w-lg leading-relaxed">
                  Join Sahodara International School and give your child the gift of quality education, innovative learning, and a nurturing environment to grow and excel.
                </p>

                <div className="flex flex-wrap gap-3 lg:gap-4">
                  <button className="group flex items-center gap-2 px-6 py-3 lg:px-8 lg:py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl text-sm lg:text-base">
                    Start Admission
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 lg:px-8 lg:py-4 bg-white text-slate-700 rounded-full font-semibold border-2 border-slate-200 hover:border-pink-400 hover:text-pink-500 transition-all text-sm lg:text-base">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-pink-100 flex items-center justify-center">
                      <Play size={14} className="ml-0.5 text-pink-500 lg:w-4 lg:h-4" fill="currentColor" />
                    </div>
                    Watch Campus Tour
                  </button>
                </div>

                {/* Removed Stats Section - No more 100+ Students, 5+ Years, etc. */}
              </div>
            </div>

            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={img1} 
                  alt="Students at Sahodara International School" 
                  className="w-full h-[300px] sm:h-[350px] lg:h-[450px] xl:h-[500px] object-cover"
                />
                <div className="absolute top-4 right-4 lg:top-6 lg:right-6 bg-white/90 backdrop-blur-sm px-4 py-2 lg:px-6 lg:py-3 rounded-full shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm lg:text-base font-semibold text-slate-700">Admissions Open 2025-26</span>
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 -right-3 lg:-top-6 lg:-right-6 w-16 h-16 lg:w-24 lg:h-24 bg-yellow-400 rounded-full opacity-90 flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-xl lg:text-3xl">🎨</span>
              </div>
              <div className="absolute -bottom-3 -left-3 lg:-bottom-4 lg:-left-4 w-14 h-14 lg:w-20 lg:h-20 bg-pink-400 rounded-full opacity-90 flex items-center justify-center shadow-lg">
                <span className="text-lg lg:text-2xl">📚</span>
              </div>
              <div className="absolute top-1/2 -right-4 lg:-right-6 w-12 h-12 lg:w-16 lg:h-16 bg-cyan-400 rounded-full opacity-90 flex items-center justify-center shadow-lg">
                <span className="text-lg lg:text-xl">🎯</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 72C120 64 240 48 360 40C480 32 600 32 720 36C840 40 960 48 1080 52C1200 56 1320 56 1380 56L1440 56V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#F8FAFC"/>
          </svg>
        </div>
      </div>

      {/* PREMIUM ADMISSION JOURNEY SECTION */}
      <div className="bg-slate-50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 lg:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-4">
              <Sparkles size={16} className="text-pink-500" />
              <span className="text-sm font-semibold text-slate-600">Simple & Transparent Process</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3">
              Your Admission <span className="text-pink-500">Roadmap</span>
            </h2>
            <p className="text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
              Four easy steps to join Sahodara International School and unlock your child&apos;s potential
            </p>
          </div>

          {/* Desktop Timeline - Hidden on Mobile */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-emerald-200 via-amber-200 to-rose-200 rounded-full"></div>

              <div className="grid grid-cols-4 gap-6">
                {admissionSteps.map((step, idx) => (
                  <div key={idx} className="relative">
                    {/* Step Card */}
                    <div 
                      className={`relative bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-500 cursor-pointer hover:shadow-xl ${
                        activeStep === idx ? step.borderColor : 'border-transparent'
                      } ${step.bgColor}`}
                      onMouseEnter={() => setActiveStep(idx)}
                    >
                      {/* Step Number Badge */}
                      <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold shadow-lg`}>
                        {idx + 1}
                      </div>

                      {/* Icon */}
                      <div className="mt-6 mb-4 flex justify-center">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                          <step.icon size={28} className="text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="text-center">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{step.subtitle}</span>
                        <h3 className="text-lg font-bold text-slate-800 mt-1 mb-2">{step.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed mb-4">{step.description}</p>

                        {/* Details List */}
                        <ul className="space-y-2 text-left">
                          {step.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-center gap-2 text-sm text-slate-600">
                              <CheckCircle2 size={14} className="text-green-500 flex-shrink-0" />
                              <span>{detail}</span>
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

          {/* Mobile & Tablet Cards */}
          <div className="lg:hidden">
            <div className="grid sm:grid-cols-2 gap-4">
              {admissionSteps.map((step, idx) => (
                <div key={idx} className={`relative bg-white rounded-xl p-5 shadow-md border-l-4 ${step.borderColor}`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <step.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-semibold text-slate-400">{step.subtitle}</span>
                      <h3 className="text-base font-bold text-slate-800 mt-0.5">{step.title}</h3>
                      <p className="text-sm text-slate-600 mt-1 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 lg:mt-10">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transition-all text-base">
              <PhoneCall size={20} />
              Call Admission Office
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 rounded-full font-semibold border-2 border-slate-200 hover:border-pink-400 hover:text-pink-500 transition-all text-base">
              <Calendar size={20} />
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>

      {/* SELECT COURSE & FAQ SECTION */}
      <div className="bg-white py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-4">
              <Lightbulb size={16} className="text-yellow-500" />
              <span className="text-sm font-semibold text-slate-600">Find Your Perfect Fit</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3">
              Explore Our <span className="text-pink-500">Programs</span>
            </h2>
            <p className="text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
              Discover the ideal learning path for your child at Sahodara International School
            </p>
          </div>

          {/* Grade Level Tabs */}
          <div className="flex flex-wrap justify-center gap-2 lg:gap-4 mb-8 lg:mb-10">
            {gradeLevels.map((grade) => (
              <button
                key={grade.id}
                onClick={() => {
                  setActiveGrade(grade.id);
                  setOpenFaq(0);
                }}
                className={`flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-3 rounded-full font-semibold text-sm lg:text-base transition-all duration-300 ${
                  activeGrade === grade.id
                    ? `${grade.color} text-white shadow-lg scale-105`
                    : `bg-slate-100 text-slate-600 hover:bg-slate-200`
                }`}
              >
                <grade.icon size={18} className="lg:w-5 lg:h-5" />
                <span className="hidden sm:inline">{grade.label}</span>
                <span className="sm:hidden">{grade.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Two Column Layout */}
          {activeGradeData && (
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
              {/* Left Column - Grade Information */}
              <div className={`${activeGradeData.lightColor} rounded-2xl p-6 lg:p-8 border-2 ${activeGradeData.borderColor}`}>
                <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                  <div className={`w-12 h-12 lg:w-16 lg:h-16 ${activeGradeData.color} rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg`}>
                    <activeGradeData.icon size={24} className="text-white lg:w-8 lg:h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-800">{activeGradeData.label}</h3>
                    <span className={`text-sm lg:text-base font-semibold ${activeGradeData.textColor}`}>{activeGradeData.age}</span>
                  </div>
                </div>

                <p className="text-slate-700 text-sm lg:text-base leading-relaxed mb-6">
                  {activeGradeData.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className={`font-bold text-sm lg:text-base ${activeGradeData.textColor} mb-3 flex items-center gap-2`}>
                      <span className={`w-2 h-2 rounded-full ${activeGradeData.color}`}></span>
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeGradeData.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 bg-white/60 px-3 py-2 rounded-lg">
                          <span className={`w-1.5 h-1.5 rounded-full ${activeGradeData.color}`}></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className={`font-bold text-sm lg:text-base ${activeGradeData.textColor} mb-3 flex items-center gap-2`}>
                      <span className={`w-2 h-2 rounded-full ${activeGradeData.color}`}></span>
                      Activities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeGradeData.activities.map((activity, idx) => (
                        <span key={idx} className="text-xs lg:text-sm bg-white px-3 py-1.5 rounded-full text-slate-700 border border-slate-200">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Grade-Specific FAQs */}
              <div>
                <div className="flex items-center gap-3 mb-4 lg:mb-6">
                  <div className={`w-10 h-10 lg:w-12 lg:h-12 ${activeGradeData.color} rounded-full flex items-center justify-center`}>
                    <HelpCircle size={20} className="text-white lg:w-6 lg:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold text-slate-800">Frequently Asked Questions</h3>
                    <span className={`text-sm font-semibold ${activeGradeData.textColor}`}>About {activeGradeData.label}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {currentFaqs.map((faq, idx) => (
                    <div 
                      key={idx} 
                      className={`bg-slate-50 rounded-xl overflow-hidden transition-all duration-300 border-2 ${
                        openFaq === idx ? `${activeGradeData.borderColor} bg-white` : 'border-transparent'
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                        className={`w-full flex items-center justify-between p-4 text-left transition-colors`}
                      >
                        <div className="flex items-center gap-3 pr-4">
                          <div className={`w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors flex-shrink-0 ${
                            openFaq === idx ? `${activeGradeData.color} text-white` : 'bg-slate-200 text-slate-600'
                          }`}>
                            {idx + 1}
                          </div>
                          <span className="font-semibold text-slate-800 text-sm lg:text-base leading-snug">{faq.question}</span>
                        </div>
                        <div className={`w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${
                          openFaq === idx ? `${activeGradeData.color} text-white` : 'bg-slate-200 text-slate-600'
                        }`}>
                          {openFaq === idx ? <Minus size={16} /> : <Plus size={16} />}
                        </div>
                      </button>

                      <div className={`overflow-hidden transition-all duration-300 ${
                        openFaq === idx ? 'max-h-96' : 'max-h-0'
                      }`}>
                        <div className="px-4 pb-4 pl-14 lg:pl-16">
                          <p className="text-slate-600 text-sm lg:text-base leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          )}
        </div>
      </div>


   
    </section>
  );
};

export default HeroSection;