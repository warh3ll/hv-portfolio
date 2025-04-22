
import React from 'react';
import { 
  Clock,
  Briefcase,
  CalendarDays
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { timelineData, TimelineItemProps, sectionDescriptions } from '@/data/content';

const TimelineItem = ({ item, isLast }: { item: TimelineItemProps, isLast: boolean }) => {
  const getIconByType = (type: string) => {
    switch(type) {
      case 'job':
        return <Briefcase className="h-6 w-6" />;
      case 'freelance':
        return <Clock className="h-6 w-6" />;
      case 'education':
        return <CalendarDays className="h-6 w-6" />;
      default:
        return <Briefcase className="h-6 w-6" />;
    }
  };

  return (
    <div className="relative flex items-start">
      {/* Timeline line and dot */}
      <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center">
        <div className={cn(
          "h-16 w-0.5 bg-portfolio-primary/20",
          {"opacity-0": item.id === 1}
        )} />
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-portfolio-primary/10 text-portfolio-primary z-10">
          {getIconByType(item.type)}
        </div>
        {!isLast && (
          <div className="h-full w-0.5 bg-portfolio-primary/20" />
        )}
      </div>

      {/* Timeline content */}
      <div className="ml-24 pb-10 pt-3 w-full">
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
  return (
    <section id="timeline" className="section bg-portfolio-secondary">
      <div className="container">
        <h2 className="section-title">My Experience</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          {sectionDescriptions.timeline}
        </p>
        
        <div className="relative mt-10 max-w-[800px] mx-auto">
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
