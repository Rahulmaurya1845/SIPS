import React from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

// Animated Counter Component with "+" Support
const Counter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract number and suffix
  const match = value.match(/^([\d,]+)(.*)$/);
  const numericValue = match ? parseInt(match[1].replace(/,/g, '')) : 0;
  const suffix = match ? match[2] : "";
  
  const spring = useSpring(0, { duration: 2500, bounce: 0 });
  const display = useTransform(spring, (current) => 
    Math.round(current).toLocaleString()
  );

  React.useEffect(() => {
    if (isInView) {
      spring.set(numericValue);
    }
  }, [isInView, numericValue, spring]);

  return (
    <span ref={ref} className="tabular-nums inline-flex items-center">
      {isInView ? (
        <motion.span>{display}</motion.span>
      ) : (
        "0"
      )}
      <span>{suffix}</span>
    </span>
  );
};

const stats = [
  { 
    number: "10+", 
    label: "Years of Excellence", 
    gradient: "from-blue-600 to-cyan-500",
    shadow: "hover:shadow-blue-500/25",
    borderGradient: "from-blue-500 to-cyan-400"
  },
  { 
    number: "25+", 
    label: "Qualified Teachers", 
    gradient: "from-violet-600 to-purple-500",
    shadow: "hover:shadow-violet-500/25",
    borderGradient: "from-violet-500 to-purple-400"
  },
  { 
    number: "1000+", 
    label: "Active Students", 
    gradient: "from-amber-500 to-orange-500",
    shadow: "hover:shadow-amber-500/25",
    borderGradient: "from-amber-500 to-orange-400"
  },
];

const StatsSection = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* --- Ambient Background --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[100px]"></div>
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Our Growth in Numbers
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We take pride in our journey of excellence and the impact we create every day.
          </p>
        </motion.div>

        {/* --- Stats Grid --- */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className={`group relative bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 ${stat.shadow}`}
            >
              {/* --- Premium Card Design Elements --- */}
              
              {/* Gradient Border Effect (Top) */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${stat.borderGradient} rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Glassmorphism Shine */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Diagonal Shine Line */}
                <div className={`absolute -top-[100%] left-0 w-[150%] h-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent -rotate-45 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out`}></div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                
                {/* Number with Glow */}
                <div className="relative mb-6">
                  {/* Ambient Glow behind number */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-20 blur-3xl rounded-full transform scale-150`}></div>
                  
                  <h3 className={`text-5xl sm:text-6xl font-extrabold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent relative z-10 drop-shadow-sm`}>
                    <Counter value={stat.number} />
                  </h3>
                </div>

                {/* Label */}
                <p className="text-slate-600 font-semibold text-lg">
                  {stat.label}
                </p>

                {/* Decorative Line */}
                <div className="mt-6 flex items-center gap-2">
                  <div className="h-px w-8 bg-slate-200 group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:to-slate-300 transition-all duration-500"></div>
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${stat.gradient} opacity-60`}></div>
                  <div className="h-px w-8 bg-slate-200 group-hover:bg-gradient-to-l group-hover:from-transparent group-hover:to-slate-300 transition-all duration-500"></div>
                </div>
              </div>

              {/* Corner Accent (Premium Feel) */}
              <div className="absolute bottom-4 right-4 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-slate-100">
                  <path d="M100 0H0V100C0 44.7 44.7 0 100 0Z" />
                </svg>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;