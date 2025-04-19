'use client'

import { Tiro_Devanagari_Hindi } from "next/font/google"
import { useState } from 'react'

const devanagari = Tiro_Devanagari_Hindi({
  weight: '400',
  subsets: ['devanagari'],
  display: 'swap',
})

export default function MeaningSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-[#F8FBF8]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header with Devanagari Text */}
          <div className="text-center mb-16">
            <h2 className={`${devanagari.className} text-4xl sm:text-5xl md:text-6xl text-gray-800 mb-4`}>
              Mann संतुलन
            </h2>
            <div className="w-32 h-1 bg-muted-green mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600">
              Finding balance within the mind
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Meaning Breakdown */}
            <div className="space-y-8">
              <div 
                className={`bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md ${
                  hoveredIndex === 0 ? 'border-muted-green/30' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(0)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h3 className="text-xl md:text-2xl font-light text-gray-800 mb-6">The Meaning</h3>
                <div className="space-y-6">
                  <div className="transform transition-transform duration-300 hover:translate-x-2">
                    <p className={`${devanagari.className} text-2xl md:text-3xl text-muted-green mb-2`}>मन</p>
                    <p className="text-sm md:text-base text-gray-700">Mind, heart, and inner self</p>
                  </div>
                  <div className="transform transition-transform duration-300 hover:translate-x-2">
                    <p className={`${devanagari.className} text-2xl md:text-3xl text-muted-green mb-2`}>संतुलन</p>
                    <p className="text-sm md:text-base text-gray-700">Balance, equilibrium, and harmony</p>
                  </div>
                </div>
              </div>

              <div 
                className={`bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md ${
                  hoveredIndex === 1 ? 'border-muted-green/30' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(1)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h3 className="text-xl md:text-2xl font-light text-gray-800 mb-6">The Philosophy</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Together, they reflect the idea of finding a gentle equilibrium within ourselves—a space where our thoughts, emotions, and lived experiences can feel understood, validated, and at peace.
                </p>
              </div>
            </div>

            {/* Right Column - Explanation */}
            <div className="space-y-8">
              <div 
                className={`bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md ${
                  hoveredIndex === 2 ? 'border-muted-green/30' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(2)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h3 className="text-2xl font-light text-gray-800 mb-6">The Practice</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  As a therapist, my aim is to create a warm, non-judgmental space where you can safely explore your inner world. I believe that each person&apos;s journey is unique, and healing looks different for everyone.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Through our work together, my hope is to help you move toward a sense of balance that feels true and supportive for you—because therapy isn&apos;t about changing who you are, but about reconnecting with your most authentic self.
                </p>
              </div>

              <div 
                className={`bg-white p-8 rounded-xl border border-muted-green/20 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md ${
                  hoveredIndex === 3 ? 'border-muted-green/30' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(3)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h3 className="text-2xl font-light text-gray-800 mb-6">The Importance</h3>
                <p className="text-gray-700 leading-relaxed">
                  In the context of mental health, maintaining &quot;Mann Santulan&quot; is essential for overall well-being, as it helps individuals navigate life&apos;s challenges with resilience and clarity.
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="mt-16 text-center">
            <div className="inline-block p-3 md:p-4 rounded-full bg-muted-green/10">
              <span className="text-3xl md:text-4xl">✦</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 