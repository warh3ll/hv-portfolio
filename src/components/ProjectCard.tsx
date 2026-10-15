import React from 'react';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ProjectProps as CaseData } from '@/data/projects';

type ProjectProps = Pick<CaseData, 'slug' | 'title' | 'description' | 'image' | 'tags' | 'featured'>;

const ProjectCard: React.FC<ProjectProps> = ({
  slug,
  title,
  description,
  image,
  tags,
  featured = false,
}) => {
  return (
    <Link
      to={`/case/${slug}`}
      className={cn(
        "group card block overflow-hidden transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900",
        featured ? "col-span-full md:col-span-2 md:row-span-2" : ""
      )}
    >
      <div className="relative overflow-hidden aspect-video">
        <div 
          className="absolute inset-0 bg-portfolio-secondary dark:bg-gray-800 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div
          className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          aria-hidden="true"
        >
          <span className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium bg-portfolio-primary text-white">
            <Eye className="mr-2 h-4 w-4" />
            View Case
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        
        <ul className="flex flex-wrap gap-2" aria-label="Tags">
          {tags.map((tag, index) => (
            <li 
              key={index}
              className="px-3 py-1 bg-portfolio-secondary/80 dark:bg-gray-800/70 text-portfolio-ink dark:text-portfolio-primary-light text-sm rounded-full"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default ProjectCard;
