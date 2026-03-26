import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    // Cancel any pending scroll
    if (scrollTimeoutRef.current) {
      cancelAnimationFrame(scrollTimeoutRef.current);
    }

    // Instant scroll (no smooth lag)
    scrollTimeoutRef.current = requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });
    });

    // Cleanup memory
    return () => {
      if (scrollTimeoutRef.current) {
        cancelAnimationFrame(scrollTimeoutRef.current);
      }
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;