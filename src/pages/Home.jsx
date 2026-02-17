// import React from "react";
// import Facilities from "../components/Facilities/Facilities";
// import { useNavigate } from "react-router-dom";
// import {
//   School,
//   BookOpen,
//   GraduationCap,
//   CalendarCheck,
//   FileText,
//   Bell,
//   MessageSquare,
// } from "lucide-react";

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <>
//       {/* ================= HERO SECTION ================= */}
//       <section
//         className="relative min-h-screen flex items-center bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80')",
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-white">
//           <div className="max-w-3xl">

//             {/* Admissions Badge */}
//             <div className="inline-block bg-orange-500 px-4 py-2 sm:px-6 sm:py-2 rounded-full text-sm font-semibold mb-4 sm:mb-6 shadow-lg animate-pulse text-center sm:text-left">
//               Admissions Open for 2026-27
//             </div>

//             {/* Hero Heading */}
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 tracking-tight">
//               <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
//                 Shaping Minds,
//               </span>
//               <br />
//               Building Futures
//             </h1>

//             {/* Hero Paragraph */}
//             <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-10 leading-relaxed">
//               At L.M. Educational Academy, we nurture young minds through
//               academic excellence and character development to prepare
//               students for a bright and successful future.
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
//               <button
//                 onClick={() => navigate("/admissions")}
//                 className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:scale-105 transition duration-300 px-6 sm:px-8 py-3 rounded-full font-semibold shadow-xl w-full sm:w-auto text-center"
//               >
//                 Apply for Admission →
//               </button>

//               <button
//                 onClick={() => navigate("/about")}
//                 className="border border-white hover:bg-white hover:text-black hover:scale-105 transition duration-300 px-6 sm:px-8 py-3 rounded-full font-semibold w-full sm:w-auto text-center"
//               >
//                 Explore Campus
//               </button>
//             </div>

//             {/* Info Badges */}
//             <div className="flex flex-wrap gap-3 sm:gap-6 mt-6 sm:mt-10 justify-center sm:justify-start text-sm sm:text-base">
//               <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md px-3 sm:px-5 py-2 sm:py-3 rounded-full hover:bg-white/20 transition duration-300">
//                 <School size={18} className="text-orange-400" />
//                 <span className="font-medium text-xs sm:text-sm">CBSE Affiliated</span>
//               </div>

//               <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md px-3 sm:px-5 py-2 sm:py-3 rounded-full hover:bg-white/20 transition duration-300">
//                 <BookOpen size={18} className="text-orange-400" />
//                 <span className="font-medium text-xs sm:text-sm">English Medium</span>
//               </div>

//               <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md px-3 sm:px-5 py-2 sm:py-3 rounded-full hover:bg-white/20 transition duration-300">
//                 <GraduationCap size={18} className="text-orange-400" />
//                 <span className="font-medium text-xs sm:text-sm">Nursery - 12th</span>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ================= PREMIUM FACILITIES SECTION ================= */}
//       <section className="bg-gradient-to-br from-[#0B1B34] to-[#13294B] py-16 sm:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-white">

//           <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-400 mb-2 sm:mb-4">
//             Premium Facilities
//           </p>

//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//             Smart School App for Parents
//           </h2>

//           <p className="text-gray-400 max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-16 text-sm sm:text-base">
//             Stay connected with your child's academic progress through our
//             smart digital platform built for transparency and trust.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
//             {/* Card Example */}
//             <div className="group bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 hover:scale-105 transition duration-500 hover:shadow-2xl hover:shadow-blue-500/30 text-left">
//               <div className="bg-blue-600 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl mb-4 sm:mb-6 group-hover:bg-white transition duration-300">
//                 <CalendarCheck className="text-white group-hover:text-blue-600" size={24} />
//               </div>
//               <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
//                 Daily Attendance
//               </h3>
//               <p className="text-gray-400 group-hover:text-gray-200 text-xs sm:text-sm">
//                 Real-time attendance tracking and instant parent notification.
//               </p>
//             </div>

//             {/* Card 2 */}
//             <div className="group bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 hover:scale-105 transition duration-500 hover:shadow-2xl hover:shadow-purple-500/30 text-left">
//               <div className="bg-purple-600 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl mb-4 sm:mb-6 group-hover:bg-white transition duration-300">
//                 <FileText className="text-white group-hover:text-purple-600" size={24} />
//               </div>
//               <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
//                 Homework & Results
//               </h3>
//               <p className="text-gray-400 group-hover:text-gray-200 text-xs sm:text-sm">
//                 Access assignments and exam results instantly.
//               </p>
//             </div>

//             {/* Card 3 */}
//             <div className="group bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 hover:scale-105 transition duration-500 hover:shadow-2xl hover:shadow-green-500/30 text-left">
//               <div className="bg-green-600 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl mb-4 sm:mb-6 group-hover:bg-white transition duration-300">
//                 <Bell className="text-white group-hover:text-green-600" size={24} />
//               </div>
//               <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
//                 School Updates
//               </h3>
//               <p className="text-gray-400 group-hover:text-gray-200 text-xs sm:text-sm">
//                 Important notices and event notifications.
//               </p>
//             </div>

//             {/* Card 4 */}
//             <div className="group bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 hover:scale-105 transition duration-500 hover:shadow-2xl hover:shadow-orange-500/30 text-left">
//               <div className="bg-orange-500 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl mb-4 sm:mb-6 group-hover:bg-white transition duration-300">
//                 <MessageSquare className="text-white group-hover:text-orange-500" size={24} />
//               </div>
//               <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
//                 Direct Messaging
//               </h3>
//               <p className="text-gray-400 group-hover:text-gray-200 text-xs sm:text-sm">
//                 Seamless communication between parents and teachers.
//               </p>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ================= RENDER FACILITIES COMPONENT ================= */}
//       <Facilities />
//     </>
//   );
// };

// export default Home;
import React, { useState, useEffect } from "react";
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
  Play,
  Star,
  Users,
  Award,
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  /* ================= HERO IMAGES ================= */
  const heroImages = [
    "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=1600&q=80",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(slider);
  }, []);

  // State for YouTube video play and restart
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoKey, setVideoKey] = useState(0); // Key to force iframe remount

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    setVideoKey(prev => prev + 1); // Increment key to restart video from beginning
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden flex items-center pt-20">

        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[4000ms] ease-in-out ${
              index === current
                ? "opacity-100 scale-110"
                : "opacity-0 scale-100"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-3xl">

            <div className="bg-orange-500 px-6 py-2 rounded-full text-sm font-semibold mb-6 inline-block shadow-lg animate-pulse">
              Admissions Open 2026-27
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Shaping Minds,
              </span>
              <br />
              Building Futures
            </h1>

            <p className="text-lg text-gray-200 mb-8">
              Empowering students with knowledge, creativity, and strong values
              from Nursery to Class 12.
            </p>

            <div className="flex flex-wrap gap-5">
              <button
                onClick={() => navigate("/admissions")}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
              >
                Apply Now →
              </button>

              <button
                onClick={() => navigate("/about")}
                className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
              >
                Explore Campus
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SMART SCHOOL APP ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Smart School App for Parents
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            Seamless communication, transparency, and digital convenience.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* CARD 1 */}
            <div className="group p-8 rounded-2xl bg-white shadow-lg hover:bg-blue-600 transition duration-300 hover:-translate-y-2">
              <CalendarCheck size={40} className="mb-6 text-blue-600 group-hover:text-white transition" />
              <h3 className="text-xl font-semibold mb-3 group-hover:text-white">
                Daily Attendance
              </h3>
              <p className="text-gray-600 group-hover:text-white">
                Real-time attendance tracking.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="group p-8 rounded-2xl bg-white shadow-lg hover:bg-purple-600 transition duration-300 hover:-translate-y-2">
              <FileText size={40} className="mb-6 text-purple-600 group-hover:text-white transition" />
              <h3 className="text-xl font-semibold mb-3 group-hover:text-white">
                Homework & Results
              </h3>
              <p className="text-gray-600 group-hover:text-white">
                Access assignments & reports.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="group p-8 rounded-2xl bg-white shadow-lg hover:bg-green-600 transition duration-300 hover:-translate-y-2">
              <Bell size={40} className="mb-6 text-green-600 group-hover:text-white transition" />
              <h3 className="text-xl font-semibold mb-3 group-hover:text-white">
                School Updates
              </h3>
              <p className="text-gray-600 group-hover:text-white">
                Notifications & announcements.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="group p-8 rounded-2xl bg-white shadow-lg hover:bg-orange-600 transition duration-300 hover:-translate-y-2">
              <MessageSquare size={40} className="mb-6 text-orange-600 group-hover:text-white transition" />
              <h3 className="text-xl font-semibold mb-3 group-hover:text-white">
                Direct Messaging
              </h3>
              <p className="text-gray-600 group-hover:text-white">
                Connect with teachers instantly.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Facilities />

      {/* ================= PREMIUM YOUTUBE SECTION ================= */}
      <section className="py-24 bg-gradient-to-r from-indigo-100 via-purple-50 to-blue-100 relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-200/30 to-blue-200/30"></div>
          <div className="absolute top-10 left-10 w-40 h-40 bg-indigo-300 rounded-full blur-2xl opacity-50"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-300 rounded-full blur-2xl opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-300 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT - Shortened and Balanced */}
          <div className="animate-fade-in-up">
            <div className="flex items-center mb-4">
              <Star className="text-yellow-500 mr-2 animate-spin" size={24} />
              <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Premium Experience</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
              Immerse in Our <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Vibrant Campus Life</span>
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Discover innovation, excellence, and unforgettable experiences that shape confident leaders. Our campus blends cutting-edge tech with inspiring environments for holistic growth.
            </p>

            <ul className="space-y-3 mb-8 text-gray-600">
              <li className="flex items-center">
                <BookOpen className="text-indigo-600 mr-3" size={20} />
                <span className="font-medium">Smart Digital Classrooms</span>
              </li>
              <li className="flex items-center">
                <Award className="text-indigo-600 mr-3" size={20} />
                <span className="font-medium">Safe & Secure Campus</span>
              </li>
              <li className="flex items-center">
                <Users className="text-indigo-600 mr-3" size={20} />
                <span className="font-medium">Sports & Extracurriculars</span>
              </li>
              <li className="flex items-center">
                <GraduationCap className="text-indigo-600 mr-3" size={20} />
                <span className="font-medium">Expert Faculty</span>
              </li>
            </ul>

            <button
              onClick={() => navigate("/contact")}
              className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:scale-110 hover:shadow-2xl transition-all duration-300 shadow-lg group"
            >
              <span className="group-hover:mr-2 transition-all">Schedule a Visit</span>
              <Play className="inline ml-2 group-hover:animate-pulse" size={18} />
            </button>
          </div>

          {/* RIGHT VIDEO - Now Restarts from Beginning on Each Play */}
          <div className="relative group animate-fade-in-right flex justify-center">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-all duration-500 animate-pulse"></div>
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-500 cursor-pointer">
              {!isVideoPlaying ? (
                <div
                  className="absolute inset-0 bg-cover bg-center rounded-3xl"
                  style={{ backgroundImage: `url(https://img.youtube.com/vi/_iBEug-L7j4/maxresdefault.jpg)` }}
                  onClick={handlePlayVideo}
                >
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-6 shadow-lg hover:bg-white transition hover:scale-110">
                      <Play className="text-indigo-600" size={40} />
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  key={videoKey} // Forces remount on each play, restarting video
                  className="absolute inset-0 w-full h-full rounded-3xl"
                  src="https://www.youtube.com/embed/_iBEug-L7j4?autoplay=1"
                  title="School Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
              Watch Now!
            </div>
            <div className="absolute -bottom-6 -left-6 bg-green-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce delay-1000">
              Inspiring!
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;