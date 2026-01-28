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
  return (
    <>
      <Navbar />
      <HeroSection />
      <TextRevealSection />
      <CreativeServicesSection />
      <WayOfWorkingSection />
      <WhySection />
      <WorkSection />
      <TestimonialsSection />
      <ContactSection />
      <FAQ/>
      <Footer/>
    </>
  );
}

export default Home;


