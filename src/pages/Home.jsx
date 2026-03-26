import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Facilities from "../components/Facilities/Facilities";
import AboutSection from "../components/AboutSection/AboutSection";
import CampusShowcase from "../components/homes/CampusShowcase";
import SmartSchoolApp from "../components/school/SmartSchoolApp";

import img1 from "../assets/homehero/1.png";
import img2 from "../assets/homehero/2.png";
import img3 from "../assets/homehero/3.png";

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
  Shield,
  ArrowRight,
  Menu,
  ChevronRight,
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const heroImages = [
    { src: img1, alt: "School Campus" },
    { src: img2, alt: "Classroom" },
    { src: img3, alt: "Sports" },
  ];

  const [current, setCurrent] = useState(0);

  // Preload images
  useEffect(() => {
    heroImages.forEach((img) => {
      const image = new Image();
      image.src = img.src;
    });
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  const features = [
    { icon: BookOpen, text: "Smart Digital Classrooms", count: "40+" },
    { icon: Award, text: "Safe & Secure Campus", count: "CCTV" },
    { icon: Users, text: "Sports & Extracurriculars", count: "25+" },
    { icon: GraduationCap, text: "Expert Faculty", count: "50+" }
  ];

  const quickLinks = [
    { name: "Admissions", path: "/admissions" },
    { name: "About Us", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* ================= PREMIUM NAVIGATION ================= */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg">
                <School className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Sahodara
                </h1>
                <p className="text-xs text-orange-600 font-medium">School</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {quickLinks.map((link) => (
                <motion.button
                  key={link.name}
                  whileHover={{ y: -2 }}
                  onClick={() => navigate(link.path)}
                  className="text-gray-700 hover:text-orange-600 font-medium text-sm transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/admissions")}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-shadow"
              >
                Apply Now
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => {
                      navigate(link.path);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-700 font-medium transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
                <button
                  onClick={() => {
                    navigate("/admissions");
                    setIsMenuOpen(false);
                  }}
                  className="w-full mt-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
                >
                  Apply Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ================= FULLSCREEN HERO - NO DIALOG BOX ================= */}
      <section className="relative w-full h-[100svh] min-h-[600px] overflow-hidden bg-gray-900">
        
        {/* Background Images with Crossfade */}
        <div className="absolute inset-0">
          {heroImages.map((img, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{ 
                opacity: index === current ? 1 : 0,
                scale: index === current ? 1 : 1.1
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          ))}
          
          {/* Gradient Overlays for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center pt-16 sm:pt-20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg mb-4 sm:mb-6"
              >
                <Sparkles className="w-4 h-4" />
                Admissions Open 2026-27
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6"
              >
                <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  Shaping Young
                </span>
                <br />
                <span className="text-white drop-shadow-lg">Minds for a</span>
                <br />
                <span className="text-white drop-shadow-lg">Brighter Future</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 sm:mb-8 max-w-lg leading-relaxed"
              >
                Empowering students with knowledge, creativity, and strong values from Nursery to Class 10th. Where learning meets excellence.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate("/admissions")}
                  className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold text-sm sm:text-base shadow-xl flex items-center justify-center gap-2"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate("/about")}
                  className="group border-2 border-white/80 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold text-sm sm:text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  Virtual Tour
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex items-center gap-3 mt-6 sm:mt-8"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-white/20 flex items-center justify-center">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-300">
                  <span className="font-bold text-white">1000+</span> Happy Parents
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CBSE Badge - Top Right */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute top-20 sm:top-24 right-4 sm:right-6 lg:right-12 z-20"
        >
          <div className="bg-white/95 backdrop-blur-md rounded-xl px-3 py-2 sm:px-4 sm:py-3 shadow-xl border border-white/20 flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-xs sm:text-sm">CBSE Affiliated</p>
              <p className="text-gray-600 text-[10px] sm:text-xs">Nursery to Class X</p>
            </div>
          </div>
        </motion.div>

        {/* Slider Indicators - Bottom Center */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current ? "w-8 bg-orange-500" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      <AboutSection />
      <SmartSchoolApp />
      <Facilities />

                 {/* ================= VIDEO SECTION - OPTIMIZED ================= */}
      <section 
        ref={sectionRef}
        className="relative py-16 sm:py-20 lg:py-32 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-200 mb-4">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-bold text-slate-600 uppercase">Virtual Tour</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-3">
              Experience Our{" "}
              <span className="text-indigo-600">Campus</span>
            </h2>
            <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* Video Player - Optimized */}
            <div className="lg:col-span-8">
              <div className="relative rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden bg-slate-900">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/_iBEug-L7j4?rel=0&enablejsapi=1"
                    title="Campus Tour"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Sidebar - Static, no animations */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-100">
                <h4 className="text-base font-bold mb-3 flex items-center gap-2">
                  <School className="w-5 h-5 text-indigo-600" />
                  Campus Highlights
                </h4>
                <div className="space-y-2">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                      <div className="flex items-center gap-3">
                        <feature.icon className="w-4 h-4 text-indigo-600" />
                        <span className="text-sm font-medium">{feature.text}</span>
                      </div>
                      <span className="text-xs font-bold text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full">
                        {feature.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-4 sm:p-6 text-white">
                <h4 className="text-lg font-bold mb-2">Ready to Join?</h4>
                <p className="text-white/90 text-sm mb-4">Admissions open for Nursery to Class X</p>
                <button
                  onClick={() => navigate("/admissions")}
                  className="w-full py-3 rounded-lg bg-white text-indigo-600 font-bold text-sm hover:bg-slate-100 transition-colors"
                >
                  Book a Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CampusShowcase />
    </>
  );
};

export default Home;