
import React from 'react';
import { User, Code, Palette, Users, Award } from 'lucide-react';
import { aboutContent } from '@/data/content';

// Map icon names to components
const iconMap: Record<string, React.ComponentType<any>> = {
  'User': User,
  'Code': Code,
  'Palette': Palette,
  'Users': Users,
  'Award': Award
};

const About = () => {
  return (
    <section id="about" className="section bg-portfolio-secondary/50">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">My Expertise</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {aboutContent.skills.map((skill, index) => {
                  const IconComponent = iconMap[skill.icon];
                  
                  return (
                    <div key={index} className="flex">
                      <div className="mr-4 mt-1">
                        <div className="p-3 bg-portfolio-primary/10 rounded-full text-portfolio-primary">
                          {IconComponent && <IconComponent size={24} />}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">{skill.name}</h4>
                        <p className="text-muted-foreground">{skill.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">Awards & Recognition</h3>
                {aboutContent.awards.map((award, index) => {
                  const IconComponent = iconMap[award.icon];
                  
                  return (
                    <div key={index} className="flex items-start">
                      <div className="mr-4 mt-1">
                        <div className="p-3 bg-portfolio-accent/10 rounded-full text-portfolio-accent">
                          {IconComponent && <IconComponent size={24} />}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">{award.name}</h4>
                        <p className="text-muted-foreground">{award.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-3xl font-bold">
              {aboutContent.headline}
            </h3>
            
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
