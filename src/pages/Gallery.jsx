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
  Sun
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

/* ================= ENHANCED VIDEO DATA WITH DETAILED CONTENT ================= */
const videos = [
  { 
    id: 1, 
    src: vid1, 
    title: "Campus Infrastructure Tour", 
    subtitle: "State-of-the-Art Learning Environment",
    description: "A comprehensive visual journey through our world-class educational facilities designed to foster academic excellence and holistic development.",
    fullDescription: "Step into the future of education with our meticulously designed campus infrastructure. This exclusive tour showcases our modern smart classrooms equipped with interactive digital boards, advanced science laboratories featuring cutting-edge equipment, a sprawling library housing over 50,000 volumes, and dedicated spaces for arts, music, and physical education. Our eco-friendly campus spans 25 acres of lush greenery, providing students with an inspiring environment that nurtures creativity and intellectual growth. The architecture seamlessly blends functionality with aesthetics, creating spaces that encourage collaboration, innovation, and peaceful contemplation.",
    highlights: [
      "Smart classrooms with interactive technology",
      "Advanced science and computer laboratories",
      "Olympic-standard sports facilities",
      "Eco-friendly sustainable campus design",
      "25-acre sprawling green campus"
    ],
    participants: "Campus Development Team",
    duration: "03:45",
    date: "March 15, 2024",
    location: "Main Campus, Academic Block",
    views: "12.5K",
    category: "Campus Life",
    icon: BookOpen
  },
  { 
    id: 2, 
    src: vid2, 
    title: "Evening Study Hours", 
    subtitle: "Dedicated Academic Pursuits",
    description: "Witness the dedication and focus of our students during evening self-study sessions in our serene library environment.",
    fullDescription: "Experience the quiet determination of our students during evening study hours, a cherished tradition that exemplifies our commitment to academic excellence. The video captures students engaged in deep learning, collaborative discussions, and individual research within the tranquil ambiance of our central library. Under the soft glow of reading lamps, you'll see future scholars poring over textbooks, utilizing digital resources, and seeking guidance from faculty members who remain available for consultation. This daily ritual from 4:00 PM to 6:00 PM has been instrumental in developing disciplined study habits and fostering a culture of intellectual curiosity among our student body.",
    highlights: [
      "Supervised study environment",
      "Faculty consultation hours",
      "Digital resource access",
      "Peer learning sessions",
      "Quiet contemplation spaces"
    ],
    participants: "Students of Grades 9-12",
    duration: "02:30",
    date: "February 28, 2024",
    location: "Dr. Radhakrishnan Central Library",
    views: "8.9K",
    category: "Academic Life",
    icon: BookOpen
  },
  { 
    id: 3, 
    src: vid3, 
    title: "Annual Sports Championship", 
    subtitle: "Excellence in Athletics",
    description: "Thrilling highlights from our inter-house athletic meet featuring track events, team sports, and outstanding sporting achievements.",
    fullDescription: "Relive the adrenaline-pumping moments of our 45th Annual Sports Championship, where over 800 students competed across 35 different sporting events. The two-day extravaganza showcased remarkable athletic prowess, unwavering team spirit, and exemplary sportsmanship. From the 100-meter sprint to the marathon, from basketball finals to cricket matches, every event demonstrated the physical excellence we nurture alongside academic achievement. The video captures the electric atmosphere of the opening ceremony, the intensity of competition, the joy of victory, and the grace in defeat. Special highlights include the breaking of three school records and the spectacular closing ceremony featuring our renowned marching band.",
    highlights: [
      "35 sporting events across 2 days",
      "800+ student participants",
      "3 school records broken",
      "Inter-house championship trophy",
      "Marching band performance"
    ],
    participants: "All Houses & Grades",
    duration: "05:20",
    date: "January 20-21, 2024",
    location: "Mahatma Gandhi Sports Complex",
    views: "15.2K",
    category: "Sports",
    icon: Trophy
  },
  { 
    id: 4, 
    src: vid4, 
    title: "Science Fair & Exhibition", 
    subtitle: "Young Innovators Showcase",
    description: "Groundbreaking student projects demonstrating scientific inquiry, innovation, and experimental excellence across multiple disciplines.",
    fullDescription: "Discover the brilliant minds of tomorrow at our Annual Science Fair, where 150 innovative projects transformed our science pavilion into a hub of creativity and discovery. Students from grades 6 through 12 presented their research on topics ranging from renewable energy solutions and artificial intelligence applications to biotechnology advances and environmental conservation strategies. The exhibition featured working prototypes, detailed research papers, and live demonstrations that left visitors amazed. Notable projects included a solar-powered irrigation system, an AI-based waste segregation unit, and a novel approach to water purification using locally available materials. The event was graced by eminent scientists from the Indian Institute of Technology who praised the exceptional quality of student research.",
    highlights: [
      "150 innovative student projects",
      "Working prototypes on display",
      "Expert evaluation by IIT scientists",
      "Awards for top 10 innovations",
      "Interactive science demonstrations"
    ],
    participants: "Grades 6-12 Science Students",
    duration: "04:15",
    date: "December 18, 2023",
    location: "Sir C.V. Raman Science Pavilion",
    views: "6.8K",
    category: "Academics",
    icon: Microscope
  },
  { 
    id: 5, 
    src: vid5, 
    title: "Annual Cultural Festival", 
    subtitle: "Celebrating Artistic Excellence",
    description: "A vibrant celebration of classical dance, music, drama, and visual arts showcasing the rich cultural heritage and creative talents of our students.",
    fullDescription: "Immerse yourself in the magic of 'Utsav 2023,' our three-day cultural extravaganza that brought together over 500 performers in a spectacular display of artistic excellence. The festival featured classical dance recitals including Bharatanatyam, Kathak, and Odissi; soulful musical performances spanning Hindustani classical, Carnatic, and Western genres; thought-provoking theatrical productions; and stunning art exhibitions. The highlight was the grand finale featuring a collaborative performance by all houses, depicting the unity in diversity that defines our nation. Eminent artists from across the country graced the event as judges and mentors, providing invaluable feedback to our young performers. The video captures the months of preparation, the backstage excitement, and the triumphant moments on stage.",
    highlights: [
      "500+ performers across 3 days",
      "Classical & contemporary performances",
      "Eminent artist judges",
      "Inter-house competitions",
      "Grand collaborative finale"
    ],
    participants: "All Students & Houses",
    duration: "06:10",
    date: "November 15-17, 2023",
    location: "Rabindranath Tagore Auditorium",
    views: "22.1K",
    category: "Cultural",
    icon: Palette
  },
  { 
    id: 6, 
    src: vid6, 
    title: "Graduation Ceremony 2023", 
    subtitle: "Proud Convocation Moments",
    description: "The solemn ceremony honoring our graduating class as they embark on new journeys equipped with knowledge, values, and cherished memories.",
    fullDescription: "Witness the emotional and proud moments of our 38th Annual Graduation Ceremony, where 287 students from the Class of 2023 received their diplomas amidst cheers, tears, and celebrations. The ceremony, held in the presence of distinguished alumni, faculty members, and proud parents, recognized not only academic excellence but also outstanding contributions in sports, arts, and community service. The Chief Guest, a renowned educationist, delivered an inspiring address about the role of education in nation-building. The video captures the procession of graduates, the conferring of degrees, the valedictory speech by the school captain, and the emotional farewell as students lit candles symbolizing the light of knowledge they carry forward. Special awards were presented to top performers in various categories.",
    highlights: [
      "287 graduating students honored",
      "Academic & extracurricular awards",
      "Chief Guest: Dr. APJ Abdul Kalam Scholar",
      "Valedictory address by School Captain",
      "Candle lighting ceremony"
    ],
    participants: "Class of 2023 & Families",
    duration: "08:45",
    date: "October 28, 2023",
    location: "Jawaharlal Nehru Memorial Hall",
    views: "45.2K",
    category: "Ceremony",
    icon: GraduationCap
  },
  { 
    id: 7, 
    src: vid7, 
    title: "Interactive Classroom Sessions", 
    subtitle: "Modern Pedagogy in Action",
    description: "Dynamic teaching methodologies showcasing collaborative learning, digital integration, and student-centered educational approaches.",
    fullDescription: "Step inside our classrooms where education transcends traditional boundaries through innovative pedagogical approaches. This video showcases our teachers employing diverse methodologies including flipped classroom models, project-based learning, collaborative problem-solving, and technology-integrated instruction. You'll witness students engaged in Socratic seminars, conducting virtual experiments through augmented reality, participating in peer teaching sessions, and developing critical thinking through case study analyses. The classrooms buzz with energy as teachers facilitate rather than dictate, encouraging questions, debates, and creative solutions. Special focus is given to our STEM initiative where interdisciplinary learning connects science, technology, engineering, and mathematics in practical, real-world contexts.",
    highlights: [
      "Flipped classroom methodology",
      "AR/VR technology integration",
      "Peer teaching programs",
      "Socratic seminar discussions",
      "Interdisciplinary STEM projects"
    ],
    participants: "Faculty & Students Grades 6-10",
    duration: "02:50",
    date: "September 12, 2023",
    location: "Smart Classrooms, Academic Wing",
    views: "5.4K",
    category: "Academics",
    icon: BookOpen
  },
  { 
    id: 8, 
    src: vid8, 
    title: "Student Art Exhibition", 
    subtitle: "Creative Expressions Gallery",
    description: "An elegant showcase of paintings, sculptures, digital art, and mixed media creations by our talented young artists.",
    fullDescription: "Wander through the inspiring galleries of our Annual Student Art Exhibition, featuring over 300 original artworks created by students from grades 1 through 12. The exhibition spanned various mediums including oil and acrylic paintings, watercolor landscapes, charcoal sketches, clay sculptures, digital illustrations, and innovative mixed-media installations. Each piece told a unique story, reflecting the young artists' perspectives on nature, society, emotions, and imagination. The inauguration was performed by a celebrated contemporary artist who spent hours interacting with students and providing personalized feedback. The video captures the meticulous curation process, the proud moments of young artists explaining their work to visitors, and the vibrant atmosphere of the opening day that saw over 1,000 attendees appreciating the creative talents on display.",
    highlights: [
      "300+ original artworks displayed",
      "Multiple mediums & techniques",
      "Renowned artist inauguration",
      "Student-artist interactions",
      "Live demonstration sessions"
    ],
    participants: "Art Students All Grades",
    duration: "03:15",
    date: "August 22, 2023",
    location: "M.F. Hussain Art Gallery",
    views: "7.2K",
    category: "Arts",
    icon: Palette
  },
  { 
    id: 9, 
    src: vid9, 
    title: "Parent-Teacher Partnership Meet", 
    subtitle: "Collaborative Education Summit",
    description: "Meaningful dialogues between educators and families fostering shared responsibility for holistic student development and academic success.",
    fullDescription: "Experience the essence of our collaborative approach to education through the Parent-Teacher Partnership Meet, a comprehensive two-day event designed to strengthen the home-school connection. Over 1,200 parents engaged in one-on-one consultations with teachers, attended workshops on effective parenting strategies, participated in classroom observations, and joined panel discussions on contemporary educational challenges. The meet featured special sessions on digital wellness, emotional intelligence, career guidance, and supporting diverse learning needs. Teachers presented detailed portfolios of student progress, highlighting not just academic achievements but also growth in creativity, leadership, and social responsibility. The video documents the enthusiastic participation, the insightful exchanges, and the collective commitment to nurturing each child's unique potential.",
    highlights: [
      "1,200+ parent participants",
      "Individual teacher consultations",
      "Parenting workshops & panels",
      "Student portfolio presentations",
      "Career guidance sessions"
    ],
    participants: "All Parents & Faculty",
    duration: "02:30",
    date: "July 29-30, 2023",
    location: "Multiple Venues, Campus",
    views: "3.8K",
    category: "Community",
    icon: Handshake
  },
  { 
    id: 10, 
    src: vid10, 
    title: "Morning Assembly Traditions", 
    subtitle: "Daily Inspiration & Values",
    description: "The ceremonial beginning of each school day featuring student presentations, thought-provoking speeches, and collective affirmations of our core values.",
    fullDescription: "Begin each day with inspiration through our Morning Assembly, a cherished tradition that has shaped the character of our students for over three decades. This video captures the solemn yet energizing atmosphere as 2,000 students gather in perfect discipline to start their day with purpose. The assembly features the school prayer, pledge recitation, thought for the day presented by students, important announcements, recognition of achievements, and special presentations on national and international days. Student council members develop leadership skills by conducting proceedings, while the school choir fills the air with melodious renditions. The video showcases special assemblies including Independence Day celebrations, Teacher's Day tributes, and the investiture ceremony, demonstrating how these daily gatherings instill values of patriotism, respect, gratitude, and community service in our students.",
    highlights: [
      "Daily gathering of 2,000 students",
      "Student-led proceedings",
      "Special day celebrations",
      "School choir performances",
      "Achievement recognitions"
    ],
    participants: "Entire School Community",
    duration: "04:00",
    date: "June 15, 2023",
    location: "School Assembly Ground",
    views: "9.6K",
    category: "Tradition",
    icon: Sun
  },
];

/* ================= PREMIUM VIDEO CARD ================= */
const VideoCard = ({ data, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const Icon = data.icon;

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
            src={data.src}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            muted
            playsInline
            preload="metadata"
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
                <MapPin className="w-3.5 h-3.5" />
                {data.location}
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