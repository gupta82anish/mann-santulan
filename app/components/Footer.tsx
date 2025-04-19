import Link from "next/link"
import { InstagramIcon } from "./Icons"

export default function Footer() {
  return (
    <footer className="bg-muted-green text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            {/* <p>123 Therapy St, City, State 12345</p>
            <p>(123) 456-7890</p> */}
            <a href="mailto:contact.ridhimagupta@gmail.com" rel="noopener noreferrer">
              contact.ridhimagupta@gmail.com
            </a>
          </div>
          <div className="w-full md:w-1/3 text-center mt-4 md:mt-0">
            <p>
              &copy; {new Date().getFullYear()} Mann Santulan. All rights reserved. Made with ❤️
            </p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right mt-4 md:mt-0">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex items-center justify-center md:justify-end gap-2">
                <InstagramIcon />
              <Link href="https://www.instagram.com/mann_santulan/" target="_blank" className="hover:text-muted-green">
              Instagram
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

