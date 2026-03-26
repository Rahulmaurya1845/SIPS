import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Clock,
  MapPin,
  Sparkles,
  Heart,
  Share2,
  Bookmark,
  Users,
  Award,
  Star,
  Trophy,
  Sun,
  Apple,
  Gamepad2,
  Utensils,
  HeartHandshake,
  BookText,
  Sprout,
  PartyPopper,
  Camera,
  Wine,
  Film,
  Music2,
  Crown,
  Flame,
  Zap,
  Calendar,
  Palette
} from "lucide-react";

/* ================= VIDEO URLs - CLOUDINARY & LOCAL ================= */
// Use direct URLs for Cloudinary videos
const vid1 = "https://res.cloudinary.com/dzi9mkbw0/video/upload/v1774532035/1_vnueub.mp4";
// Keep local imports for local videos
// import vid2 from "../assets/videos/2.mp4";
// import vid3 from "../assets/videos/3.mp4";
// import vid4 from "../assets/videos/4.mp4";
// import vid5 from "../assets/videos/5.mp4";
// import vid6 from "../assets/videos/6.mp4";
// import vid7 from "../assets/videos/7.mp4";
// import vid8 from "../assets/videos/8.mp4";
// import vid9 from "../assets/videos/9.mp4";
// import vid10 from "../assets/videos/10.mp4";
// import vid11 from "../assets/videos/11.mp4";
// import vid12 from "../assets/videos/12.mp4";  
// import annualfunc13 from "../assets/videos/annualfunc13.mp4";
// import annualfunc14 from "../assets/videos/annualfunc14.mp4";
// import annualfunc15 from "../assets/videos/annualfunc15.mp4";
// import annualfunc16 from "../assets/videos/annualfunc16.mp4";
// import annualfunc17 from "../assets/videos/annualfunc17.mp4";
const vid2 = "https://res.cloudinary.com/dzi9mkbw0/video/upload/v1774533510/2_mu1rl7.mp4";
const vid3 = "https://res.cloudinary.com/dzi9mkbw0/video/upload/v1774533518/3_thqbni.mp4";
const vid4 = "https://res.cloudinary.com/dzi9mkbw0/video/upload/v1774533539/6_mcgnw9.mp4";
const vid5 = "https://res.cloudinary.com/dzi9mkbw0/video/upload/v1774533520/5_ooteqn.mp4";
const vid6 = "https://res.cloudinary.com/dzi9mkbw0/video/upload/v1774533539/6_mcgnw9.mp4";
const vid7 = "https://res.cloudinary.com/dzi9mkbw0/video/upload/v1774533995/7_emju7a.mp4";
const vid8 = "https://res.cloudinary.com/dzi9mkbw0/video/upload/v1774533940/8_zkhd7i.mp4";
const vid9 = "https://res.cloudinary.com/dzi9mkbw0/video/upload/v1774533994/9_iixu4l.mp4";
const vid10 = "https://res.cloudinary.com/dzi9mkbw0/video/upload/v1774533943/10_kl9h5i.mp4";
const vid11 = "https://res.cloudinary.com/dzi9mkbw0/video/upload/v1774533986/11_dysaap.mp4";
const vid12 = "https://res.cloudinary.com/dzi9mkbw0/video/upload/v1774533984/12_hndhli.mp4";
const annualfunc13 = "https://res.cloudinary.com/dzi9mkbw0/video/upload/v1774534010/annualfunc13_ld06pl.mp4";
const annualfunc14 = "https://res.cloudinary.com/dzi9mkbw0/video/upload/v1774533996/annualfunc15_uutteg.mp4";
const annualfunc15 = "https://res.cloudinary.com/dzi9mkbw0/video/upload/v1774533989/annualfunc14_vl9boy.mp4";
const annualfunc16 = "https://res.cloudinary.com/dzi9mkbw0/video/upload/v1774534001/annualfunc17_ngzgsk.mp4";
const annualfunc17 = "https://res.cloudinary.com/dzi9mkbw0/video/upload/v1774533993/annualfunc16_bmxwap.mp4";




/* ================= ENHANCED VIDEO DATA - 17 VIDEOS ONLY ================= */
const videos = [
  { 
    id: 1, 
    src: vid1, 
    title: "Summer Activity", 
    subtitle: "Fun-Filled Summer Learning Adventures",
    tagline: "Where Learning Meets Sunshine",
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
    location: "School Campus & Playground",
    category: "Summer Camp",
    icon: Sun,
    color: "from-orange-400 to-amber-500"
  },
  { 
    id: 2, 
    src: vid2, 
    title: "Hello Summer", 
    subtitle: "Welcoming the Sunny Season with Joy",
    tagline: "Embracing the Warmth of New Beginnings",
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
    location: "School Assembly Ground",
    category: "Celebration",
    icon: Sun,
    color: "from-yellow-400 to-orange-500"
  },
  { 
    id: 3, 
    src: vid3, 
    title: "Complete My Pairs", 
    subtitle: "Interactive Memory & Matching Games",
    tagline: "Sharpening Minds Through Play",
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
    location: "Activity Room & Smart Classrooms",
    category: "Cognitive Skills",
    icon: Gamepad2,
    color: "from-blue-400 to-indigo-500"
  },
  { 
    id: 4, 
    src: vid4, 
    title: "Summer Vacation Fruits Activities", 
    subtitle: "Learning Nutrition Through Fun",
    tagline: "Healthy Habits Start Here",
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
    location: "School Cafeteria & Classrooms",
    category: "Health & Nutrition",
    icon: Apple,
    color: "from-red-400 to-rose-500"
  },
  { 
    id: 5, 
    src: vid5, 
    title: "Annual Cultural Activities", 
    subtitle: "Celebrating Arts, Music & Performance",
    tagline: "Where Talent Takes Center Stage",
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
    location: "School Auditorium",
    category: "Cultural Fest",
    icon: Palette,
    color: "from-purple-400 to-pink-500"
  },
  { 
    id: 6, 
    src: vid6, 
    title: "Summer Vacation Fruits Activity", 
    subtitle: "Hands-On Healthy Living Workshop",
    tagline: "Nourishing Body and Mind",
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
    location: "Primary Activity Center",
    category: "Workshop",
    icon: Utensils,
    color: "from-green-400 to-emerald-500"
  },
  { 
    id: 7, 
    src: vid7, 
    title: "Happy Mothers Day", 
    subtitle: "Celebrating Love & Gratitude",
    tagline: "Honoring the Heart of Our Homes",
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
    location: "School Hall & Classrooms",
    category: "Special Day",
    icon: HeartHandshake,
    color: "from-pink-400 to-rose-500"
  },
  { 
    id: 8, 
    src: vid8, 
    title: "Activity on Articles (A or An)", 
    subtitle: "Mastering English Grammar Through Play",
    tagline: "Building Language Foundations",
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
    location: "English Language Lab",
    category: "Language Learning",
    icon: BookText,
    color: "from-blue-400 to-cyan-500"
  },
  { 
    id: 9, 
    src: vid9, 
    title: "Activity on Articles (A or An)", 
    subtitle: "Advanced Grammar Concepts Made Simple",
    tagline: "Excellence in Every Expression",
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
    location: "Smart Classrooms",
    category: "Language Skills",
    icon: BookText,
    color: "from-indigo-400 to-blue-500"
  },
  { 
    id: 10, 
    src: vid10, 
    title: "Activity on Bad Habits and Good Habits", 
    subtitle: "Character Building & Life Skills",
    tagline: "Shaping Character, Building Future",
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
    location: "Life Skills Room",
    category: "Character Education",
    icon: Sprout,
    color: "from-green-400 to-teal-500"
  },
  { 
    id: 11, 
    src: vid11, 
    title: "Bottle Dance Game", 
    subtitle: "Rhythmic Movement & Coordination Challenge",
    tagline: "Balance, Grace, and Determination",
    description: "Exciting dance competition where students showcase their skills with bottle balancing acts and creative choreography.",
    fullDescription: "The Bottle Dance Game is one of our most anticipated annual competitions where students demonstrate incredible balance, coordination, and creativity. Participants perform intricate dance routines while balancing bottles on their heads, hands, and even feet! This video captures the thrilling moments of the competition, from the tense preparation backstage to the spectacular performances on stage. Students incorporate traditional and contemporary dance styles, creating unique fusion performances that leave the audience mesmerized. The event builds confidence, improves motor skills, and teaches the importance of practice and perseverance. Watch as these young performers turn a simple bottle into an instrument of artistic expression.",
    highlights: [
      "Bottle balancing dance performances",
      "Traditional and contemporary fusion dances",
      "Individual and group choreography rounds",
      "Costume and prop creativity showcase",
      "Judges' comments and winner announcements"
    ],
    participants: "Grades 4-8 Students",
    duration: "05:15",
    location: "School Auditorium & Stage",
    category: "Dance Competition",
    icon: Wine,
    color: "from-purple-400 to-indigo-500"
  },
  { 
    id: 12, 
    src: vid12, 
    title: "Sunshine Day", 
    subtitle: "Bright Celebrations & Positive Vibes",
    tagline: "Spreading Joy Like Sunlight",
    description: "A cheerful day dedicated to spreading positivity, joy, and sunshine through various fun-filled activities and performances.",
    fullDescription: "Sunshine Day is our special celebration dedicated to positivity, happiness, and spreading warmth throughout our school community. Students dress in bright yellow and orange colors representing the sun's energy. The day begins with a 'Sunshine Parade' where each class presents creative floats and costumes. This video captures outdoor games on the school lawn, sunshine-themed art competitions, and heartwarming performances where students sing songs about hope and happiness. Teachers organize mindfulness sessions about staying positive, and students create 'Rays of Kindness' - handwritten notes appreciating their friends. The highlight is the group dance finale performed under the open sky, creating a memorable day filled with smiles and laughter.",
    highlights: [
      "Sunshine Parade with creative floats",
      "Yellow and orange themed costume day",
      "Outdoor lawn games and activities",
      "Rays of Kindness appreciation notes",
      "Open-air group dance finale"
    ],
    participants: "Primary & Middle School Students",
    duration: "04:20",
    location: "School Grounds & Garden Area",
    category: "Special Celebration",
    icon: PartyPopper,
    color: "from-amber-400 to-yellow-500"
  },
  { 
    id: 13, 
    src: annualfunc13, 
    title: "Annual Function 2024", 
    subtitle: "Grand Annual Day Celebration - Full Event",
    tagline: "A Symphony of Talent & Celebration",
    description: "Complete coverage of our grand Annual Function showcasing all student performances, award ceremonies, and celebrations.",
    fullDescription: "Experience the complete magic of our Annual Function 2024 - our biggest celebration of the year! This full video captures every spectacular moment from start to finish. Watch stunning opening ceremonies, mesmerizing dance performances by all grades, soulful musical renditions, thought-provoking theatrical plays, and the proud moments of students receiving awards for their achievements. The event brings together the entire school community - students, parents, and teachers - in a magnificent celebration of talent and hard work. From traditional folk dances to contemporary performances, from academic awards to sports recognitions, this video documents the entire journey of excellence that defines our school. Witness the energy, enthusiasm, and exceptional talent that filled our auditorium on this unforgettable day.",
    highlights: [
      "Grand opening ceremony with lighting lamp",
      "Complete dance performances by all grades",
      "Musical and theatrical showcases",
      "Academic and sports award distributions",
      "Grand finale with all participants"
    ],
    participants: "All Students, Parents & Staff",
    duration: "02:15",
    location: "School Main Auditorium",
    category: "Annual Day",
    icon: Trophy,
    color: "from-amber-500 to-orange-600"
  },
  { 
    id: 14, 
    src: annualfunc14, 
    title: "Annual Function 2024 - Cultural Night", 
    subtitle: "Evening Performances & Cultural Showcase",
    tagline: "Stars Shine Brightest at Night",
    description: "Full evening session of our Annual Function featuring cultural performances, group dances, and special presentations.",
    fullDescription: "Continue the celebration with the complete evening cultural night of our Annual Function 2024! This full video showcases the cultural performances that lit up the stage as the sun went down. Experience traditional folk dances, classical music performances, modern choreography, and special group acts that demonstrate the incredible teamwork of our students. The video captures behind-the-scenes preparations, candid reactions from proud parents, and teachers guiding their students to shine. From regional dance forms to contemporary fusion, from instrumental solos to choir performances, this cultural night represents the diversity and richness of our school's artistic talent. Watch the complete journey as students take the stage with confidence and create memories that last a lifetime.",
    highlights: [
      "Traditional folk dance performances",
      "Classical and modern music showcases",
      "Regional cultural dance forms",
      "Group choreography spectaculars",
      "Closing ceremony and group photos"
    ],
    participants: "All Students & School Community",
    duration: "02:30",
    location: "School Main Auditorium",
    category: "Annual Day",
    icon: Camera,
    color: "from-purple-500 to-indigo-600"
  },
  { 
    id: 15, 
    src: annualfunc15, 
    title: "Annual Function 2024 - Dance Performance", 
    subtitle: "Rhythms of Joy & Tradition",
    tagline: "Every Step Tells a Story",
    description: "Spectacular dance performances featuring classical, folk, and contemporary numbers by talented students.",
    fullDescription: "The Dance Performance segment of our Annual Function 2024 showcases the incredible dancing talent across all grades. This video features classical Bharatnatyam and Kathak performances by our senior students, energetic folk dances representing different states of India, and contemporary fusion numbers that blend traditional steps with modern choreography. Watch the tiny tots of primary section charm the audience with their innocence, while middle and high school students display technical perfection and grace. The synchronized group dances, colorful costumes, and professional stage lighting create a visual spectacle. Each performance reflects months of rigorous practice and the dedicated guidance of our dance instructors.",
    highlights: [
      "Classical dance performances",
      "Regional folk dance showcase",
      "Contemporary fusion numbers",
      "Primary section charming performances",
      "Synchronized group choreography"
    ],
    participants: "Students from All Grades",
    duration: "02:45",
    location: "School Main Auditorium",
    category: "Annual Day",
    icon: Music2,
    color: "from-pink-500 to-rose-500"
  },
  { 
    id: 16, 
    src: annualfunc16, 
    title: "Annual Function 2024 - Opening Ceremony", 
    subtitle: "The Grand Beginning",
    tagline: "Where Excellence Takes the Stage",
    description: "The spectacular opening ceremony with lamp lighting, principal's address, and inaugural performances.",
    fullDescription: "The Opening Ceremony of our Annual Function 2024 sets the perfect tone for an evening of excellence and celebration. This video captures the traditional lamp lighting ceremony by our esteemed guests and school principal, followed by the welcome address highlighting the school's achievements throughout the year. Watch the inaugural dance performance by our senior students, the school choir's soulful rendition, and the release of the annual school magazine. The ceremony includes the introduction of the chief guest, presentation of school reports, and the much-awaited announcement of the evening's program. The elegant decorations, professional lighting, and the palpable excitement in the air make this opening ceremony a truly grand affair.",
    highlights: [
      "Traditional lamp lighting ceremony",
      "Principal's annual address",
      "Inaugural dance performance",
      "School choir special rendition",
      "Annual magazine release"
    ],
    participants: "Chief Guest, Staff & Students",
    duration: "02:20",
    location: "School Main Auditorium",
    category: "Annual Day",
    icon: Crown,
    color: "from-amber-400 to-yellow-500"
  },
  { 
    id: 17, 
    src: annualfunc17, 
    title: "Annual Function 2024 - Grand Finale", 
    subtitle: "A Spectacular Conclusion",
    tagline: "Ending with a Bang, Beginning New Dreams",
    description: "The spectacular closing ceremony with finale performances, vote of thanks, and memorable group presentations.",
    fullDescription: "The Grand Finale of our Annual Function 2024 brings the evening to a spectacular close with breathtaking performances and emotional moments. This video captures the finale dance involving all participants, the principal's vote of thanks, and the release of sky lanterns symbolizing dreams taking flight. Watch the combined performance by students and teachers, the emotional farewell to graduating students, and the collective celebration of another successful academic year. The finale includes a spectacular fireworks display (if permitted), group photographs, and the announcement of the next year's theme. The energy, emotions, and unity displayed in this finale make it a fitting end to a memorable celebration of talent and togetherness.",
    highlights: [
      "All-participant finale dance",
      "Principal's vote of thanks",
      "Sky lantern release ceremony",
      "Teacher-student combined act",
      "Farewell to outgoing students"
    ],
    participants: "Entire School Community",
    duration: "02:40",
    location: "School Main Auditorium",
    category: "Annual Day",
    icon: Flame,
    color: "from-orange-500 to-red-500"
  }
];

/* ================= PREMIUM VIDEO CARD ================= */
const VideoCard = ({ data, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const Icon = data.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (videoRef.current && isVisible) {
      if (isHovered) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered, isVisible]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(data)}
      className="group cursor-pointer h-full"
    >
      <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-indigo-200">
        
        {/* Thumbnail Container */}
        <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
          {isVisible && (
            <motion.video
              ref={videoRef}
              src={data.src}
              className="w-full h-full object-cover"
              animate={{ 
                scale: isHovered ? 1.1 : 1,
                filter: isHovered ? "brightness(0.7)" : "brightness(0.9)"
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              muted
              playsInline
              loop
              preload="metadata"
            />
          )}
          
          {/* Gradient Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: isHovered ? 0.9 : 0.6 }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Play Button */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8
            }}
            transition={{ duration: 0.4, ease: "backOut" }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 bg-white/30 rounded-full blur-2xl animate-pulse" />
              <div className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${data.color} rounded-full flex items-center justify-center shadow-2xl`}>
                <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white ml-1" />
              </div>
            </motion.div>
          </motion.div>

          {/* Top Actions */}
          <motion.div 
            className="absolute top-3 right-3 flex gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
              className="w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all active:scale-90 border border-white/30"
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'text-red-500 fill-red-500' : 'text-white'}`} />
            </button>
            <button 
              className="w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all active:scale-90 border border-white/30"
            >
              <Bookmark className="w-4 h-4 text-white" />
            </button>
          </motion.div>

          {/* Duration Badge */}
          <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-white rounded-xl shadow-lg border border-slate-100">
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {data.duration}
            </span>
          </div>

          {/* Category Icon */}
          <motion.div 
            className="absolute top-3 left-3"
            animate={{ 
              y: isHovered ? -5 : 0,
              rotate: isHovered ? 5 : 0
            }}
            transition={{ duration: 0.4 }}
          >
            <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${data.color} rounded-2xl flex items-center justify-center shadow-lg border border-white/30`}>
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
          </motion.div>

          {/* Tagline Overlay */}
          <motion.div
            className="absolute bottom-3 left-3 right-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] sm:text-xs font-semibold text-white border border-white/30">
              {data.tagline}
            </span>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-6">
          <div className="mb-3">
            <motion.h3 
              className="text-lg sm:text-xl font-bold text-slate-900 mb-1 leading-tight group-hover:text-indigo-600 transition-colors duration-300 line-clamp-1"
            >
              {data.title}
            </motion.h3>
            <p className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent uppercase tracking-wider line-clamp-1">
              {data.subtitle}
            </p>
          </div>

          <div className="mb-3">
            <span className={`inline-block px-2 py-1 rounded-lg text-[10px] font-bold bg-gradient-to-r ${data.color} text-white shadow-sm`}>
              {data.tagline}
            </span>
          </div>

          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2 font-medium">
            {data.description}
          </p>

          <div className="h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 mb-3" />

          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="px-2 py-1 bg-slate-100 rounded-lg font-semibold text-slate-600">
              {data.category}
            </span>
            <span className="flex items-center gap-1 font-medium text-slate-500">
              <Clock className="w-3.5 h-3.5" />
              {data.duration}
            </span>
          </div>
        </div>

        {/* Hover Effects */}
        <motion.div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${data.color} opacity-0 group-hover:opacity-5 pointer-events-none transition-opacity duration-500`}
        />
        
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            initial={{ x: "-100%" }}
            animate={{ x: isHovered ? "200%" : "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

/* ================= SOLID BACKGROUND LIGHTBOX - NO TRANSPARENCY ================= */
const VideoLightbox = ({ data, onClose, onNext, onPrev, currentIndex, totalVideos }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const videoRef = useRef(null);
  const Icon = data.icon;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

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
      className="fixed inset-0 z-[100] bg-[#0f0f13] overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* SOLID Header */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-4 bg-[#0f0f13] border-b border-white/10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 bg-gradient-to-br ${data.color} rounded-xl flex items-center justify-center shadow-lg`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div className="hidden sm:block">
            <h3 className="text-white font-bold text-sm line-clamp-1">{data.title}</h3>
            <p className="text-slate-400 text-xs font-medium">{data.category}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-white text-xs sm:text-sm font-bold bg-[#1a1a24] px-3 py-1.5 rounded-full border border-white/20">
            {currentIndex + 1} / {totalVideos}
          </span>
          <motion.button
            onClick={onClose}
            className="w-10 h-10 bg-[#1a1a24] hover:bg-[#252530] rounded-full flex items-center justify-center transition-colors border border-white/20"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </motion.div>

      {/* Main Content - SOLID Background */}
      <div className="min-h-screen pt-20 sm:pt-24 pb-10 px-4 sm:px-6 lg:px-8 bg-[#0f0f13]">
        <div className="max-w-7xl mx-auto">
          
          {/* Video Player */}
          <motion.div
            className="relative mb-6 sm:mb-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-video bg-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ring-2 ring-white/10">
              <video
                ref={videoRef}
                src={data.src}
                className="w-full h-full"
                controls
                autoPlay
                playsInline
                controlsList="nodownload"
                preload="auto"
              />
            </div>

            {/* Desktop Navigation */}
            <motion.button
              onClick={onPrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-[#1a1a24] hover:bg-[#252530] rounded-full flex items-center justify-center transition-colors border border-white/20 hidden md:flex"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.button>
            <motion.button
              onClick={onNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-[#1a1a24] hover:bg-[#252530] rounded-full flex items-center justify-center transition-colors border border-white/20 hidden md:flex"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.button>

            {/* Mobile Navigation */}
            <div className="flex md:hidden justify-between mt-4 gap-3">
              <motion.button
                onClick={onPrev}
                className="flex-1 py-3 bg-[#1a1a24] hover:bg-[#252530] rounded-xl flex items-center justify-center gap-2 text-white font-bold border border-white/20"
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </motion.button>
              <motion.button
                onClick={onNext}
                className="flex-1 py-3 bg-[#1a1a24] hover:bg-[#252530] rounded-xl flex items-center justify-center gap-2 text-white font-bold border border-white/20"
                whileTap={{ scale: 0.95 }}
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Title Card - SOLID */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#1a1a24] rounded-2xl p-5 sm:p-6 border border-white/10"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className={`px-3 py-1 bg-gradient-to-r ${data.color} text-white rounded-full text-xs font-bold uppercase tracking-wider`}>
                    {data.category}
                  </span>
                  <span className="px-3 py-1 bg-[#252530] text-white rounded-full text-xs font-semibold border border-white/10 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {data.duration}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 leading-tight">
                  {data.title}
                </h1>
                <p className="text-lg sm:text-xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-bold mb-2">
                  {data.tagline}
                </p>
                <p className="text-slate-300 font-medium">{data.subtitle}</p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                className="flex flex-wrap gap-2 sm:gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold transition-all text-sm sm:text-base ${isLiked ? 'bg-red-500 text-white' : 'bg-[#1a1a24] text-white hover:bg-[#252530] border border-white/20'}`}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isLiked ? 'fill-current' : ''}`} />
                  {isLiked ? 'Liked' : 'Like'}
                </motion.button>
                <motion.button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold transition-all text-sm sm:text-base ${isSaved ? 'bg-indigo-600 text-white' : 'bg-[#1a1a24] text-white hover:bg-[#252530] border border-white/20'}`}
                  whileTap={{ scale: 0.95 }}
                >
                  <Bookmark className={`w-4 h-4 sm:w-5 sm:h-5 ${isSaved ? 'fill-current' : ''}`} />
                  {isSaved ? 'Saved' : 'Save'}
                </motion.button>
                <motion.button
                  className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white transition-all text-sm sm:text-base shadow-lg shadow-indigo-500/25"
                  whileTap={{ scale: 0.95 }}
                >
                  <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  Share
                </motion.button>
              </motion.div>

              {/* Tabs - SOLID */}
              <motion.div 
                className="bg-[#1a1a24] rounded-2xl p-2 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-1 scrollbar-hide">
                  {['overview', 'highlights', 'details'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-3 text-xs sm:text-sm font-bold capitalize transition-all rounded-xl ${activeTab === tab ? `bg-gradient-to-r ${data.color} text-white` : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Tab Content - SOLID */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#1a1a24] rounded-2xl p-5 sm:p-6 border border-white/10"
              >
                {activeTab === 'overview' && (
                  <div className="space-y-4">
                    <p className="text-base sm:text-lg leading-relaxed text-white font-medium">{data.fullDescription}</p>
                    <div className="flex items-center gap-3 text-sm text-slate-300 mt-4 bg-[#252530] p-4 rounded-xl border border-white/10">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${data.color} flex items-center justify-center flex-shrink-0`}>
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-xs mb-1">Participants</p>
                        <p className="text-white font-bold">{data.participants}</p>
                      </div>
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
                        className="flex items-start gap-3 p-3 sm:p-4 bg-[#252530] rounded-xl border border-white/10"
                      >
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${data.color} flex items-center justify-center flex-shrink-0`}>
                          <Star className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm sm:text-base text-white font-medium">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
                {activeTab === 'details' && (
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-4 bg-[#252530] rounded-xl border border-white/10">
                        <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm mb-2 font-medium">
                          <MapPin className="w-4 h-4" />
                          Location
                        </div>
                        <p className="text-white font-bold text-sm sm:text-base">{data.location}</p>
                      </div>
                      <div className="p-4 bg-[#252530] rounded-xl border border-white/10">
                        <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm mb-2 font-medium">
                          <Clock className="w-4 h-4" />
                          Duration
                        </div>
                        <p className="text-white font-bold text-sm sm:text-base">{data.duration}</p>
                      </div>
                      <div className="p-4 bg-[#252530] rounded-xl border border-white/10">
                        <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm mb-2 font-medium">
                          <Award className="w-4 h-4" />
                          Category
                        </div>
                        <p className="text-white font-bold text-sm sm:text-base">{data.category}</p>
                      </div>
                      <div className="p-4 bg-[#252530] rounded-xl border border-white/10">
                        <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm mb-2 font-medium">
                          <Calendar className="w-4 h-4" />
                          Event Type
                        </div>
                        <p className="text-white font-bold text-sm sm:text-base">School Function</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Right Column - SOLID */}
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-[#1a1a24] rounded-2xl p-4 sm:p-6 border border-white/10"
              >
                <h3 className="text-white font-bold mb-4 flex items-center gap-2 text-sm sm:text-base">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                  Event Statistics
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-slate-400 text-xs sm:text-sm font-medium">Duration</span>
                    <span className="text-white font-bold text-sm sm:text-base">{data.duration}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-slate-400 text-xs sm:text-sm font-medium">Category</span>
                    <span className={`text-xs sm:text-sm font-bold bg-gradient-to-r ${data.color} bg-clip-text text-transparent`}>
                      {data.category}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-slate-400 text-xs sm:text-sm font-medium">Location</span>
                    <span className="text-white font-medium text-xs sm:text-sm text-right">{data.location}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-slate-400 text-xs sm:text-sm font-medium">Participants</span>
                    <span className="text-white font-medium text-xs sm:text-sm text-right">{data.participants}</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className={`bg-gradient-to-br ${data.color} rounded-2xl p-4 sm:p-6 text-white shadow-xl`}
              >
                <h3 className="font-bold mb-2 text-sm sm:text-base">Video Navigation</h3>
                <p className="text-white/80 text-xs sm:text-sm mb-4 font-medium">Explore more moments from our collection</p>
                <div className="flex gap-2">
                  <button 
                    onClick={onPrev} 
                    className="flex-1 py-2.5 sm:py-3 bg-white/20 hover:bg-white/30 rounded-xl text-xs sm:text-sm font-bold transition-colors"
                  >
                    ← Previous
                  </button>
                  <button 
                    onClick={onNext} 
                    className="flex-1 py-2.5 sm:py-3 bg-white hover:bg-white/90 text-slate-900 rounded-xl text-xs sm:text-sm font-bold transition-colors"
                  >
                    Next →
                  </button>
                </div>
              </motion.div>

              {/* Progress */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="bg-[#1a1a24] rounded-2xl p-4 border border-white/10"
              >
                <div className="flex justify-between text-xs text-slate-400 mb-2 font-medium">
                  <span>Progress</span>
                  <span>{currentIndex + 1} of {totalVideos}</span>
                </div>
                <div className="h-2 bg-[#252530] rounded-full overflow-hidden border border-white/10">
                  <motion.div 
                    className={`h-full bg-gradient-to-r ${data.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIndex + 1) / totalVideos) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
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
    <section className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-200/30 rounded-full blur-[100px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-xl shadow-indigo-100/50 border border-indigo-100 mb-6 sm:mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
            </motion.div>
            <span className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-widest">Memories in Motion</span>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight"
          >
            School{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Video Gallery
              </span>
              <motion.span 
                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 sm:h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full"
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
            className="text-base sm:text-lg lg:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light px-4"
          >
            Relive the cherished moments of our academic journey through these 
            <span className="text-slate-700 font-medium"> carefully curated visual stories</span>
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {videos.map((video, index) => (
            <VideoCard
              key={video.id}
              data={video}
              index={index}
              onClick={setSelectedVideo}
            />
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-lg border border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-slate-500 font-medium">
                Showing <span className="text-slate-900 font-bold">{videos.length}</span> featured videos
              </span>
            </div>
            <span className="hidden sm:block w-px h-4 bg-slate-200" />
            <span className="text-xs sm:text-sm text-slate-400 flex items-center gap-1">
              <Film className="w-3 h-3" />
              Updated regularly
            </span>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedVideo && (
          <VideoLightbox
            data={selectedVideo}
            onClose={() => setSelectedVideo(null)}
            onNext={handleNext}
            onPrev={handlePrev}
            currentIndex={currentIndex}
            totalVideos={videos.length}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;