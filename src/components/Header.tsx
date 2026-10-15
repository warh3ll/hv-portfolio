import React, { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from './ThemeProvider'

const navItems = [
  { id: 'projects', label: 'Case' },
  { id: 'timeline', label: 'Experience' },
  { id: 'about', label: 'About' },
]

// On case pages the sections live on the home page, so links point there
const sectionHref = (id: string) =>
  window.location.pathname.replace(import.meta.env.BASE_URL, '/') === '/'
    ? `#${id}`
    : `${import.meta.env.BASE_URL}#${id}`

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const themeToggle = (className: string) => (
    <button
      onClick={toggleTheme}
      className={cn(
        'p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors',
        className
      )}
      aria-label="Dark mode"
      aria-pressed={theme === 'dark'}
    >
      {theme === 'dark' ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
    </button>
  )

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-gray-900 focus:shadow-lg"
      >
        Skip to content
      </a>
      <div className="container mx-auto py-4 flex justify-between items-center">
        <a href={sectionHref('hero')} className="text-2xl font-bold text-portfolio-primary">
          ./Henrik
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <nav aria-label="Main" className="flex space-x-8 mr-6">
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={sectionHref(id)}
                className="text-foreground dark:text-gray-200 hover:text-portfolio-primary dark:hover:text-portfolio-primary transition-colors font-bold"
              >
                {label}
              </a>
            ))}
          </nav>

          {themeToggle('')}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          {themeToggle('mr-2')}

          <button
            className="text-foreground dark:text-gray-200 p-2"
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg absolute top-full left-0 right-0 animate-fade-in"
        >
          <div className="container py-4 flex flex-col space-y-4">
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={sectionHref(id)}
                onClick={() => setIsMenuOpen(false)}
                className="py-2 text-center text-foreground dark:text-gray-200 hover:text-portfolio-primary dark:hover:text-portfolio-primary transition-colors font-bold"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
