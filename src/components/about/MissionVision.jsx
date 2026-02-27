import React from "react";
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
  ArrowRight
} from "lucide-react";

const MissionVision = () => {
  // Animation variants for the container
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Animation for individual items (cards)
  const cardVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  // Animation for list items
  const listItemVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden">
      
      {/* --- Advanced Background Elements --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {/* Decorative Blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-violet-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 left-1/3 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* --- Section Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide text-amber-600 uppercase bg-amber-100 rounded-full">
            Who We Are
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Our Mission & Vision
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
            We are dedicated to fostering an environment where innovation meets tradition, 
            shaping leaders who are ready to redefine the future.
          </p>
        </motion.div>

        {/* --- Cards Container --- */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12"
        >
          
          {/* --- Mission Card --- */}
          <motion.div
            variants={cardVariant}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl border border-slate-100 overflow-hidden"
          >
            {/* Decorative Gradient Border Top */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-400 to-orange-500"></div>

            <div className="flex items-center gap-5 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-400/20 blur-lg rounded-2xl transform rotate-6"></div>
                <div className="relative p-4 bg-amber-50 rounded-2xl border border-amber-100">
                  <Target className="text-amber-600 w-8 h-8" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                  Our Mission
                </h3>
                <p className="text-amber-600 text-sm font-medium uppercase tracking-wider mt-1">
                  Purpose & Goals
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              To provide a transformative educational experience that empowers students with critical thinking, creativity, leadership skills, and strong ethical values to thrive in a global society.
            </p>

            <ul className="space-y-4">
              {[
                { icon: GraduationCap, text: "Academic Excellence" },
                { icon: FlaskConical, text: "Innovation & Research" },
                { icon: Users, text: "Leadership Development" },
                { icon: TreePine, text: "Community Engagement" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={listItemVariant}
                  className="flex items-center gap-4 text-slate-700 font-medium"
                >
                  <div className="p-2 bg-amber-50 rounded-lg text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                    <item.icon size={20} />
                  </div>
                  {item.text}
                </motion.li>
              ))}
            </ul>
            
            {/* Hover Glow Effect */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl group-hover:bg-amber-400/20 transition-all duration-500"></div>
          </motion.div>

          {/* --- Vision Card --- */}
          <motion.div
            variants={cardVariant}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl border border-slate-100 overflow-hidden"
          >
             {/* Decorative Gradient Border Top */}
             <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-violet-500 to-indigo-600"></div>

            <div className="flex items-center gap-5 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-violet-400/20 blur-lg rounded-2xl transform rotate-6"></div>
                <div className="relative p-4 bg-violet-50 rounded-2xl border border-violet-100">
                  <Eye className="text-violet-600 w-8 h-8" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                  Our Vision
                </h3>
                <p className="text-violet-600 text-sm font-medium uppercase tracking-wider mt-1">
                  Future Aspiration
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              To become a globally recognized institution known for academic distinction, technological innovation, and producing leaders who inspire positive change worldwide.
            </p>

            <ul className="space-y-4">
              {[
                { icon: Globe, text: "Global Recognition" },
                { icon: Rocket, text: "Future-Ready Graduates" },
                { icon: Lightbulb, text: "Sustainable Growth" },
                { icon: ShieldCheck, text: "Inclusive Excellence" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={listItemVariant}
                  className="flex items-center gap-4 text-slate-700 font-medium"
                >
                  <div className="p-2 bg-violet-50 rounded-lg text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                    <item.icon size={20} />
                  </div>
                  {item.text}
                </motion.li>
              ))}
            </ul>

            {/* Hover Glow Effect */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-violet-400/10 rounded-full blur-3xl group-hover:bg-violet-400/20 transition-all duration-500"></div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;