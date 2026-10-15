
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';
import { projectsData, sectionDescriptions } from '@/data/content';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();
  
  // One filter per tag used on any case, in order of first appearance
  const filters = ['All', ...Array.from(new Set(projectsData.flatMap(project => project.tags)))];
  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(filter));

  const showMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 4, filteredProjects.length));
  };

  const handleProjectClick = (slug: string) => {
    navigate(`/case/${slug}`);
  };

  return (
    <section id="projects" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <h2 className="section-title dark:text-white">Case</h2>
        
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          {sectionDescriptions.projects}
        </p>
        
        {projectsData.length === 0 ? (
          <p className="text-center text-muted-foreground border border-dashed border-portfolio-primary/40 rounded-lg py-12 px-6 max-w-2xl mx-auto">
            New cases are on their way. Meanwhile, get in touch and I'll happily walk you through my work.
          </p>
        ) : (
        <>
        {filters.length > 2 && (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filterName => (
            <Button
              key={filterName}
              variant={filter === filterName ? "default" : "outline"}
              className={filter === filterName 
                ? "bg-portfolio-primary hover:bg-portfolio-primary/80" 
                : "border-portfolio-primary text-portfolio-primary hover:bg-transparent dark:hover:bg-gray-800/30 hover:bg-portfolio-primary/10 dark:text-portfolio-primary dark:border-portfolio-primary dark:bg-transparent"}
              onClick={() => {
                setFilter(filterName);
                setVisibleProjects(4);
              }}
            >
              {filterName}
            </Button>
          ))}
        </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, visibleProjects).map(project => (
            <ProjectCard 
              key={project.slug}
              {...project}
              onClick={() => handleProjectClick(project.slug)}
            />
          ))}
        </div>
        
        {visibleProjects < filteredProjects.length && (
          <div className="mt-12 text-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-portfolio-primary text-portfolio-primary hover:bg-transparent dark:hover:bg-gray-800/30 hover:bg-portfolio-primary/10 dark:text-portfolio-primary dark:border-portfolio-primary dark:bg-transparent"
              onClick={showMoreProjects}
            >
              Load More Cases
            </Button>
          </div>
        )}
        </>
        )}
      </div>
    </section>
  );
};

export default Projects;
