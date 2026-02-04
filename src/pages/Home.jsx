import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import TextRevealSection from '../components/TextRevealSection';
import CreativeServicesSection from '../components/CreativeService';
import WayOfWorkingSection from '../components/WayofWorking';
import WhySection from '../components/WhyUs';
import WorkSection from '../components/WorkSection';
import TestimonialsSection from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

function Home() {
  useEffect(() => {
    // Handle hash navigation on page load
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <TextRevealSection />
      <CreativeServicesSection />
      <WhySection />
      <WayOfWorkingSection />
      <WorkSection />
      <TestimonialsSection />
      <ContactSection />
      <FAQ/>
      <Footer/>
    </>
  );
}

export default Home;


