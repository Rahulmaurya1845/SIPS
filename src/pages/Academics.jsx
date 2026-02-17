import { useState, useEffect } from "react";
import img1 from "../assets/images/academics1.png";
import img2 from "../assets/images/academics2.png";
import img3 from "../assets/images/academics3.png";

import {
  BookOpen,
  GraduationCap,
  Microscope,
  Trophy,
  Users,
  Brain,
  Globe,
  Lightbulb,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Academics() {
  const images = [img1, img2, img3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: GraduationCap,
      title: "Early Childhood Learning",
      desc: "Activity-based programs for young learners.",
      bg: "hover:bg-pink-500",
      iconColor: "text-pink-500",
    },
    {
      icon: BookOpen,
      title: "Conceptual Foundation",
      desc: "Strong subject clarity through smart classrooms.",
      bg: "hover:bg-blue-600",
      iconColor: "text-blue-600",
    },
    {
      icon: Microscope,
      title: "Laboratory Exposure",
      desc: "Hands-on science and computer lab sessions.",
      bg: "hover:bg-green-600",
      iconColor: "text-green-600",
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      desc: "Team-based projects for leadership building.",
      bg: "hover:bg-orange-500",
      iconColor: "text-orange-500",
    },
    {
      icon: Brain,
      title: "Skill Development",
      desc: "Coding, communication & personality growth.",
      bg: "hover:bg-purple-600",
      iconColor: "text-purple-600",
    },
    {
      icon: Trophy,
      title: "Board Excellence",
      desc: "Focused board & competitive exam preparation.",
      bg: "hover:bg-cyan-600",
      iconColor: "text-cyan-600",
    },
  ];

  return (
    <div className="bg-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6 bg-gradient-to-br from-indigo-100 via-sky-50 to-white">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
              Building Strong Foundations <br />
              <span className="text-indigo-600">
                From Nursery to Senior Secondary
              </span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Academic excellence begins with joyful early childhood education
              and continues through structured senior secondary programs.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <div className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg">
                <Globe size={20} />
                CBSE Curriculum
              </div>

              <div className="flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg">
                <Lightbulb size={20} />
                Holistic Development
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE SLIDER */}
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                alt="Academics"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-gray-800">
            Our Academic Approach
          </h2>

          <div className="grid md:grid-cols-3 gap-12 mt-16">

            {features.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.08, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`group p-10 rounded-3xl bg-white 
                  ${item.bg}
                  shadow-lg hover:shadow-2xl
                  transition-all duration-300
                  text-left cursor-pointer`}
                >
                  <div className={`mb-4 transition-all duration-300 ${item.iconColor} group-hover:text-white`}>
                    <Icon size={40} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-white transition duration-300">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-600 group-hover:text-white transition duration-300">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

    </div>
  );
}
