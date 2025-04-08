import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "../../images/logo.png";


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
              src={Logo} 
              alt="BOOKA Concepts Logo" 
              className="h-8 sm:h-10"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-neutral-700 hover:text-orange-600 font-medium">Home</a>
            <a href="#services" className="text-neutral-700 hover:text-orange-600 font-medium">Services</a>
            <a href="#about" className="text-neutral-700 hover:text-orange-600 font-medium">About Us</a>
            <a href="#gallery" className="text-neutral-700 hover:text-orange-600 font-medium">Gallery</a>
            <a href="#contact" className="text-neutral-700 hover:text-orange-600 font-medium">Contact</a>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#contact">
              <Button className="bg-orange-600 hover:bg-orange-600/90 text-white">
                Get a Quote
              </Button>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="text-neutral-700 hover:text-secondary"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-3">
              <a 
                href="#home" 
                className="text-neutral-700 hover:text-secondary font-medium py-2"
                onClick={closeMobileMenu}
              >
                Home
              </a>
              <a 
                href="#services" 
                className="text-neutral-700 hover:text-secondary font-medium py-2"
                onClick={closeMobileMenu}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="text-neutral-700 hover:text-secondary font-medium py-2"
                onClick={closeMobileMenu}
              >
                About Us
              </a>
              <a 
                href="#gallery" 
                className="text-neutral-700 hover:text-secondary font-medium py-2"
                onClick={closeMobileMenu}
              >
                Gallery
              </a>
              <a 
                href="#contact" 
                className="text-neutral-700 hover:text-secondary font-medium py-2"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
              <a 
                href="#contact" 
                className="bg-orange-600 hover:bg-orange-600/90 text-white font-medium py-2 px-4 rounded-md inline-block transition duration-300 mt-2"
                onClick={closeMobileMenu}
              >
                Get a Quote
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
