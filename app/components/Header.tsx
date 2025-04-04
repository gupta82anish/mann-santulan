'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

// Scroll threshold in pixels - can be adjusted as needed
const SCROLL_THRESHOLD = 100

// List of light background pages
const LIGHT_PAGES = [
  '/profile',
  '/contact',  // For future light pages
  '/about'     // For future light pages
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLightPage, setIsLightPage] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsLightPage(LIGHT_PAGES.includes(pathname))
  }, [pathname])

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault()
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <Link href="/" className={`text-2xl font-bold ${
              isScrolled || isLightPage ? 'text-gray-800' : 'text-white'
            }`}>
              Mann Santulan
            </Link>
            <span className={`text-sm ${
              isScrolled || isLightPage ? 'text-gray-600' : 'text-white/80'
            }`}>
              by Ridhima Gupta
            </span>
          </div>
          <div className="space-x-4">
            <a 
              href="#about"
              onClick={scrollToAbout}
              className={`${
                isScrolled || isLightPage ? 'text-gray-600 hover:text-gray-800' : 'text-white/80 hover:text-white'
              }`}
            >
              About
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

