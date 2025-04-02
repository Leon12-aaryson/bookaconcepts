import { testimonials } from "@/lib/serviceData";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-neutral-100/80 max-w-3xl mx-auto">
            Hear from our satisfied customers about their experiences with our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-primary-600 rounded-lg p-6 relative">
              <div className="absolute -top-4 left-6 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <Quote className="text-white h-4 w-4" />
              </div>
              <p className="italic mb-6 text-neutral-100/90">
                "{testimonial.testimonial}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-400">
                  {/* Avatar placeholder */}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-100/70">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
