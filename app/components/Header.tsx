import Link from "next/link"

export default function Header({ dict, lang }: { dict: any; lang: string }) {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href={`/${lang}`} className="text-2xl font-bold text-gray-800">
            {dict.title}
          </Link>
          <div className="space-x-4">
            <Link href={`/${lang === "en" ? "es" : "en"}`} className="text-gray-600 hover:text-gray-800">
              {lang === "en" ? "Español" : "English"}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

