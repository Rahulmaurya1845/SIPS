import React from "react";
import {
  FaRocket,
  FaUserGraduate,
  FaSchool,
  FaFileAlt,
  FaCheckCircle,
  FaShieldAlt,
  FaClipboardCheck,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion"; // Added for advanced animations
import Contact from "./Contact"; // adjust path if needed

const Admissions = () => {
  // Animation variants for Framer Motion
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

  return (
    <div className="bg-white overflow-hidden">
      {/* ================= 3D HERO ================= */}
      <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-28 px-6 overflow-hidden">
        {/* Enhanced 3D Background Effects with Premium Metallic Touches */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold-500/10 rounded-full blur-2xl animate-bounce"></div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 px-6 py-3 rounded-full mb-8 shadow-lg animate-bounce"
            >
              <FaRocket className="text-slate-900" />
              <span className="text-sm tracking-wide font-medium">
                Admissions Open 2025-26
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
            >
              Start Your{" "}
              <span className="text-amber-400 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Academic
              </span>
              <br />
              Journey Today
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-gray-300 text-lg leading-relaxed"
            >
              We welcome students who aspire to grow, innovate, and achieve
              excellence in a nurturing environment. Join a community of
              dreamers and achievers.
            </motion.p>

            {/* Added CTA Button */}
            <motion.button
              variants={fadeInUp}
              {...scaleOnHover}
              className="mt-8 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-900 px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              Apply Now <FaArrowRight />
            </motion.button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative transform hover:rotate-2 hover:scale-105 transition duration-500"
          >
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
              alt="Students learning"
              className="rounded-3xl shadow-2xl object-cover w-full h-[420px] border-4 border-amber-400/30"
            />
            {/* Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* ================= GUIDELINES SECTION ================= */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background Image (Dull) */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
            alt="School background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-white/90"></div>
        </div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT TEXT CONTENT */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 mb-6"
            >
              <FaClipboardCheck className="text-4xl text-emerald-700" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
                Admission Guidelines
              </h2>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-lg font-semibold text-slate-700 mb-6 leading-relaxed"
            >
              Please ensure all required documents are prepared before
              submitting your admission application. Incomplete submissions may
              delay the review process.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg font-semibold text-slate-700 leading-relaxed"
            >
              Our team carefully verifies each document to maintain
              transparency and uphold our commitment to academic excellence.
            </motion.p>

            {/* Added a tip box */}
            <motion.div
              variants={fadeInUp}
              className="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-500"
            >
              <FaShieldAlt className="text-emerald-500 mb-2" />
              <p className="text-slate-700">
                <strong>Pro Tip:</strong> Submit digital copies for faster
                processing. Our secure portal ensures your data is protected.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT DOCUMENT BOX */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-slate-800 to-slate-900 text-white p-12 rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl"></div>

            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 mb-10"
            >
              <FaFileAlt className="text-3xl text-amber-300" />
              <h2 className="text-2xl font-semibold">Documents Required</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="space-y-5"
            >
              {[
                "Birth Certificate (Original & Copy)",
                "Transfer Certificate (Original)",
                "Passport Size Photographs (4 copies)",
                "Aadhar Card / ID Proof of Parent",
                "Previous Year Report Card",
              ].map((doc, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  {...scaleOnHover}
                  className="flex items-center gap-4 bg-gradient-to-r from-slate-700 to-slate-600 px-6 py-4 rounded-xl hover:from-slate-600 hover:to-slate-500 transition duration-300 cursor-pointer"
                >
                  <FaCheckCircle className="text-amber-200 text-lg" />
                  <span className="text-gray-100">{doc}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <Contact />
    </div>
  );
};

export default Admissions;