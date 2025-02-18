import Image from "next/image"
import Link from "next/link"

export default function AboutMe({ dict }: { dict: any }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/3 max-w-[500px]">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-full">
                <Image
                  src="/assets/images/IMG_2583.jpeg"
                  alt={dict.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="w-full md:w-2/3 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">{dict.title}</h2>
            <ul className="space-y-4 list-disc pl-5 text-gray-600">
              {dict.bullets.map((bullet: string, index: number) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
            <Link
              href="/about" // Update with your actual about page path
              className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
            >
              {dict.linkText} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 