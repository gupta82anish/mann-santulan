import Image from "next/image"
import Link from "next/link"

export default function AboutMe() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/3 max-w-[500px]">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-full">
                <Image
                  src="/assets/images/IMG_2392.jpeg"
                  alt="Portrait of the therapist"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="w-full md:w-2/3 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
            <ul className="space-y-4 list-disc pl-5 text-gray-600">
              <li>Licensed clinical therapist with 10+ years experience</li>
              <li>Specialized in cognitive behavioral therapy</li>
              <li>Masters in Clinical Psychology</li>
              <li>Certified in trauma-focused therapy</li>
              <li>Fluent in English and Spanish</li>
            </ul>
            <Link
              href="/about-me"
              className="inline-block mt-4 text-muted-green hover:text-muted-green/80 font-semibold transition-colors"
            >
              View full credentials →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 