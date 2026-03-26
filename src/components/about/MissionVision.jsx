import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  Eye, 
  GraduationCap, 
  FlaskConical, 
  Users, 
  Globe, 
  Rocket, 
  Lightbulb, 
  ShieldCheck, 
  TreePine,
  Sparkles
} from "lucide-react";

const MissionVision = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const handleMouseMove = (e, cardType) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 50;
    const y = (e.clientY - rect.top - rect.height / 2) / 50;
    setHoveredCard({ type: cardType, x, y });
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const missionPoints = [
    { icon: GraduationCap, text: "Academic Excellence", desc: "Rigorous curriculum" },
    { icon: FlaskConical, text: "Innovation & Research", desc: "Modern labs" },
    { icon: Users, text: "Leadership Development", desc: "Skill building" },
    { icon: TreePine, text: "Community Engagement", desc: "Social impact" },
  ];

  const visionPoints = [
    { icon: Globe, text: "Global Recognition", desc: "Worldwide ranking" },
    { icon: Rocket, text: "Future-Ready Graduates", desc: "Industry ready" },
    { icon: Lightbulb, text: "Sustainable Growth", desc: "Eco-friendly" },
    { icon: ShieldCheck, text: "Inclusive Excellence", desc: "Diversity first" },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Elegant Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 sm:mb-5 rounded-full bg-white border border-slate-200 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-600">Our Foundation</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight">
            Mission <span className="text-slate-400">&</span> Vision
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-violet-500 mx-auto rounded-full mb-4" />
          <p className="max-w-lg mx-auto text-slate-500 text-base sm:text-lg leading-relaxed px-4 sm:px-0">
            The guiding principles that shape our educational journey and define our commitment to excellence
          </p>
        </motion.div>

        {/* Premium Cards */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {/* Mission Card */}
          <motion.div
            variants={cardVariant}
            onMouseMove={(e) => handleMouseMove(e, 'mission')}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: hoveredCard?.type === 'mission' 
                ? `perspective(1000px) rotateX(${-hoveredCard.y}deg) rotateY(${hoveredCard.x}deg)` 
                : 'perspective(1000px) rotateX(0) rotateY(0)',
              transition: 'transform 0.2s ease-out'
            }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500" />
            
            <div className="relative h-full bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500" />
              
              {/* Hover glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative">
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <motion.div 
                      className="relative p-3 sm:p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-100"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Target className="w-6 h-6 sm:w-7 sm:h-7 text-amber-600" strokeWidth={1.5} />
                      <div className="absolute inset-0 bg-amber-400/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-0.5 sm:mb-1">Our Mission</h3>
                      <p className="text-xs sm:text-sm font-semibold text-amber-600 uppercase tracking-widest">Purpose & Goals</p>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <span className="text-4xl sm:text-5xl font-black text-slate-100">01</span>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
                  To cultivate a transformative educational ecosystem that empowers students with 
                  <span className="text-amber-600 font-medium"> critical thinking</span>, 
                  <span className="text-orange-600 font-medium"> creativity</span>, and 
                  <span className="text-red-600 font-medium"> ethical leadership</span> to thrive in an ever-evolving world.
                </p>

                {/* Feature Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {missionPoints.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(251,191,36,0.05)" }}
                      className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-amber-200 transition-all cursor-pointer group/item"
                    >
                      <div className="p-1.5 sm:p-2 bg-white rounded-lg shadow-sm group-hover/item:shadow-md transition-shadow">
                        <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                      </div>
                      <div>
                        <p className="text-sm sm:text-base font-semibold text-slate-800">{item.text}</p>
                        <p className="text-xs text-slate-400">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* REMOVED LINK HERE */}
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={cardVariant}
            onMouseMove={(e) => handleMouseMove(e, 'vision')}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: hoveredCard?.type === 'vision' 
                ? `perspective(1000px) rotateX(${-hoveredCard.y}deg) rotateY(${hoveredCard.x}deg)` 
                : 'perspective(1000px) rotateX(0) rotateY(0)',
              transition: 'transform 0.2s ease-out'
            }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-400 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500" />
            
            <div className="relative h-full bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-400 to-purple-500" />
              
              {/* Hover glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative">
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <motion.div 
                      className="relative p-3 sm:p-4 bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl border border-violet-100"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-violet-600" strokeWidth={1.5} />
                      <div className="absolute inset-0 bg-violet-400/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-0.5 sm:mb-1">Our Vision</h3>
                      <p className="text-xs sm:text-sm font-semibold text-violet-600 uppercase tracking-widest">Future Forward</p>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <span className="text-4xl sm:text-5xl font-black text-slate-100">02</span>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
                  To emerge as a <span className="text-violet-600 font-medium">globally recognized</span> institution 
                  synonymous with <span className="text-purple-600 font-medium">academic distinction</span>, 
                  <span className="text-indigo-600 font-medium"> technological innovation</span>, and producing 
                  visionary leaders who shape tomorrow.
                </p>

                {/* Feature Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {visionPoints.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(139,92,246,0.05)" }}
                      className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-violet-200 transition-all cursor-pointer group/item"
                    >
                      <div className="p-1.5 sm:p-2 bg-white rounded-lg shadow-sm group-hover/item:shadow-md transition-shadow">
                        <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-violet-500" />
                      </div>
                      <div>
                        <p className="text-sm sm:text-base font-semibold text-slate-800">{item.text}</p>
                        <p className="text-xs text-slate-400">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* REMOVED LINK HERE */}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;