import React, { useState, useEffect, useRef } from "react";
import { Trophy, Briefcase, Shield, DollarSign, Microscope, AlarmClock, BookOpen, Home, Users } from "lucide-react";

const facilitiesData = [
  { id: 1, title: "Expert Faculty", color: "#4a6bff", hoverColor: "#3b50d0", icon: <Trophy />, description: "Learn from highly experienced and dedicated teachers.", features: ["Experienced Teachers", "Mentorship", "Regular Training"] },
  { id: 2, title: "Computer Lab", color: "#8a2be2", hoverColor: "#6a1dbb", icon: <Briefcase />, description: "State-of-the-art computers for practical learning.", features: ["Modern PCs", "High-speed Internet", "Practical Sessions"] },
  { id: 3, title: "Science Labs", color: "#00cec9", hoverColor: "#00b2b0", icon: <Shield />, description: "Fully equipped labs for hands-on science experiments.", features: ["Chemistry Lab", "Physics Lab", "Biology Lab"] },
  { id: 4, title: "Smart Classes", color: "#ff6b81", hoverColor: "#ff92a0", icon: <DollarSign />, description: "Interactive classrooms with smart teaching tools.", features: ["Interactive Boards", "Digital Lessons", "E-learning Tools"] },
  { id: 5, title: "Library", color: "#ff7f50", hoverColor: "#ffa07a", icon: <Microscope />, description: "Extensive collection of books and e-resources.", features: ["Books & Journals", "E-books", "Study Area"] },
  { id: 6, title: "RO Water", color: "#4a90e2", hoverColor: "#75a7f0", icon: <AlarmClock />, description: "Clean drinking water for all students.", features: ["Purified Water", "Water Coolers", "Hygienic Supply"] },
  { id: 7, title: "CCTV Secure", color: "#ffa500", hoverColor: "#ffc04d", icon: <BookOpen />, description: "24/7 security surveillance for safety.", features: ["Monitoring", "Safety Alerts", "Visitor Logs"] },
  { id: 8, title: "Extra Classes", color: "#32cd32", hoverColor: "#66e066", icon: <Home />, description: "Additional classes to strengthen knowledge.", features: ["Remedial Lessons", "Advanced Sessions", "Exam Preparation"] },
  { id: 9, title: "Transport Supervision", color: "#ff1493", hoverColor: "#ff66b2", icon: <Users />, description: "Safe and monitored transport for students.", features: ["Bus Safety", "Route Monitoring", "Trained Staff"] },
];

const Facilities = () => {
  const sectionRef = useRef();
  const [sectionVisible, setSectionVisible] = useState(false);
  const [expandedCards, setExpandedCards] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setSectionVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-r from-[#f5f7ff] to-[#edf0ff] overflow-hidden"
    >
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-blue-100 rounded-full mb-6 animate-pulse justify-center mx-auto">
          <span className="text-lg">⭐</span>
          <span className="text-blue-600 font-bold uppercase text-sm">Facilities</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Our <span className="text-blue-500">Key</span> Facilities
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {facilitiesData.map((facility, index) => {
          const isExpanded = expandedCards[facility.id] || false;
          const isHovered = hoveredCard === facility.id;

          return (
            <div
              key={facility.id}
              className="relative rounded-2xl p-8 backdrop-blur-md border border-white/20 shadow-md transition-all duration-500 cursor-pointer overflow-hidden"
              style={{
                backgroundColor: isHovered ? facility.hoverColor : "rgba(255,255,255,0.1)",
                transform: sectionVisible ? "translateY(0)" : "translateY(40px)",
                opacity: sectionVisible ? 1 : 0,
                transitionDelay: `${index * 0.1}s`,
                boxShadow: isHovered
                  ? `0 15px 30px ${facility.hoverColor}80`
                  : "0 8px 30px rgba(0,0,0,0.12)",
              }}
              onMouseEnter={() => setHoveredCard(facility.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Floating dots */}
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  style={{
                    position: "absolute",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: isHovered ? facility.hoverColor : facility.color,
                    opacity: 0.4,
                    top: i % 2 === 0 ? `${Math.random() * 100}%` : "auto",
                    bottom: i % 2 !== 0 ? `${Math.random() * 100}%` : "auto",
                    left: `${Math.random() * 100}%`,
                    right: "auto",
                    animation: sectionVisible ? `pulseDot 2s ${i * 0.2}s infinite alternate` : "none",
                  }}
                />
              ))}

              {/* Icon */}
              <div className="flex items-center justify-center mb-6">
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-xl border-2 text-2xl transition-colors duration-300"
                  style={{
                    borderColor: isHovered ? "#fff" : facility.color,
                    color: isHovered ? "#fff" : facility.color,
                  }}
                >
                  {facility.icon}
                </div>
              </div>

              {/* Title & Description */}
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: isHovered ? "#fff" : "#1a202c" }}
              >
                {facility.title}
              </h3>
              <p className="text-sm mb-4" style={{ color: isHovered ? "#f0f0f0" : "#4a5568" }}>
                {facility.description}
              </p>

              {/* Features */}
              {isExpanded && (
                <ul className="mb-4 text-sm" style={{ color: isHovered ? "#fff" : "#4a5568" }}>
                  {facility.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full" style={{ background: isHovered ? "#fff" : facility.color }}></span>
                      {f}
                    </li>
                  ))}
                </ul>
              )}

              {/* Progress & Toggle */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: "60%",
                      background: isHovered ? "#fff" : facility.color,
                      transition: "width 0.6s ease",
                    }}
                  ></div>
                </div>
                <button
                  onClick={() => toggleExpand(facility.id)}
                  className="px-4 py-1 rounded-full font-semibold text-sm transition-all"
                  style={{
                    background: isExpanded ? (isHovered ? "#fff" : facility.color) : "#f9f9fb",
                    color: isExpanded ? (isHovered ? facility.hoverColor : "#fff") : "#4a5568",
                  }}
                >
                  {isExpanded ? "Less" : "More"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <style>
        {`
          @keyframes pulseDot {
            0%,100% {opacity:0.3; transform:scale(0.8);}
            50% {opacity:0.7; transform:scale(1.2);}
          }
        `}
      </style>
    </section>
  );
};

export default Facilities;
