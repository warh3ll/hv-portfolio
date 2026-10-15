
import React from 'react';
import { Github, Linkedin, Twitter, Instagram, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const year = new Date().getFullYear();
  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? 'auto' : 'smooth'
    });
    // Move keyboard focus up too, so the next Tab continues from the top
    document.getElementById('main')?.focus({ preventScroll: true });
  };
  return <footer className="bg-portfolio-dark text-white py-12 relative">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Glad you came this far!</h2>
            <p className="text-white/70">If you want to get in touch, please message me through LinkedIn.</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/henrikvarhall/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors" aria-label="LinkedIn (opens in a new tab)">
              <Linkedin size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {year} Henrik Vårhäll. All rights reserved.</p>
          <Button onClick={scrollToTop} className="bg-portfolio-primary hover:bg-portfolio-primary/80 text-white mt-4 md:mt-0">
            <span>Back to top</span>
            <ChevronUp className="h-4 w-4 ml-2" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </footer>;
};
export default Footer;
