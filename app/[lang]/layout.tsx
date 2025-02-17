import type React from "react"
import { Inter } from "next/font/google"
import "../globals.css"
import { getDictionary } from "../lib/getDictionary"
import Header from "@/app/components/Header" 
import Footer from "@/app/components/Footer"
const inter = Inter({ subsets: ["latin"] })

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }]
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang?: string }
}) {
  const dict = await getDictionary(params.lang || "en")

  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <Header dict={dict.header} lang={params.lang || "en"} />
        <main>{children}</main>
        <Footer dict={dict.footer} />
      </body>
    </html>
  )
}

