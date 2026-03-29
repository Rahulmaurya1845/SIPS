import React from 'react'


import AboutHero from '../components/about/AboutHero';
import MissionVision from '../components/about/MissionVision';
import CoreValues from '../components/about/CoreValues';

import WhyChooseUs from '../components/about/WhyChooseUs';
import TestimonialsSection from '../components/about/TestimonialSection';


const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <CoreValues />
      <WhyChooseUs />
      <TestimonialsSection />
    </>
  );
};

export default AboutPage;
