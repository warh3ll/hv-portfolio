
import React from 'react';
import { 
  Clock,
  Briefcase,
  CalendarDays
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

// Type for timeline items
export interface TimelineItemProps {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
  tags?: string[];
  type: 'job' | 'freelance' | 'education';
}

// Sample timeline data - replace with your actual employment history
const timelineData: TimelineItemProps[] = [
  {
    id: 1,
    year: '2023 - 2025',
    title: 'Senior UX Designer',
    company: 'Tech Innovation Co.',
    description: 'Led the design system initiative across multiple product lines, resulting in 40% faster design implementation and improved product consistency.',
    tags: ['Design Systems', 'UX Research', 'Team Leadership'],
    type: 'job'
  },
  {
    id: 2,
    year: '2021 - 2023',
    title: 'UX Design Lead',
    company: 'Digital Solutions Inc.',
    description: "Managed a team of 4 designers working on the company's flagship product, increasing user satisfaction scores by 35%.",
    tags: ['Product Design', 'User Testing', 'Management'],
    type: 'job'
  },
  {
    id: 3,
    year: '2020 - 2021',
    title: 'Freelance UX Consultant',
    company: 'Various Clients',
    description: 'Provided UX consultancy for startups and established businesses in fintech and healthcare sectors.',
    tags: ['Consulting', 'UI Design', 'Prototyping'],
    type: 'freelance'
  },
  {
    id: 4,
    year: '2018 - 2020',
    title: 'UX/UI Designer',
    company: 'Creative Agency XYZ',
    description: 'Designed user interfaces for web and mobile applications across diverse industries including e-commerce and education.',
    tags: ['Mobile Design', 'User Flows', 'Wireframing'],
    type: 'job'
  },
  {
    id: 5,
    year: '2015 - 2018',
    title: 'Product Designer',
    company: 'Mobile App Startup',
    description: 'Was part of the core team that designed and launched a health tracking app with over 500,000 downloads in its first year.',
    tags: ['Mobile App Design', 'Interaction Design', 'Analytics'],
    type: 'job'
  },
  {
    id: 6,
    year: '2012 - 2015',
    title: 'UI Designer',
    company: 'Web Design Studio',
    description: 'Created responsive web designs for small to medium-sized businesses with a focus on improving conversion rates.',
    tags: ['Web Design', 'Responsive Design', 'CSS'],
    type: 'job'
  },
  {
    id: 7,
    year: '2010 - 2012',
    title: 'Junior Designer',
    company: 'Marketing Agency',
    description: 'Assisted senior designers with creating visual assets for digital marketing campaigns.',
    tags: ['Visual Design', 'Brand Design', 'Marketing'],
    type: 'job'
  },
  {
    id: 8,
    year: '2008 - 2010',
    title: 'Design Internship',
    company: 'Design Studio',
    description: 'Supported the design team with various projects while learning fundamental design principles and tools.',
    tags: ['Design Fundamentals', 'Adobe Suite', 'Typography'],
    type: 'education'
  }
];

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
          A chronological journey through my professional career, showcasing key positions and projects that have shaped my expertise as a designer.
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
