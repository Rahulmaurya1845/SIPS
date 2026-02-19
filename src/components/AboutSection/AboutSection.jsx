import React from "react";
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
} from "lucide-react";

const Home = () => {
  return (
    <div className="overflow-hidden">

      {/* ================= PREMIUM SECTION ================= */}
      <section className="relative w-full py-16 sm:py-20 lg:py-28 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]"></div>

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-60 sm:w-96 h-60 sm:h-96 bg-blue-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-60 sm:w-96 h-60 sm:h-96 bg-purple-500/20 rounded-full blur-[120px]"></div>

        {/* Content Wrapper */}
        <div className="relative w-full px-5 sm:px-8 lg:px-20">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* LEFT SIDE */}
            <div className="text-center lg:text-left">

              <div className="flex justify-center lg:justify-start items-center gap-2 text-orange-400 font-semibold uppercase mb-3 sm:mb-4 text-xs sm:text-sm tracking-widest">
                <School size={18} />
                Welcome to Sahodara International Public School
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-snug sm:leading-tight mb-6">
                Where Education <br />
                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Meets Innovation
                </span>
              </h2>

              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 max-w-full lg:max-w-xl mx-auto lg:mx-0">
                Sahodara International Public School shapes future leaders
                through innovation, creativity, discipline, and global exposure.
                We nurture excellence beyond classrooms.
              </p>

              {/* FEATURES */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-10">
                {[
                  { icon: <BookOpen size={20} />, text: "Modern Smart Curriculum" },
                  { icon: <Globe size={20} />, text: "Global Exposure" },
                  { icon: <Trophy size={20} />, text: "Sports Excellence" },
                  { icon: <Users size={20} />, text: "Holistic Development" },
                  { icon: <Sparkles size={20} />, text: "Innovation & Creativity" },
                  { icon: <Star size={20} />, text: "Strong Moral Foundation" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 group cursor-pointer justify-center sm:justify-start p-2 sm:p-0 rounded-lg hover:bg-white/10 transition duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition duration-300 border border-white/20 flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="font-semibold text-white group-hover:text-orange-400 transition duration-300 text-sm sm:text-base">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* BUTTON */}
              <div className="flex justify-center lg:justify-start">
                <button className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-black px-5 sm:px-7 py-2 sm:py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 text-sm sm:text-base">
                  Learn More About Us
                  <ArrowRight size={18} />
                </button>
              </div>

            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="relative group mt-10 lg:mt-0">

              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80"
                alt="Students learning in classroom"
                className="rounded-2xl sm:rounded-3xl shadow-2xl w-full transform group-hover:scale-105 transition duration-500 border border-white/20"
              />

              {/* QUOTE CARD (overlay, smaller and perfect alignment) */}
              <div className="absolute bottom-4 sm:-bottom-16 left-1/2 sm:left-10 transform -translate-x-1/2 sm:translate-x-0 bg-white/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-2xl w-10/12 sm:w-[320px]">
                <p className="italic text-gray-800 mb-3 sm:mb-5 leading-relaxed text-sm sm:text-base">
                  "Education builds character, confidence, and leadership for life."
                </p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-200 rounded-full flex items-center justify-center font-bold text-orange-700 text-sm sm:text-base flex-shrink-0">
                    SK
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">
                      Mrs. Sunita Kapoor
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Principal
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="hidden sm:flex absolute -top-6 -right-6 bg-white/90 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-3 rounded-2xl shadow-xl items-center gap-2 sm:gap-3">
                <CheckCircle className="text-green-500" size={18} />
                <div>
                  <p className="font-bold text-gray-900 text-xs sm:text-sm">25+ Years</p>
                  <p className="text-[10px] sm:text-xs text-gray-500">Of Excellence</p>
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
