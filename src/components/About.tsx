
import React from 'react';
import { aboutContent } from '@/data/content';
import PersonalImageCarousel from './PersonalImageCarousel';

const About = () => {
  return (
    <section id="about" className="section bg-portfolio-secondary/50 dark:bg-gray-900">
      <div className="container">
        <h2 className="section-title dark:text-white">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            {/* Personal Image Carousel */}
            <div>
              <PersonalImageCarousel />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-3xl font-bold dark:text-white">
              {aboutContent.headline}
            </h3>
            
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p key={index} className="dark:text-gray-300">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
