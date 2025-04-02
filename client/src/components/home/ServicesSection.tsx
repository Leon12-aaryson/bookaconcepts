import { services } from "@/lib/serviceData";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
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
          {services.map((service) => (
            <Card 
              key={service.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="text-secondary mr-4">
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
      </div>
    </section>
  );
};

export default ServicesSection;
