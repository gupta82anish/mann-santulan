'use client'

import { useState, useRef, useEffect } from 'react'

const faqs = [
  {
    question: "How do I know if I should seek therapy?",
    answer: `If you've been feeling overwhelmed, stuck, disconnected, or even just curious about your own patterns—therapy might be helpful. Seeking therapy is a completely personal choice.

Maybe you're navigating a life change, struggling with self-doubt, struggling with work stress or just finding it hard to cope lately. Or maybe you're simply looking for a space to reflect, understand yourself better, and grow.

If you've ever caught yourself thinking, "I don't feel like myself," or "I just need someone to talk to,"—that's reason enough. Therapy is for anyone who wants support, clarity, or just a little more ease in their life.`
  },
  {
    question: "What happens in a therapy session?",
    answer: `In a typical session, we talk about what's on your mind—whether it's a current struggle, past experience, work issues or just how you're feeling. Therapy isn't about giving advice, but about helping you explore your thoughts and emotions in a safe, supportive space.`
  },
  {
    question: "What if I find it hard to open up?",
    answer: `That's completely normal—many people feel that way in the beginning. Opening up can feel vulnerable, and it takes time. We'll go at a pace that feels right for you, with no pressure to share anything before you're ready. There's no expectation beyond what you're comfortable with. Trust is something we'll build together, and I'm here to hold space for you with patience, care, and understanding—whenever you feel ready.`
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Initialize refs array
    contentRefs.current = contentRefs.current.slice(0, faqs.length)
  }, [])

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-muted-green mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Common questions about therapy and the process
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-medium text-gray-800">
                      {faq.question}
                    </h3>
                    <span className={`transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}>
                      <svg 
                        className="w-6 h-6 text-muted-green" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 9l-7 7-7-7" 
                        />
                      </svg>
                    </span>
                  </div>
                </button>
                
                <div 
                  ref={el => { contentRefs.current[index] = el }}
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: openIndex === index 
                      ? `${contentRefs.current[index]?.scrollHeight}px` 
                      : '0px'
                  }}
                >
                  <div className="px-6 pb-4">
                    <div className="prose prose-lg max-w-none text-gray-700">
                      {faq.answer.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">
              Have more questions? Feel free to reach out.
            </p>
            <a 
              href="#contact"
              className="inline-block bg-muted-green text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-muted-green/90 transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 