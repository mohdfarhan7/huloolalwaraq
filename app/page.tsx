"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import ConveyorBelt from "@/components/conveyor-belt"
import { ArrowDown, Sparkles, Zap, Shield, Star, Award, Users } from "lucide-react"
import dynamic from 'next/dynamic'
import { useTranslation } from 'react-i18next'
const BoxExperience = dynamic(() => import('@/components/BoxExperience'), { ssr: false })

export default function HomePage() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleBoxClick = () => {
    router.push("/box-details")
  }

  const handleItemClick = () => {
    router.push("/packaging-products")
  }

  const stats = [
    { number: "10K+", label: t("Happy Clients"), icon: Users },
    { number: "50M+", label: t("Packages Delivered"), icon: Award },
    { number: "99.9%", label: t("Quality Rate"), icon: Star },
    { number: "24/7", label: t("Support"), icon: Shield },
  ]

  return (
    <div className="min-h-screen bg-offwhite text-dark font-sans">
      <Navbar />
      <section className="relative w-full h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden pt-20">
        <BoxExperience />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <h1 className="text-5xl md:text-7xl font-black text-deepgreen drop-shadow-lg mb-4">{t('Premium Packaging, Delivered')}</h1>
          <p className="text-2xl md:text-3xl text-steel font-medium drop-shadow mb-8">{t('Cinematic. Sustainable. Unforgettable.')}</p>
        </div>
      </section>
      {/* About Section */}
      <section className="py-20 px-4 bg-kraft/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-deepgreen mb-4">About HuloolAlWaraq</h2>
          <p className="text-lg text-steel mb-8">We are a leading packaging manufacturer, connecting businesses to premium, sustainable packaging solutions since 2005.</p>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-deepgreen text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-offwhite border border-steel rounded-2xl p-8 text-center shadow hover:shadow-lg transition-all">
              <div className="text-5xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-deepgreen mb-2">Custom Packaging</h3>
              <p className="text-steel">Tailored solutions for your unique business needs.</p>
            </div>
            <div className="bg-offwhite border border-steel rounded-2xl p-8 text-center shadow hover:shadow-lg transition-all">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-deepgreen mb-2">Fast Delivery</h3>
              <p className="text-steel">On-time, reliable shipping for every order.</p>
            </div>
            <div className="bg-offwhite border border-steel rounded-2xl p-8 text-center shadow hover:shadow-lg transition-all">
              <div className="text-5xl mb-4">♻️</div>
              <h3 className="text-xl font-bold text-deepgreen mb-2">Eco-Friendly</h3>
              <p className="text-steel">Sustainable materials and processes for a greener future.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Products Section */}
      <section className="py-20 px-4 bg-kraft/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-deepgreen text-center mb-12">Featured Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-steel rounded-2xl p-8 text-center shadow hover:shadow-lg transition-all">
              <div className="text-5xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-deepgreen mb-2">Corrugated Boxes</h3>
              <p className="text-steel">Durable, customizable, and perfect for shipping.</p>
          </div>
            <div className="bg-white border border-steel rounded-2xl p-8 text-center shadow hover:shadow-lg transition-all">
              <div className="text-5xl mb-4">🫧</div>
              <h3 className="text-xl font-bold text-deepgreen mb-2">Bubble Wrap</h3>
              <p className="text-steel">Protect your products with premium cushioning.</p>
                  </div>
            <div className="bg-white border border-steel rounded-2xl p-8 text-center shadow hover:shadow-lg transition-all">
              <div className="text-5xl mb-4">🏷️</div>
              <h3 className="text-xl font-bold text-deepgreen mb-2">Custom Labels</h3>
              <p className="text-steel">Brand your packaging with high-quality labels.</p>
              </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-deepgreen mb-4">{t('Contact Us')}</h2>
          <p className="text-lg text-steel mb-8">Ready to elevate your packaging? Reach out to our team for a custom quote or more information.</p>
          <button
            onClick={() => router.push("/contact")}
            className="px-8 py-4 bg-deepgreen text-offwhite rounded-xl font-bold text-lg shadow hover:bg-kraft hover:text-deepgreen transition-all duration-200"
          >
            {t('Get in Touch')}
          </button>
        </div>
      </section>
    </div>
  )
}
