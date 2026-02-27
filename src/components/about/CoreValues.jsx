import React from "react";
import { GraduationCap, Target, Users, Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    id: 1,
    icon: GraduationCap,
    title: "Academic Excellence",
    desc: "Commitment to high educational standards and rigorous learning methodologies that empower minds.",
    theme: "blue",
  },
  {
    id: 2,
    icon: Target,
    title: "Discipline",
    desc: "Instilling a strong ethical and moral foundation to guide students in every walk of life.",
    theme: "rose",
  },
  {
    id: 3,
    icon: Users,
    title: "Inclusivity",
    desc: "Fostering a diverse environment where equal opportunities are provided for every learner.",
    theme: "amber",
  },
  {
    id: 4,
    icon: Award,
    title: "Holistic Growth",
    desc: "Balancing academic mastery with diverse extracurricular engagements for complete development.",
    theme: "violet",
  },
];

const colorMap = {
  blue: {
    bgLight: "bg-blue-100",
    bgMain: "bg-blue-500",
    gradientFrom: "from-blue-600",
    gradientTo: "to-cyan-500",
    gradientBg: "bg-gradient-to-br from-blue-600 to-cyan-500",
    shadow: "hover:shadow-blue-500/30",
  },
  rose: {
    bgLight: "bg-rose-100",
    bgMain: "bg-rose-500",
    gradientFrom: "from-rose-600",
    gradientTo: "to-pink-500",
    gradientBg: "bg-gradient-to-br from-rose-600 to-pink-500",
    shadow: "hover:shadow-rose-500/30",
  },
  amber: {
    bgLight: "bg-amber-100",
    bgMain: "bg-amber-500",
    gradientFrom: "from-amber-500",
    gradientTo: "to-orange-500",
    gradientBg: "bg-gradient-to-br from-amber-500 to-orange-500",
    shadow: "hover:shadow-amber-500/30",
  },
  violet: {
    bgLight: "bg-violet-100",
    bgMain: "bg-violet-500",
    gradientFrom: "from-violet-600",
    gradientTo: "to-purple-500",
    gradientBg: "bg-gradient-to-br from-violet-600 to-purple-500",
    shadow: "hover:shadow-violet-500/30",
  },
};

const FloatingDots = ({ theme }) => {
  const colors = colorMap[theme];

  return (
    <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 rounded-full opacity-40 ${colors.bgMain}`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

const CoreValues = () => {
  return (
    <section className="py-28 bg-slate-50 relative overflow-hidden font-sans">

      {/* Soft Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-full blur-[140px] opacity-30"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >

        {/* ===== PREMIUM TEXT SECTION (ONLY THIS CHANGED) ===== */}
        <div className="text-center mb-20 max-w-3xl mx-auto">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/70 backdrop-blur-md border border-white shadow-md mb-8"
          >
            <Sparkles size={16} className="text-amber-500" />
            <span className="text-xs tracking-widest font-semibold text-slate-600 uppercase">
              Our Foundation
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              Core Values
            </span>
          </motion.h2>

          {/* Animated Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 mx-auto my-8 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-slate-600 leading-relaxed"
          >
            We don't just teach — we nurture character and ambition.  
            Our philosophy is built upon four powerful pillars that guide
            excellence, leadership, and holistic development.
          </motion.p>
        </div>

        {/* ===== CARDS (UNCHANGED) ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => {
            const colors = colorMap[value.theme];
            const Icon = value.icon;

            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className={`group relative bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col ${colors.shadow}`}
              >
                <FloatingDots theme={value.theme} />

                <div className="relative z-10 flex flex-col h-full text-center">
                  <div className="relative inline-block mx-auto mb-6 mt-2">
                    <div className={`absolute inset-0 ${colors.bgLight} opacity-50 blur-xl rounded-full`}></div>

                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-50 flex items-center justify-center shadow-inner border border-slate-100 group-hover:border-transparent transition-all duration-500 overflow-hidden">
                      <Icon
                        className="text-slate-700 transition-all duration-500 group-hover:text-white relative z-10"
                        size={28}
                      />
                      <div
                        className={`absolute inset-0 ${colors.gradientBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      ></div>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3">
                    {value.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                    {value.desc}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-50 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <div className={`h-2 w-2 rounded-full ${colors.bgMain} shadow-md`}></div>
                    <div className={`h-0.5 w-8 rounded-full bg-gradient-to-r ${colors.gradientFrom} ${colors.gradientTo} opacity-50`}></div>
                    <div className={`h-2 w-2 rounded-full ${colors.bgMain} shadow-md`}></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
};

export default CoreValues;