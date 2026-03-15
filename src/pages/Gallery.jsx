import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Clock,
  Calendar,
  MapPin,
  Eye,
  GraduationCap,
  Sparkles,
  Heart,
  Share2,
  Bookmark,
  Users,
  Award,
  Star,
  BookOpen,
  Trophy,
  Mic2,
  Palette,
  Microscope,
  Handshake,
  Sun,
  Apple,
  Gamepad2,
  Utensils,
  HeartHandshake,
  BookText,
  Sprout
} from "lucide-react";

/* ================= VIDEO IMPORTS ================= */
import vid1 from "../assets/videos/1.mp4";
import vid2 from "../assets/videos/2.mp4";
import vid3 from "../assets/videos/3.mp4";
import vid4 from "../assets/videos/4.mp4";
import vid5 from "../assets/videos/5.mp4";
import vid6 from "../assets/videos/6.mp4";
import vid7 from "../assets/videos/7.mp4";
import vid8 from "../assets/videos/8.mp4";
import vid9 from "../assets/videos/9.mp4";
import vid10 from "../assets/videos/10.mp4";

/* ================= ENHANCED VIDEO DATA WITH ACCURATE PREMIUM CONTENT ================= */
const videos = [
  { 
    id: 1, 
    src: vid1, 
    title: "Summer Activity", 
    subtitle: "Fun-Filled Summer Learning Adventures",
    description: "Students engage in exciting summer activities combining learning with outdoor play, creative arts, and team building exercises.",
    fullDescription: "Our Summer Activity Program transforms learning into an exciting adventure for young minds. This video captures students participating in a diverse range of activities designed to keep them engaged, active, and learning throughout the summer break. Watch as children explore nature walks, engage in creative craft workshops, participate in team sports, and enjoy interactive storytelling sessions. Our dedicated teachers ensure every child discovers new interests while building confidence and social skills. The program balances educational enrichment with pure fun, creating unforgettable summer memories.",
    highlights: [
      "Outdoor nature exploration walks",
      "Creative arts and craft workshops",
      "Team building games and sports",
      "Interactive storytelling sessions",
      "Water play and cooling activities"
    ],
    participants: "Primary Section Students (Grades 1-5)",
    duration: "03:45",
    date: "Summer 2024",
    location: "School Campus & Playground",
    views: "12.5K",
    category: "Summer Camp",
    icon: Sun
  },
  { 
    id: 2, 
    src: vid2, 
    title: "Hello Summer", 
    subtitle: "Welcoming the Sunny Season with Joy",
    description: "A vibrant celebration marking the beginning of summer with performances, decorations, and special assemblies.",
    fullDescription: "Hello Summer is our annual celebration that marks the beginning of the most awaited season. This delightful event features students performing summer-themed songs, dances, and poems that capture the essence of sunny days and vacation excitement. The video showcases colorful classroom decorations, special morning assemblies where children share their summer plans, and the distribution of summer activity kits. Teachers organize engaging presentations about sun safety, healthy summer habits, and fun learning activities to do at home. It's a heartwarming start to a season of growth and exploration.",
    highlights: [
      "Summer-themed student performances",
      "Special morning assembly celebrations",
      "Summer safety awareness sessions",
      "Distribution of activity kits",
      "Creative classroom decorations"
    ],
    participants: "Entire School Community",
    duration: "02:30",
    date: "April 2024",
    location: "School Assembly Ground",
    views: "8.9K",
    category: "Celebration",
    icon: Sun
  },
  { 
    id: 3, 
    src: vid3, 
    title: "Complete My Pairs", 
    subtitle: "Interactive Memory & Matching Games",
    description: "Students develop cognitive skills through engaging pair-matching games and memory-enhancing activities.",
    fullDescription: "Complete My Pairs is an innovative cognitive development program that uses fun matching games to enhance memory, concentration, and pattern recognition skills. This video demonstrates students participating in various pair-matching activities using picture cards, educational flashcards, and digital interactive games. Children work in teams to find matching pairs related to animals, fruits, numbers, and letters, making learning both competitive and collaborative. Teachers guide students through progressive difficulty levels, helping them develop sharper observation skills and quicker recall abilities while having tremendous fun.",
    highlights: [
      "Picture card matching games",
      "Memory enhancement exercises",
      "Team-based competitive activities",
      "Pattern recognition challenges",
      "Digital interactive matching games"
    ],
    participants: "Grades 1-4 Students",
    duration: "05:20",
    date: "March 2024",
    location: "Activity Room & Smart Classrooms",
    views: "15.2K",
    category: "Cognitive Skills",
    icon: Gamepad2
  },
  { 
    id: 4, 
    src: vid4, 
    title: "Summer Vacation Fruits Activities", 
    subtitle: "Learning Nutrition Through Fun",
    description: "Educational activities teaching students about healthy eating, fruit identification, and nutritional awareness.",
    fullDescription: "Our Summer Vacation Fruits Activities program makes healthy eating education exciting and hands-on. Students learn to identify various seasonal fruits, understand their nutritional benefits, and participate in creative fruit-based crafts. The video shows children engaged in fruit tasting sessions, creating fruit salads under teacher supervision, making fruit-themed artwork, and learning songs about healthy eating. Special emphasis is placed on understanding the importance of vitamins, staying hydrated during summer, and making healthy food choices. Parents appreciate how these activities encourage children to try new fruits and develop healthy eating habits.",
    highlights: [
      "Seasonal fruit identification lessons",
      "Hands-on fruit tasting sessions",
      "Creative fruit craft activities",
      "Nutritional awareness workshops",
      "Healthy fruit salad preparation"
    ],
    participants: "Primary Section Students",
    duration: "04:15",
    date: "June 2024",
    location: "School Cafeteria & Classrooms",
    views: "6.8K",
    category: "Health & Nutrition",
    icon: Apple
  },
  { 
    id: 5, 
    src: vid5, 
    title: "Annual Cultural Activities", 
    subtitle: "Celebrating Arts, Music & Performance",
    description: "Grand showcase of student talents in dance, music, drama, and visual arts celebrating our rich cultural heritage.",
    fullDescription: "The Annual Cultural Activities event is the highlight of our academic year, bringing together the entire school community in a spectacular celebration of arts and culture. This video captures mesmerizing classical dance performances, soulful musical renditions, thought-provoking theatrical plays, and stunning art exhibitions. Students showcase months of dedicated practice under the guidance of expert instructors. The event features inter-house competitions, solo performances, group choreography, and collaborative productions that demonstrate both individual talent and teamwork. From traditional folk dances to contemporary performances, every aspect reflects our commitment to holistic education and cultural preservation.",
    highlights: [
      "Classical and contemporary dance performances",
      "Vocal and instrumental music showcases",
      "Theatrical plays and skits",
      "Visual arts and craft exhibitions",
      "Inter-house cultural competitions"
    ],
    participants: "Students from All Grades",
    duration: "06:10",
    date: "December 2024",
    location: "School Auditorium",
    views: "22.1K",
    category: "Cultural Fest",
    icon: Palette
  },
  { 
    id: 6, 
    src: vid6, 
    title: "Summer Vacation Fruits Activity", 
    subtitle: "Hands-On Healthy Living Workshop",
    description: "Interactive workshop where students explore fruits through sensory activities, recipes, and creative projects.",
    fullDescription: "This specialized Summer Vacation Fruits Activity workshop provides students with immersive learning experiences about healthy nutrition. Children engage their senses by touching, smelling, and tasting various fruits while learning about their origins and health benefits. The video documents students creating beautiful fruit collages, writing fruit-themed poems, participating in 'guess the fruit' games, and preparing simple no-fire fruit recipes. Teachers incorporate lessons on food hygiene, seasonal eating, and the importance of including fruits in daily diet. The activity culminates in a vibrant fruit festival where students share their creations with classmates.",
    highlights: [
      "Sensory exploration of fruits",
      "No-fire fruit recipe preparation",
      "Fruit-themed art and poetry",
      "Interactive guessing games",
      "Fruit festival celebration"
    ],
    participants: "Grades 2-5 Students",
    duration: "08:45",
    date: "May 2024",
    location: "Primary Activity Center",
    views: "45.2K",
    category: "Workshop",
    icon: Utensils
  },
  { 
    id: 7, 
    src: vid7, 
    title: "Happy Mothers Day", 
    subtitle: "Celebrating Love & Gratitude",
    description: "Heartwarming celebrations where students honor mothers through special performances, handmade gifts, and expressions of love.",
    fullDescription: "Our Mother's Day celebration is a touching tribute to the unconditional love and sacrifices of mothers. This emotional video captures students preparing surprise performances, creating handmade cards and crafts, and expressing their gratitude through poems and songs. The event includes special morning assemblies where children speak about what makes their mothers special, photo booths for capturing precious moments, and a small tea party where mothers are invited to school. Teachers help students understand the importance of appreciating parents daily, not just on special occasions. The joy on both children's and mothers' faces makes this one of our most cherished annual events.",
    highlights: [
      "Handmade card and craft making",
      "Special song and dance performances",
      "Poetry recitation for mothers",
      "Mother-child photo sessions",
      "Appreciation ceremony"
    ],
    participants: "Primary Section with Mothers",
    duration: "02:50",
    date: "May 2024",
    location: "School Hall & Classrooms",
    views: "5.4K",
    category: "Special Day",
    icon: HeartHandshake
  },
  { 
    id: 8, 
    src: vid8, 
    title: "Activity on Articles (A or An)", 
    subtitle: "Mastering English Grammar Through Play",
    description: "Interactive grammar lessons teaching correct usage of articles 'A' and 'An' through games and activities.",
    fullDescription: "Learning grammar becomes an exciting adventure with our Article Activity program. This educational video demonstrates how teachers transform the concept of articles 'A' and 'An' into engaging games and activities. Students participate in sorting games where they categorize objects, interactive whiteboard activities, flashcard matching, and role-play scenarios using correct articles. The video shows children singing the 'A/An' song, playing 'Article Detective' around the classroom, and creating their own picture books with proper article usage. This activity-based approach ensures that grammar rules are understood naturally through fun rather than rote memorization.",
    highlights: [
      "Article sorting games with objects",
      "Interactive whiteboard activities",
      "Article detective scavenger hunt",
      "Grammar songs and rhymes",
      "Create-your-own picture books"
    ],
    participants: "Grades 1-3 Students",
    duration: "03:15",
    date: "February 2024",
    location: "English Language Lab",
    views: "7.2K",
    category: "Language Learning",
    icon: BookText
  },
  { 
    id: 9, 
    src: vid9, 
    title: "Activity on Articles (A or An)", 
    subtitle: "Advanced Grammar Concepts Made Simple",
    description: "Advanced interactive sessions reinforcing article usage through storytelling, sentence building, and peer teaching.",
    fullDescription: "Building on basic concepts, this advanced Article Activity session helps students master the nuances of 'A' and 'An' usage through sophisticated interactive methods. The video showcases students engaged in storytelling circles where they must use correct articles, sentence building competitions, peer teaching sessions, and digital quiz games. Teachers use real-life objects, picture cards, and classroom items to create meaningful contexts for grammar practice. Students also learn exceptions and special cases, developing confidence in their English communication skills. The collaborative approach encourages peer learning and builds public speaking confidence alongside grammar proficiency.",
    highlights: [
      "Storytelling with correct article usage",
      "Sentence building competitions",
      "Peer teaching and learning circles",
      "Digital grammar quiz games",
      "Real-life context practice"
    ],
    participants: "Grades 3-5 Students",
    duration: "02:30",
    date: "March 2024",
    location: "Smart Classrooms",
    views: "3.8K",
    category: "Language Skills",
    icon: BookOpen
  },
  { 
    id: 10, 
    src: vid10, 
    title: "Activity on Bad Habits and Good Habits", 
    subtitle: "Character Building & Life Skills",
    description: "Important life lessons teaching students to identify harmful behaviors and cultivate positive daily routines.",
    fullDescription: "Our Good Habits vs Bad Habits activity is a crucial part of character education, helping young learners understand the impact of their daily choices. This insightful video shows students participating in role-plays demonstrating both positive and negative behaviors, creating habit-tracking charts, and discussing scenarios in group circles. Teachers use storytelling to illustrate consequences of actions, while students engage in 'habit sorting' games and pledge ceremonies. The activity covers personal hygiene, study routines, respectful behavior, healthy eating, and environmental consciousness. Students create colorful posters displaying good habits and take home commitment cards to track their progress, making character building a continuous journey.",
    highlights: [
      "Role-play scenarios of habits",
      "Habit sorting and classification games",
      "Personal commitment pledge ceremony",
      "Poster making on good habits",
      "Take-home habit tracking cards"
    ],
    participants: "Grades 1-5 Students",
    duration: "04:00",
    date: "January 2024",
    location: "Life Skills Room",
    views: "9.6K",
    category: "Character Education",
    icon: Sprout
  },
];

/* ================= PREMIUM VIDEO CARD ================= */
const VideoCard = ({ data, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const videoRef = useRef(null);
  const Icon = data.icon;

  // Pause video when not hovered to save performance
  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(data)}
      className="group cursor-pointer"
    >
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100/80">
        
        {/* Premium Thumbnail */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <motion.video
            ref={videoRef}
            src={data.src}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            muted
            playsInline
            loop
            preload="metadata"
            loading="lazy"
          />
          
          {/* Elegant Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: isHovered ? 0.9 : 0.4 }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Premium Play Button */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-white/30 rounded-full blur-xl" />
              <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <Play className="w-8 h-8 text-indigo-600 fill-indigo-600 ml-1" />
              </div>
            </motion.div>
          </motion.div>

          {/* Top Actions */}
          <motion.div 
            className="absolute top-4 right-4 flex gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
            transition={{ duration: 0.3 }}
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
              className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'text-red-500 fill-red-500' : 'text-white'}`} />
            </button>
            <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <Bookmark className="w-5 h-5 text-white" />
            </button>
          </motion.div>

          {/* Duration Badge */}
          <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
            <span className="text-xs font-semibold text-slate-700">{data.duration}</span>
          </div>

          {/* Category Icon */}
          <div className="absolute top-4 left-4">
            <motion.div 
              className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg"
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.6 }}
            >
              <Icon className="w-6 h-6 text-indigo-600" />
            </motion.div>
          </div>
        </div>

        {/* Premium Content */}
        <div className="p-6">
          {/* Title & Subtitle */}
          <div className="mb-3">
            <motion.h3 
              className="text-xl font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors duration-300"
            >
              {data.title}
            </motion.h3>
            <p className="text-sm font-medium text-indigo-500 uppercase tracking-wider">
              {data.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
            {data.description}
          </p>

          {/* Elegant Divider */}
          <div className="h-px bg-gradient-to-r from-slate-200 via-slate-100 to-transparent mb-4" />

          {/* Meta Info */}
          <div className="flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {data.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />
                {data.participants.split(' ')[0]}
              </span>
            </div>
            <span className="flex items-center gap-1.5 font-medium text-slate-500">
              <Eye className="w-3.5 h-3.5" />
              {data.views}
            </span>
          </div>
        </div>

        {/* Premium Hover Border */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-indigo-500/50 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)`,
            transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
            transition: 'transform 0.8s ease',
          }}
        />
      </div>
    </motion.div>
  );
};

/* ================= ENHANCED FULL-SCREEN LIGHTBOX ================= */
const VideoLightbox = ({ data, onClose, onNext, onPrev }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const Icon = data.icon;

  // Lock body scroll when lightbox opens
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-slate-950 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Fixed Header */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-slate-950 to-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
            <Icon className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm">{data.title}</h3>
            <p className="text-slate-400 text-xs">{data.category}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-slate-400 text-sm hidden sm:block">{data.duration}</span>
          <motion.button
            onClick={onClose}
            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </motion.div>

      {/* Main Content Container */}
      <div className="min-h-screen pt-20 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Video Player Section */}
          <motion.div
            className="relative mb-8"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              <video
                src={data.src}
                className="w-full h-full"
                controls
                autoPlay
                playsInline
                controlsList="nodownload"
                preload="auto"
              />
            </div>

            {/* Navigation Buttons - Side */}
            <motion.button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-colors hidden lg:flex border border-white/10"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>
            <motion.button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-colors hidden lg:flex border border-white/10"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Title Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-semibold uppercase tracking-wider">
                    {data.category}
                  </span>
                  <span className="text-slate-500 text-sm flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {data.date}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{data.title}</h1>
                <p className="text-xl text-indigo-400 font-medium">{data.subtitle}</p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors ${isLiked ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'}`}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                  {isLiked ? 'Liked' : 'Like'}
                </motion.button>
                <motion.button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors ${isSaved ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'}`}
                  whileTap={{ scale: 0.95 }}
                >
                  <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
                  {isSaved ? 'Saved' : 'Save'}
                </motion.button>
                <motion.button
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <Share2 className="w-5 h-5" />
                  Share
                </motion.button>
              </motion.div>

              {/* Tabs */}
              <motion.div 
                className="border-b border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex gap-6">
                  {['overview', 'highlights', 'details'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-3 text-sm font-medium capitalize transition-colors relative ${activeTab === tab ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                    >
                      {tab}
                      {activeTab === tab && (
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500"
                          layoutId="activeTab"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-slate-300 leading-relaxed"
              >
                {activeTab === 'overview' && (
                  <div className="space-y-4">
                    <p className="text-lg leading-relaxed">{data.fullDescription}</p>
                    <div className="flex items-center gap-2 text-sm text-slate-400 mt-4">
                      <Users className="w-4 h-4" />
                      <span>Participants: <span className="text-white">{data.participants}</span></span>
                    </div>
                  </div>
                )}
                {activeTab === 'highlights' && (
                  <div className="grid sm:grid-cols-2 gap-3">
                    {data.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10"
                      >
                        <Star className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
                {activeTab === 'details' && (
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                          <MapPin className="w-4 h-4" />
                          Location
                        </div>
                        <p className="text-white font-medium">{data.location}</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                          <Clock className="w-4 h-4" />
                          Duration
                        </div>
                        <p className="text-white font-medium">{data.duration}</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                          <Calendar className="w-4 h-4" />
                          Date
                        </div>
                        <p className="text-white font-medium">{data.date}</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                          <Eye className="w-4 h-4" />
                          Views
                        </div>
                        <p className="text-white font-medium">{data.views}</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Right Column - Stats & Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/5 rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  Event Statistics
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-slate-400 text-sm">Total Views</span>
                    <span className="text-white font-bold">{data.views}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-slate-400 text-sm">Duration</span>
                    <span className="text-white font-bold">{data.duration}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-slate-400 text-sm">Category</span>
                    <span className="text-indigo-400 font-medium">{data.category}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-slate-400 text-sm">Date</span>
                    <span className="text-white font-medium text-sm">{data.date}</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-6 text-white"
              >
                <h3 className="font-semibold mb-2">More Videos</h3>
                <p className="text-white/80 text-sm mb-4">Explore more moments from our school journey</p>
                <div className="flex gap-2">
                  <button onClick={onPrev} className="flex-1 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors">
                    Previous
                  </button>
                  <button onClick={onNext} className="flex-1 py-2 bg-white hover:bg-white/90 text-indigo-600 rounded-lg text-sm font-medium transition-colors">
                    Next
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ================= MAIN GALLERY ================= */
const Gallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const currentIndex = videos.findIndex((v) => v.id === selectedVideo?.id);
  
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % videos.length;
    setSelectedVideo(videos[nextIndex]);
  };
  
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + videos.length) % videos.length;
    setSelectedVideo(videos[prevIndex]);
  };

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      
      {/* Premium Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-lg shadow-indigo-100 border border-indigo-100 mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-amber-500" />
            </motion.div>
            <span className="text-sm font-bold text-slate-600 uppercase tracking-widest">Memories in Motion</span>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight"
          >
            School{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Video Gallery
              </span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Relive the cherished moments of our academic journey through these 
            <span className="text-slate-700 font-medium"> carefully curated visual stories</span>
          </motion.p>
        </motion.div>

        {/* Premium Grid - 3 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {videos.map((video, index) => (
            <VideoCard
              key={video.id}
              data={video}
              index={index}
              onClick={setSelectedVideo}
            />
          ))}
        </div>

        {/* Elegant Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg border border-slate-100">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-slate-500 font-medium">
              Showing <span className="text-slate-900 font-bold">{videos.length}</span> featured videos
            </span>
            <span className="w-px h-4 bg-slate-200" />
            <span className="text-sm text-slate-400">Updated regularly</span>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Lightbox */}
      <AnimatePresence>
        {selectedVideo && (
          <VideoLightbox
            data={selectedVideo}
            onClose={() => setSelectedVideo(null)}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;