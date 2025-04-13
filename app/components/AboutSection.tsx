'use client'

import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A counselling psychologist dedicated to creating a safe space for healing and growth
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  I'm a counselling psychologist who truly believes that each person is unique—shaped by their own experiences, emotions, and the journey they've walked so far. I'm also on my own path of self-growth, learning to understand myself better and practicing self-compassion along the way.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  I hold a Master's degree in Clinical Psychology and have undergone additional training to continue developing and refining my counseling skills. I offer a safe and inclusive space for healing and growth. My approach is primarily client-centered, and I draw from various therapeutic modalities to tailor each session to the unique needs of the individual.
                </p>
              </div>

              {/* Experience Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Education</h3>
                  <p className="text-gray-600">Master's in Clinical Psychology</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Experience</h3>
                  <p className="text-gray-600">VIMHANS & Fortis Escorts Hospital</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  I aim to create a safe, non-judgmental environment where clients can reflect on their paths, make sense of their experiences, and feel seen, heard, and validated as they move through life's complexities.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  I'm here to offer thoughtful, compassionate support as you work toward a life that feels more balanced, meaningful, and true to you. I believe in your capacity to grow—and I'm honored to walk alongside you on that journey.
                </p>
              </div>
            </div>

            {/* Right Column - Image and Highlights */}
            <div className="space-y-8">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/assets/images/IMG_2583.jpeg"
                  alt="Ridhima Gupta - Counselling Psychologist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-medium text-gray-800 mb-6">Areas of Focus</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-muted-green mr-3">✦</span>
                    <span className="text-gray-700">Children & Adolescents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-muted-green mr-3">✦</span>
                    <span className="text-gray-700">Young Adults</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-muted-green mr-3">✦</span>
                    <span className="text-gray-700">Parent Counseling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-muted-green mr-3">✦</span>
                    <span className="text-gray-700">Evidence-Based Care</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 