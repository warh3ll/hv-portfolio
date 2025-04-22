
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

// Color scheme mapping for different timeline types
const typeColorScheme = {
  'job': {
    background: 'bg-[#D3E4FD]',
    text: 'text-blue-600',
    iconBackground: 'bg-blue-100',
    borderColor: 'border-blue-300',
    tagBackground: 'bg-blue-100',
    tagText: 'text-blue-600'
  },
  'freelance': {
    background: 'bg-[#FDE1D3]',
    text: 'text-orange-600',
    iconBackground: 'bg-orange-100',
    borderColor: 'border-orange-300',
    tagBackground: 'bg-orange-100',
    tagText: 'text-orange-600'
  },
  'education': {
    background: 'bg-[#E5DEFF]',
    text: 'text-purple-600',
    iconBackground: 'bg-purple-100',
    borderColor: 'border-purple-300',
    tagBackground: 'bg-purple-100',
    tagText: 'text-purple-600'
  },
  'personal project': {
    background: 'bg-[#F2FCE2]',
    text: 'text-green-600',
    iconBackground: 'bg-green-100',
    borderColor: 'border-green-300',
    tagBackground: 'bg-green-100',
    tagText: 'text-green-600'
  }
};

const TimelineItem = ({ item, isLast }: { item: TimelineItemProps, isLast: boolean }) => {
  const isMobile = useIsMobile();
  const colorScheme = typeColorScheme[item.type as keyof typeof typeColorScheme] || typeColorScheme.job;
  
  const getIconByType = (type: string) => {
    switch(type) {
      case 'job':
        return <Briefcase className={`h-6 w-6 ${colorScheme.text}`} />;
      case 'freelance':
        return <Clock className={`h-6 w-6 ${colorScheme.text}`} />;
      case 'education':
        return <CalendarDays className={`h-6 w-6 ${colorScheme.text}`} />;
      case 'personal project':
        return <Rocket className={`h-6 w-6 ${colorScheme.text}`} />;
      default:
        return <Briefcase className={`h-6 w-6 ${colorScheme.text}`} />;
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
            `h-16 w-0.5 ${colorScheme.borderColor}`,
            {"opacity-0": item.id === 1}
          )} />
        )}
        <div className={cn(
          "flex h-16 w-16 shrink-0 items-center justify-center rounded-full z-10",
          colorScheme.iconBackground
        )}>
          {getIconByType(item.type)}
        </div>
        {!isMobile && !isLast && (
          <div className={cn(`h-full w-0.5 ${colorScheme.borderColor}`)} />
        )}
      </div>

      {/* Timeline content */}
      <div className={cn(
        isMobile ? "w-full" : "ml-24 w-full",
        "pb-10",
        isMobile ? "" : "pt-3"
      )}>
        <Card className={cn(
          "w-full hover:shadow-lg transition-shadow duration-300 border", 
          colorScheme.borderColor
        )}>
          <CardContent className={cn("p-6", colorScheme.background)}>
            <div className="mb-2">
              <span className={cn(
                "inline-block px-3 py-1 text-sm font-medium rounded-full",
                colorScheme.tagBackground,
                colorScheme.tagText
              )}>
                {item.year}
              </span>
            </div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-muted-foreground">{item.company}</p>
            <Separator className={cn("my-3", colorScheme.borderColor)} />
            <p className="mt-2">{item.description}</p>
            {item.tags && (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className={cn(
                      "text-xs px-2 py-1 rounded-md",
                      colorScheme.tagBackground,
                      colorScheme.tagText
                    )}
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
