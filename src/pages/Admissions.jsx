import React from 'react';
// ✅ Normal import - NO lazy loading
import HeroSection from '../components/admissions/HeroSection';
import DocumentsSection from '../components/admissions/DocumentSection';
import Contact from "../pages/Contact";
const Admissions = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <DocumentsSection />
      <Contact />
    </div>
  );
};

export default Admissions;