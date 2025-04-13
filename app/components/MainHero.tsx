'use client'

import Link from "next/link"
import WaveDivider from "./WaveDivider"

export default function MainHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-background" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
          A gentle space for healing, growth, and everything in between.
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          Therapy that meets you where you are—with care, curiosity, and compassion.
        </p>
        
        <p className="text-lg md:text-xl text-white/80 mb-12">
          Inner balance, outer ease.
        </p>
        
        <Link 
          href="#intro-call"
          onClick={(e) => {
            e.preventDefault()
            const section = document.getElementById('intro-call')
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' })
            }
          }}
          className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors duration-300"
        >
          Start Your Journey
        </Link>
      </div>

      {/* Wave Divider */}
      <WaveDivider 
        fillColor="#F8FBF8" 
        rotate={true} 
        className="absolute bottom-0 left-0 z-10" 
      />

      <style jsx global>{`
        .gradient-background {
          background: linear-gradient(300deg, #1f5071, #cdc9c0, #f3a751);
          background-size: 180% 180%;
          animation: gradient-animation 18s ease infinite;
        }

        @keyframes gradient-animation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  )
} 