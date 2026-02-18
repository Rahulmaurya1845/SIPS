import React, { useState, useEffect, useRef } from "react";
import Facilities from "../components/Facilities/Facilities";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
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
    "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=80",
   
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

  // Scroll-triggered animation for Smart School App section
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setShowContent(false); // Reset animation when out of view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && !showContent) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 500); // Reduced delay to 0.5 seconds after section comes into view
      return () => clearTimeout(timer);
    }
  }, [isVisible, showContent]);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden flex items-center pt-16 sm:pt-20 md:pt-24 lg:pt-28">
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-white">
          <div className="max-w-3xl">
            <div className="bg-orange-500 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 inline-block shadow-lg animate-pulse">
              Admissions Open 2026-27
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Shaping Minds,
              </span>
              <br />
              Building Futures
            </h1>

            <p className="text-base sm:text-lg text-gray-200 mb-6 sm:mb-8">
              Empowering students with knowledge, creativity, and strong values
              from Nursery to Class 12.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
              <button
                onClick={() => navigate("/admissions")}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 px-6 sm:px-8 py-3 rounded-full font-semibold hover:scale-105 transition text-sm sm:text-base"
              >
                Apply Now →
              </button>

              <button
                onClick={() => navigate("/about")}
                className="border border-white px-6 sm:px-8 py-3 rounded-full hover:bg-white hover:text-black transition text-sm sm:text-base"
              >
                Explore Campus
              </button>
            </div>
          </div>
        </div>
      </section>

{/* ================= SMART SCHOOL APP ================= */}
{/* ================= SMART SCHOOL APP ================= */}
<section
  ref={sectionRef}
  className="relative py-16 md:py-20 bg-emerald-950 overflow-hidden"
>

  {/* Soft Glow Background */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl"></div>

  {/* Floating Sparkles */}
  <Sparkles
    size={26}
    className="absolute top-10 left-1/4 text-emerald-300 animate-bounce drop-shadow-[0_0_15px_#6ee7b7]"
  />
  <Sparkles
    size={20}
    className="absolute bottom-16 right-1/4 text-teal-300 animate-pulse drop-shadow-[0_0_20px_#2dd4bf]"
  />

  <div className="relative max-w-7xl mx-auto px-6 text-center text-white">

    {/* Heading */}
    <div
      className={`transition-all duration-1000 ${
        showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <Sparkles
          className="text-emerald-300 animate-pulse drop-shadow-[0_0_20px_#6ee7b7]"
          size={30}
        />
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
          Smart School App
        </h2>
        <Sparkles
          className="text-teal-300 animate-bounce drop-shadow-[0_0_20px_#2dd4bf]"
          size={30}
        />
      </div>

      <p className="text-emerald-200 max-w-2xl mx-auto mb-12 text-sm md:text-base">
        Seamless communication and real-time updates that keep parents connected
        with their child’s academic journey.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {[
        {
          icon: <CalendarCheck size={26} />,
          title: "Daily Attendance",
          desc: "Real-time attendance alerts.",
        },
        {
          icon: <FileText size={26} />,
          title: "Homework & Results",
          desc: "Assignments & performance reports.",
        },
        {
          icon: <Bell size={26} />,
          title: "Instant Updates",
          desc: "School notifications anytime.",
        },
        {
          icon: <MessageSquare size={26} />,
          title: "Direct Messaging",
          desc: "Secure parent-teacher chat.",
        },
      ].map((card, index) => (
        <div
          key={index}
          style={{ transitionDelay: `${index * 200}ms` }}
          className={`group bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 
          transition-all duration-700 transform
          hover:-translate-y-3 hover:bg-white/10
          ${
            showContent
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-14"
          }`}
        >
          <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 mb-4 text-black group-hover:scale-110 transition duration-500">
            {card.icon}
          </div>

          <h3 className="text-base font-semibold mb-2">{card.title}</h3>
          <p className="text-emerald-200 text-xs md:text-sm">{card.desc}</p>
        </div>
      ))}

    </div>
  </div>
</section>

      <Facilities />

      {/* ================= PREMIUM YOUTUBE SECTION ================= */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-indigo-100 via-purple-50 to-blue-100 relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-200/30 to-blue-200/30"></div>
          <div className="absolute top-10 left-10 w-32 sm:w-40 h-32 sm:h-40 bg-indigo-300 rounded-full blur-2xl opacity-50"></div>
          <div className="absolute bottom-10 right-10 w-36 sm:w-48 h-36 sm:h-48 bg-purple-300 rounded-full blur-2xl opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 bg-blue-300 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* LEFT CONTENT - Shortened and Balanced */}
          <div className="animate-fade-in-up">
            <div className="flex items-center mb-4">
              <Star className="text-yellow-500 mr-2 animate-spin" size={20} />
              <span className="text-xs sm:text-sm font-semibold text-indigo-600 uppercase tracking-wide">Premium Experience</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-800 leading-tight">
              Immerse in Our <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Vibrant Campus Life</span>
            </h2>

            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
              Discover innovation, excellence, and unforgettable experiences that shape confident leaders. Our campus blends cutting-edge tech with inspiring environments for holistic growth.
            </p>

            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-gray-600">
              <li className="flex items-center">
                <BookOpen className="text-indigo-600 mr-2 sm:mr-3" size={18} />
                <span className="font-medium text-sm sm:text-base">Smart Digital Classrooms</span>
              </li>
              <li className="flex items-center">
                <Award className="text-indigo-600 mr-2 sm:mr-3" size={18} />
                <span className="font-medium text-sm sm:text-base">Safe & Secure Campus</span>
              </li>
              <li className="flex items-center">
                <Users className="text-indigo-600 mr-2 sm:mr-3" size={18} />
                <span className="font-medium text-sm sm:text-base">Sports & Extracurriculars</span>
              </li>
              <li className="flex items-center">
                <GraduationCap className="text-indigo-600 mr-2 sm:mr-3" size={18} />
                <span className="font-medium text-sm sm:text-base">Expert Faculty</span>
              </li>
            </ul>

            <button
              onClick={() => navigate("/contact")}
              className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold hover:scale-110 hover:shadow-2xl transition-all duration-300 shadow-lg group text-sm sm:text-base"
            >
              <span className="group-hover:mr-2 transition-all">Schedule a Visit</span>
              <Play className="inline ml-2 group-hover:animate-pulse" size={16} />
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
                    <div className="bg-white/90 rounded-full p-4 sm:p-6 shadow-lg hover:bg-white transition hover:scale-110">
                      <Play className="text-indigo-600" size={32} />
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
            <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-yellow-400 text-black px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg animate-bounce">
              Watch Now!
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-green-400 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg animate-bounce delay-1000">
              Inspiring!
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;