
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto py-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-portfolio-primary">
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-foreground hover:text-portfolio-primary transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-portfolio-primary transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-portfolio-primary transition-colors"
          >
            Contact
          </button>
        </nav>

        <Button 
          onClick={() => scrollToSection('contact')}
          className="hidden md:inline-flex bg-portfolio-primary hover:bg-portfolio-primary/80 text-white"
        >
          Get in Touch
        </Button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 animate-fade-in">
          <div className="container py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="py-2 text-foreground hover:text-portfolio-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="py-2 text-foreground hover:text-portfolio-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="py-2 text-foreground hover:text-portfolio-primary transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-portfolio-primary hover:bg-portfolio-primary/80 text-white"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
