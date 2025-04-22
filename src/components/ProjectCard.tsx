
import React from 'react';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  tags,
  featured = false,
  onClick,
}) => {
  return (
    <div 
      className={cn(
        "group card overflow-hidden transition-all duration-300 cursor-pointer",
        featured ? "col-span-full md:col-span-2 md:row-span-2" : ""
      )}
      onClick={onClick}
    >
      <div className="relative overflow-hidden aspect-video">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button className="bg-portfolio-primary hover:bg-portfolio-primary/80 text-white">
            <Eye className="mr-2 h-4 w-4" />
            View Case
          </Button>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-portfolio-secondary text-portfolio-primary text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
