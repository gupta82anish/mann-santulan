"use client"
import Image from "next/image"
import Link from "next/link"
import { Tiro_Devanagari_Hindi } from "next/font/google"

const devanagari = Tiro_Devanagari_Hindi({
  weight: '400',
  subsets: ['devanagari'],
  display: 'swap',
})

export default function Hero() {
  const scrollToIntroCall = (e: React.MouseEvent) => {
    e.preventDefault()
    const introCallSection = document.getElementById('intro-call')
    if (introCallSection) {
      introCallSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 md:py-24 bg-[#F9F5F3]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-2">
              <h1 className={`${devanagari.className} text-6xl md:text-7xl font-bold text-gray-800 leading-tight`}>
                मन संतुलन
              </h1>
              <p className="text-2xl text-gray-600">Mann Santulan</p>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-lg">
              Your Path to Mental Wellness
            </p>
            <p className="text-base md:text-lg text-gray-600 max-w-lg">
              Professional therapy to help you overcome life&apos;s challenges
            </p>
            <Link
              href="#intro-call"
              onClick={scrollToIntroCall}
              className="inline-block bg-muted-green hover:bg-muted-green/80 text-white font-bold 
                       py-3 px-8 rounded-full transition duration-300 text-lg"
            >
              Schedule a call
            </Link>
          </div>

          {/* Right side - Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[3/2] relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/background/watering.webp"
                alt="Serene therapy office"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

