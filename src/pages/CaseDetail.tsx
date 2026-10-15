
import React, { useEffect, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { projectsData } from '@/data/content';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

// Same as the <title> in index.html
const SITE_TITLE = 'Henrik Vårhäll · UX/UI Designer';

const CaseDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const project = projectsData.find(p => p.slug === slug);
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // If project doesn't exist, redirect to home
    if (!project) {
      navigate('/');
      return;
    }

    // Client-side navigation keeps the old page title and focus, so update both
    document.title = `${project.title} · Henrik Vårhäll`;
    headingRef.current?.focus();
    return () => {
      document.title = SITE_TITLE;
    };
  }, [project, navigate]);
  
  if (!project) return null;
  
  return (
    <div className="min-h-screen">
      <Header />
      
      <main id="main" tabIndex={-1} className="pt-20 pb-16 outline-none">
        <div className="container">
          <Button 
            variant="ghost" 
            className="mb-6 flex w-fit items-center gap-2"
            asChild
          >
            <Link to="/#projects">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to cases
            </Link>
          </Button>
          
          <h1 ref={headingRef} tabIndex={-1} className="text-3xl md:text-4xl font-bold mb-6 outline-none">{project.title}</h1>
          
          {project.image && (
            <div className="w-full aspect-video mb-10 overflow-hidden rounded-lg">
              <img 
                src={project.image} 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <ul className="flex flex-wrap gap-3 mb-8" aria-label="Tags">
            {project.tags.map((tag, index) => (
              <li 
                key={index}
                className="px-3 py-1 bg-portfolio-secondary/80 dark:bg-gray-800/70 text-portfolio-ink dark:text-portfolio-primary-light text-sm rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
          
          {project.description && (
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              {project.description}
            </p>
          )}
          
          <div
            className="prose prose-lg max-w-3xl dark:prose-invert prose-img:rounded-lg prose-a:text-portfolio-primary dark:prose-a:text-portfolio-primary-light"
            dangerouslySetInnerHTML={{ __html: project.html }}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseDetail;
