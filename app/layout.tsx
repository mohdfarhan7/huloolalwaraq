import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HuloolAlWaraq - Premium Packaging Solutions",
  description:
    "Leading packaging company providing innovative solutions for businesses worldwide. Quality boxes, protective materials, and custom packaging.",
  keywords: "packaging, boxes, shipping, corrugated, bubble wrap, packaging materials, HuloolAlWaraq",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
