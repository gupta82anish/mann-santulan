import Link from "next/link"

export default function Footer({ dict }: { dict: any }) {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">{dict.contactTitle}</h3>
            <p>{dict.address}</p>
            <p>{dict.phone}</p>
            <p>{dict.email}</p>
          </div>
          <div className="w-full md:w-1/3 text-center mt-4 md:mt-0">
            <p>
              &copy; {new Date().getFullYear()} {dict.copyright}
            </p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right mt-4 md:mt-0">
            <h3 className="text-lg font-semibold mb-2">{dict.followTitle}</h3>
            <div className="space-x-4">
              <Link href="#" className="hover:text-blue-400">
                Facebook
              </Link>
              <Link href="#" className="hover:text-blue-400">
                Twitter
              </Link>
              <Link href="https://www.linkedin.com/in/guptaridhima/" target="_blank" className="hover:text-blue-400">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

