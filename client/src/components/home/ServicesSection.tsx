import { useState } from "react";
import { services } from "@/lib/serviceData";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);

  // Determine the number of services to display
  const visibleServices = showAll ? services : services.slice(0, 6); // 2 rows of 3 services each

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Comprehensive Services</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            Explore our wide range of professional services designed to meet all your automotive, mechanical, and service needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleServices.map((service) => (
            <Card 
              key={service.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="text-orange-600 mr-4">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">{service.title}</h3>
                    <p className="text-neutral-600 text-sm">{service.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Read More Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 text-white bg-primary rounded-lg shadow hover:bg-primary-dark transition-colors duration-300"
          >
            {showAll ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
