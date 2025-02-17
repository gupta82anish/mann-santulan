import Image from "next/image"
import Link from "next/link"

export default function Hero({ dict }: { dict: any }) {
  return (
    <section className="relative h-screen flex items-center">
      <Image src="/placeholder.svg" alt={dict.imageAlt} layout="fill" objectFit="cover" priority />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10 text-white">
        <h1 className="text-5xl font-bold mb-4">{dict.title}</h1>
        <p className="text-xl mb-8">{dict.subtitle}</p>
        <Link
          href="#appointment"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          {dict.cta}
        </Link>
      </div>
    </section>
  )
}

