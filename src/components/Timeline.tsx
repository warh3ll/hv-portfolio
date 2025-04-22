
import React from 'react';
import { 
  Clock,
  Briefcase,
  CalendarDays,
  Rocket
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { timelineData, TimelineItemProps, sectionDescriptions } from '@/data/content';
import { useIsMobile } from '@/hooks/use-mobile';

const TimelineItem = ({ item, isLast }: { item: TimelineItemProps, isLast: boolean }) => {
  const isMobile = useIsMobile();
  
  const getIconByType = (type: string) => {
    switch(type) {
      case 'job':
        return <Briefcase className="h-6 w-6" />;
      case 'freelance':
        return <Clock className="h-6 w-6" />;
      case 'education':
        return <CalendarDays className="h-6 w-6" />;
      case 'personal project':
        return <Rocket className="h-6 w-6" />;
      default:
        return <Briefcase className="h-6 w-6" />;
    }
  };

  return (
    <div className={cn(
      "relative flex",
      isMobile ? "flex-col" : "items-start"
    )}>
      {/* Timeline line and dot */}
      <div className={cn(
        "flex items-center",
        isMobile ? "mb-4 justify-start" : "absolute left-0 top-0 bottom-0 flex-col"
      )}>
        {!isMobile && (
          <div className={cn(
            "h-16 w-0.5 bg-portfolio-primary/20",
            {"opacity-0": item.id === 1}
          )} />
        )}
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-portfolio-primary/10 text-portfolio-primary z-10">
          {getIconByType(item.type)}
        </div>
        {!isMobile && !isLast && (
          <div className="h-full w-0.5 bg-portfolio-primary/20" />
        )}
      </div>

      {/* Timeline content */}
      <div className={cn(
        isMobile ? "w-full" : "ml-24 w-full",
        "pb-10",
        isMobile ? "" : "pt-3"
      )}>
        <Card className="w-full hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="mb-2">
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-portfolio-primary/10 text-portfolio-primary">
                {item.year}
              </span>
            </div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-muted-foreground">{item.company}</p>
            <Separator className="my-3" />
            <p className="mt-2">{item.description}</p>
            {item.tags && (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const Timeline = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="timeline" className="section bg-portfolio-secondary">
      <div className="container">
        <h2 className="section-title">My Experience</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          {sectionDescriptions.timeline}
        </p>
        
        <div className={cn(
          "relative mt-10 mx-auto",
          isMobile ? "w-full" : "max-w-[800px]"
        )}>
          {timelineData.map((item, index) => (
            <TimelineItem 
              key={item.id} 
              item={item} 
              isLast={index === timelineData.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
