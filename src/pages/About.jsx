import React from 'react'


import AboutHero from '../components/about/AboutHero';
import MissionVision from '../components/about/MissionVision';
import CoreValues from '../components/about/CoreValues';
import StatsSection from '../components/about/StatsSection';
import WhyChooseUs from '../components/about/WhyChooseUs';
import TestimonialsSection from '../components/about/TestimonialSection';


const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <CoreValues />
      <StatsSection />
      <WhyChooseUs />
      <TestimonialsSection />
    </>
  );
};

export default AboutPage;
