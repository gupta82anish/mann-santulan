import type React from "react"
import { Inter } from "next/font/google"
import "../globals.css"
import { getDictionary } from "../lib/getDictionary"
import Header from "@/app/components/Header" 
import Footer from "@/app/components/Footer"
const inter = Inter({ subsets: ["latin"] })

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "hi" }]
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang?: string }
}) {
  const { lang } = await params
  const dict = await getDictionary(lang ?? "en")

  return (
    <html lang={lang || "en"}>
      <body className={inter.className}>
        <Header dict={dict.header} lang={lang ??"en"} />
        <main>{children}</main>
        <Footer dict={dict.footer} />
      </body>
    </html>
  )
}

