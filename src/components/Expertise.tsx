
import React from 'react';
import { User, Code, Palette, Users, Award, Layers, Component, FileSearch, Accessibility } from 'lucide-react';
import { expertiseContent } from '@/data/content';

// Map icon names to components
const iconMap: Record<string, React.ComponentType<any>> = {
  'User': User,
  'Code': Code,
  'Palette': Palette,
  'Users': Users,
  'Award': Award,
  'Layers': Layers,
  'Component': Component,
  'FileSearch': FileSearch,
  'Accessibility': Accessibility
};

const Expertise = () => {
  return (
    <section id="expertise" className="section bg-white dark:bg-gray-850">
      <div className="container">
        <h2 className="section-title dark:text-white">Expertise</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 dark:text-gray-300">
          {expertiseContent.description}
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertiseContent.skills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon];
              
              return (
                <div key={index} className="flex">
                  <div className="mr-4 mt-1">
                    <div className="p-3 bg-portfolio-primary/10 dark:bg-portfolio-primary/20 rounded-full text-portfolio-primary">
                      {IconComponent && <IconComponent size={24} />}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 dark:text-white">{skill.name}</h4>
                    <p className="text-muted-foreground dark:text-gray-300">{skill.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
