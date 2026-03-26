import React, { useState, useEffect, useRef } from "react";
import { 
  Trophy, 
  Briefcase, 
  Shield, 
  DollarSign, 
  Microscope, 
  AlarmClock, 
  BookOpen, 
  Home, 
  Users,
  Sparkles,
  Star,
  Zap,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Target,
  Award,
  Gem,
  Crown
} from "lucide-react";

const facilitiesData = [
  { 
    id: 1, 
    title: "Expert Faculty", 
    subtitle: "World-Class Educators",
    color: "#6366f1", 
    gradient: "from-indigo-500 to-purple-600",
    icon: <Trophy size={28} />, 
    description: "Learn from highly experienced and dedicated teachers who bring passion and expertise to every lesson.",
    features: ["PhD Qualified Teachers", "1:15 Teacher-Student Ratio", "Regular Training Programs", "Personalized Mentorship"],
    stat: "50+ Experts"
  },
  { 
    id: 2, 
    title: "Computer Lab", 
    subtitle: "Future-Ready Technology",
    color: "#8b5cf6", 
    gradient: "from-violet-500 to-fuchsia-600",
    icon: <Briefcase size={28} />, 
    description: "State-of-the-art computing facilities with latest hardware and software for practical learning.",
    features: ["100+ Modern PCs", "Gigabit Internet", "Coding Labs", "AI & Robotics Setup"],
    stat: "5 Labs"
  },
  { 
    id: 3, 
    title: "Science Labs", 
    subtitle: "Discovery & Innovation",
    color: "#06b6d4", 
    gradient: "from-cyan-500 to-blue-600",
    icon: <Microscope size={28} />, 
    description: "Fully equipped laboratories for hands-on experiments and scientific exploration.",
    features: ["Advanced Chemistry Lab", "Physics Research Center", "Biology & Life Sciences", "Safety Certified"],
    stat: "3 Centers"
  },
  { 
    id: 4, 
    title: "Smart Classes", 
    subtitle: "Digital Learning",
    color: "#f43f5e", 
    gradient: "from-rose-500 to-pink-600",
    icon: <Lightbulb size={28} />, 
    description: "Interactive classrooms equipped with cutting-edge technology for immersive learning.",
    features: ["4K Interactive Boards", "Virtual Reality Labs", "AI-Powered Learning", "Cloud Integration"],
    stat: "40+ Rooms"
  },
  { 
    id: 5, 
    title: "Library", 
    subtitle: "Knowledge Hub",
    color: "#f97316", 
    gradient: "from-orange-500 to-amber-600",
    icon: <BookOpen size={28} />, 
    description: "Extensive collection of physical and digital resources for comprehensive learning.",
    features: ["50,000+ Books", "Digital Archives", "Research Databases", "Silent Study Zones"],
    stat: "24/7 Open"
  },
  { 
    id: 6, 
    title: "RO Water", 
    subtitle: "Health & Safety",
    color: "#3b82f6", 
    gradient: "from-blue-500 to-cyan-500",
    icon: <Shield size={28} />, 
    description: "Pure drinking water facilities with advanced purification systems across campus.",
    features: ["UV + RO Purification", "Water Quality Testing", "Cool & Clean Supply", "Eco-Friendly"],
    stat: "15 Stations"
  },
  { 
    id: 7, 
    title: "CCTV Security", 
    subtitle: "24/7 Surveillance",
    color: "#eab308", 
    gradient: "from-yellow-500 to-orange-500",
    icon: <Target size={28} />, 
    description: "Comprehensive security coverage ensuring student safety at all times.",
    features: ["200+ Cameras", "AI Threat Detection", "Emergency Response", "Secure Campus"],
    stat: "100% Coverage"
  },
  { 
    id: 8, 
    title: "Extra Classes", 
    subtitle: "Beyond Curriculum",
    color: "#22c55e", 
    gradient: "from-green-500 to-emerald-600",
    icon: <Zap size={28} />, 
    description: "Additional support classes to strengthen concepts and boost confidence.",
    features: ["Remedial Support", "Advanced Olympiad Prep", "Weekend Sessions", "Doubt Clearing"],
    stat: "Daily"
  },
  { 
    id: 9, 
    title: "Transport", 
    subtitle: "Safe Commute",
    color: "#ec4899", 
    gradient: "from-pink-500 to-rose-600",
    icon: <Users size={28} />, 
    description: "Safe and monitored transport services with GPS tracking for all students.",
    features: ["GPS Enabled Buses", "Lady Attendants", "Route Optimization", "Real-time Tracking"],
    stat: "25 Buses"
  },
];

const Facilities = () => {
  const sectionRef = useRef();
  const [sectionVisible, setSectionVisible] = useState(false);
  const [expandedCards, setExpandedCards] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setSectionVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Floating Decorative Icons */}
      <div className="absolute top-32 right-20 animate-bounce" style={{ animationDuration: '4s' }}>
        <Star className="w-8 h-8 text-amber-300 fill-amber-100" />
      </div>
      <div className="absolute bottom-40 left-20 animate-pulse">
        <Sparkles className="w-6 h-6 text-indigo-300" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-pulse delay-700">
        <Gem className="w-5 h-5 text-rose-300" />
      </div>
      <div className="absolute bottom-32 right-32 animate-bounce" style={{ animationDuration: '5s' }}>
        <Crown className="w-6 h-6 text-violet-300" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Premium Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-indigo-200 shadow-lg shadow-indigo-100 mb-6">
            <Award className="w-5 h-5 text-indigo-500" />
            <span className="text-indigo-600 font-bold uppercase text-xs sm:text-sm tracking-widest">
              World-Class Amenities
            </span>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 mb-4">
            Our <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-500 bg-clip-text text-transparent">Premium</span> Facilities
          </h2>
          
          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-slate-500 text-base sm:text-lg leading-relaxed">
            Experience excellence with our state-of-the-art infrastructure designed to nurture talent, 
            foster innovation, and ensure holistic development.
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8">
            {[
              { value: "50+", label: "Expert Faculty", color: "text-indigo-500" },
              { value: "9", label: "Premium Labs", color: "text-purple-500" },
              { value: "25+", label: "Buses", color: "text-rose-500" },
              { value: "100%", label: "Safety", color: "text-amber-500" },
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm">
                <span className={`text-xl sm:text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                <span className="text-xs sm:text-sm text-slate-500 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {facilitiesData.map((facility, index) => {
            const isExpanded = expandedCards[facility.id] || false;
            const isHovered = hoveredCard === facility.id;
            const isActive = activeCard === facility.id;

            return (
              <div
                key={facility.id}
                className={`relative group rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${index * 0.08}s`,
                }}
                onMouseEnter={() => setHoveredCard(facility.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Background with Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${facility.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Glassmorphism Card */}
                <div className="relative h-full bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-6 sm:p-8 shadow-lg shadow-slate-200/50 group-hover:shadow-2xl group-hover:shadow-indigo-200/30 transition-all duration-500 group-hover:border-white/80">
                  
                  {/* Floating Particles */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-white/40 animate-pulse"
                        style={{
                          top: `${20 + Math.random() * 60}%`,
                          left: `${10 + Math.random() * 80}%`,
                          animationDelay: `${i * 0.3}s`,
                          animationDuration: `${2 + Math.random() * 2}s`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Top Section - Icon & Stats */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Icon Container */}
                    <div className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${facility.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      {facility.icon}
                      <div className="absolute -inset-2 bg-gradient-to-r from-white/20 to-white/40 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Stat Badge */}
                    <div className="px-3 py-1.5 rounded-full bg-slate-100/80 border border-slate-200 group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300">
                      <span className="text-xs font-bold text-slate-600 group-hover:text-white transition-colors">
                        {facility.stat}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Subtitle */}
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 group-hover:text-white/70 mb-1 transition-colors">
                      {facility.subtitle}
                    </p>
                    
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 group-hover:text-white mb-3 transition-colors">
                      {facility.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-slate-500 group-hover:text-white/80 mb-4 line-clamp-2 transition-colors">
                      {facility.description}
                    </p>

                    {/* Expandable Features */}
                    <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <ul className="space-y-2 mb-4">
                        {facility.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-slate-600 group-hover:text-white/90">
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-500 group-hover:text-white" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => toggleExpand(facility.id)}
                      className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                        isExpanded 
                          ? 'bg-white text-slate-800 shadow-md' 
                          : 'bg-slate-100 text-slate-600 group-hover:bg-white/20 group-hover:text-white'
                      }`}
                    >
                      {isExpanded ? (
                        <>Show Less <ArrowRight className="w-4 h-4 rotate-90" /></>
                      ) : (
                        <>Explore More <ArrowRight className="w-4 h-4" /></>
                      )}
                    </button>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-full pointer-events-none"></div>
                </div>

                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 shadow-lg">
            <p className="text-slate-600 font-medium px-4">
              Want to see our facilities in person?
            </p>
            <button className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              Book a Tour
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Facilities;