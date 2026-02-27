import {
  Sparkles,
  CalendarCheck,
  FileText,
  Bell,
  MessageSquare,
} from "lucide-react";
import {
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

const SmartSchoolApp = () => {
  const ref = useRef(null);

  // ❌ removed once:true
  const isInView = useInView(ref, { margin: "-100px" });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // 🔥 reset when leaving
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.9,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const features = [
    {
      icon: <CalendarCheck size={24} />,
      title: "Daily Attendance",
      desc: "Real-time attendance alerts sent directly to parents.",
    },
    {
      icon: <FileText size={24} />,
      title: "Homework & Results",
      desc: "Assignments, grades & academic reports anytime.",
    },
    {
      icon: <Bell size={24} />,
      title: "Instant Updates",
      desc: "Emergency alerts & school announcements instantly.",
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Direct Messaging",
      desc: "Secure parent-teacher communication channel.",
    },
  ];

  return (
   <section
  ref={ref}
  className="relative py-20 sm:py-24 md:py-28 overflow-hidden 
  bg-gradient-to-b from-indigo-50 via-white to-purple-50 text-slate-800"
>
  {/* Soft Floating Background */}
  <motion.div
    animate={{ y: [0, -30, 0] }}
    transition={{ duration: 8, repeat: Infinity }}
    className="absolute -top-60 -left-60 w-[500px] h-[500px] 
    bg-indigo-300/30 rounded-full blur-[160px]"
  />

  <motion.div
    animate={{ y: [0, 40, 0] }}
    transition={{ duration: 10, repeat: Infinity }}
    className="absolute -bottom-60 -right-60 w-[500px] h-[500px] 
    bg-purple-300/30 rounded-full blur-[160px]"
  />

  <div className="relative max-w-7xl mx-auto px-5 sm:px-6 text-center">

    {/* Heading */}
    <motion.div
      initial="hidden"
      animate={controls}
      variants={itemVariants}
      className="mb-14 sm:mb-16"
    >
      <div className="flex justify-center items-center gap-3 sm:gap-4 mb-6">
        <Sparkles className="text-indigo-500" size={32} />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Smart School App
        </h2>
        <Sparkles className="text-purple-500" size={32} />
      </div>

      <p className="max-w-2xl mx-auto text-slate-600 text-sm sm:text-base md:text-lg">
        A next-generation digital ecosystem connecting parents, teachers,
        and students through intelligent real-time communication.
      </p>
    </motion.div>

    {/* Cards */}
    <motion.div
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
    >
      {features.map((card, index) => (
        <motion.div
  key={index}
  variants={itemVariants}
  className="group bg-white/90 backdrop-blur-xl border border-indigo-100 
  rounded-3xl p-6 sm:p-8 shadow-md 
  transition-all duration-500 
  hover:-translate-y-3 hover:shadow-2xl hover:border-indigo-300"
>
  {/* Icon */}
  <div className="w-14 h-14 mx-auto mb-6 
  flex items-center justify-center rounded-2xl
  bg-gradient-to-br from-indigo-100 to-purple-100 
  text-indigo-600 group-hover:scale-110 
  transition-transform duration-300">
    {card.icon}
  </div>

  {/* Title */}
  <h3 className="text-lg sm:text-xl font-bold mb-3 
  bg-gradient-to-r from-indigo-600 to-purple-600 
  bg-clip-text text-transparent">
    {card.title}
  </h3>

  {/* Description */}
  <p className="text-slate-600 text-sm sm:text-base 
  leading-relaxed tracking-wide">
    {card.desc}
  </p>
</motion.div>
      ))}
    </motion.div>

  </div>
</section>
  );
};

export default SmartSchoolApp;