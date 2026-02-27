import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Heart,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Teaching here has been a journey of passion and purpose. Watching students grow into confident individuals is the greatest reward.",
    author: "Mrs. Anjali Sharma",
    role: "Senior English Teacher",
    rating: 5,
    color: "blue",
  },
  {
    id: 2,
    text: "Our focus has always been on holistic development. Academic excellence combined with values creates future leaders.",
    author: "Mr. Rajesh Verma",
    role: "Head of Mathematics Department",
    rating: 5,
    color: "indigo",
  },
  {
    id: 3,
    text: "Innovation in classrooms and modern labs empower students with real-world skills beyond textbooks.",
    author: "Dr. Priya Nair",
    role: "Science Faculty",
    rating: 5,
    color: "sky",
  },
  {
    id: 4,
    text: "Discipline, creativity, and compassion define our institution. We nurture not just minds, but character.",
    author: "Mr. Arvind Singh",
    role: "Vice Principal",
    rating: 5,
    color: "cyan",
  },
];

const themeConfig = {
  blue: { 
    gradient: "from-blue-400 to-blue-600", 
    gradientSolid: "from-blue-500 to-blue-600", 
    text: "text-blue-600",
    soft: "bg-blue-50",
    border: "border-blue-100",
    light: "bg-blue-100"
  },
  indigo: { 
    gradient: "from-indigo-400 to-indigo-600", 
    gradientSolid: "from-indigo-500 to-indigo-600", 
    text: "text-indigo-600",
    soft: "bg-indigo-50",
    border: "border-indigo-100",
    light: "bg-indigo-100"
  },
  sky: { 
    gradient: "from-sky-400 to-sky-600", 
    gradientSolid: "from-sky-500 to-sky-600", 
    text: "text-sky-600",
    soft: "bg-sky-50",
    border: "border-sky-100",
    light: "bg-sky-100"
  },
  cyan: { 
    gradient: "from-cyan-400 to-cyan-600", 
    gradientSolid: "from-cyan-500 to-cyan-600", 
    text: "text-cyan-600",
    soft: "bg-cyan-50",
    border: "border-cyan-100",
    light: "bg-cyan-100"
  },
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setProgress(0);
    }, 6000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1.5));
    }, 90);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isAutoPlaying]);

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const currentTestimonial = testimonials[currentIndex];
  const config = themeConfig[currentTestimonial.color];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden selection:bg-blue-100 selection:text-blue-800">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-slate-200/40 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/80 backdrop-blur-md border border-white/60 shadow-lg shadow-blue-100/50 mb-6"
          >
            <Sparkles size={16} className="text-blue-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
              Faculty Voices
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-800 mb-4 tracking-tight"
          >
            Hear From Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Educators</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Dedicated mentors shaping young minds with passion, purpose, and excellence.
          </motion.p>
        </div>

        {/* Card */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.98 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-[0_25px_50px_-12px_rgba(59,130,246,0.1)] border border-white/60 overflow-hidden"
            >
              {/* Top Gradient Line */}
              <div className={`h-2 bg-gradient-to-r ${config.gradientSolid}`} />

              <div className="p-8 sm:p-12">
                <div className="flex flex-col gap-8">
                  {/* Top Section */}
                  <div className="flex justify-between items-start">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-lg shadow-blue-200/50`}>
                      <Quote size={32} className="text-white" strokeWidth={2.5} />
                    </div>

                    <div className="flex gap-1">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="text-amber-400 fill-amber-400"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="relative">
                    <Quote 
                      className="absolute -top-6 -left-2 text-blue-50 w-20 h-20 -z-10" 
                      size={90} 
                      strokeWidth={1} 
                    />
                    <p className="text-xl sm:text-2xl md:text-3xl text-slate-800 font-medium leading-relaxed">
                      "{currentTestimonial.text}"
                    </p>
                  </div>

                  {/* Author & Footer */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-6 border-t border-slate-100/60">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${config.gradient} flex items-center justify-center text-white text-xl font-bold shadow-lg`}>
                        {currentTestimonial.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-slate-900 font-bold text-lg">
                          {currentTestimonial.author}
                        </h4>
                        <p className={`text-sm font-medium ${config.text}`}>
                          {currentTestimonial.role}
                        </p>
                      </div>
                    </div>

                    <div className={`flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest ${config.soft} ${config.border} border px-4 py-2 rounded-full`}>
                      <Heart size={14} className={config.text} />
                      <span>Verified Faculty</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-8 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className={`h-full bg-gradient-to-r ${config.gradientSolid} rounded-full`}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-xl bg-white shadow-lg shadow-blue-100 border border-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-50 hover:scale-110 hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft size={22} />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    idx === currentIndex 
                      ? `w-10 bg-gradient-to-r ${themeConfig[item.color].gradientSolid}` 
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-xl bg-white shadow-lg shadow-blue-100 border border-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-50 hover:scale-110 hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;