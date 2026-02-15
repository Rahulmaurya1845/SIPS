import React from "react";
import Facilities from "../components/Facilities/Facilities";
import { useNavigate } from "react-router-dom";
import {
  School,
  BookOpen,
  GraduationCap,
  CalendarCheck,
  FileText,
  Bell,
  MessageSquare,
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-white">
          <div className="max-w-3xl">

            {/* Admissions Badge */}
            <div className="inline-block bg-orange-500 px-4 py-2 sm:px-6 sm:py-2 rounded-full text-sm font-semibold mb-4 sm:mb-6 shadow-lg animate-pulse text-center sm:text-left">
              Admissions Open for 2026-27
            </div>

            {/* Hero Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Shaping Minds,
              </span>
              <br />
              Building Futures
            </h1>

            {/* Hero Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-10 leading-relaxed">
              At L.M. Educational Academy, we nurture young minds through
              academic excellence and character development to prepare
              students for a bright and successful future.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button
                onClick={() => navigate("/admissions")}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:scale-105 transition duration-300 px-6 sm:px-8 py-3 rounded-full font-semibold shadow-xl w-full sm:w-auto text-center"
              >
                Apply for Admission →
              </button>

              <button
                onClick={() => navigate("/about")}
                className="border border-white hover:bg-white hover:text-black hover:scale-105 transition duration-300 px-6 sm:px-8 py-3 rounded-full font-semibold w-full sm:w-auto text-center"
              >
                Explore Campus
              </button>
            </div>

            {/* Info Badges */}
            <div className="flex flex-wrap gap-3 sm:gap-6 mt-6 sm:mt-10 justify-center sm:justify-start text-sm sm:text-base">
              <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md px-3 sm:px-5 py-2 sm:py-3 rounded-full hover:bg-white/20 transition duration-300">
                <School size={18} className="text-orange-400" />
                <span className="font-medium text-xs sm:text-sm">CBSE Affiliated</span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md px-3 sm:px-5 py-2 sm:py-3 rounded-full hover:bg-white/20 transition duration-300">
                <BookOpen size={18} className="text-orange-400" />
                <span className="font-medium text-xs sm:text-sm">English Medium</span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md px-3 sm:px-5 py-2 sm:py-3 rounded-full hover:bg-white/20 transition duration-300">
                <GraduationCap size={18} className="text-orange-400" />
                <span className="font-medium text-xs sm:text-sm">Nursery - 12th</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PREMIUM FACILITIES SECTION ================= */}
      <section className="bg-gradient-to-br from-[#0B1B34] to-[#13294B] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-white">

          <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-400 mb-2 sm:mb-4">
            Premium Facilities
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Smart School App for Parents
          </h2>

          <p className="text-gray-400 max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-16 text-sm sm:text-base">
            Stay connected with your child's academic progress through our
            smart digital platform built for transparency and trust.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Card Example */}
            <div className="group bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 hover:scale-105 transition duration-500 hover:shadow-2xl hover:shadow-blue-500/30 text-left">
              <div className="bg-blue-600 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl mb-4 sm:mb-6 group-hover:bg-white transition duration-300">
                <CalendarCheck className="text-white group-hover:text-blue-600" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                Daily Attendance
              </h3>
              <p className="text-gray-400 group-hover:text-gray-200 text-xs sm:text-sm">
                Real-time attendance tracking and instant parent notification.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 hover:scale-105 transition duration-500 hover:shadow-2xl hover:shadow-purple-500/30 text-left">
              <div className="bg-purple-600 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl mb-4 sm:mb-6 group-hover:bg-white transition duration-300">
                <FileText className="text-white group-hover:text-purple-600" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                Homework & Results
              </h3>
              <p className="text-gray-400 group-hover:text-gray-200 text-xs sm:text-sm">
                Access assignments and exam results instantly.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 hover:scale-105 transition duration-500 hover:shadow-2xl hover:shadow-green-500/30 text-left">
              <div className="bg-green-600 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl mb-4 sm:mb-6 group-hover:bg-white transition duration-300">
                <Bell className="text-white group-hover:text-green-600" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                School Updates
              </h3>
              <p className="text-gray-400 group-hover:text-gray-200 text-xs sm:text-sm">
                Important notices and event notifications.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 hover:scale-105 transition duration-500 hover:shadow-2xl hover:shadow-orange-500/30 text-left">
              <div className="bg-orange-500 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl mb-4 sm:mb-6 group-hover:bg-white transition duration-300">
                <MessageSquare className="text-white group-hover:text-orange-500" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                Direct Messaging
              </h3>
              <p className="text-gray-400 group-hover:text-gray-200 text-xs sm:text-sm">
                Seamless communication between parents and teachers.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= RENDER FACILITIES COMPONENT ================= */}
      <Facilities />
    </>
  );
};

export default Home;
