
import React, { useState } from 'react'
import { Clock, Briefcase, Atom, Rocket, ChevronDown } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import {
  timelineData,
  TimelineItemProps,
  sectionDescriptions,
} from '@/data/content'
import { useIsMobile } from '@/hooks/use-mobile'
import { Button } from '@/components/ui/button'

// Icon color scheme mapping for different timeline types
const typeIconColorScheme = {
  job: {
    iconColor: 'text-red-600',
    iconBackground: 'bg-red-100 dark:bg-red-900/30',
  },
  freelance: {
    iconColor: 'text-orange-600',
    iconBackground: 'bg-orange-100 dark:bg-orange-900/30',
  },
  education: {
    iconColor: 'text-purple-600',
    iconBackground: 'bg-purple-100 dark:bg-purple-900/30',
  },
  'personal project': {
    iconColor: 'text-green-600',
    iconBackground: 'bg-green-100 dark:bg-green-900/30',
  },
}

const TimelineItem = ({
  item,
  isLast,
}: {
  item: TimelineItemProps
  isLast: boolean
}) => {
  const isMobile = useIsMobile()
  const [isOpen, setIsOpen] = useState(false)
  const colorScheme =
    typeIconColorScheme[item.type as keyof typeof typeIconColorScheme] ||
    typeIconColorScheme.job

  const getIconByType = (type: string) => {
    switch (type) {
      case 'job':
        return <Briefcase className={`h-6 w-6 ${colorScheme.iconColor}`} />
      case 'freelance':
        return <Clock className={`h-6 w-6 ${colorScheme.iconColor}`} />
      case 'education':
        return <Atom className={`h-6 w-6 ${colorScheme.iconColor}`} />
      case 'personal project':
        return <Rocket className={`h-6 w-6 ${colorScheme.iconColor}`} />
      default:
        return <Briefcase className={`h-6 w-6 ${colorScheme.iconColor}`} />
    }
  }

  return (
    <div className={cn('relative flex', isMobile ? 'flex-col' : 'items-start')}>
      {/* Timeline line and dot - only show on desktop */}
      {!isMobile && (
        <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center">
          <div
            className={cn('h-16 w-0.5 bg-portfolio-primary/20', {
              'opacity-0': item.id === 1,
            })}
          />
          <div
            className={cn(
              'flex h-16 w-16 shrink-0 items-center justify-center rounded-full z-10',
              colorScheme.iconBackground
            )}
          >
            {getIconByType(item.type)}
          </div>
          {!isLast && <div className="h-full w-0.5 bg-portfolio-primary/20" />}
        </div>
      )}

      {/* Timeline content */}
      <div
        className={cn(
          isMobile ? 'w-full' : 'ml-24 w-full',
          'pb-10',
          isMobile ? '' : 'pt-3'
        )}
      >
        <Card className="w-full hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800">
          <CardContent className="p-6">
            <div className="mb-2">
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-portfolio-primary/10 text-portfolio-primary dark:bg-portfolio-primary/20">
                {item.year}
              </span>
            </div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-muted-foreground">{item.company}</p>
            <Separator className="my-3" />
            
            {isMobile ? (
              <div className="relative">
                <div className={!isOpen ? "max-h-24 overflow-hidden relative" : ""}>
                  <p className="mt-2">{item.description}</p>
                  
                  {!isOpen && (
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-800 to-transparent" />
                  )}
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full mt-2 border border-gray-200 dark:border-gray-700 text-portfolio-primary hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex items-center justify-center w-full">
                    {isOpen ? 'Show less' : 'Read more'}
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </span>
                </Button>
              </div>
            ) : (
              <p className="mt-2">{item.description}</p>
            )}
            
            {item.tags && (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground dark:bg-gray-700 dark:text-gray-200"
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
  )
}

const Timeline = () => {
  const isMobile = useIsMobile()

  return (
    <section id="timeline" className="section bg-gray-100 dark:bg-gray-800">
      <div className="container">
        <h2 className="section-title dark:text-white">Experience</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 dark:text-gray-300">
          {sectionDescriptions.timeline}
        </p>

        <div
          className={cn(
            'relative mt-10 mx-auto',
            isMobile ? 'w-full' : 'max-w-[800px]'
          )}
        >
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
  )
}

export default Timeline
