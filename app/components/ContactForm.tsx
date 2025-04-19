'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      console.log('Server response:', data);
      setStatus('success')
      setFormData({ name: '', email: '', message: '' }) // Reset form
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section className="py-16 md:py-24 bg-[#F8FBF8]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 mb-4">
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-muted-green mx-auto mb-4 md:mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600">
              Have questions or ready to start your journey? I&apos;m here to help.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              {status === 'success' && (
                <div className="p-3 md:p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm md:text-base">
                  Thank you for your message! I&apos;ll get back to you within 24 hours.
                </div>
              )}

              {status === 'error' && (
                <div className="p-3 md:p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm md:text-base">
                  {errorMessage}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-4 w-4 md:h-5 md:w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading'}
                      className="block w-full pl-9 md:pl-10 pr-3 py-2.5 md:py-3 border border-gray-300 rounded-xl 
                               text-sm md:text-base text-gray-900 placeholder-gray-400
                               focus:outline-none focus:ring-2 focus:ring-muted-green focus:border-transparent
                               transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-4 w-4 md:h-5 md:w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0 1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading'}
                      className="block w-full pl-9 md:pl-10 pr-3 py-2.5 md:py-3 border border-gray-300 rounded-xl 
                               text-sm md:text-base text-gray-900 placeholder-gray-400
                               focus:outline-none focus:ring-2 focus:ring-muted-green focus:border-transparent
                               transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                  Your Message
                </label>
                <div className="relative">
                  <div className="absolute top-2.5 md:top-3 left-3 pointer-events-none">
                    <svg className="h-4 w-4 md:h-5 md:w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    rows={4}
                    className="block w-full pl-9 md:pl-10 pr-3 py-2.5 md:py-3 border border-gray-300 rounded-xl 
                             text-sm md:text-base text-gray-900 placeholder-gray-400
                             focus:outline-none focus:ring-2 focus:ring-muted-green focus:border-transparent
                             transition duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-block bg-muted-green text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full 
                           text-base md:text-lg font-medium 
                           hover:bg-muted-green/90 transition-colors duration-300
                           disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="text-base md:text-lg">Sending...</span>
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
