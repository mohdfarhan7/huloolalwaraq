import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "@/components/footer"
import "./globals.css"
import i18n from "../i18n"
import { I18nextProvider } from "react-i18next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HuloolAlWaraq - Premium Packaging Solutions",
  description:
    "Leading packaging company providing innovative solutions for businesses worldwide. Quality boxes, protective materials, and custom packaging.",
  keywords: "packaging, boxes, shipping, corrugated, bubble wrap, packaging materials, HuloolAlWaraq",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <I18nextProvider i18n={i18n}>
          {children}
        </I18nextProvider>
      </body>
    </html>
  )
}
