
import React, { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useTheme } from './ThemeProvider'

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto py-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-portfolio-primary">
          ./Henrik
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <nav className="flex space-x-8 mr-6">
            <button
              onClick={() => scrollToSection('projects')}
              className="text-foreground dark:text-gray-200 hover:text-portfolio-primary dark:hover:text-portfolio-primary transition-colors font-bold"
            >
              Case
            </button>
            <button
              onClick={() => scrollToSection('timeline')}
              className="text-foreground dark:text-gray-200 hover:text-portfolio-primary dark:hover:text-portfolio-primary transition-colors font-bold"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground dark:text-gray-200 hover:text-portfolio-primary dark:hover:text-portfolio-primary transition-colors font-bold"
            >
              About
            </button>
          </nav>
          
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          {/* Dark Mode Toggle - Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button
            className="text-foreground dark:text-gray-200 p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg absolute top-full left-0 right-0 animate-fade-in">
          <div className="container py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="py-2 text-foreground dark:text-gray-200 hover:text-portfolio-primary dark:hover:text-portfolio-primary transition-colors font-bold"
            >
              Case
            </button>
            <button
              onClick={() => scrollToSection('timeline')}
              className="py-2 text-foreground dark:text-gray-200 hover:text-portfolio-primary dark:hover:text-portfolio-primary transition-colors font-bold"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="py-2 text-foreground dark:text-gray-200 hover:text-portfolio-primary dark:hover:text-portfolio-primary transition-colors font-bold"
            >
              About
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
