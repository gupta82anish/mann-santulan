'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Tiro_Devanagari_Hindi } from "next/font/google"
// Scroll threshold in pixels - can be adjusted as needed
const SCROLL_THRESHOLD = 100

// List of light background pages
const LIGHT_PAGES = [
  '/',
  '/profile',
  '/contact',
  '/about-me',
]

const NAV_LINKS = [
  { name: 'Home', href: '/', scrollTo: null },
  { name: 'About', href: '/about-me', scrollTo: null },
  // { name: 'Services', href: '#services', scrollTo: 'services' },
  { name: 'FAQ', href: '#faq', scrollTo: 'faq' },
  { name: 'Contact', href: '/contact', scrollTo: null }
]


const devanagari = Tiro_Devanagari_Hindi({
  weight: '400',
  subsets: ['devanagari'],
  display: 'swap',
})

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLightPage, setIsLightPage] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

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

  const handleNavigation = async (e: React.MouseEvent, scrollTo: string | null, href: string) => {
    if (!scrollTo) return

    e.preventDefault()
    
    if (pathname === '/') {
      const section = document.getElementById(scrollTo)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      await router.push('/')
      setTimeout(() => {
        const section = document.getElementById(scrollTo)
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
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
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-end space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className={`text-2xl font-bold ${devanagari.className} ${
              isScrolled || isLightPage ? 'text-gray-800' : 'text-white'
            }`}>
              Mann संतुलन
            </Link>
            <span className={`text-sm ${
              isScrolled || isLightPage ? 'text-gray-600' : 'text-white/80'
            }`}>
              by Ridhima Gupta
            </span>
          </div>
          <div className="flex flex-wrap justify-center space-x-4">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.scrollTo, link.href)}
                className={`relative ${
                  isScrolled || isLightPage ? 'text-gray-600 hover:text-gray-800' : 'text-white/80 hover:text-white'
                } ${
                  isActive(link.href) ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-current after:opacity-50' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

