"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MessageCircle, Calendar } from "lucide-react"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Thank you for your message! We'll get back to you within 24 hours.")
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "general",
    })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our experts",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
      action: "Call Now",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a detailed message",
      details: ["info@packagepro.com", "sales@packagepro.com"],
      action: "Send Email",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant support",
      details: ["Available 24/7", "Average response: 2 min"],
      action: "Start Chat",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a consultation",
      details: ["30-min free consultation", "Custom solutions"],
      action: "Book Now",
      color: "from-orange-500/20 to-red-500/20",
    },
  ]

  const offices = [
    {
      city: "New York (HQ)",
      address: "123 Packaging Street, Industrial District, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "ny@packagepro.com",
      hours: "Mon-Fri: 8AM-6PM EST",
    },
    {
      city: "Los Angeles",
      address: "456 Innovation Blvd, Tech Center, CA 90210",
      phone: "+1 (555) 987-6543",
      email: "la@packagepro.com",
      hours: "Mon-Fri: 8AM-6PM PST",
    },
    {
      city: "Chicago",
      address: "789 Commerce Ave, Business District, IL 60601",
      phone: "+1 (555) 456-7890",
      email: "chicago@packagepro.com",
      hours: "Mon-Fri: 8AM-6PM CST",
    },
  ]

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "quote", label: "Request Quote" },
    { value: "support", label: "Technical Support" },
    { value: "partnership", label: "Partnership" },
    { value: "careers", label: "Careers" },
  ]

  return (
    <div className="min-h-screen bg-offwhite text-dark font-sans">
      <Navbar />
      <section className="pt-32 pb-16 px-4 bg-offwhite text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-deepgreen mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-steel mb-8">Ready to elevate your packaging? Reach out to our team for a custom quote or more information.</p>
      </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, idx) => (
              <div key={idx} className="bg-offwhite border border-steel rounded-2xl p-8 text-center shadow hover:shadow-lg transition-all flex flex-col items-center">
                <method.icon className="w-12 h-12 text-deepgreen mb-4" />
                <h3 className="text-xl font-bold text-deepgreen mb-2">{method.title}</h3>
                <p className="text-steel mb-4">{method.description}</p>
                    <div className="space-y-1 mb-4">
                  {method.details.map((detail, dIdx) => (
                    <p key={dIdx} className="text-steel text-sm">{detail}</p>
                  ))}
                </div>
                <Button className="w-full bg-deepgreen hover:bg-kraft text-offwhite border border-deepgreen hover:border-kraft rounded-xl mt-auto">
                  {method.action}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-kraft/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-deepgreen mb-4">Send us a Message</h2>
          <p className="text-lg text-steel mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
          {/* Contact form remains as is, but ensure all inputs/buttons use visible, modern styles */}
      </div>
      </section>
    </div>
  )
}
