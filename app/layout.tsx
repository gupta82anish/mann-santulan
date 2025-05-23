import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/app/components/Header" 
import Footer from "@/app/components/Footer"
import { Metadata } from "next"
import { getSettings } from "./utils/settings"

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings()

  return {
    title: "Mann Santulan",
    description: "Mann Santulan - A gentle space for healing, growth, and everything in between.",
    openGraph: {
      title: "Mann Santulan",
      description: "Mann Santulan - A gentle space for healing, growth, and everything in between.",
      type: "website",
    },
    keywords: ["mental health", "counselling", "psychology", "therapy", "Mann Santulan", "online mental health help"],
    authors: [{ name: "Ridhima Gupta" }],
    metadataBase: settings.METADATA_BASE ? new URL(settings.METADATA_BASE) : undefined
  }
} 

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