import HeroSection from "@/components/home/HeroSection";
import FeaturedServices from "@/components/home/FeaturedServices";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import GallerySection from "@/components/home/GallerySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import ContactSection from "@/components/home/ContactSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedServices />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </main>
  );
};

export default Home;
