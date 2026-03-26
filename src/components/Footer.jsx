import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  House,
  User,
  ClipboardList,
  Image,
  Send,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Heart,
  ChevronUp,
  GraduationCap
} from "lucide-react";
import logo from "../assets/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ELEGANT TOP DIVIDER - Appears on every page */}
      <div className="relative w-full">
        {/* Main gradient line */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        
        {/* Decorative elements */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-6 h-6 bg-white rounded-full shadow-lg border border-indigo-200 flex items-center justify-center">
          <div className="w-2 h-2 bg-indigo-500 rounded-full" />
        </div>
        
        {/* Shadow effect */}
        <div className="h-8 w-full bg-gradient-to-b from-slate-100/50 to-transparent pointer-events-none" />
      </div>

      <footer className="relative bg-slate-900 text-slate-300 font-sans overflow-hidden">
        
        {/* Dark textured background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Subtle gradient orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />
        </div>

        {/* CTA Section - Dark Theme */}
        <div className="relative z-10 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-medium text-slate-400 tracking-wider uppercase">Begin Your Journey</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                  Ready to shape your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    future?
                  </span>
                </h2>
                <p className="text-slate-400 max-w-lg">
                  Join Sahodara International Public School and give your child the best foundation for success.
                </p>
              </motion.div>

              {/* Right Buttons */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/admissions"
                    className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2"
                  >
                    Apply Now
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <a
                    href="tel:09792347399"
                    className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all flex items-center gap-2 font-medium"
                  >
                    <Phone size={18} />
                    Call Now
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* Column 1 - About */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl blur opacity-50"></div>
                  <img src={logo} alt="School Logo" className="relative h-12 w-12 bg-white rounded-xl p-1 shadow-lg object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg leading-tight">
                    Sahodara International
                  </h3>
                  <p className="text-slate-400 text-xs font-medium">Public School</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate-400 mb-6">
                Empowering students with knowledge, values, and skills for a bright future. CBSE Affiliated Senior Secondary School.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3">
                {[
                  { icon: Facebook, url: "https://facebook.com", color: "hover:bg-blue-600" },
                  { icon: Twitter, url: "https://twitter.com", color: "hover:bg-sky-500" },
                  { icon: Instagram, url: "https://instagram.com", color: "hover:bg-pink-600" },
                  { icon: Youtube, url: "https://youtube.com", color: "hover:bg-red-600" }
                ].map((social, idx) => (
                  <motion.a 
                    key={idx}
                    href={social.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 ${social.color} hover:text-white transition-all duration-300`}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} strokeWidth={1.5} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6 flex items-center gap-2 text-sm uppercase tracking-wider">
                <ExternalLink className="w-4 h-4 text-indigo-400" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About Us" },
                  { to: "/admissions", label: "Admissions" },
                  { to: "/gallery", label: "Gallery" },
                  { to: "/contact", label: "Contact" }
                ].map((link, idx) => (
                  <motion.li key={idx} whileHover={{ x: 3 }}>
                    <Link 
                      to={link.to} 
                      className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-white transition-colors"></span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Contact */}
            <div>
              <h4 className="text-white font-bold mb-6 flex items-center gap-2 text-sm uppercase tracking-wider">
                <Mail className="w-4 h-4 text-indigo-400" />
                Contact Us
              </h4>
              <ul className="space-y-4">
                {[
                  { icon: MapPin, text: "RXP2+45C, Parsauna, Uttar Pradesh 274309", href: "https://maps.google.com" },
                  { icon: Phone, text: "097923 47399", href: "tel:09792347399" },
                  { icon: Mail, text: "sips@gmail.com", href: "mailto:sips@gmail.com" },
                  { icon: Clock, text: "Mon - Sat: 08:30 AM - 03:00 PM", href: null }
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start gap-3 group"
                    whileHover={{ x: 3 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                      <item.icon size={14} className="text-indigo-400" />
                    </div>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors leading-relaxed">
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-sm text-slate-400 leading-relaxed">
                        {item.text}
                      </span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Newsletter */}
            <div>
              <h4 className="text-white font-bold mb-6 flex items-center gap-2 text-sm uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                Stay Updated
              </h4>
              <p className="text-slate-400 text-sm mb-4">
                Subscribe to our newsletter for latest updates and events.
              </p>
              
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white hover:shadow-lg transition-all"
                >
                  <Send size={16} />
                </motion.button>
              </div>

              {/* Mini Stats */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">15+</div>
                    <div className="text-xs text-slate-500">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">1000+</div>
                    <div className="text-xs text-slate-500">Students</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar - Dark */}
        <div className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              
              {/* Copyright */}
              <p className="text-sm text-slate-400 flex items-center gap-2">
                © {currentYear} Sahodara International Public School
                <span className="hidden md:inline text-slate-600">|</span>
                <span className="flex items-center gap-1 text-slate-500">
                  Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> in India
                </span>
              </p>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                Back to Top
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all">
                  <ChevronUp size={16} />
                </div>
              </motion.button>
            </div>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;