

// import { Routes, Route } from "react-router-dom";
// import { Toaster } from "react-hot-toast";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import ScrollToTop from "./components/ScrollToTop";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Academics from "./pages/Academics";
// import Admissions from "./pages/Admissions";
// import Gallery from "./pages/Gallery";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <>
//       <ScrollToTop />

//       {/* 🔥 TOAST SYSTEM */}
//       <Toaster
//         position="top-right"
//         reverseOrder={false}
//         toastOptions={{
//           style: {
//             background: "#1f2937",
//             color: "#fff",
//             borderRadius: "12px",
//           },
//           success: {
//             iconTheme: {
//               primary: "#22c55e",
//               secondary: "#fff",
//             },
//           },
//           error: {
//             iconTheme: {
//               primary: "#ef4444",
//               secondary: "#fff",
//             },
//           },
//         }}
//       />

//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/academics" element={<Academics />} />
//         <Route path="/admissions" element={<Admissions />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;



import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// ✅ CRITICAL: Import ScrollToTop (you forgot this!)
import ScrollToTop from "./components/ScrollToTop";

// Eager load: Only critical components (always visible)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy load: All page components (loads only when needed!)
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Academics = lazy(() => import("./pages/Academics"));
const Admissions = lazy(() => import("./pages/Admissions"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));

// Simple loading component (shows while page loads)
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
      <p className="text-slate-500 text-sm font-medium">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <>
      {/* ✅ Now ScrollToTop is properly imported and will work! */}
      <ScrollToTop />

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#1f2937",
            color: "#fff",
            borderRadius: "12px",
          },
          success: {
            iconTheme: {
              primary: "#22c55e",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />

      <Navbar />

      {/* CRITICAL: Suspense wraps all routes for lazy loading */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;