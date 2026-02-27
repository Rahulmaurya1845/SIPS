import React, { useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { Rocket, ArrowRight, Sparkles } from "lucide-react";

const AboutHero = () => {
  const ref = useRef(null);

  // Text Animation Variants (only entrance animation)
  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  // Static particle positions (NO animation)
  const particles = useMemo(
    () => [
      { top: "20%", left: "10%" },
      { top: "40%", left: "80%" },
      { top: "60%", left: "30%" },
      { top: "80%", left: "70%" },
      { top: "30%", left: "50%" },
      { top: "70%", left: "20%" },
      { top: "50%", left: "90%" },
      { top: "10%", left: "60%" },
    ],
    []
  );

  return (
    <section
      ref={ref}
      className="relative h-[85vh] sm:h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900"
    >
      {/* --- Static Background Image --- */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80"
          alt="Campus"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2000&q=80";
          }}
        />
      </div>

      {/* --- Dark Overlay --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/60 to-slate-900/90"></div>

      {/* --- Noise Texture --- */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      {/* --- Static Ambient Orbs (NO animation) --- */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-amber-500/20 rounded-full blur-[100px]" />

      {/* --- Static Particles (NO animation) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((pos, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/30 rounded-full"
            style={{ top: pos.top, left: pos.left }}
          />
        ))}
      </div>

      {/* --- Main Content --- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          custom={0}
          variants={textVariant}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-lg"
        >
          <Sparkles size={14} className="text-amber-400" />
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-gray-200">
            Established 1998
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          custom={1}
          variants={textVariant}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 sm:mb-8 leading-[1.1]"
        >
          Building Futures with
          <span className="block mt-3 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-sm">
            Excellence & Innovation
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2}
          variants={textVariant}
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          For over two decades, we have empowered students with knowledge,
          leadership skills, and real-world excellence to shape a brighter
          tomorrow.
        </motion.p>

        {/* Buttons */}
        <motion.div
          custom={3}
          variants={textVariant}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-full font-bold text-slate-900 bg-gradient-to-r from-amber-400 to-yellow-500 shadow-[0_0_25px_rgba(251,191,36,0.4)] hover:shadow-[0_0_40px_rgba(251,191,36,0.6)] transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Campus <Rocket size={18} />
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"></div>
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full font-semibold text-white border border-white/30 bg-white/5 backdrop-blur-sm hover:border-white/60 hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
          >
            Learn More
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* --- Scroll Indicator (No infinite animation) --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        viewport={{ once: false }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/50 uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;