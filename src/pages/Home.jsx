import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Facilities from "../components/Facilities/Facilities";
import AboutSection from "../components/AboutSection/AboutSection";
import CampusShowcase from "../components/homes/CampusShowcase";
import SmartSchoolApp from "../components/school/SmartSchoolApp";

import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  School,
  BookOpen,
  GraduationCap,
  Play,
  Star,
  Users,
  Award,
  Clock,
  Calendar,
  MapPin,
  ChevronRight,
  Heart,
  Share2,
  Bookmark,
  Volume2,
  Maximize2
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  
  // Scroll animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

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

  // Video state
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoKey, setVideoKey] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    setVideoKey(prev => prev + 1);
  };

  // Features data
  const features = [
    { icon: BookOpen, text: "Smart Digital Classrooms", count: "50+" },
    { icon: Award, text: "Safe & Secure Campus", count: "24/7" },
    { icon: Users, text: "Sports & Extracurriculars", count: "30+" },
    { icon: GraduationCap, text: "Expert Faculty", count: "100+" }
  ];

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
      
      <AboutSection />
      <SmartSchoolApp />
      <Facilities />

      {/* ================= PREMIUM YOUTUBE SECTION - Advanced Design ================= */}
      <section 
        ref={sectionRef}
        className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            style={{ y, opacity }}
            className="absolute top-20 right-20 w-72 h-72 bg-indigo-200/30 rounded-full blur-[80px]"
          />
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200/20 rounded-full blur-[100px]"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-[120px]" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-lg border border-slate-100 mb-6"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-amber-500" />
              </motion.div>
              <span className="text-sm font-bold text-slate-600 uppercase tracking-widest">Virtual Tour</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              Experience Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                Campus
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Take a virtual journey through our world-class facilities and vibrant learning environment
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT SIDE - Video Player (8 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8"
            >
              {/* Premium Video Card */}
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
                
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
                  {/* Video Container */}
                  <div className="relative aspect-video bg-slate-900">
                    {!isVideoPlaying ? (
                      <motion.div
                        className="absolute inset-0 cursor-pointer"
                        onClick={handlePlayVideo}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Thumbnail with parallax effect */}
                        <motion.div 
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(https://img.youtube.com/vi/_iBEug-L7j4/maxresdefault.jpg)` }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                        
                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            className="relative"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <div className="absolute inset-0 bg-white/30 rounded-full blur-xl" />
                            <div className="relative w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center">
                              <Play className="w-8 h-8 text-indigo-600 ml-1" fill="currentColor" />
                            </div>
                            {/* Ripple effect */}
                            <motion.div
                              className="absolute inset-0 rounded-full border-2 border-white/50"
                              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </motion.div>
                        </div>

                        {/* Duration badge */}
                        <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-lg">
                          <span className="text-white text-sm font-medium">4:32</span>
                        </div>

                        {/* Quality badge */}
                        <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg">
                          <span className="text-slate-900 text-xs font-bold">4K</span>
                        </div>
                      </motion.div>
                    ) : (
                      <iframe
                        key={videoKey}
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/_iBEug-L7j4?autoplay=1&rel=0&modestbranding=1"
                        title="School Campus Tour"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    )}
                  </div>

                  {/* Video Info Bar */}
                  <div className="p-6 bg-white border-t border-slate-100">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-1">Campus Tour 2025</h3>
                        <p className="text-slate-500 text-sm mb-3">A comprehensive walkthrough of our world-class facilities</p>
                        
                        {/* Meta info */}
                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            4:32
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            Jan 2025
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            Main Campus
                          </span>
                          <span className="flex items-center gap-1 text-amber-500">
                            <Star className="w-3.5 h-3.5 fill-current" />
                            4.9 (2.5K reviews)
                          </span>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-2">
                        <motion.button
                          onClick={() => setIsLiked(!isLiked)}
                          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isLiked ? 'bg-red-50 text-red-500' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                        </motion.button>
                        <motion.button
                          onClick={() => setIsSaved(!isSaved)}
                          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isSaved ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
                        </motion.button>
                        <motion.button
                          className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center"
                          whileTap={{ scale: 0.9 }}
                        >
                          <Share2 className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-6 grid grid-cols-3 gap-4"
              >
                {[
                  { label: "Views", value: "125K+", icon: Users },
                  { label: "Likes", value: "8.5K", icon: Heart },
                  { label: "Shared", value: "2.1K", icon: Share2 }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 text-center">
                    <stat.icon className="w-5 h-5 text-indigo-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-slate-900">{stat.value}</div>
                    <div className="text-xs text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE - Features & CTA (4 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-4 space-y-6"
            >
              {/* Features Card */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
                <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <School className="w-5 h-5 text-indigo-600" />
                  Campus Highlights
                </h4>
                
                <div className="space-y-3">
                  {features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx }}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-indigo-50 transition-colors group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow">
                          <feature.icon className="w-5 h-5 text-indigo-600" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">{feature.text}</span>
                      </div>
                      <span className="text-xs font-bold text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full">
                        {feature.count}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-6 text-white">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
                
                <div className="relative">
                  <h4 className="text-xl font-bold mb-2">Ready to Join?</h4>
                  <p className="text-white/80 text-sm mb-6">Schedule a personal campus tour and meet our faculty</p>
                  
                  <motion.button
                    onClick={() => navigate("/admissions")}
                    className="w-full py-3 rounded-xl bg-white text-indigo-600 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book a Visit
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                  
                  <motion.button
                    onClick={() => navigate("/contact")}
                    className="w-full mt-3 py-3 rounded-xl bg-white/10 text-white font-semibold text-sm border border-white/20 hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact Us
                  </motion.button>
                </div>
              </div>

              {/* Testimonial Mini */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm italic mb-4">"The campus tour video gave us a perfect glimpse of what our child's future holds. Absolutely stunning facilities!"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white font-bold">
                    R
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Rahul Sharma</div>
                    <div className="text-xs text-slate-400">Parent of Grade 5 Student</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <CampusShowcase />
    </>
  );
};

export default Home;