import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "@/components/footer"
import "./globals.css"
import { appWithTranslation } from 'next-i18next'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HuloolAlWaraq - Premium Packaging Solutions",
  description:
    "Leading packaging company providing innovative solutions for businesses worldwide. Quality boxes, protective materials, and custom packaging.",
  keywords: "packaging, boxes, shipping, corrugated, bubble wrap, packaging materials, HuloolAlWaraq",
    generator: 'v0.dev'
}

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default appWithTranslation(RootLayout)
