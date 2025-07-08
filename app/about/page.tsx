"use client"

import Navbar from "@/components/navbar"
import { Globe, Heart, Target, Eye, Zap, Shield } from "lucide-react"
import { useState, useEffect } from "react"
import { useTranslation } from 'react-i18next'

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("story")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const { t } = useTranslation()

  const teamMembers = [
    {
      name: t("John Smith"),
      role: t("CEO & Founder"),
      image: "👨‍💼",
      bio: t("20+ years in packaging industry, former VP at Global Packaging Solutions"),
      expertise: [t("Strategic Leadership"), t("Industry Innovation"), t("Sustainable Practices")],
      linkedin: "#",
    },
    {
      name: t("Sarah Johnson"),
      role: t("Head of Operations"),
      image: "👩‍💼",
      bio: t("Expert in supply chain management and operational excellence"),
      expertise: [t("Supply Chain"), t("Quality Control"), t("Process Optimization")],
      linkedin: "#",
    },
    {
      name: t("Mike Chen"),
      role: t("Quality Control Manager"),
      image: "👨‍🔬",
      bio: t("PhD in Materials Science, ensures highest quality standards"),
      expertise: [t("Materials Science"), t("Quality Assurance"), t("Testing Protocols")],
      linkedin: "#",
    },
    {
      name: t("Lisa Brown"),
      role: t("Customer Relations Director"),
      image: "👩‍💻",
      bio: t("Dedicated to customer satisfaction and relationship building"),
      expertise: [t("Customer Success"), t("Account Management"), t("Support Systems")],
      linkedin: "#",
    },
    {
      name: t("David Wilson"),
      role: t("Innovation Lead"),
      image: "👨‍🎨",
      bio: t("Leading R&D initiatives and sustainable packaging solutions"),
      expertise: [t("Product Development"), t("Sustainability"), t("Innovation")],
      linkedin: "#",
    },
    {
      name: t("Emma Davis"),
      role: t("Marketing Director"),
      image: "👩‍🎨",
      bio: t("Brand strategist with focus on digital transformation"),
      expertise: [t("Brand Strategy"), t("Digital Marketing"), t("Market Analysis")],
      linkedin: "#",
    },
  ]

  const milestones = [
    {
      year: "2005",
      title: "Company Founded",
      description: "Started as a small family business with a vision for better packaging",
    },
    {
      year: "2008",
      title: "First Major Contract",
      description: "Secured partnership with leading e-commerce platform",
    },
    { year: "2012", title: "International Expansion", description: "Opened facilities in Europe and Asia" },
    { year: "2016", title: "Sustainability Initiative", description: "Launched 100% recyclable product line" },
    { year: "2019", title: "Technology Integration", description: "Implemented AI-driven quality control systems" },
    { year: "2022", title: "Carbon Neutral", description: "Achieved carbon-neutral manufacturing processes" },
    { year: "2024", title: "Industry Leader", description: "Recognized as top packaging innovation company" },
  ]

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make is guided by what's best for our customers and their success.",
      color: "from-red-500/20 to-pink-500/20",
    },
    {
      icon: Shield,
      title: "Quality Excellence",
      description: "Uncompromising standards in every product we manufacture and deliver.",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Committed to environmental responsibility and sustainable business practices.",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously pushing boundaries with cutting-edge technology and creative solutions.",
      color: "from-purple-500/20 to-violet-500/20",
    },
  ]

  const stats = [
    { number: "50M+", label: "Packages Delivered", icon: "📦" },
    { number: "10K+", label: "Happy Clients", icon: "😊" },
    { number: "99.9%", label: "Quality Rate", icon: "⭐" },
    { number: "15", label: "Countries Served", icon: "🌍" },
    { number: "500+", label: "Team Members", icon: "👥" },
    { number: "0%", label: "Carbon Footprint", icon: "🌱" },
  ]

  return (
    <div className="min-h-screen bg-offwhite text-dark font-sans">
      <Navbar />
      <section className="pt-32 pb-16 px-4 bg-offwhite text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-deepgreen mb-6">{t('About HuloolAlWaraq')}</h1>
          <p className="text-xl md:text-2xl text-steel mb-8">{t('Pioneering the future of packaging with innovation, sustainability, and excellence since 2005.')}</p>
      </div>
      </section>
      <section className="py-16 px-4 bg-kraft/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-deepgreen mb-4">{t('Our Mission')}</h2>
          <p className="text-lg text-steel mb-8">{t('To provide innovative, sustainable packaging solutions that protect products, enhance brand value, and contribute to a better environment for future generations.')}</p>
          </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-deepgreen text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-offwhite border border-steel rounded-2xl p-8 text-center shadow hover:shadow-lg transition-all flex flex-col items-center">
                        <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-deepgreen mb-2">{member.name}</h3>
                <p className="text-steel mb-2">{member.role}</p>
                <p className="text-steel text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, skillIdx) => (
                    <span key={skillIdx} className="px-3 py-1 bg-kraft/20 text-steel text-xs rounded-full border border-kraft/40">{skill}</span>
                  ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
      </section>
      <section className="py-16 px-4 bg-kraft/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-deepgreen mb-4">Our Journey</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="bg-white border border-steel rounded-2xl p-6 text-center shadow">
                <h3 className="text-xl font-bold text-deepgreen mb-2">{milestone.year}</h3>
                <p className="text-steel font-semibold mb-1">{milestone.title}</p>
                <p className="text-steel text-sm">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
