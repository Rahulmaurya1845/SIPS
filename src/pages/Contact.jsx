// import React, { useState } from "react";
// import toast from "react-hot-toast";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Share2,
//   Facebook,
//   Instagram,
//   Youtube,
//   Twitter,
// } from "lucide-react";

// const ContactSection = () => {
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     address: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });

//     setErrors({
//       ...errors,
//       [e.target.name]: "",
//     });
//   };

//   const validateForm = () => {
//     let newErrors = {};

//     if (!formData.name.trim())
//       newErrors.name = "Name is required";

//     if (!formData.email.trim())
//       newErrors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(formData.email))
//       newErrors.email = "Invalid email format";

//     if (!formData.mobile.trim())
//       newErrors.mobile = "Mobile number is required";
//     else if (!/^[0-9]{10}$/.test(formData.mobile))
//       newErrors.mobile = "Mobile must be 10 digits";

//     if (!formData.message.trim())
//       newErrors.message = "Message cannot be empty";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // ✅ BACKEND INTEGRATION (ONLY THIS PART CHANGED)
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     setLoading(true);

//     try {
//       const res = await fetch("http://localhost:5000/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         toast.success("Message Sent Successfully ✅");

//         setFormData({
//           name: "",
//           email: "",
//           mobile: "",
//           address: "",
//           message: "",
//         });
//       } else {
//         toast.error(data.message || "Failed to send message ❌");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Server Error ❌");
//     }

//     setLoading(false);
//   };

//   return (
//     <section className="py-20 md:py-24 bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-gray-300 relative overflow-hidden">

//       {/* Background Effects */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 relative z-10">

//         <h1 className="text-4xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 mb-6">
//           Contact Us
//         </h1>

//         <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16 md:mb-20 text-base md:text-lg">
//           If you have any questions or need additional information, feel free
//           to reach out using the contact form.
//         </p>

//         <div className="grid lg:grid-cols-2 gap-12 md:gap-16">

//           {/* LEFT SIDE CARDS — SAME DESIGN */}
//           <div className="grid sm:grid-cols-2 gap-8 md:gap-10">

//             {/* Phone */}
//             <div className="group bg-gray-800/80 p-8 md:p-10 rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 hover:text-white flex flex-col justify-center items-center text-center">
//               <div className="w-16 md:w-20 h-16 md:h-20 flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 rounded-full mb-6 transition-all duration-300 group-hover:bg-white group-hover:scale-110">
//                 <Phone size={28} />
//               </div>
//               <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
//                 Call Us On
//               </h3>
//               <p className="text-gray-200">097923 47399</p>
//             </div>

//             {/* Email */}
//             <div className="group bg-gray-800/80 p-8 md:p-10 rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:bg-gradient-to-br hover:from-green-500 hover:to-green-600 hover:text-white flex flex-col justify-center items-center text-center">
//               <div className="w-16 md:w-20 h-16 md:h-20 flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200 text-green-600 rounded-full mb-6 transition-all duration-300 group-hover:bg-white group-hover:scale-110">
//                 <Mail size={28} />
//               </div>
//               <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
//                 Email Us
//               </h3>
//               <p className="text-gray-200">sips@gmail.com</p>
//             </div>

//             {/* Location */}
//             <div className="group bg-gray-800/80 p-8 md:p-10 rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:bg-gradient-to-br hover:from-pink-500 hover:to-pink-600 hover:text-white flex flex-col justify-center items-center text-center">
//               <div className="w-16 md:w-20 h-16 md:h-20 flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-200 text-pink-600 rounded-full mb-6 transition-all duration-300 group-hover:bg-white group-hover:scale-110">
//                 <MapPin size={28} />
//               </div>
//               <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
//                 Our Location
//               </h3>
//               <p className="text-gray-400 text-sm">
//                 RXP2+45C, Parsauna, Uttar Pradesh 274309
//               </p>
//             </div>

//             {/* Social */}
//             <div className="group bg-gray-800/80 p-8 md:p-10 rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-500 hover:text-white flex flex-col justify-center items-center text-center">
//               <div className="w-16 md:w-20 h-16 md:h-20 flex items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-200 text-yellow-600 rounded-full mb-6 transition-all duration-300 group-hover:bg-white group-hover:scale-110">
//                 <Share2 size={28} />
//               </div>

//               <div className="flex justify-center space-x-4">
//                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full transition-all duration-300 hover:scale-125 hover:bg-blue-600 hover:text-white">
//                   <Facebook size={18} />
//                 </a>
//                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-pink-100 text-pink-600 rounded-full transition-all duration-300 hover:scale-125 hover:bg-pink-600 hover:text-white">
//                   <Instagram size={18} />
//                 </a>
//                 <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-red-100 text-red-600 rounded-full transition-all duration-300 hover:scale-125 hover:bg-red-600 hover:text-white">
//                   <Youtube size={18} />
//                 </a>
//                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-400 rounded-full transition-all duration-300 hover:scale-125 hover:bg-blue-400 hover:text-white">
//                   <Twitter size={18} />
//                 </a>
//               </div>
//             </div>

//           </div>

//           {/* RIGHT SIDE FORM — SAME DESIGN */}
//           <div className="bg-gray-800/80 p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-700">
//             <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-white">
//               Send Us a Message
//             </h3>

//             <form onSubmit={handleSubmit} className="space-y-6">

//               <div className="grid sm:grid-cols-2 gap-6">
//                 <div>
//                   <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Your Name" className="w-full p-4 border-2 border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-400 bg-gray-700 text-white" />
//                   {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
//                 </div>

//                 <div>
//                   <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" className="w-full p-4 border-2 border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-400 bg-gray-700 text-white" />
//                   {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
//                 </div>
//               </div>

//               <div className="grid sm:grid-cols-2 gap-6">
//                 <div>
//                   <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter Your Mobile" className="w-full p-4 border-2 border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-400 bg-gray-700 text-white" />
//                   {errors.mobile && <p className="text-red-400 text-sm mt-1">{errors.mobile}</p>}
//                 </div>

//                 <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Enter Your Address" className="w-full p-4 border-2 border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-400 bg-gray-700 text-white" />
//               </div>

//               <div>
//                 <textarea name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Enter Your Message" className="w-full p-4 border-2 border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-400 bg-gray-700 text-white resize-none" />
//                 {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
//               </div>

//               <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex justify-center items-center gap-2">
//                 {loading ? (
//                   <>
//                     <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                     Sending...
//                   </>
//                 ) : (
//                   "Submit Now →"
//                 )}
//               </button>

//             </form>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;




import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
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
  ChevronRight,
  Sparkles,
  ArrowUpRight,
  Building2,
  GraduationCap
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
    <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Animated Background with Mouse Parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
            x: mousePosition.x * 2,
            y: mousePosition.y * 2
          }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px]"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)",
            x: mousePosition.x * -1.5,
            y: mousePosition.y * -1.5
          }}
          animate={{ scale: [1.2, 1, 1.2], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[150px]"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Ultra Premium Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white shadow-xl border border-slate-100 mb-8"
          >
            <motion.div 
              animate={{ rotate: 360, scale: [1, 1.2, 1] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-amber-500" />
            </motion.div>
            <span className="text-sm font-bold text-slate-600 tracking-widest uppercase">Get In Touch</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Connect</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-xl leading-relaxed">
            Have a question or want to visit our campus? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* LEFT SIDE - Contact Cards with 3D Effect */}
          <div className="lg:col-span-2 space-y-5">
            {contactCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -80, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: card.delay, duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.03, x: 10 }}
                style={{ perspective: 1000 }}
              >
                <a 
                  href={card.href || "#"} 
                  target={card.href?.startsWith("http") ? "_blank" : undefined}
                  rel={card.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500`} />
                  <div className="relative bg-white/90 backdrop-blur-xl p-6 rounded-2xl border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.gradient} opacity-10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500`} />
                    
                    <div className="flex items-center gap-5 relative z-10">
                      <motion.div 
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.bgGradient} flex items-center justify-center shrink-0 shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <card.icon className={`w-8 h-8 ${card.iconColor}`} />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 text-xl mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${card.gradient} transition-all">{card.title}</h3>
                        <p className="text-slate-700 font-semibold text-lg">{card.info}</p>
                        <p className="text-slate-400 text-sm">{card.subInfo}</p>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="text-slate-300 group-hover:text-slate-600"
                      >
                        <ArrowUpRight className="w-6 h-6" />
                      </motion.div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}

            {/* Social Links - Ultra Premium */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative mt-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-30" />
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl text-white shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
                
                <div className="relative z-10">
                  <h3 className="font-bold text-2xl mb-2 flex items-center gap-3">
                    <Share2 className="w-6 h-6 text-blue-400" />
                    Follow Our Journey
                  </h3>
                  <p className="text-slate-400 mb-6 text-sm">Stay connected with us on social media</p>
                  
                  <div className="flex gap-4">
                    {socialLinks.map((social, idx) => (
                      <motion.a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -8, scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="group relative"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-2xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
                        <div className="relative w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white hover:border-transparent transition-all duration-300 group-hover:shadow-lg">
                          <social.icon className="w-6 h-6 text-white group-hover:text-slate-900 transition-colors" />
                        </div>
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-white/0 group-hover:text-white/80 transition-all whitespace-nowrap">
                          {social.label}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Cinematic Form */}
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
                className="absolute -inset-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-[2rem] opacity-75"
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
              
              <div className="relative bg-white/95 backdrop-blur-2xl p-8 md:p-12 rounded-[2rem] shadow-2xl">
                {/* Form Header */}
                <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-100">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-slate-900">Send Message</h3>
                    <p className="text-slate-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name Field - Premium */}
                    <motion.div 
                      className="relative group"
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'name' ? 'text-indigo-500 scale-110' : 'text-slate-400'}`}>
                        <User className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Full Name"
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 outline-none text-slate-700 placeholder:text-slate-400 font-medium"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.name}</p>}
                    </motion.div>

                    {/* Email Field - Premium */}
                    <motion.div 
                      className="relative group"
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'email' ? 'text-indigo-500 scale-110' : 'text-slate-400'}`}>
                        <Mail className="w-5 h-5" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Email Address"
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 outline-none text-slate-700 placeholder:text-slate-400 font-medium"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.email}</p>}
                    </motion.div>

                    {/* Mobile Field - Premium */}
                    <motion.div 
                      className="relative group"
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'mobile' ? 'text-indigo-500 scale-110' : 'text-slate-400'}`}>
                        <Phone className="w-5 h-5" />
                      </div>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('mobile')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Mobile Number"
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 outline-none text-slate-700 placeholder:text-slate-400 font-medium"
                      />
                      {errors.mobile && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.mobile}</p>}
                    </motion.div>

                    {/* Address Field - Premium */}
                    <motion.div 
                      className="relative group"
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'address' ? 'text-indigo-500 scale-110' : 'text-slate-400'}`}>
                        <MapPinned className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('address')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Your Address (Optional)"
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 outline-none text-slate-700 placeholder:text-slate-400 font-medium"
                      />
                    </motion.div>
                  </div>

                  {/* Message Field - Premium */}
                  <motion.div 
                    className="relative group"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className={`absolute left-4 top-4 transition-all duration-300 ${focusedField === 'message' ? 'text-indigo-500 scale-110' : 'text-slate-400'}`}>
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your Message..."
                      rows={5}
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 outline-none text-slate-700 placeholder:text-slate-400 font-medium resize-none"
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.message}</p>}
                  </motion.div>

                  {/* Submit Button - Ultra Premium */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full py-5 px-8 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-lg shadow-xl shadow-indigo-500/30 overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
                      initial={{ x: "100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      {loading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full" />
                          </motion.div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </div>
                  </motion.button>
                </form>

                {/* Footer Note */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-slate-400 text-sm">
                  <Building2 className="w-4 h-4" />
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