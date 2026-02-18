import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { X, Heart, Star, Zap, Filter, ImageIcon, Camera, Sparkles, Trophy } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    category: "Campus",
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    category: "Events",
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    category: "Sports",
    src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    category: "Activities",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    category: "Campus",
    src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    category: "Events",
    src: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    category: "Sports",
    src: "https://images.unsplash.com/photo-1508606572321-901ea443707f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    category: "Activities",
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
  },
  // Added more images for a fuller gallery
  // {
  //   id: 9,
  //   category: "Campus",
  //   src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
  // },
  {
    id: 10,
    category: "Events",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    category: "Sports",
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    category: "Activities",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
  },
];

const categories = ["All", "Campus", "Events", "Sports", "Activities"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

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
        staggerChildren: 0.1,
      },
    },
  };

  const scaleOnHover = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  return (
    <div className="bg-gray-50 overflow-hidden">
      {/* ================= ENHANCED HERO ================= */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Parallax background with zoom */}
        <motion.div
          style={{ scale: zoom }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1600&q=80" // Changed to a different, reliable school/library image that loads well
            className="w-full h-full object-cover"
            alt="Gallery Hero"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/60 to-indigo-900/80"></div>

        {/* Animated particles for premium feel */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400/30 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                opacity: 0,
              }}
              animate={{
                y: [0, -150, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="relative text-center text-white px-6 max-w-4xl z-10"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            className="mb-6"
          >
            <Camera className="w-16 h-16 mx-auto text-yellow-400 mb-4" />
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-2xl"
          >
            Our School Gallery
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 drop-shadow-lg"
          >
            Capturing beautiful memories, achievements, and vibrant school life in stunning visuals.
          </motion.p>
          <motion.button
            variants={fadeInUp}
            {...scaleOnHover}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-slate-900 px-8 py-4 rounded-full font-bold shadow-2xl transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            Explore Gallery <Sparkles className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>

      {/* ================= FILTER BUTTONS ================= */}
      <section className="py-12 px-6 text-center bg-white">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              variants={fadeInUp}
              whileHover={{ scale: 1.1, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 shadow hover:bg-gray-200"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* ================= GALLERY GRID ================= */}
      <section className="px-6 pb-20 max-w-7xl mx-auto">
        <motion.div
          layout
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                variants={fadeInUp}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative cursor-pointer overflow-hidden rounded-3xl shadow-lg group"
                onClick={() => setSelectedImage(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.category}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Enhanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center pb-6">
                  <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="text-white text-lg font-semibold bg-black/50 px-4 py-2 rounded-full"
                  >
                    {img.category}
                  </motion.span>
                </div>

                {/* Floating icon on hover */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                >
                  <Heart className="w-8 h-8 text-red-500 bg-white/80 rounded-full p-1" />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ================= LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.7, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.7, rotate: -10 }}
              transition={{ duration: 0.3, type: "spring" }}
              className="relative max-w-5xl w-full"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -top-12 right-0 text-white bg-black/50 rounded-full p-2"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </motion.button>

              <img
                src={`${selectedImage}?auto=format&fit=crop&w=1200&q=90`}
                alt="Preview"
                className="rounded-3xl shadow-2xl w-full max-h-[80vh] object-contain"
              />

              {/* Added zoom indicator */}
              <motion.div
                className="absolute bottom-4 left-4 text-white bg-black/50 px-4 py-2 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Zap className="w-4 h-4 inline mr-2" />
                Click to close
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;