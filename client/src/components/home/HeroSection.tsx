import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-primary text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative container mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[70vh]">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 max-w-4xl">
          Professional Automotive & Service Solutions in Uganda
        </h1>
        <p className="text-lg md:text-xl text-center max-w-3xl mb-10">
          Your one-stop workshop for all mechanical, air conditioning, refrigeration, and automotive service needs with exceptional quality and reliability.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#services">
            <Button className="bg-secondary hover:bg-secondary/90 text-white py-3 px-8 rounded-md text-center">
              Our Services
            </Button>
          </a>
          <a href="#contact">
            <Button variant="outline" className="bg-white hover:bg-gray-100 text-primary py-3 px-8 rounded-md text-center">
              Contact Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
