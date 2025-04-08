import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-xl font-bold mb-4">
              <span className="text-secondary">BOOKA</span> Concepts
            </div>
            <p className="text-neutral-100/80 mb-6">
              Your trusted partner for all automotive, mechanical, and service needs in Uganda.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary transition duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-neutral-100/80 hover:opacity-100 hover:text-secondary transition duration-300">Home</a></li>
              <li><a href="#services" className="text-neutral-100/80 hover:opacity-100 hover:text-secondary transition duration-300">Services</a></li>
              <li><a href="#about" className="text-neutral-100/80 hover:opacity-100 hover:text-secondary transition duration-300">About Us</a></li>
              <li><a href="#gallery" className="text-neutral-100/80 hover:opacity-100 hover:text-secondary transition duration-300">Gallery</a></li>
              <li><a href="#contact" className="text-neutral-100/80 hover:opacity-100 hover:text-secondary transition duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-neutral-100/80 hover:opacity-100 hover:text-secondary transition duration-300">Air Conditioning</a></li>
              <li><a href="#services" className="text-neutral-100/80 hover:opacity-100 hover:text-secondary transition duration-300">Mechanical Workshop</a></li>
              <li><a href="#services" className="text-neutral-100/80 hover:opacity-100 hover:text-secondary transition duration-300">Pop Top Roof Cut</a></li>
              <li><a href="#services" className="text-neutral-100/80 hover:opacity-100 hover:text-secondary transition duration-300">Tourist Vehicle Seats</a></li>
              <li><a href="#services" className="text-neutral-100/80 hover:opacity-100 hover:text-secondary transition duration-300">Landcruiser Extension</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 text-secondary h-4 w-4" />
                <span className="text-neutral-100/80">P. O.Box 135979 Kampala Uganda</span>
              </li>
              <li className="flex items-start">
                <Phone className="mt-1 mr-3 text-secondary h-4 w-4" />
                <span className="text-neutral-100/80">+256 705927418</span>
              </li>
              <li className="flex items-start">
                <Mail className="mt-1 mr-3 text-secondary h-4 w-4" />
                <span className="text-neutral-100/80">info@bookaconcepts.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="mt-1 mr-3 text-secondary h-4 w-4" />
                <span className="text-neutral-100/80">Mon-Fri: 8AM-6PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-600 pt-6 mt-8 text-center text-neutral-100/80 text-sm">
          <p>&copy; {new Date().getFullYear()} BOOKA Concepts. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
