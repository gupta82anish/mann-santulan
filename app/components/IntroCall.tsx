import Link from "next/link"

export default function IntroCall() {
  return (
    <section id="intro-call" className="py-16 bg-[#F8FBF8]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-gray-600 text-lg">
              Take the first step towards better mental health with a free 15-minute introductory call. 
              This is an opportunity for us to discuss your needs, answer your questions, and determine 
              if we&apos;re a good fit for working together.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-end">
            <Link
              href="https://cal.com/ridhima-gupta/15min"
              target="_blank"
              className="bg-muted-green hover:bg-muted-green/80 text-white font-bold py-3 px-8 rounded-full transition duration-300 whitespace-nowrap"
            >
              Schedule Introductory Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 