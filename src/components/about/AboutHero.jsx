import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  ArrowRight, 
  Play, 
  Award, 
  Star, 
  CheckCircle2,
  Sparkles,
  Heart,
  Lightbulb,
  Target
} from "lucide-react";

import schoolImage from "../../assets/abouthero/campus.jpg";

const AboutHero = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  const highlights = [
    "CBSE Affiliated Curriculum",
    "Smart Classrooms & Labs",
    "Sports & Cultural Activities",
    "Safe & Secure Campus"
  ];

  const values = [
    { icon: Heart, text: "Compassion" },
    { icon: Lightbulb, text: "Innovation" },
    { icon: Target, text: "Excellence" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-slate-50 overflow-hidden"
    >
      {/* Background Pattern - Hidden on mobile */}
      <div className="hidden lg:block absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }} />

      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-orange-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-blue-200/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-24 xl:py-32">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10 lg:mb-12 flex justify-center lg:justify-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white rounded-full shadow-lg border border-slate-100">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
            <span className="text-slate-700 text-xs sm:text-sm font-semibold tracking-wider uppercase">
              Welcome to Our School
            </span>
          </div>
        </motion.div>

        {/* Main Grid - Text Left | Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* LEFT: Text Content */}
          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-[1.15] mb-4 sm:mb-6 text-center lg:text-left">
                Building a Foundation for{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                    Lifelong Success
                  </span>
                  <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 text-orange-200 -z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-center lg:text-left">
                At our school, we believe every child is unique and deserving of an education 
                that inspires curiosity, builds confidence, and fosters a love for learning. 
                From the tender years of Nursery through the formative classes up to 10th grade, 
                we walk alongside our students, guiding them to discover their potential.
              </p>
            </motion.div>

            {/* Highlights List */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3"
            >
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2 justify-center sm:justify-start">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-700 text-sm sm:text-base font-medium">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Our Values */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pt-2 sm:pt-4"
            >
              <p className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 text-center lg:text-left">Our Core Values</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white rounded-full shadow-md border border-slate-100">
                    <value.icon className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
                    <span className="text-slate-700 text-xs sm:text-sm font-medium">{value.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start"
            >
              <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold rounded-full shadow-xl shadow-orange-500/25 transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                Discover More
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-full shadow-lg border border-slate-200 transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 fill-orange-500" />
                Watch Our Story
              </button>
            </motion.div>
          </div>

          {/* RIGHT: Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            {/* Main Image Container */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50 mx-auto max-w-md lg:max-w-none">
              <motion.div 
                style={{ scale: imageScale, y: imageY }}
                className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px]"
              >
                <img 
                  src={schoolImage} 
                  alt="Our School Campus" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
              
              {/* Experience Badge */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 bg-white/95 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-3 lg:px-5 rounded-xl sm:rounded-2xl shadow-xl">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">5+</p>
                    <p className="text-[10px] sm:text-xs text-slate-500">Years Excellence</p>
                  </div>
                </div>
              </div>

              {/* Floating Card - Students */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 lg:bottom-6 lg:left-6 lg:right-6 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex -space-x-1.5 sm:-space-x-2">
                      {[1,2,3,4].map((i) => (
                        <div key={i} className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white flex items-center justify-center text-[10px] sm:text-xs font-bold text-slate-600">
                          {String.fromCharCode(64+i)}
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">1000+ Students</p>
                      <p className="text-[10px] sm:text-xs text-slate-500">Nursery to Class 10th</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 sm:gap-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements - Hidden on small mobile */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-20 h-20 lg:w-32 lg:h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl lg:rounded-3xl -z-10 rotate-12 opacity-90" />
            <div className="hidden sm:block absolute -top-4 -left-4 lg:-top-6 lg:-left-6 w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full -z-10 opacity-80" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;