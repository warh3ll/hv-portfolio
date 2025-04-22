
import React from 'react';
import { User, Code, Palette, Users, Award } from 'lucide-react';

const skills = [
  { name: 'User Research', icon: User, description: 'Conducting user interviews, usability testing, and creating personas' },
  { name: 'UI Design', icon: Palette, description: 'Creating wireframes, mockups, and high-fidelity prototypes' },
  { name: 'Front-end Development', icon: Code, description: 'Translating designs into HTML, CSS, and JavaScript' },
  { name: 'Collaboration', icon: Users, description: 'Working effectively with cross-functional teams' },
];

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
                {skills.map((skill, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 mt-1">
                      <div className="p-3 bg-portfolio-primary/10 rounded-full text-portfolio-primary">
                        <skill.icon size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">{skill.name}</h4>
                      <p className="text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">Awards & Recognition</h3>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="p-3 bg-portfolio-accent/10 rounded-full text-portfolio-accent">
                      <Award size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Design Excellence Award</h4>
                    <p className="text-muted-foreground">Recognized for outstanding contribution to user experience design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-3xl font-bold">
              I'm a UX/UI Designer passionate about creating meaningful digital experiences
            </h3>
            
            <p>
              With over 5 years of experience in the digital design industry, I've had the opportunity to work with various clients from startups to established enterprises. My approach combines user-centered design principles with business goals to create solutions that are both functional and beautiful.
            </p>
            
            <p>
              I believe that great design is not just about how things look, but how they work. My process involves deep user research, iterative design, and constant validation to ensure that the final product truly meets user needs.
            </p>
            
            <p>
              When I'm not designing, you can find me exploring new design trends, attending UX workshops, or mentoring aspiring designers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
