
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { projectsData } from '@/data/content';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const CaseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectId = parseInt(id || '1');
  
  const project = projectsData.find(p => p.id === projectId);
  
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
          
          <div className="w-full aspect-video mb-10 overflow-hidden rounded-lg">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-portfolio-secondary text-portfolio-primary text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              {project.description}
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Overview</h2>
            <p>
              This is a detailed case study of {project.title}. This section would contain a comprehensive overview of the project, including objectives, challenges, and approach.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Problem</h2>
            <p>
              Here you would describe the problem that this project aimed to solve. What were the issues that needed addressing? What was the context? Who were the stakeholders?
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Solution</h2>
            <p>
              This section would detail the solution that was implemented. What technologies were used? What methodologies were followed? How was the solution designed and developed?
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Results</h2>
            <p>
              Finally, this section would highlight the outcomes of the project. What goals were achieved? What metrics improved? What feedback was received?
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseDetail;
