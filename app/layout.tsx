import type React from "react"
import { Inter, Tiro_Devanagari_Hindi } from "next/font/google"
import "./globals.css"
import Header from "@/app/components/Header" 
import Footer from "@/app/components/Footer"

const inter = Inter({ subsets: ["latin"] })
const devanagari = Tiro_Devanagari_Hindi({
  weight: '400',
  subsets: ['devanagari'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
} 