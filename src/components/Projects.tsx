
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';
import { projectsData, sectionDescriptions } from '@/data/content';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();
  
  const filters = ['All', 'Mobile', 'Web', 'Dashboard', 'UX Research', 'UI Design'];
  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(filter));

  const showMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 4, filteredProjects.length));
  };

  const handleProjectClick = (projectId: number) => {
    navigate(`/case/${projectId}`);
  };

  return (
    <section id="projects" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Case</h2>
        
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          {sectionDescriptions.projects}
        </p>
        
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
            <ProjectCard 
              key={project.id} 
              {...project} 
              onClick={() => handleProjectClick(project.id)} 
            />
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
              Load More Cases
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
