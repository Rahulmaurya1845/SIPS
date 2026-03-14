import React from "react";
import img1 from "../../assets/1.jpg";

import {
  CheckCircle,
  Globe,
  BookOpen,
  Trophy,
  Users,
  Sparkles,
  ArrowRight,
  Star,
  School,
  Quote,
  GraduationCap,
  Award,
  Heart,
  Lightbulb,
  Target,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Home = () => {
  return (
    <div className="overflow-hidden">

      {/* ================= PREMIUM HERO SECTION ================= */}
      <section className="relative w-full min-h-screen py-12 sm:py-16 lg:py-20 overflow-hidden">

        {/* Advanced Premium Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>

        {/* Animated Mesh Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-amber-200/30 to-orange-200/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-br from-violet-200/30 to-purple-200/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
          <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-[120px]"></div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 right-10 sm:right-20 animate-bounce" style={{ animationDuration: '3s' }}>
          <Star className="text-amber-300 w-6 h-6 sm:w-8 sm:h-8 fill-amber-100" />
        </div>
        <div className="absolute bottom-32 left-10 sm:left-20 animate-pulse">
          <Sparkles className="text-rose-300 w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-pulse delay-700">
          <Heart className="text-pink-300 w-4 h-4 sm:w-5 sm:h-5 fill-pink-100" />
        </div>
        <div className="absolute bottom-20 right-1/3 animate-bounce" style={{ animationDuration: '4s' }}>
          <Award className="text-violet-300 w-5 h-5 sm:w-6 sm:h-6" />
        </div>

        {/* Content Container */}
        <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

          {/* Main Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[calc(100vh-8rem)]">

            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left order-2 lg:order-1 pt-8 lg:pt-0">

              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-amber-200/50 shadow-lg shadow-amber-100/30 mb-6 animate-fade-in">
                <School size={18} className="text-amber-500" />
                <span className="text-amber-600 font-bold uppercase text-xs sm:text-sm tracking-widest">
                  Sahodara International
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-slate-800 leading-tight mb-4 sm:mb-6">
                Where Education <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">
                  Meets Innovation
                </span>
              </h1>

              {/* Description */}
              <p className="text-slate-500 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
                Sahodara International Public School shapes future leaders through innovation, 
                creativity, discipline, and global exposure. We nurture excellence beyond classrooms.
              </p>

              {/* Premium Features Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {[
                  { icon: <BookOpen size={18} />, text: "Smart Curriculum", color: "from-blue-400 to-cyan-400", bg: "bg-blue-50" },
                  { icon: <Globe size={18} />, text: "Global Exposure", color: "from-emerald-400 to-teal-400", bg: "bg-emerald-50" },
                  { icon: <Trophy size={18} />, text: "Sports Excellence", color: "from-amber-400 to-orange-400", bg: "bg-amber-50" },
                  { icon: <Users size={18} />, text: "Holistic Growth", color: "from-rose-400 to-pink-400", bg: "bg-rose-50" },
                  { icon: <Lightbulb size={18} />, text: "Innovation Lab", color: "from-violet-400 to-purple-400", bg: "bg-violet-50" },
                  { icon: <Target size={18} />, text: "Moral Values", color: "from-indigo-400 to-blue-400", bg: "bg-indigo-50" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl ${item.bg} border border-white/60 hover:bg-white hover:shadow-md transition-all duration-300 group cursor-pointer`}
                  >
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <span className="font-semibold text-slate-700 text-xs sm:text-sm group-hover:text-slate-900 transition-colors">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-orange-200 hover:scale-105 transition-all duration-300 text-sm sm:text-base group">
                  Explore Programs
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center justify-center gap-2 bg-white text-slate-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold border-2 border-slate-200 hover:border-amber-400 hover:text-amber-600 hover:shadow-lg transition-all duration-300 text-sm sm:text-base">
                  <Phone size={18} />
                  Contact Us
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-6 sm:mt-8 pt-6 border-t border-slate-200/60">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-300 to-orange-300 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm text-slate-500 font-medium">2,500+ Students</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-sm font-bold text-slate-700">4.9/5</span>
                  <span className="text-xs text-slate-400">Rating</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs sm:text-sm text-slate-500">CBSE Affiliated</span>
                </div>
              </div>

            </div>

            {/* RIGHT CONTENT - IMAGE & PREMIUM CARD */}
            <div className="relative order-1 lg:order-2 flex flex-col items-center lg:items-end">

              {/* Main Image Container */}
              <div className="relative w-full max-w-lg lg:max-w-none lg:w-full">
                
                {/* Background Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-200/40 via-orange-200/40 to-rose-200/40 rounded-3xl blur-2xl"></div>
                
                {/* Image Wrapper */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border-4 border-white">
                  <img
                    src={img1}
                    alt="Students at Sahodara International School"
                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                  {/* Floating Stats on Image */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-md rounded-xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg border border-white/50">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center">
                        <CheckCircle className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-xs sm:text-sm">25+ Years</p>
                        <p className="text-[10px] sm:text-xs text-slate-500">Excellence</p>
                      </div>
                    </div>
                  </div>

                  {/* Location Badge */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg border border-white/50">
                    <div className="flex items-center gap-2">
                      <MapPin className="text-rose-500 w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-700">India</span>
                    </div>
                  </div>
                </div>

                {/* ================= PREMIUM QUOTE CARD ================= */}
                {/* Positioned Below Image on Mobile, Beside on Desktop */}
                <div className="relative mt-6 lg:mt-0 lg:absolute lg:-bottom-6 lg:-left-12 xl:-left-20 w-full lg:w-[380px] xl:w-[420px] z-20">
                  
                  <div className="bg-white/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-2xl shadow-slate-200/60 border border-white/80 relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
                    
                    {/* Decorative Elements */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full opacity-60"></div>
                    <Quote className="absolute top-4 right-4 w-8 h-8 sm:w-10 sm:h-10 text-amber-200 rotate-12" />
                    
                    {/* Quote Content */}
                    <div className="relative">
                      <p className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed font-medium italic mb-4 sm:mb-6 pl-3 sm:pl-4 border-l-4 border-amber-400">
                        "Education is not preparation for life; education is life itself. We shape tomorrow's leaders today."
                      </p>
                    </div>

                    {/* School Identity */}
                    <div className="flex items-center gap-3 sm:gap-4 pt-4 border-t border-slate-100">
                      <div className="relative flex-shrink-0">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-400 via-orange-400 to-rose-400 flex items-center justify-center shadow-lg shadow-orange-200 group-hover:scale-110 transition-transform duration-300">
                          <GraduationCap className="text-white w-6 h-6 sm:w-7 sm:h-7" />
                        </div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-rose-400 rounded-xl sm:rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <h4 className="font-bold text-slate-800 text-sm sm:text-base truncate">
                            Sahodara International
                          </h4>
                          <Award className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 flex-shrink-0" />
                        </div>
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                          Public School
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400 fill-amber-400" />
                            ))}
                          </div>
                          <span className="text-[10px] sm:text-xs text-slate-400 ml-1">Since 1999</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Gradient Line */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400"></div>
                  </div>

                  {/* Decorative Floating Elements around Card */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-amber-300 rounded-full opacity-60 animate-pulse hidden lg:block"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-rose-300 rounded-full opacity-60 animate-pulse delay-500 hidden lg:block"></div>
                </div>

              </div>

            </div>

          </div>


        </div>

      </section>

    </div>
  );
};

export default Home;