import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import toast from "react-hot-toast";
import {
  Phone,
  Mail,
  MapPin,
  Share2,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Send,
  User,
  MessageSquare,
  MapPinned,
  Clock,
  ArrowUpRight,
  Sparkles,
  GraduationCap,
  Building2
} from "lucide-react";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 30,
          y: (e.clientY - rect.top - rect.height / 2) / 30
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    else if (!/^[0-9]{10}$/.test(formData.mobile)) newErrors.mobile = "Mobile must be 10 digits";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("Message Sent Successfully ✅");
        setFormData({ name: "", email: "", mobile: "", address: "", message: "" });
      } else {
        toast.error(data.message || "Failed to send message ❌");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server Error ❌");
    }
    setLoading(false);
  };

  // Social links with proper URLs
  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com", color: "from-blue-600 to-blue-700", label: "Facebook" },
    { icon: Twitter, url: "https://twitter.com", color: "from-slate-700 to-slate-800", label: "Twitter" },
    { icon: Instagram, url: "https://instagram.com", color: "from-pink-500 via-purple-500 to-orange-500", label: "Instagram" },
    { icon: Youtube, url: "https://youtube.com", color: "from-red-600 to-red-700", label: "YouTube" }
  ];

  // Contact cards data
  const contactCards = [
    {
      icon: Phone,
      title: "Call Us Now",
      info: "097923 47399",
      subInfo: "Mon-Sat, 8:30am-3pm",
      gradient: "from-blue-500 via-indigo-500 to-purple-600",
      bgGradient: "from-blue-100 via-indigo-100 to-purple-100",
      iconColor: "text-blue-600",
      href: "tel:09792347399",
      delay: 0
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "sips@gmail.com",
      subInfo: "We reply within 24h",
      gradient: "from-emerald-500 via-teal-500 to-cyan-600",
      bgGradient: "from-emerald-100 via-teal-100 to-cyan-100",
      iconColor: "text-emerald-600",
      href: "mailto:sips@gmail.com",
      delay: 0.1
    },
    {
      icon: MapPin,
      title: "Visit Our Campus",
      info: "Parsauna, Uttar Pradesh",
      subInfo: "274309, India",
      gradient: "from-amber-500 via-orange-500 to-red-500",
      bgGradient: "from-amber-100 via-orange-100 to-red-100",
      iconColor: "text-amber-600",
      href: "https://www.google.com/maps/search/?api=1&query=RXP2+45C,+Parsauna,+Uttar+Pradesh+274309",
      delay: 0.2
    },
    {
      icon: Clock,
      title: "Working Hours",
      info: "Mon - Saturday",
      subInfo: "08:30 AM - 03:00 PM",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      bgGradient: "from-purple-100 via-pink-100 to-rose-100",
      iconColor: "text-purple-600",
      href: null,
      delay: 0.3
    }
  ];

  return (
    <section ref={containerRef} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Animated Background with Mouse Parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
            x: mousePosition.x * 2,
            y: mousePosition.y * 2
          }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px]"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)",
            x: mousePosition.x * -1.5,
            y: mousePosition.y * -1.5
          }}
          animate={{ scale: [1.2, 1, 1.2], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] lg:w-[900px] lg:h-[900px] rounded-full blur-[100px] sm:blur-[120px] lg:blur-[150px]"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          }}
        />
        
        {/* Floating particles - reduced on mobile */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full hidden sm:block"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Ultra Premium Header - Responsive */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white shadow-xl border border-slate-100 mb-6 sm:mb-8"
          >
            <motion.div 
              animate={{ rotate: 360, scale: [1, 1.2, 1] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
            </motion.div>
            <span className="text-xs sm:text-sm font-bold text-slate-600 tracking-widest uppercase">Get In Touch</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Connect</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed px-4 sm:px-0">
            Have a question or want to visit our campus? We'd love to hear from you.
          </p>
        </motion.div>

        {/* Main Grid - Responsive: 1 col mobile, 2 col lg+ */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-16">
          {/* LEFT SIDE - Contact Cards */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-5">
            {contactCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -80, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: card.delay, duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.02, x: 5 }}
                style={{ perspective: 1000 }}
              >
                <a 
                  href={card.href || "#"} 
                  target={card.href?.startsWith("http") ? "_blank" : undefined}
                  rel={card.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500`} />
                  <div className="relative bg-white/90 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${card.gradient} opacity-10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500`} />
                    
                    <div className="flex items-center gap-3 sm:gap-5 relative z-10">
                      <motion.div 
                        className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${card.bgGradient} flex items-center justify-center shrink-0 shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <card.icon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${card.iconColor}`} />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-slate-900 text-base sm:text-lg md:text-xl mb-0.5 sm:mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${card.gradient} transition-all truncate">{card.title}</h3>
                        <p className="text-slate-700 font-semibold text-sm sm:text-base md:text-lg truncate">{card.info}</p>
                        <p className="text-slate-400 text-xs sm:text-sm truncate">{card.subInfo}</p>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="text-slate-300 group-hover:text-slate-600 hidden sm:block"
                      >
                        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                      </motion.div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}

            {/* Social Links - Responsive */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative mt-6 sm:mt-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl sm:rounded-3xl blur-xl opacity-30" />
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-5 sm:p-8 rounded-2xl sm:rounded-3xl text-white shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
                
                <div className="relative z-10">
                  <h3 className="font-bold text-lg sm:text-2xl mb-1 sm:mb-2 flex items-center gap-2 sm:gap-3">
                    <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                    Follow Our Journey
                  </h3>
                  <p className="text-slate-400 mb-4 sm:mb-6 text-xs sm:text-sm">Stay connected with us on social media</p>
                  
                  <div className="flex gap-3 sm:gap-4">
                    {socialLinks.map((social, idx) => (
                      <motion.a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="group relative"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white hover:border-transparent transition-all duration-300 group-hover:shadow-lg">
                          <social.icon className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:text-slate-900 transition-colors" />
                        </div>
                        <span className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs text-white/0 group-hover:text-white/80 transition-all whitespace-nowrap">
                          {social.label}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Form - Responsive */}
          <motion.div
            initial={{ opacity: 0, x: 80, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="lg:col-span-3"
            style={{ perspective: 1000 }}
          >
            <div className="relative">
              {/* Animated border gradient */}
              <motion.div 
                className="absolute -inset-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-[1.5rem] sm:rounded-[2rem] opacity-75"
                animate={{ 
                  background: [
                    "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)",
                    "linear-gradient(180deg, #ec4899, #3b82f6, #8b5cf6)",
                    "linear-gradient(270deg, #8b5cf6, #ec4899, #3b82f6)",
                    "linear-gradient(360deg, #3b82f6, #8b5cf6, #ec4899)"
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="relative bg-white/95 backdrop-blur-2xl p-5 sm:p-8 md:p-10 lg:p-12 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl">
                {/* Form Header - Responsive */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-slate-100">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900">Send Message</h3>
                    <p className="text-slate-500 text-sm sm:text-base">We'll respond within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Form Grid - Responsive */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {/* Name Field */}
                    <motion.div 
                      className="relative group"
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className={`absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'name' ? 'text-indigo-500 scale-110' : 'text-slate-400'}`}>
                        <User className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Full Name"
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-slate-50 border-2 border-slate-200 rounded-lg sm:rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 outline-none text-slate-700 placeholder:text-slate-400 font-medium text-sm sm:text-base"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.name}</p>}
                    </motion.div>

                    {/* Email Field */}
                    <motion.div 
                      className="relative group"
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className={`absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'email' ? 'text-indigo-500 scale-110' : 'text-slate-400'}`}>
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Email Address"
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-slate-50 border-2 border-slate-200 rounded-lg sm:rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 outline-none text-slate-700 placeholder:text-slate-400 font-medium text-sm sm:text-base"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.email}</p>}
                    </motion.div>

                    {/* Mobile Field */}
                    <motion.div 
                      className="relative group"
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className={`absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'mobile' ? 'text-indigo-500 scale-110' : 'text-slate-400'}`}>
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('mobile')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Mobile Number"
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-slate-50 border-2 border-slate-200 rounded-lg sm:rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 outline-none text-slate-700 placeholder:text-slate-400 font-medium text-sm sm:text-base"
                      />
                      {errors.mobile && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.mobile}</p>}
                    </motion.div>

                    {/* Address Field */}
                    <motion.div 
                      className="relative group"
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className={`absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'address' ? 'text-indigo-500 scale-110' : 'text-slate-400'}`}>
                        <MapPinned className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('address')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Your Address (Optional)"
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-slate-50 border-2 border-slate-200 rounded-lg sm:rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 outline-none text-slate-700 placeholder:text-slate-400 font-medium text-sm sm:text-base"
                      />
                    </motion.div>
                  </div>

                  {/* Message Field */}
                  <motion.div 
                    className="relative group"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className={`absolute left-3 sm:left-4 top-3 sm:top-4 transition-all duration-300 ${focusedField === 'message' ? 'text-indigo-500 scale-110' : 'text-slate-400'}`}>
                      <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your Message..."
                      rows={4}
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-slate-50 border-2 border-slate-200 rounded-lg sm:rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 outline-none text-slate-700 placeholder:text-slate-400 font-medium resize-none text-sm sm:text-base"
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.message}</p>}
                  </motion.div>

                  {/* Submit Button - Responsive */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full py-4 sm:py-5 px-6 sm:px-8 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-base sm:text-lg shadow-xl shadow-indigo-500/30 overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
                      initial={{ x: "100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                      {loading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 sm:border-3 border-white/30 border-t-white rounded-full" />
                          </motion.div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </div>
                  </motion.button>
                </form>

                {/* Footer Note */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-100 flex items-center gap-2 text-slate-400 text-xs sm:text-sm">
                  <Building2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Secure & encrypted transmission</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;