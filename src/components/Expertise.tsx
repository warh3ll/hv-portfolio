import React from 'react'
import {
  User,
  Code,
  Palette,
  Users,
  Award,
  Layers,
  Component,
  FileSearch,
  Accessibility,
} from 'lucide-react'
import { expertiseContent } from '@/data/content'

// Map icon names to components
const iconMap: Record<string, React.ComponentType<any>> = {
  User: User,
  Code: Code,
  Palette: Palette,
  Users: Users,
  Award: Award,
  Layers: Layers,
  Component: Component,
  FileSearch: FileSearch,
  Accessibility: Accessibility,
}

const Expertise = () => {
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="py-4 bg-background">
      <div className="container">
        <h2 id="expertise-title" className="sr-only">Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {expertiseContent.skills.slice(0, 6).map((skill, index) => {
            const IconComponent = iconMap[skill.icon]

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-3">
                  <div className="p-3 bg-portfolio-primary/10 dark:bg-portfolio-primary/20 rounded-full text-portfolio-primary dark:text-portfolio-primary-light">
                    {IconComponent && <IconComponent size={28} aria-hidden="true" />}
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-1 dark:text-white">
                  {skill.name}
                </h3>
                <p className="text-sm text-muted-foreground dark:text-gray-300">
                  {skill.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Expertise
