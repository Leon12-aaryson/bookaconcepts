import React from 'react';
import bookaImage from '@/images/booka.jpg';


const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-primary mb-4">About Our Company</h2>
              <p className="text-neutral-600 mb-6">
                We are a Ugandan local company operator specialized in providing a wide range of mechanical, automotive, and service solutions to meet the diverse needs of our customers.
              </p>
              <p className="text-neutral-600 mb-6">
                With years of experience and a team of skilled professionals, we have established ourselves as a reliable provider of quality services in Uganda.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-3">Our Mission</h3>
              <p className="text-neutral-600">
                We pride ourselves in being a one-stop workshop for all your Mechanical, Air conditioning, and Refrigeration service needs. Our goal is to provide the highest design and installation services on schedule and on affordable budget along with outstanding customer value.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-3">Our Vision</h3>
              <p className="text-neutral-600">
                To be the leading supplier of genuine spare parts, air conditioning, refrigeration with other related products in Uganda and East Africa.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Our Values</h3>
              <p className="text-neutral-600">
                We believe in professional high-quality service and integrity in dealing with customers and our partners. Our commitment to excellence, reliability, and customer satisfaction guides everything we do.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-primary h-72 md:h-96 rounded-lg overflow-hidden relative">
              <img
                src={bookaImage}
                alt="Workshop"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-primary h-72 md:h-96 rounded-lg overflow-hidden absolute top-24 -right-12 z-10 shadow-xl hidden md:block">
              <img
                src={bookaImage}
                alt="Service"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-orange-600 rounded-full z-20 flex items-center justify-center text-white text-center font-bold hidden md:flex p-2 text-sm">
              <span>15+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
