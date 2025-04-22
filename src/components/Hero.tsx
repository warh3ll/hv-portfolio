
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { heroContent } from '@/data/content';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center bg-gradient-to-br from-white to-portfolio-secondary pt-20"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-portfolio-primary">{heroContent.title.highlight}</span>
              <br />
              <span>{heroContent.title.line1}</span>
              <br />
              <span>{heroContent.title.line2}</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              {heroContent.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-portfolio-primary hover:bg-portfolio-primary/80 text-white"
                onClick={scrollToProjects}
              >
                View Projects
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="bg-portfolio-primary/10 rounded-full w-[450px] h-[450px] mx-auto"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[400px] h-[400px] rounded-full bg-portfolio-primary/20 flex items-center justify-center">
                  {/* Profile image */}
                  <div className="w-[350px] h-[350px] rounded-full bg-portfolio-primary/30 flex items-center justify-center text-portfolio-primary overflow-hidden">
                    {heroContent.profileImage ? (
                      <img 
                        src={heroContent.profileImage} 
                        alt="Profile" 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <span className="text-xl font-semibold">Your Profile Image</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 sm:mt-24 flex justify-center">
          <button 
            onClick={scrollToProjects}
            className="p-3 rounded-full bg-white shadow-md text-portfolio-primary hover:bg-portfolio-primary hover:text-white transition-colors duration-300"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
