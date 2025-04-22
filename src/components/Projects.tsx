
import React, { useState } from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';
import { Button } from '@/components/ui/button';

// Sample project data
const projectsData: ProjectProps[] = [
  {
    id: 1,
    title: "Mobile Banking App Redesign",
    description: "A complete overhaul of a banking app focusing on simplifying the user journey and improving accessibility.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Mobile", "Fintech", "UX Research"],
    featured: true
  },
  {
    id: 2,
    title: "E-commerce Website",
    description: "Redesigned user interface for an e-commerce platform, resulting in 40% increase in conversion rates.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Web", "E-commerce", "UI Design"]
  },
  {
    id: 3,
    title: "Health Tracking Dashboard",
    description: "A dashboard design for health professionals to monitor patient vitals and medication adherence.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Dashboard", "Healthcare", "Data Visualization"]
  },
  {
    id: 4,
    title: "Travel Booking App",
    description: "Created a seamless booking experience for a travel app, focusing on simplifying the complex checkout process.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Mobile", "Travel", "UX Design"]
  }
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [filter, setFilter] = useState('All');
  
  const filters = ['All', 'Mobile', 'Web', 'Dashboard', 'UX Research', 'UI Design'];
  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(filter));

  const showMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 4, filteredProjects.length));
  };

  return (
    <section id="projects" className="section bg-white">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filterName => (
            <Button
              key={filterName}
              variant={filter === filterName ? "default" : "outline"}
              className={filter === filterName 
                ? "bg-portfolio-primary hover:bg-portfolio-primary/80" 
                : "border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10"}
              onClick={() => {
                setFilter(filterName);
                setVisibleProjects(4);
              }}
            >
              {filterName}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, visibleProjects).map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        
        {visibleProjects < filteredProjects.length && (
          <div className="mt-12 text-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10"
              onClick={showMoreProjects}
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
