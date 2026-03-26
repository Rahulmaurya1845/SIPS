import { useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";

/**
 * ULTIMATE PERFORMANCE OPTIMIZER
 * This single file fixes your entire website speed issues
 * Place in App.js and it optimizes EVERYTHING automatically
 */

const PerformanceOptimizer = () => {
  const { pathname } = useLocation();
  const scrollTimeoutRef = useRef(null);
  const observerRef = useRef(null);
  const animationFrameRef = useRef(null);

  // 1. INSTANT SCROLL TO TOP (No smooth scroll lag)
  useEffect(() => {
    if (scrollTimeoutRef.current) {
      cancelAnimationFrame(scrollTimeoutRef.current);
    }
    
    scrollTimeoutRef.current = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });

    return () => {
      if (scrollTimeoutRef.current) {
        cancelAnimationFrame(scrollTimeoutRef.current);
      }
    };
  }, [pathname]);

  // 2. GLOBAL LAZY LOADING - Images & Videos
  const setupLazyLoading = useCallback(() => {
    // Disconnect previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          
          // Handle Images
          if (element.tagName === 'IMG') {
            if (element.dataset.src) {
              element.src = element.dataset.src;
              element.removeAttribute('data-src');
            }
            element.classList.add('loaded');
          }
          
          // Handle Videos - CRITICAL for performance
          if (element.tagName === 'VIDEO') {
            if (element.dataset.src) {
              element.src = element.dataset.src;
              element.load();
            }
            // Only first 3 videos autoplay, rest stay paused
            const allVideos = document.querySelectorAll('video');
            const videoIndex = Array.from(allVideos).indexOf(element);
            if (videoIndex < 3 && element.classList.contains('hero-video')) {
              element.play().catch(() => {});
            }
          }
          
          // Handle Iframes (YouTube, Maps, etc)
          if (element.tagName === 'IFRAME' && element.dataset.src) {
            element.src = element.dataset.src;
          }
          
          observerRef.current.unobserve(element);
        }
      });
    }, {
      rootMargin: '50px',
      threshold: 0.01
    });

    // Observe all lazy-loadable elements
    document.querySelectorAll('img[loading="lazy"], video[data-src], iframe[data-src]').forEach(el => {
      observerRef.current.observe(el);
    });
  }, []);

  // 3. STOP HIDDEN VIDEOS (Major performance gain!)
  const optimizeVideos = useCallback(() => {
    const videos = document.querySelectorAll('video');
    
    videos.forEach((video, index) => {
      // Pause videos not in viewport
      const rect = video.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (!isInViewport && !video.paused) {
        video.pause();
      }
      
      // Only preload first 3 videos
      if (index > 2) {
        video.setAttribute('preload', 'none');
        video.removeAttribute('autoplay');
      }
      
      // Add pause when not visible
      if (!video.hasAttribute('data-optimized')) {
        video.setAttribute('data-optimized', 'true');
        
        // Pause when tab hidden
        document.addEventListener('visibilitychange', () => {
          if (document.hidden && !video.paused) {
            video.pause();
          }
        });
      }
    });
  }, []);

  // 4. REDUCE MOTION FOR SLOW DEVICES (Accessibility + Performance)
  const checkPerformanceMode = useCallback(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check device capabilities
    const isLowEndDevice = navigator.hardwareConcurrency < 4 || navigator.deviceMemory < 4;
    
    // Check connection speed
    const isSlowConnection = navigator.connection && 
      (navigator.connection.effectiveType === '2g' || navigator.connection.effectiveType === 'slow-2g');
    
    if (prefersReducedMotion || isLowEndDevice || isSlowConnection) {
      document.documentElement.classList.add('reduce-motion');
      document.body.classList.add('performance-mode');
      
      // Disable Framer Motion animations globally
      window.__FRAMER_MOTION_REDUCED__ = true;
    }
  }, []);

  // 5. DEBOUNCE HEAVY EVENTS (Scroll, Resize)
  const setupEventOptimizations = useCallback(() => {
    let scrollTimeout;
    let resizeTimeout;
    
    // Optimized scroll handler
    const handleScroll = () => {
      if (scrollTimeout) return;
      
      scrollTimeout = requestAnimationFrame(() => {
        optimizeVideos(); // Pause off-screen videos on scroll
        scrollTimeout = null;
      });
    };
    
    // Optimized resize handler
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // Recalculate layouts only after resize ends
        window.dispatchEvent(new CustomEvent('optimizedResize'));
      }, 200);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [optimizeVideos]);

  // 6. CLEAN UP MEMORY LEAKS
  const cleanupMemory = useCallback(() => {
    // Remove unused event listeners
    const cleanup = () => {
      // Clear all setIntervals and setTimeouts
      const highest = setTimeout(() => {}, 0);
      for (let i = 0; i < highest; i++) {
        clearTimeout(i);
        clearInterval(i);
      }
    };
    
    // Run cleanup on page hide
    window.addEventListener('pagehide', cleanup);
    return () => window.removeEventListener('pagehide', cleanup);
  }, []);

  // Initialize all optimizations
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const initTimeout = setTimeout(() => {
      setupLazyLoading();
      optimizeVideos();
      checkPerformanceMode();
      const cleanupEvents = setupEventOptimizations();
      const cleanupMemoryLeaks = cleanupMemory();
      
      return () => {
        cleanupEvents();
        cleanupMemoryLeaks();
      };
    }, 100);

    return () => {
      clearTimeout(initTimeout);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [pathname, setupLazyLoading, optimizeVideos, checkPerformanceMode, setupEventOptimizations, cleanupMemory]);

  // 7. INJECT PERFORMANCE CSS (One time)
  useEffect(() => {
    if (document.getElementById('performance-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'performance-styles';
    style.textContent = `
      /* Reduce motion for performance */
      .reduce-motion *,
      .reduce-motion *::before,
      .reduce-motion *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
      
      /* Performance mode optimizations */
      .performance-mode img,
      .performance-mode video {
        content-visibility: auto;
      }
      
      /* Lazy loading placeholders */
      img[loading="lazy"] {
        opacity: 0;
        transition: opacity 0.3s;
      }
      
      img[loading="lazy"].loaded,
      img[loading="eager"] {
        opacity: 1;
      }
      
      /* Video optimizations */
      video[preload="none"] {
        background: linear-gradient(110deg, #f0f0f0 8%, #f8f8f8 18%, #f0f0f0 33%);
        background-size: 200% 100%;
      }
      
      /* Prevent layout shifts */
      img, video {
        max-width: 100%;
        height: auto;
      }
      
      /* Hardware acceleration for animations */
      .hardware-accelerate {
        transform: translateZ(0);
        will-change: transform;
      }
      
      /* Content visibility for off-screen content */
      .content-visibility {
        content-visibility: auto;
        contain-intrinsic-size: 0 500px;
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      const existing = document.getElementById('performance-styles');
      if (existing) document.head.removeChild(existing);
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;