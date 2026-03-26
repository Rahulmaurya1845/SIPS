import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  ChevronDown, 
  Palette, 
  Brain,
  GraduationCap,
  Target,
  Star,
  CheckCircle2,
  Clock,
  Users,
  Award
} from "lucide-react";

// Curriculum Data - Premium School Content
const curriculumData = [
  {
    level: "Foundational Stage",
    subtitle: "Nursery to Grade 2",
    age: "3 - 8 Years",
    description: "The Foundational Stage focuses on building strong basics through play-based learning, activity-based pedagogy, and interactive classroom experiences. Following the NEP 2020 guidelines, we emphasize motor skills, language development, and social-emotional learning through discovery and exploration.",
    highlights: ["Play-Based Learning", "Foundational Literacy", "Numeracy Skills", "Art Integration", "Motor Development"],
    icon: Palette,
    color: "rose",
    gradient: "from-rose-500 to-pink-600",
    bgGradient: "from-rose-50 to-pink-50",
    ratio: "1:15",
    features: [
      "Activity-Based Learning",
      "Storytelling & Drama",
      "Music & Movement",
      "Clay Modeling",
      "Nature Walks",
      "Sand Play"
    ],
    subjects: ["Language Development", "Mathematical Thinking", "Environmental Awareness", "Art & Craft", "Physical Education"]
  },
  {
    level: "Preparatory Stage",
    subtitle: "Grade 3 to 5",
    age: "8 - 11 Years",
    description: "The Preparatory Stage bridges the gap between foundational learning and subject-based teaching. Students are introduced to subject teachers while maintaining an integrated, holistic approach to education with emphasis on discovery, inquiry, and conceptual clarity.",
    highlights: ["Subject Introduction", "Experiential Learning", "Digital Literacy", "Scientific Temper", "Value Education"],
    icon: BookOpen,
    color: "blue",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
    ratio: "1:20",
    features: [
      "Smart Classrooms",
      "Mathematics Lab",
      "Environmental Studies",
      "Computer Fundamentals",
      "Library Periods",
      "Yoga & Meditation"
    ],
    subjects: ["English", "Hindi", "Mathematics", "Environmental Science", "Computer Science", "Art Education"]
  },
  {
    level: "Middle Stage",
    subtitle: "Grade 6 to 8",
    age: "11 - 14 Years",
    description: "The Middle Stage introduces abstract concepts and subject-specialized teaching. Students engage in project-based learning, develop critical thinking skills, and explore their interests through elective subjects, STEM activities, and leadership opportunities.",
    highlights: ["Subject Specialization", "STEM Integration", "Project-Based Learning", "Critical Thinking", "Leadership Skills"],
    icon: Brain,
    color: "emerald",
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    ratio: "1:25",
    features: [
      "Science Laboratories",
      "Mathematics Lab",
      "Coding & Robotics",
      "Social Science Projects",
      "Third Language",
      "Life Skills Program"
    ],
    subjects: ["English", "Hindi", "Mathematics", "Science", "Social Science", "Computer Science", "Third Language"]
  },
  {
    level: "Secondary Stage",
    subtitle: "Grade 9 to 10",
    age: "14 - 16 Years",
    description: "The Secondary Stage prepares students for the CBSE Board Examinations with rigorous academic training, comprehensive study materials, and regular assessments. Career guidance and counseling help students make informed decisions about their future academic paths.",
    highlights: ["CBSE Board Prep", "Career Counseling", "Competitive Exam Training", "Practical Skills", "Board Excellence"],
    icon: GraduationCap,
    color: "violet",
    gradient: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-50 to-purple-50",
    ratio: "1:30",
    features: [
      "Board-Focused Curriculum",
      "Weekly Test Series",
      "Doubt Clearing Sessions",
      "Career Guidance Cell",
      "Practical Examinations",
      "Pre-Board Assessments"
    ],
    subjects: ["English", "Hindi/Mathematics", "Science", "Social Science", "Information Technology", "Artificial Intelligence"]
  }
];

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Premium Minimal */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Programs</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Structured curriculum following NEP 2020 guidelines, designed to nurture every child's potential from early years through secondary education
          </p>
        </motion.div>

        {/* Curriculum Accordion - Premium Style */}
        <div className="space-y-3">
          {curriculumData.map((item, index) => {
            const Icon = item.icon;
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div 
                  className={`bg-slate-50 rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen ? 'border-slate-200 shadow-lg' : 'border-slate-100 hover:border-slate-200'
                  }`}
                >
                  {/* Accordion Header - Clean & Premium */}
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-md transition-transform duration-300 group-hover:scale-105`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.level}</h3>
                        <p className="text-slate-500 text-sm mt-0.5">{item.subtitle} • {item.age}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <span className="hidden sm:block text-sm font-medium text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                        Ratio <span className="text-slate-900 font-semibold">{item.ratio}</span>
                      </span>
                      <div className={`p-2 rounded-full bg-white border border-slate-200 transition-all duration-300 ${isOpen ? 'rotate-180 border-slate-300' : ''}`}>
                        <ChevronDown className="w-5 h-5 text-slate-600" />
                      </div>
                    </div>
                  </button>

                  {/* Accordion Content - No Gaps, Clean Layout */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-slate-200"
                      >
                        <div className="p-5 sm:p-6 bg-white">
                          {/* Description - Full Width */}
                          <div className="mb-6">
                            <p className="text-slate-600 leading-relaxed text-base">
                              {item.description}
                            </p>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Left Column */}
                            <div className="space-y-5">
                              {/* Key Features */}
                              <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                  <Award className="w-3.5 h-3.5" />
                                  Key Features
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                  {item.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.gradient}`} />
                                      <span className="text-slate-700 text-sm font-medium">{feature}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Core Areas */}
                              <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                  <BookOpen className="w-3.5 h-3.5" />
                                  Core Areas
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {item.subjects.map((subject, i) => (
                                    <span 
                                      key={i}
                                      className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-medium rounded-md border border-slate-200"
                                    >
                                      {subject}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Right Column - Highlights & Info */}
                            <div className="space-y-5">
                              {/* Highlights */}
                              <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                  <Star className="w-3.5 h-3.5" />
                                  Highlights
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {item.highlights.map((highlight, i) => (
                                    <span 
                                      key={i}
                                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${item.gradient} shadow-sm`}
                                    >
                                      <Star className="w-3 h-3 fill-current" />
                                      {highlight}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Quick Info - No Student Count, No Academic Year */}
                              <div className={`p-4 rounded-xl bg-gradient-to-br ${item.bgGradient} border border-slate-100`}>
                                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                                  <Clock className="w-3.5 h-3.5" />
                                  Program Info
                                </h4>
                                <div className="space-y-2.5">
                                  <div className="flex items-center justify-between">
                                    <span className="text-slate-600 text-sm flex items-center gap-2">
                                      <Target className="w-4 h-4 text-slate-400" />
                                      Teacher Ratio
                                    </span>
                                    <span className="font-bold text-slate-900">{item.ratio}</span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-slate-600 text-sm flex items-center gap-2">
                                      <Users className="w-4 h-4 text-slate-400" />
                                      Age Group
                                    </span>
                                    <span className="font-semibold text-slate-900">{item.age}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}