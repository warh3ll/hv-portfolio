
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { projectsData } from '@/data/content';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const CaseDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const project = projectsData.find(p => p.slug === slug);
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // If project doesn't exist, redirect to home
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);
  
  if (!project) return null;
  
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container">
          <Button 
            variant="ghost" 
            className="mb-6 flex items-center gap-2"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to cases
          </Button>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h1>
          
          {project.image && (
            <div className="w-full aspect-video mb-10 overflow-hidden rounded-lg">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-portfolio-secondary/80 dark:bg-gray-800/70 text-portfolio-primary dark:text-portfolio-primary text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {project.description && (
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              {project.description}
            </p>
          )}
          
          <div
            className="prose prose-lg max-w-3xl dark:prose-invert prose-img:rounded-lg prose-a:text-portfolio-primary"
            dangerouslySetInnerHTML={{ __html: project.html }}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseDetail;
