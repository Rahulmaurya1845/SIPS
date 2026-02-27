import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CampusShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const campusData = [
    {
      title: "Modern Smart Classrooms",
      subtitle: "Future-Ready Learning",
      desc: "AI-powered boards, interactive teaching and immersive digital learning experience designed for next-generation education.",
      img: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Robotics & Innovation Lab",
      subtitle: "Hands-On Technology",
      desc: "Students explore coding, robotics and future technologies through real-world experimentation and guided mentorship.",
      img: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Sports & Physical Excellence",
      subtitle: "Strength & Discipline",
      desc: "Professional coaching with structured athletic programs that build teamwork, resilience and leadership.",
      img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Creative Arts & Culture",
      subtitle: "Expression & Creativity",
      desc: "Music, dance, theatre and cultural programs that nurture imagination and artistic confidence.",
      img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  return (
    <section className="relative bg-[#0a0a0a] text-white py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-purple-600/20 blur-[150px] rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-blue-600/20 blur-[150px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Experience Campus Life
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            A dynamic environment where learning meets innovation,
            creativity and real-world preparation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">

          {/* LEFT SIDE - Premium Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[320px] sm:h-[420px] md:h-[480px] lg:h-[560px] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]">

              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={campusData[activeIndex].img}
                  alt={campusData[activeIndex].title}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1.05 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

              {/* Premium Text Overlay */}
              <div className="absolute bottom-0 p-5 sm:p-6 md:p-8 max-w-xl">
                
                <span className="inline-block mb-3 px-4 py-1 text-xs sm:text-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-purple-300">
                  {campusData[activeIndex].subtitle}
                </span>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
                  {campusData[activeIndex].title}
                </h3>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {campusData[activeIndex].desc}
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Interactive Cards */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            {campusData.map((item, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.03 }}
                className={`p-5 sm:p-6 rounded-2xl backdrop-blur-xl border transition-all duration-500 cursor-pointer
                ${
                  activeIndex === index
                    ? "bg-white/10 border-purple-400 shadow-lg"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                <h3
                  className={`text-lg sm:text-xl md:text-2xl font-semibold mb-2 ${
                    activeIndex === index
                      ? "text-white"
                      : "text-gray-400"
                  }`}
                >
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base">
                  {item.desc}
                </p>

                <motion.div
                  layout
                  className="mt-4 h-1 bg-gradient-to-r from-purple-500 to-blue-500"
                  animate={{ width: activeIndex === index ? "100%" : "0%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CampusShowcase;