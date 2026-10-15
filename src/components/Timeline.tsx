
import React from 'react'
import { cn } from '@/lib/utils'
import { timelineData, sectionDescriptions } from '@/data/content'
import { useIsMobile } from '@/hooks/use-mobile'
import TimelineItem from './timeline/TimelineItem'

const Timeline = () => {
  const isMobile = useIsMobile()

  return (
    <section id="timeline" className="section bg-gray-100 dark:bg-gray-800">
      <div className="container">
        <h2 className="section-title dark:text-white">Experience</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 dark:text-gray-300">
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
