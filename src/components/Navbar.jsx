import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  Info, 
  BookOpen, 
  GraduationCap, 
  Image, 
  Phone, 
  Menu, 
  X,
  ChevronRight
} from "lucide-react";

import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: Info },
    { path: "/academics", label: "Academics", icon: BookOpen },
    { path: "/admissions", label: "Admissions", icon: GraduationCap },
    { path: "/gallery", label: "Gallery", icon: Image },
    { path: "/contact", label: "Contact", icon: Phone },
  ];

  const isLinkActive = (path) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-200/50 border-b border-slate-100"
            : "bg-gradient-to-b from-slate-900/90 via-slate-900/50 to-transparent backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">

            {/* LOGO SECTION */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">

              {/* Logo */}
              <div
                className={`w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 -ml-1 sm:-ml-2 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                  scrolled ? "bg-transparent" : "bg-transparent"
                }`}
              >
                <img
                  src={logo}
                  alt="Sahodara International Public School Logo"
                  className="w-full h-full object-contain"
                  onLoad={() => setLogoLoaded(true)}
                  style={{
                    mixBlendMode: "multiply",
                    filter: "contrast(1.1)",
                  }}
                />
              </div>

              {/* School Name */}
              <div className="min-w-0 flex-1">
                <h1
                  className={`text-sm sm:text-base lg:text-xl font-bold leading-tight tracking-tight transition-colors duration-300 truncate ${
                    scrolled ? "text-slate-900" : "text-white"
                  }`}
                >
                  Sahodara International
                </h1>

                <span
                  className={`block text-xs lg:text-sm font-medium transition-colors duration-300 ${
                    scrolled ? "text-slate-500" : "text-white/70"
                  }`}
                >
                  Public School
                </span>
              </div>

            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isLinkActive(link.path);
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
                      active
                        ? scrolled
                          ? "text-blue-600"
                          : "text-white"
                        : scrolled
                        ? "text-slate-600 hover:text-slate-900"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <link.icon className="w-4 h-4" />
                      {link.label}
                    </span>

                    {active && (
                      <motion.div
                        layoutId="activeNav"
                        className={`absolute inset-0 rounded-full ${
                          scrolled ? "bg-blue-50" : "bg-white/10"
                        }`}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}

                    <div
                      className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        scrolled ? "bg-slate-100" : "bg-white/10"
                      }`}
                    />
                  </NavLink>
                );
              })}
            </nav>

            {/* CTA BUTTON */}
            <div className="hidden lg:block">
              <Link to="/admissions">
                <button
                  className={`px-6 py-3 rounded-full font-semibold text-sm shadow-lg transition-all duration-300 hover:scale-105 ${
                    scrolled
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-500/25 hover:shadow-blue-500/40"
                      : "bg-white text-blue-900 shadow-white/25 hover:shadow-white/40"
                  }`}
                >
                  Admissions Open
                </button>
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden relative p-2.5 rounded-xl transition-all duration-300 flex-shrink-0 ml-2 ${
                menuOpen
                  ? "text-white bg-white/20"
                  : scrolled
                  ? "text-slate-900 bg-slate-100"
                  : "text-white bg-white/10"
              }`}
            >
              {menuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>

          </div>
        </div>
      </header>

     {/* MOBILE MENU */}
<AnimatePresence>
  {menuOpen && (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setMenuOpen(false)}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[150] lg:hidden"
      />

      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-slate-50 z-[200] lg:hidden shadow-2xl flex flex-col"
      >

        {/* MOBILE MENU HEADER - FIXED WITH BIGGER LOGO PUSHED LEFT */}
        <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex-shrink-0">
          {/* Logo - BIGGER SIZE, PUSHED LEFT with negative margin */}
          <div className="w-32 h-32 flex items-center justify-center flex-shrink-0 -ml-2">
            <img
              src={logo}
              alt="School Logo"
              className="w-full h-full object-contain"
              style={{
                mixBlendMode: "normal",
                filter: "contrast(1.1) brightness(1.2)",
              }}
            />
          </div>

          {/* School Name - ADJUSTED SIZE TO FIT */}
          <div className="flex-1 min-w-0 pr-2">
            <h2 className="text-white font-bold text-lg leading-tight">
              Sahodara
            </h2>
            <h2 className="text-white font-bold text-lg leading-tight">
              International
            </h2>
            <p className="text-amber-400 font-semibold text-sm leading-tight mt-1">
              Public School
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors flex-shrink-0 self-start"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* SCROLLABLE NAVIGATION AREA */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2 bg-slate-50">
          {navLinks.map((link, index) => {
            const active = isLinkActive(link.path);

            return (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08, type: "spring", stiffness: 100 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                    active
                      ? "bg-gradient-to-r from-blue-700 to-indigo-700 text-white shadow-lg shadow-blue-500/30"
                      : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-xl ${active ? "bg-amber-400/20" : "bg-slate-200"}`}>
                      <link.icon className={`w-5 h-5 ${active ? "text-amber-400" : "text-slate-600"}`} />
                    </div>

                    <span className="font-semibold text-base">{link.label}</span>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300 ${
                      active ? "translate-x-1 text-amber-400" : "text-slate-400"
                    }`}
                  />
                </Link>
              </motion.div>
            );
          })}
          
          {/* ADMISSIONS OPEN BUTTON */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: navLinks.length * 0.08, type: "spring", stiffness: 100 }}
            className="pt-4 border-t border-slate-200 mt-4"
          >
            <Link
              to="/admissions"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full p-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300"
            >
              <GraduationCap className="w-6 h-6" />
              Admissions Open
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
          
          {/* Extra padding at bottom */}
          <div className="h-8"></div>
        </nav>

      </motion.div>
    </>
  )}
</AnimatePresence>
    </>
  );
};

export default Navbar;