import { useState, useEffect, memo, useRef, useCallback } from "react";
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

const Navbar = memo(() => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const scrollTimeoutRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        scrollTimeoutRef.current = requestAnimationFrame(() => {
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) cancelAnimationFrame(scrollTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [menuOpen]);

  const setupLazyLoading = useCallback(() => {
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          if (element.tagName === 'IMG' && element.dataset.src) {
            element.src = element.dataset.src;
            element.removeAttribute('data-src');
            element.classList.add('loaded');
          }
          if (element.tagName === 'VIDEO') {
            if (element.dataset.src) {
              element.src = element.dataset.src;
              element.load();
            }
            const allVideos = document.querySelectorAll('video');
            const videoIndex = Array.from(allVideos).indexOf(element);
            if (videoIndex < 2) element.play().catch(() => {});
          }
          observerRef.current.unobserve(element);
        }
      });
    }, { rootMargin: '100px', threshold: 0.01 });
    document.querySelectorAll('img[data-src], video[data-src]').forEach(el => observerRef.current.observe(el));
  }, []);

  const stopHiddenVideos = useCallback(() => {
    const videos = document.querySelectorAll('video');
    videos.forEach((video, index) => {
      const rect = video.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if (!isInViewport && !video.paused) video.pause();
      if (index > 1) video.setAttribute('preload', 'none');
    });
  }, []);

  useEffect(() => {
    const initTimeout = setTimeout(() => {
      setupLazyLoading();
      stopHiddenVideos();
    }, 100);
    let videoScrollTimeout;
    const handleVideoScroll = () => {
      clearTimeout(videoScrollTimeout);
      videoScrollTimeout = setTimeout(stopHiddenVideos, 100);
    };
    window.addEventListener('scroll', handleVideoScroll, { passive: true });
    return () => {
      clearTimeout(initTimeout);
      clearTimeout(videoScrollTimeout);
      window.removeEventListener('scroll', handleVideoScroll);
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [setupLazyLoading, stopHiddenVideos]);

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
      {/* MAIN NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            
            {/* LOGO + SCHOOL NAME - Perfectly aligned side by side */}
            <Link to="/" className="flex items-center gap-1 sm:gap-3 lg:gap-4 group flex-shrink-0 ml-3 sm:ml-2">
              {/* Logo - Pushed up to align with school name */}
              <div className="w-[120px] h-[120px] sm:w-16 sm:h-16 lg:w-36 lg:h-36 flex items-center justify-center flex-shrink-0 -mt-2 sm:mt-0">
                <img
                  src={logo}
                  alt="School Logo"
                  className="w-full h-full object-contain drop-shadow-sm"
                  style={{ mixBlendMode: "multiply", filter: "contrast(1.15)" }}
                  loading="eager"
                  width="144"
                  height="144"
                  decoding="async"
                />
              </div>

              {/* School Name - Perfectly aligned with logo */}
              <div className="flex flex-col justify-center -ml-1 sm:ml-0">
                <h1 className="text-[13px] sm:text-sm lg:text-xl font-black leading-none tracking-tight text-slate-900">
                  <span className="block sm:inline mb-0.5 sm:mb-0">Sahodara</span>{' '}
                  <span className="block sm:inline text-indigo-700">International</span>
                </h1>
                <span className="text-[10px] sm:text-xs lg:text-sm font-bold text-slate-600 uppercase tracking-wide mt-0.5 sm:mt-0">
                  Public School
                </span>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center gap-1 ml-8 xl:ml-12">
              {navLinks.map((link) => {
                const active = isLinkActive(link.path);
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
                      active ? "text-indigo-700" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <link.icon className="w-4 h-4" />
                      {link.label}
                    </span>
                    {active && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-full bg-indigo-50"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-100" />
                  </NavLink>
                );
              })}
            </nav>

            {/* CTA BUTTON */}
            <div className="hidden lg:block ml-6">
              <Link to="/admissions">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap bg-indigo-700 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all"
                >
                  Admissions Open
                </motion.button>
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden relative p-2 rounded-lg transition-all duration-300 flex-shrink-0 ml-2 ${
                menuOpen ? "text-white bg-indigo-700" : "text-slate-900 bg-slate-100 hover:bg-slate-200"
              }`}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[150] lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[320px] bg-white z-[200] lg:hidden shadow-2xl flex flex-col"
            >
              <div className="flex-shrink-0 bg-white">
                <div className="flex items-center gap-1 p-4">
                  <motion.div 
                    initial={{ scale: 1.15, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-[120px] h-[120px] flex items-center justify-center flex-shrink-0 -mt-2"
                  >
                    <img
                      src={logo}
                      alt="School Logo"
                      className="w-full h-full object-contain drop-shadow-md"
                      style={{ mixBlendMode: "multiply", filter: "contrast(1.2)" }}
                      loading="eager"
                      decoding="async"
                    />
                  </motion.div>
                  <div className="flex flex-col justify-center -ml-1">
                    <h2 className="text-[13px] font-black leading-none tracking-tight text-slate-900">
                      <span className="block mb-0.5">Sahodara</span>
                      <span className="block text-indigo-700">International</span>
                    </h2>
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wide mt-0.5">Public School</span>
                  </div>
                  <button onClick={() => setMenuOpen(false)} className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors flex-shrink-0 self-start ml-auto">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="mx-4 h-0.5 bg-slate-200 rounded-full"></div>
              </div>

              <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-2 bg-white">
                {navLinks.map((link, index) => {
                  const active = isLinkActive(link.path);
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 ${
                          active ? "bg-indigo-700 text-white shadow-md shadow-indigo-700/20" : "text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <div className={`p-2 rounded-lg ${active ? "bg-white/20" : "bg-slate-100"}`}>
                          <link.icon className={`w-5 h-5 ${active ? "text-white" : "text-slate-600"}`} />
                        </div>
                        <span className="font-semibold text-sm flex-1">{link.label}</span>
                        <ChevronRight className={`w-4 h-4 ${active ? "text-white" : "text-slate-400"}`} />
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: navLinks.length * 0.05 }} className="pt-3 px-3">
                  <Link to="/admissions" onClick={() => setMenuOpen(false)} className="flex items-center justify-center gap-2 w-full p-3 rounded-xl bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-500/30 whitespace-nowrap">
                    <GraduationCap className="w-5 h-5" />
                    Admissions Open
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
                <div className="mt-4 px-3 py-3 bg-slate-50 rounded-xl mx-2 border border-slate-100">
                  <p className="text-slate-700 text-xs font-medium text-center">Sahodara International Public School</p>
                  <p className="text-slate-500 text-xs text-center mt-1">Excellence in Education</p>
                </div>
                <div className="h-4"></div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
});

export default Navbar;