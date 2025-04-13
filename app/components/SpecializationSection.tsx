'use client'

import { useState } from 'react'

const specializations = [
  {
    category: "Emotional Well-being",
    items: [
      "Anxiety & Stress Management",
      "Self-Esteem & Self-Worth",
      "Emotional Regulation",
      "Body Image & Self-Acceptance"
    ]
  },
  {
    category: "Life Stages & Growth",
    items: [
      "Life Transitions & Personal Growth",
      "Adolescent & Young Adult Concerns",
      "Parent Support & Guidance",
      "Relationship & Interpersonal Issues"
    ]
  },
  {
    category: "Performance & Resilience",
    items: [
      "Burnout & Overwhelm",
      "Procrastination & Academic Struggles",
      "Mindfulness & Resilience Building"
    ]
  }
]

export default function SpecializationSection() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
              Areas of Specialization
            </h2>
            <div className="w-24 h-1 bg-muted-green mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Professional support for your unique journey
            </p>
          </div>

          {/* Specialization Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {specializations.map((group, groupIndex) => (
              <div 
                key={groupIndex}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-medium text-gray-800 mb-6">
                  {group.category}
                </h3>
                <ul className="space-y-4">
                  {group.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className={`flex items-start transition-all duration-300 ${
                        hoveredItem === item ? 'transform translate-x-2' : ''
                      }`}
                      onMouseEnter={() => setHoveredItem(item)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <span className="text-muted-green mr-3 mt-1">✦</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">
              Ready to take the next step in your journey?
            </p>
            <a 
              href="#contact"
              className="inline-block bg-muted-green text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-muted-green/90 transition-colors duration-300"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 