import React, { useEffect, useState } from "react";
import {
  GraduationCap,
  Target,
  Users,
  Award,
  Rocket,
  Eye,
  BookOpen,
  Heart,
  Globe,
  Trophy,
  Star,
  Shield,
  Zap,
  TrendingUp,
  Quote,
  CheckCircle,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion"; // Added for advanced animations and scroll effects

const About = () => {
  // ===== COUNTERS =====
  const [years, setYears] = useState(0);
  const [teachers, setTeachers] = useState(0);
  const [students, setStudents] = useState(0);

  useEffect(() => {
    let y = 0;
    let t = 0;
    let s = 0;

    const yearsInterval = setInterval(() => {
      y++;
      setYears(y);
      if (y >= 10) clearInterval(yearsInterval);
    }, 180);

    const teachersInterval = setInterval(() => {
      t++;
      setTeachers(t);
      if (t >= 25) clearInterval(teachersInterval);
    }, 90);

    const studentsInterval = setInterval(() => {
      s += 25;
      setStudents(s);
      if (s >= 1000) clearInterval(studentsInterval);
    }, 40);

    return () => {
      clearInterval(yearsInterval);
      clearInterval(teachersInterval);
      clearInterval(studentsInterval);
    };
  }, []);

  // Scroll-based zoom effect for hero
  const { scrollY } = useScroll();
  const zoom = useTransform(scrollY, [0, 500], [1, 1.2]); // Zoom in on scroll

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleOnHover = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  // Custom hook for animated counters on hover
  const useAnimatedCounter = (target) => {
    const [count, setCount] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      if (isHovered) {
        let current = 0;
        const increment = target / 50; // Smooth increment over 50 steps
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, 30); // Faster animation for better UX
        return () => clearInterval(timer);
      } else {
        setCount(0); // Reset to 0 on mouse leave
      }
    }, [isHovered, target]);

    return { count, setIsHovered };
  };

  const yearsCounter = useAnimatedCounter(10);
  const teachersCounter = useAnimatedCounter(25);
  const studentsCounter = useAnimatedCounter(1000);

  return (
    <div className="bg-gray-50 overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[75vh] bg-cover bg-center flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale: zoom }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80"
            alt="Institution Campus"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="relative text-center text-white px-4 sm:px-6 max-w-4xl z-10"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent drop-shadow-2xl"
          >
            About Our Institution
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed mb-4 drop-shadow-lg"
          >
            For over a decade, we have been committed to delivering quality education
            with discipline, innovation, and excellence.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-sm sm:text-base md:text-lg text-gray-200 drop-shadow-md"
          >
            Our institution focuses on shaping confident, responsible, and
            future-ready individuals who can lead with knowledge and integrity.
          </motion.p>

          {/* Added premium CTA */}
          <motion.button
            variants={fadeInUp}
            {...scaleOnHover}
            className="mt-6 sm:mt-8 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-900 px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold shadow-2xl transition-all duration-300 flex items-center gap-2 mx-auto text-sm sm:text-base"
          >
            Learn More <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        </motion.div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6366f1_1px,transparent_1px)] bg-[size:25px_25px]"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          {/* Mission */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            {...scaleOnHover}
            className="group relative bg-gradient-to-br from-orange-50 to-yellow-50 p-8 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl shadow-lg transition duration-500 hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:from-orange-400 hover:to-yellow-400"
          >
            <div className="absolute inset-0 opacity-10 rounded-2xl sm:rounded-3xl bg-[radial-gradient(#f97316_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            <div className="relative">
              <Rocket className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500 mb-4 sm:mb-6 group-hover:text-white transition-colors" />
              <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-4 sm:mb-6 group-hover:text-white transition-colors">
                Our Mission
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed group-hover:text-white transition-colors">
                To provide a dynamic learning environment that encourages
                intellectual growth, discipline, creativity, and strong moral
                values.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            {...scaleOnHover}
            className="group relative bg-gradient-to-br from-purple-50 to-indigo-50 p-8 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl shadow-lg transition duration-500 hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:from-purple-500 hover:to-indigo-600"
          >
            <div className="absolute inset-0 opacity-10 rounded-2xl sm:rounded-3xl bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            <div className="relative">
              <Eye className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 mb-4 sm:mb-6 group-hover:text-white transition-colors" />
              <h2 className="text-2xl sm:text-3xl font-bold text-purple-600 mb-4 sm:mb-6 group-hover:text-white transition-colors">
                Our Vision
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed group-hover:text-white transition-colors">
                To be a center of excellence in education, fostering innovation,
                ethical leadership, and global awareness.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 sm:mb-12 md:mb-16"
          >
            Core Values
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10"
          >
            <motion.div
              variants={fadeInUp}
              {...scaleOnHover}
              className="group bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg transition duration-500 hover:bg-orange-400 hover:text-white relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=100&q=80" alt="Students studying in classroom" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover" />
              </div>
              <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 mb-4 sm:mb-6 group-hover:text-white transition-colors" />
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Academic Excellence</h3>
              <p className="text-sm sm:text-base text-gray-600 group-hover:text-white transition-colors">
                Commitment to high academic standards.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              {...scaleOnHover}
              className="group bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg transition duration-500 hover:bg-purple-500 hover:text-white relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Teacher guiding students" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover" />
              </div>
              <Target className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500 mb-4 sm:mb-6 group-hover:text-white transition-colors" />
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Discipline</h3>
              <p className="text-sm sm:text-base text-gray-600 group-hover:text-white transition-colors">
                Strong moral and ethical foundation.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              {...scaleOnHover}
              className="group bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg transition duration-500 hover:bg-blue-500 hover:text-white relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=100&q=80" alt="Diverse group of students" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover" />
              </div>
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 mb-4 sm:mb-6 group-hover:text-white transition-colors" />
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Inclusivity</h3>
              <p className="text-sm sm:text-base text-gray-600 group-hover:text-white transition-colors">
                Equal opportunities for every learner.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              {...scaleOnHover}
              className="group bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg transition duration-500 hover:bg-green-500 hover:text-white relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=100&q=80" alt="Students in sports and activities" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover" />
              </div>
              <Award className="w-8 h-8 sm:w-10 sm:h-10 text-green-500 mb-4 sm:mb-6 group-hover:text-white transition-colors" />
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Holistic Growth</h3>
              <p className="text-sm sm:text-base text-gray-600 group-hover:text-white transition-colors">
                Focus on academics, sports & personality development.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80" alt="Background Pattern" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6"
          >
            Our Growth in Numbers
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16"
          >
            A journey defined by dedication, commitment, and consistent academic excellence.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
          >
            <motion.div
              variants={fadeInUp}
              {...scaleOnHover}
              onHoverStart={() => yearsCounter.setIsHovered(true)}
              onHoverEnd={() => yearsCounter.setIsHovered(false)}
              className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl sm:rounded-3xl shadow-xl border border-orange-200 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500 mb-3 sm:mb-4">
                {yearsCounter.isHovered ? yearsCounter.count : years}+
              </h3>
              <p className="text-sm sm:text-base font-semibold text-gray-700">Years of Excellence</p>
              {/* Added progress bar for premium feel */}
              <div className="mt-4 w-full bg-orange-200 rounded-full h-2">
                <motion.div
                  className="bg-orange-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: yearsCounter.isHovered ? "100%" : "0%" }}
                  transition={{ duration: 1.5 }}
                ></motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              {...scaleOnHover}
              onHoverStart={() => teachersCounter.setIsHovered(true)}
              onHoverEnd={() => teachersCounter.setIsHovered(false)}
              className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl sm:rounded-3xl shadow-xl border border-purple-200 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-600 mb-3 sm:mb-4">
                {teachersCounter.isHovered
                  ? teachersCounter.count
                  : teachers}
                +
              </h3>

              <p className="text-sm sm:text-base font-semibold text-gray-700">
                Qualified Teachers
              </p>

              <div className="mt-4 w-full bg-purple-200 rounded-full h-2">
                <motion.div
                  className="bg-purple-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{
                    width: teachersCounter.isHovered ? "100%" : "0%",
                  }}
                  transition={{ duration: 1.5 }}
                ></motion.div>
              </div>
            </motion.div>

            {/* STUDENTS */}
            <motion.div
              variants={fadeInUp}
              {...scaleOnHover}
              onHoverStart={() => studentsCounter.setIsHovered(true)}
              onHoverEnd={() => studentsCounter.setIsHovered(false)}
              className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl sm:rounded-3xl shadow-xl border border-blue-200 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600 mb-3 sm:mb-4">
                {studentsCounter.isHovered
                  ? studentsCounter.count
                  : students}
                +
              </h3>

              <p className="text-sm sm:text-base font-semibold text-gray-700">
                Active Students
              </p>

              <div className="mt-4 w-full bg-blue-200 rounded-full h-2">
                <motion.div
                  className="bg-blue-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{
                    width: studentsCounter.isHovered ? "100%" : "0%",
                  }}
                  transition={{ duration: 1.5 }}
                ></motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
