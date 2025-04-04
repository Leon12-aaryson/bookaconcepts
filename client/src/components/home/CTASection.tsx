import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center md:text-left md:flex items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">Ready to Experience Our Services?</h2>
            <p className="text-neutral-600">Contact us today for a consultation or to schedule a service appointment.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#contact">
              <Button className="bg-orange-600 hover:bg-orange-600/90 text-white py-3 px-6 rounded-md text-center">
                Contact Us
              </Button>
            </a>
            <a href="tel:+256705927418">
              <Button className="bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-md text-center">
                <Phone className="h-4 w-4 mr-2" /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
