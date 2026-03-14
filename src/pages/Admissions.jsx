import React, { useState } from "react";
import ContactSection from "../pages/Contact.jsx"
import {
  Trophy,
  FileText,
  Shield,
  CheckCircle2,
  ArrowRight,
  Star,
  Award,
  Clock,
  Phone,
  MapPin,
  Mail,
  Calendar,
  Users,
  Lightbulb,
  Crown,
  Sparkles,
  Zap,
  Target,
  BookOpen,
  GraduationCap,
  Upload,
  Heart,
  Play,
  X,
  Menu,
  ChevronRight,
  ArrowUpRight,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Share2,
  Microscope,
  Contact as ContactIcon,
} from "lucide-react";

const Admissions = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const stats = [
    { number: "15K+", label: "Students", icon: <Users size={20} />, color: "from-blue-500 to-cyan-500" },
    { number: "98%", label: "Success", icon: <Trophy size={20} />, color: "from-amber-500 to-orange-500" },
    { number: "50+", label: "Faculty", icon: <GraduationCap size={20} />, color: "from-emerald-500 to-teal-500" },
    { number: "25+", label: "Years", icon: <Award size={20} />, color: "from-rose-500 to-pink-500" },
  ];

  const features = [
    {
      title: "Smart Curriculum",
      desc: "AI-powered personalized learning paths that adapt to each student's unique strengths",
      icon: <Lightbulb size={28} />,
      gradient: "from-amber-400 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      stats: "95% Improvement",
    },
    {
      title: "Global Exposure",
      desc: "International exchange programs with 50+ partner schools across 20 countries",
      icon: <Globe size={28} />,
      gradient: "from-blue-400 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      stats: "20+ Countries",
    },
    {
      title: "Sports Excellence",
      desc: "Olympic-grade training facilities with professional coaches",
      icon: <Trophy size={28} />,
      gradient: "from-emerald-400 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      stats: "50+ Medals",
    },
    {
      title: "Innovation Lab",
      desc: "Cutting-edge robotics, AI & coding labs with latest technology",
      icon: <Zap size={28} />,
      gradient: "from-violet-400 to-purple-500",
      bgGradient: "from-violet-50 to-purple-50",
      stats: "100+ Projects",
    },
  ];

  const processSteps = [
    { step: "01", title: "Apply Online", desc: "Complete digital application", time: "5 min", icon: <FileText size={20} />, color: "from-amber-400 to-orange-500" },
    { step: "02", title: "Upload Docs", desc: "Secure document upload", time: "10 min", icon: <Upload size={20} />, color: "from-blue-400 to-cyan-500" },
    { step: "03", title: "Assessment", desc: "Take entrance test", time: "45 min", icon: <Target size={20} />, color: "from-emerald-400 to-teal-500" },
    { step: "04", title: "Interview", desc: "Meet our panel", time: "30 min", icon: <Users size={20} />, color: "from-rose-400 to-pink-500" },
    { step: "05", title: "Enrollment", desc: "Get admission", time: "Instant", icon: <CheckCircle2 size={20} />, color: "from-violet-400 to-purple-500" },
  ];

  const documents = [
    { name: "Birth Certificate", icon: <Calendar size={18} />, color: "bg-amber-100 text-amber-600", status: "Required" },
    { name: "Transfer Certificate", icon: <FileText size={18} />, color: "bg-blue-100 text-blue-600", status: "Required" },
    { name: "Previous Report Card", icon: <GraduationCap size={18} />, color: "bg-emerald-100 text-emerald-600", status: "Required" },
    { name: "Aadhar/ID Proof", icon: <Shield size={18} />, color: "bg-rose-100 text-rose-600", status: "Required" },
    { name: "Passport Photos", icon: <Users size={18} />, color: "bg-cyan-100 text-cyan-600", status: "4 Copies" },
    { name: "Achievement Certs", icon: <Trophy size={18} />, color: "bg-violet-100 text-violet-600", status: "Optional" },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent of Class 8 Student",
      text: "The transformation in my daughter has been incredible. From shy to confident, from average to topper!",
      rating: 5,
      likes: 124,
    },
    {
      name: "Rajesh Kumar",
      role: "Parent of Class 12 Student",
      text: "World-class facilities and dedicated teachers. My son got into IIT, all thanks to Sahodara!",
      rating: 5,
      likes: 89,
    },
    {
      name: "Anita Patel",
      role: "Parent of Class 5 Student",
      text: "The innovation lab is amazing! My daughter built her first robot at age 10. Unbelievable!",
      rating: 5,
      likes: 156,
    },
  ];

  const highlights = [
    { icon: <Shield size={14} />, text: "100% Secure" },
    { icon: <Clock size={14} />, text: "24/7 Support" },
    { icon: <Award size={14} />, text: "Award Winning" },
    { icon: <Star size={14} />, text: "4.9/5 Rated" },
    { icon: <CheckCircle2 size={14} />, text: "CBSE Affiliated" },
    { icon: <Globe size={14} />, text: "Global Network" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* ================= NAVIGATION ================= */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white">
              <Crown size={20} />
            </div>
            <span className="font-bold text-slate-800 text-lg hidden sm:block">Sahodara</span>
          </div>
          
          <div className="hidden md:flex items-center gap-1 bg-slate-100/50 rounded-xl p-1">
            {["Overview", "Process", "Documents", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item.toLowerCase())}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === item.toLowerCase()
                    ? "bg-white text-amber-600 shadow-sm"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium text-sm hover:shadow-lg transition-all">
              Apply Now <ArrowUpRight size={16} />
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-semibold text-sm">
                <Sparkles size={16} />
                Admissions Open 2025-26
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1]">
                Build Your Child's{" "}
                <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">
                  Bright Future
                </span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                Join India's most innovative school. Where traditional values meet modern education.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {stats.map((stat, idx) => (
                  <div key={idx} className="group p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-3`}>
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-black text-slate-800">{stat.number}</div>
                    <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all">
                  Start Application <ArrowRight size={18} />
                </button>
                <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border-2 border-slate-200 text-slate-700 font-semibold hover:border-amber-400 hover:text-amber-600 transition-all">
                  <Play size={18} /> Watch Video
                </button>
              </div>
            </div>

            {/* Right Images */}
            <div className="relative h-[500px] hidden lg:block">
              <div className="absolute top-0 right-0 w-80 h-96 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600" 
                  alt="Student"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <span className="text-white font-bold">Top Student 2024</span>
                  </div>
                  <p className="text-white/80 text-sm">Ananya Singh - Class 12</p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-72 h-80 rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600" 
                  alt="Campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-emerald-400" />
                    <span className="text-white font-bold">Best Infrastructure</span>
                  </div>
                  <p className="text-white/80 text-sm">50,000 sq. ft. campus</p>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-4 shadow-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white">
                    <Trophy size={24} />
                  </div>
                  <div>
                    <p className="font-black text-slate-800 text-lg">#1 Ranked</p>
                    <p className="text-slate-500 text-xs">School in Region</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE SECTION ================= */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-semibold text-sm mb-4">
              <Sparkles size={16} /> World-Class Amenities
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
              Why Choose <span className="text-amber-500">Sahodara?</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Experience education reimagined with world-class facilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="group p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-amber-200 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white shadow-lg`}>
                    {feature.icon}
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${feature.gradient} text-white`}>
                    {feature.stats}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-4">
                  {feature.desc}
                </p>

                <div className="flex items-center gap-2 text-sm font-bold text-slate-700 group-hover:text-amber-600 transition-colors">
                  <span>Learn more</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            ))}
          </div>

        
        </div>
      </section>

      {/* ================= DOCUMENTS & TESTIMONIALS ================= */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10">
            
            {/* Documents */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-lg">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Required Documents</h3>
                  <p className="text-slate-500 text-sm">Prepare these for smooth application</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
                <div className="space-y-3">
                  {documents.map((doc, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-amber-50 border border-slate-100 hover:border-amber-200 transition-all cursor-pointer"
                    >
                      <div className={`w-12 h-12 rounded-xl ${doc.color} flex items-center justify-center`}>
                        {doc.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-800">{doc.name}</h4>
                        <span className="text-xs text-slate-500">{doc.status}</span>
                      </div>
                      <div className="w-8 h-8 rounded-full border-2 border-slate-200 flex items-center justify-center">
                        <CheckCircle2 size={16} className="text-slate-300" />
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                  <Upload size={20} /> Upload Documents
                </button>
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
                  <Heart size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Parent Stories</h3>
                  <p className="text-slate-500 text-sm">Real experiences from our community</p>
                </div>
              </div>

              <div className="space-y-4">
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div>
                        <p className="font-bold text-slate-800">{testimonial.name}</p>
                        <p className="text-xs text-slate-500">{testimonial.role}</p>
                      </div>
                      <div className="flex items-center gap-1 text-slate-400 text-xs">
                        <Heart size={14} className={idx === 0 ? "fill-rose-500 text-rose-500" : ""} />
                        <span>{testimonial.likes}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-bold hover:border-amber-400 hover:text-amber-600 transition-all">
                Read All Reviews
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section - Fixed Import */}
      <ContactSection />
    
      
    </div>
  );
};

export default Admissions;