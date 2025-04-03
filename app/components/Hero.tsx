"use client"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const scrollToIntroCall = (e: React.MouseEvent) => {
    e.preventDefault()
    const introCallSection = document.getElementById('intro-call')
    if (introCallSection) {
      introCallSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/background/artem-stoliar.jpg"
          alt="Serene therapy office"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10 text-white">
        <h1 className="text-5xl font-bold mb-4">Your Path to Mental Wellness</h1>
        <p className="text-xl mb-8">{"Professional therapy to help you overcome life's challenges"}</p>
        <Link
          href="#intro-call"
          onClick={scrollToIntroCall}
          className="bg-muted-green hover:bg-muted-green/80 text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-block"
        >
          Schedule a call
        </Link>
      </div>
    </section>
  )
}

