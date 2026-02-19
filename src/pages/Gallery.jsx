// import React, { useState } from "react";
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// import { X, Heart, Star, Zap, Filter, ImageIcon, Camera, Sparkles, Trophy } from "lucide-react";

// const galleryImages = [
//   {
//     id: 1,
//     category: "Campus",
//     src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 2,
//     category: "Events",
//     src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 3,
//     category: "Sports",
//     src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 4,
//     category: "Activities",
//     src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 5,
//     category: "Campus",
//     src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 6,
//     category: "Events",
//     src: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 7,
//     category: "Sports",
//     src: "https://images.unsplash.com/photo-1508606572321-901ea443707f?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 8,
//     category: "Activities",
//     src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
//   },
//   // Added more images for a fuller gallery
//   // {
//   //   id: 9,
//   //   category: "Campus",
//   //   src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
//   // },
//   {
//     id: 10,
//     category: "Events",
//     src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 11,
//     category: "Sports",
//     src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 12,
//     category: "Activities",
//     src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
//   },
// ];

// const categories = ["All", "Campus", "Events", "Sports", "Activities"];

// const Gallery = () => {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [selectedImage, setSelectedImage] = useState(null);

//   const filteredImages =
//     activeCategory === "All"
//       ? galleryImages
//       : galleryImages.filter((img) => img.category === activeCategory);

//   // Scroll-based zoom effect for hero
//   const { scrollY } = useScroll();
//   const zoom = useTransform(scrollY, [0, 500], [1, 1.2]); // Zoom in on scroll

//   // Animation variants
//   const fadeInUp = {
//     initial: { opacity: 0, y: 50 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.8, ease: "easeOut" },
//   };

//   const staggerContainer = {
//     animate: {
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const scaleOnHover = {
//     whileHover: { scale: 1.05 },
//     whileTap: { scale: 0.95 },
//   };

//   return (
//     <div className="bg-gray-50 overflow-hidden">
//       {/* ================= ENHANCED HERO ================= */}
//       <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
//         {/* Parallax background with zoom */}
//         <motion.div
//           style={{ scale: zoom }}
//           className="absolute inset-0"
//         >
//           <img
//             src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1600&q=80" // Changed to a different, reliable school/library image that loads well
//             className="w-full h-full object-cover"
//             alt="Gallery Hero"
//           />
//         </motion.div>
//         <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/60 to-indigo-900/80"></div>

//         {/* Animated particles for premium feel */}
//         <div className="absolute inset-0">
//           {[...Array(25)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-2 h-2 bg-yellow-400/30 rounded-full"
//               initial={{
//                 x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
//                 y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
//                 opacity: 0,
//               }}
//               animate={{
//                 y: [0, -150, 0],
//                 opacity: [0, 1, 0],
//                 scale: [0.5, 1, 0.5],
//               }}
//               transition={{
//                 duration: Math.random() * 4 + 3,
//                 repeat: Infinity,
//                 delay: Math.random() * 3,
//               }}
//             />
//           ))}
//         </div>

//         <motion.div
//           variants={fadeInUp}
//           initial="initial"
//           animate="animate"
//           className="relative text-center text-white px-6 max-w-4xl z-10"
//         >
//           <motion.div
//             initial={{ scale: 0, rotate: -180 }}
//             animate={{ scale: 1, rotate: 0 }}
//             transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
//             className="mb-6"
//           >
//             <Camera className="w-16 h-16 mx-auto text-yellow-400 mb-4" />
//           </motion.div>
//           <motion.h1
//             variants={fadeInUp}
//             className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-2xl"
//           >
//             Our School Gallery
//           </motion.h1>
//           <motion.p
//             variants={fadeInUp}
//             className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 drop-shadow-lg"
//           >
//             Capturing beautiful memories, achievements, and vibrant school life in stunning visuals.
//           </motion.p>
//           <motion.button
//             variants={fadeInUp}
//             {...scaleOnHover}
//             className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-slate-900 px-8 py-4 rounded-full font-bold shadow-2xl transition-all duration-300 flex items-center gap-2 mx-auto"
//           >
//             Explore Gallery <Sparkles className="w-5 h-5" />
//           </motion.button>
//         </motion.div>
//       </section>

//       {/* ================= FILTER BUTTONS ================= */}
//       <section className="py-12 px-6 text-center bg-white">
//         <motion.div
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           className="flex flex-wrap justify-center gap-4"
//         >
//           {categories.map((category, index) => (
//             <motion.button
//               key={category}
//               variants={fadeInUp}
//               whileHover={{ scale: 1.1, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setActiveCategory(category)}
//               className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
//                 activeCategory === category
//                   ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg"
//                   : "bg-gray-100 text-gray-700 shadow hover:bg-gray-200"
//               }`}
//             >
//               {category}
//             </motion.button>
//           ))}
//         </motion.div>
//       </section>

//       {/* ================= GALLERY GRID ================= */}
//       <section className="px-6 pb-20 max-w-7xl mx-auto">
//         <motion.div
//           layout
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
//         >
//           <AnimatePresence>
//             {filteredImages.map((img) => (
//               <motion.div
//                 key={img.id}
//                 layout
//                 variants={fadeInUp}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 transition={{ duration: 0.4 }}
//                 whileHover={{ scale: 1.05, rotate: 2 }}
//                 className="relative cursor-pointer overflow-hidden rounded-3xl shadow-lg group"
//                 onClick={() => setSelectedImage(img.src)}
//               >
//                 <img
//                   src={img.src}
//                   alt={img.category}
//                   className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//                 />

//                 {/* Enhanced Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center pb-6">
//                   <motion.span
//                     initial={{ y: 20, opacity: 0 }}
//                     whileHover={{ y: 0, opacity: 1 }}
//                     className="text-white text-lg font-semibold bg-black/50 px-4 py-2 rounded-full"
//                   >
//                     {img.category}
//                   </motion.span>
//                 </div>

//                 {/* Floating icon on hover */}
//                 <motion.div
//                   className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
//                   initial={{ scale: 0 }}
//                   whileHover={{ scale: 1 }}
//                 >
//                   <Heart className="w-8 h-8 text-red-500 bg-white/80 rounded-full p-1" />
//                 </motion.div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>
//       </section>

//       {/* ================= LIGHTBOX MODAL ================= */}
//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedImage(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.7, rotate: -10 }}
//               animate={{ scale: 1, rotate: 0 }}
//               exit={{ scale: 0.7, rotate: -10 }}
//               transition={{ duration: 0.3, type: "spring" }}
//               className="relative max-w-5xl w-full"
//             >
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="absolute -top-12 right-0 text-white bg-black/50 rounded-full p-2"
//                 onClick={() => setSelectedImage(null)}
//               >
//                 <X size={32} />
//               </motion.button>

//               <img
//                 src={`${selectedImage}?auto=format&fit=crop&w=1200&q=90`}
//                 alt="Preview"
//                 className="rounded-3xl shadow-2xl w-full max-h-[80vh] object-contain"
//               />

//               {/* Added zoom indicator */}
//               <motion.div
//                 className="absolute bottom-4 left-4 text-white bg-black/50 px-4 py-2 rounded-full"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 <Zap className="w-4 h-4 inline mr-2" />
//                 Click to close
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Gallery;
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Grid,
  Layers,
  Sparkles,
  Search,
} from "lucide-react";

/* ===================== IMAGE DATA ===================== */

const galleryImages = [
  {
    id: 1,
    category: "Architecture",
    src: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1200&q=90",
    title: "Modern Campus",
    description:
      "Our beautifully designed campus provides a safe and inspiring learning environment for students from Nursery to Class 12.",
  },
  {
    id: 2,
    category: "Student Life",
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=90",
    title: "Study Session",
    description:
      "Collaborative classroom learning encourages teamwork, creativity, and academic excellence.",
  },
  {
    id: 3,
    category: "Sports",
    src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=90",
    title: "Championship",
    description:
      "Students actively participate in inter-school championships promoting discipline and sportsmanship.",
  },
  {
    id: 4,
    category: "Tech",
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=90",
    title: "Coding Lab",
    description:
      "Advanced computer labs equipped with modern systems for digital literacy and programming skills.",
  },
  {
    id: 5,
    category: "Architecture",
    src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=90",
    title: "Library Hall",
    description:
      "A spacious and well-stocked library encouraging reading habits among students.",
  },
  {
    id: 6,
    category: "Events",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=90",
    title: "Graduation Ceremony",
    description:
      "A proud moment celebrating academic achievements of our graduating students.",
  },
  {
    id: 7,
    category: "Student Life",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=90",
    title: "Group Project",
    description:
      "Students working together on innovative academic projects.",
  },
  {
    id: 8,
    category: "Arts",
    src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=90",
    title: "Art Exhibition",
    description:
      "Creative artworks displayed by students showcasing imagination and talent.",
  },
  {
    id: 9,
    category: "Tech",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=90",
    title: "Innovation Lab",
    description:
      "Hands-on STEM learning and innovation activities for senior classes.",
  },
  {
    id: 10,
    category: "Nature",
    src: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=90",
    title: "Campus Green",
    description:
      "A lush green campus promoting eco-awareness and a healthy environment.",
  },
];

const categories = [
  "All",
  "Architecture",
  "Student Life",
  "Sports",
  "Tech",
  "Events",
  "Arts",
  "Nature",
];

/* ===================== COMPONENT ===================== */

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isGridView, setIsGridView] = useState(false);

  /* ================= FILTER ================= */

  const filteredImages = galleryImages.filter((img) => {
    const matchesCategory =
      activeCategory === "All" || img.category === activeCategory;

    const matchesSearch =
      img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  /* ================= HERO PARALLAX ================= */

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.1]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width - 0.5);
    mouseY.set((e.clientY - top) / height - 0.5);
  };

  /* ================= LIGHTBOX NAV ================= */

  const currentIndex = filteredImages.findIndex(
    (img) => img.id === selectedImage?.id
  );

  const nextImage = () => {
    const next = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[next]);
  };

  const prevImage = () => {
    const prev =
      (currentIndex - 1 + filteredImages.length) %
      filteredImages.length;
    setSelectedImage(filteredImages[prev]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  /* ================= JSX ================= */

  return (
    <div className="bg-neutral-950 min-h-screen text-white">

      {/* ================= HERO ================= */}

      <section
        onMouseMove={handleMouseMove}
        className="relative h-[85vh] flex items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{
            x: useMotionTemplate`${mouseX * 40}px`,
            y: useMotionTemplate`${mouseY * 40}px`,
            scale: heroScale,
          }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/70 z-10" />
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=90"
            className="w-full h-full object-cover opacity-60"
            alt="Hero"
          />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-20 text-center px-6 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-md mb-6 text-indigo-300 text-sm">
            <Sparkles className="w-4 h-4" /> SCHOOL GALLERY
          </div>

          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
            Visual Excellence
          </h1>

          <p className="text-gray-300 text-lg mt-4">
            Experience our campus, culture, creativity and achievements.
          </p>
        </motion.div>
      </section>

      {/* ================= CONTROLS ================= */}

      <div className="sticky top-0 z-30 bg-neutral-950/90 backdrop-blur-lg border-b border-white/10 p-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-center">

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search gallery..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white/5 border border-white/10 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1 rounded-full text-sm ${
                  activeCategory === cat
                    ? "bg-indigo-600"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex bg-white/5 rounded-lg p-1">
            <button
              onClick={() => setIsGridView(true)}
              className={`p-2 ${isGridView ? "bg-white/10" : ""}`}
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => setIsGridView(false)}
              className={`p-2 ${!isGridView ? "bg-white/10" : ""}`}
            >
              <Layers size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* ================= GALLERY ================= */}

      <section className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          layout
          className={
            isGridView
              ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              : "columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6"
          }
        >
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-2xl overflow-hidden cursor-pointer break-inside-avoid"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full object-cover transition duration-700 hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ================= LIGHTBOX ================= */}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-3 bg-white/10 rounded-full"
              >
                <X size={24} />
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="rounded-2xl w-full max-h-[75vh] object-contain"
              />

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full"
              >
                <ChevronLeft size={28} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full"
              >
                <ChevronRight size={28} />
              </button>

              <div className="mt-6 text-center">
                <h2 className="text-2xl font-bold mb-2">
                  {selectedImage.title}
                </h2>
                <p className="text-gray-400 max-w-3xl mx-auto">
                  {selectedImage.description}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {currentIndex + 1} / {filteredImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Gallery;
