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

// ✅ PERFORMANCE OPTIMIZED NAVBAR - ALL FIXES IN ONE PLACE
const Navbar = memo(() => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Performance refs
  const scrollTimeoutRef = useRef(null);
  const observerRef = useRef(null);

  // ✅ 1. OPTIMIZED SCROLL HANDLER (No lag)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        scrollTimeoutRef.current = requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        cancelAnimationFrame(scrollTimeoutRef.current);
      }
    };
  }, []);

  // ✅ 2. CLOSE MENU ON ROUTE CHANGE (Instant scroll)
  useEffect(() => {
    setMenuOpen(false);
    // Instant scroll to top - no smooth scroll lag
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  // ✅ 3. BODY SCROLL LOCK (Optimized)
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

  // ✅ 4. LAZY LOAD IMAGES & VIDEOS (Critical for speed)
  const setupLazyLoading = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;

          // Images
          if (element.tagName === 'IMG' && element.dataset.src) {
            element.src = element.dataset.src;
            element.removeAttribute('data-src');
            element.classList.add('loaded');
          }

          // Videos - Only load when visible
          if (element.tagName === 'VIDEO') {
            if (element.dataset.src) {
              element.src = element.dataset.src;
              element.load();
            }
            // Play only first 2 videos
            const allVideos = document.querySelectorAll('video');
            const videoIndex = Array.from(allVideos).indexOf(element);
            if (videoIndex < 2) {
              element.play().catch(() => {});
            }
          }

          observerRef.current.unobserve(element);
        }
      });
    }, {
      rootMargin: '100px',
      threshold: 0.01
    });

    // Observe all lazy elements
    document.querySelectorAll('img[data-src], video[data-src]').forEach(el => {
      observerRef.current.observe(el);
    });
  }, []);

  // ✅ 5. STOP HIDDEN VIDEOS (Major performance gain)
  const stopHiddenVideos = useCallback(() => {
    const videos = document.querySelectorAll('video');

    videos.forEach((video, index) => {
      const rect = video.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

      // Pause off-screen videos
      if (!isInViewport && !video.paused) {
        video.pause();
      }

      // Only first 2 videos preload
      if (index > 1) {
        video.setAttribute('preload', 'none');
      }
    });
  }, []);

  // ✅ 6. INITIALIZE ALL PERFORMANCE OPTIMIZATIONS
  useEffect(() => {
    const initTimeout = setTimeout(() => {
      setupLazyLoading();
      stopHiddenVideos();
    }, 100);

    // Scroll handler for video optimization
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
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
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
      {/* MAIN NAVBAR - FIXED WHITE BACKGROUND */}
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-white shadow-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">

            {/* LOGO SECTION */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
              {/* Logo - Optimized loading */}
              <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-44 lg:h-44 -ml-3 sm:-ml-4 flex items-center justify-center flex-shrink-0">
                <img
                  src={logo}
                  alt="Sahodara International Public School Logo"
                  className="w-full h-full object-contain"
                  style={{
                    mixBlendMode: "multiply",
                    filter: "contrast(1.1)",
                  }}
                  loading="eager"
                  width="144"
                  height="144"
                  decoding="async"
                />
              </div>

              {/* School Name */}
              <div className="min-w-0 flex-1">
                <h1 className="text-sm sm:text-base lg:text-xl font-bold leading-tight tracking-tight text-slate-900 truncate">
                  Sahodara International
                </h1>
                <span className="block text-xs lg:text-sm font-medium text-slate-500">
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
                        ? "text-blue-600"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <link.icon className="w-4 h-4" />
                      {link.label}
                    </span>

                    {active && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-full bg-blue-50"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}

                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-100" />
                  </NavLink>
                );
              })}
            </nav>

            {/* CTA BUTTON */}
            <div className="hidden lg:block">
              <Link to="/admissions">
                <button className="px-6 py-3 rounded-full font-semibold text-sm shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-500/25 hover:shadow-blue-500/40">
                  Admissions Open
                </button>
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden relative p-2.5 rounded-xl transition-all duration-300 flex-shrink-0 ml-2 ${
                menuOpen
                  ? "text-white bg-blue-600"
                  : "text-slate-900 bg-slate-100 hover:bg-slate-200"
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

      {/* MOBILE MENU - OPTIMIZED */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[150] lg:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[320px] bg-white z-[200] lg:hidden shadow-2xl flex flex-col"
            >
              {/* UPPER SECTION - HEADER */}
              <div className="flex-shrink-0 bg-white">
                <div className="flex items-center gap-4 p-5">
                  {/* Logo with ZOOM EFFECT */}
                  <motion.div 
                    initial={{ scale: 1.15, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-28 h-28 flex items-center justify-center flex-shrink-0"
                  >
                    <img
                      src={logo}
                      alt="School Logo"
                      className="w-full h-full object-contain drop-shadow-md"
                      style={{
                        mixBlendMode: "multiply",
                        filter: "contrast(1.2) saturate(1.1)",
                      }}
                      loading="eager"
                      decoding="async"
                    />
                  </motion.div>

                  {/* School Name */}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-slate-900 font-bold text-lg leading-tight">
                      Sahodara
                    </h2>
                    <h2 className="text-slate-900 font-bold text-lg leading-tight">
                      International
                    </h2>
                    <p className="text-blue-600 font-bold text-sm leading-tight mt-1.5">
                      Public School
                    </p>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors flex-shrink-0 self-start"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* DIVIDER LINE */}
                <div className="mx-5 h-0.5 bg-slate-200 rounded-full"></div>
              </div>

              {/* LOWER SECTION - NAVIGATION */}
              <nav className="flex-1 overflow-y-auto py-5 px-3 space-y-2 bg-white">
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
                        className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 ${
                          active
                            ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                            : "text-slate-700 hover:bg-amber-50 hover:text-amber-600"
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
                
                {/* ADMISSIONS BUTTON */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="pt-4 px-3"
                >
                  <Link
                    to="/admissions"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full p-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm shadow-lg shadow-orange-500/30"
                  >
                    <GraduationCap className="w-5 h-5" />
                    Admissions Open
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
                
                {/* Footer */}
                <div className="mt-6 px-4 py-4 bg-slate-50 rounded-xl mx-3 border border-slate-100">
                  <p className="text-slate-700 text-xs font-medium text-center">
                    📍 Sahodara International Public School
                  </p>
                  <p className="text-slate-500 text-xs text-center mt-1">
                    Excellence in Education
                  </p>
                </div>
                <div className="h-6"></div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
});

export default Navbar;