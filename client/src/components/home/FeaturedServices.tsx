import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Snowflake, Wrench, Car, ChevronRight } from "lucide-react";

const FeaturedServices = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Specialized Services</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            We offer a comprehensive range of automotive, mechanical, and service solutions to meet all your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <Card className="overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <Snowflake className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Air Conditioning & Refrigeration</h3>
              <p className="text-neutral-600 mb-4">
                Professional installation, repair, and maintenance services for all types of air conditioning and refrigeration systems.
              </p>
              <a href="#contact" className="text-secondary font-medium hover:text-secondary/80 flex items-center">
                Learn More
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </CardContent>
          </Card>
          
          {/* Service Card 2 */}
          <Card className="overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <Wrench className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">General Mechanical Workshop</h3>
              <p className="text-neutral-600 mb-4">
                Complete mechanical repairs, maintenance, and diagnostics for all vehicle makes and models.
              </p>
              <a href="#contact" className="text-secondary font-medium hover:text-secondary/80 flex items-center">
                Learn More
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </CardContent>
          </Card>
          
          {/* Service Card 3 */}
          <Card className="overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <Car className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Automotive Customization</h3>
              <p className="text-neutral-600 mb-4">
                Specialized services including pop top roof cuts, tourist vehicle seats, and Landcruiser extensions.
              </p>
              <a href="#contact" className="text-secondary font-medium hover:text-secondary/80 flex items-center">
                Learn More
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <a href="#services">
            <Button className="bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-md">
              View All Services
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
