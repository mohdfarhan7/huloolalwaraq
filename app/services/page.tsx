"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Package,
  Truck,
  Settings,
  Palette,
  Shield,
  Recycle,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState("design")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      id: "design",
      title: "Custom Design & Engineering",
      icon: Palette,
      description: "Complete packaging design from concept to production",
      features: [
        "3D CAD design and prototyping",
        "Structural engineering analysis",
        "Graphic design and branding",
        "Material selection optimization",
        "Cost-effective design solutions",
        "Regulatory compliance consulting",
      ],
      benefits: [
        "Reduce packaging costs by up to 30%",
        "Improve product protection",
        "Enhance brand visibility",
        "Faster time to market",
      ],
      process: [
        "Initial consultation and requirements analysis",
        "Concept development and 3D modeling",
        "Prototype creation and testing",
        "Design refinement and optimization",
        "Production tooling and setup",
        "Quality assurance and delivery",
      ],
    },
    {
      id: "manufacturing",
      title: "Manufacturing & Production",
      icon: Settings,
      description: "State-of-the-art manufacturing facilities and processes",
      features: [
        "Automated production lines",
        "Quality control systems",
        "Flexible manufacturing capabilities",
        "High-volume production",
        "Just-in-time delivery",
        "ISO 9001 certified processes",
      ],
      benefits: [
        "Consistent quality standards",
        "Scalable production capacity",
        "Reduced lead times",
        "Cost-effective manufacturing",
      ],
      process: [
        "Production planning and scheduling",
        "Material procurement and inspection",
        "Manufacturing execution",
        "In-line quality control",
        "Packaging and labeling",
        "Shipping and logistics",
      ],
    },
    {
      id: "logistics",
      title: "Logistics & Distribution",
      icon: Truck,
      description: "Complete supply chain and distribution solutions",
      features: [
        "Warehousing and inventory management",
        "Order fulfillment services",
        "Transportation management",
        "Real-time tracking systems",
        "International shipping",
        "Returns processing",
      ],
      benefits: [
        "Reduced shipping costs",
        "Faster delivery times",
        "Improved inventory turnover",
        "Enhanced customer satisfaction",
      ],
      process: [
        "Inventory planning and forecasting",
        "Order processing and picking",
        "Packaging and labeling",
        "Carrier selection and booking",
        "Shipment tracking and monitoring",
        "Delivery confirmation and reporting",
      ],
    },
    {
      id: "consulting",
      title: "Packaging Consulting",
      icon: Users,
      description: "Expert guidance for packaging optimization",
      features: [
        "Packaging audits and assessments",
        "Cost reduction strategies",
        "Sustainability consulting",
        "Regulatory compliance guidance",
        "Supply chain optimization",
        "Training and education",
      ],
      benefits: [
        "Identify cost savings opportunities",
        "Improve packaging efficiency",
        "Ensure regulatory compliance",
        "Reduce environmental impact",
      ],
      process: [
        "Current state assessment",
        "Gap analysis and recommendations",
        "Implementation planning",
        "Pilot testing and validation",
        "Full-scale rollout",
        "Ongoing monitoring and optimization",
      ],
    },
    {
      id: "sustainability",
      title: "Sustainability Solutions",
      icon: Recycle,
      description: "Eco-friendly packaging and environmental initiatives",
      features: [
        "Recyclable material selection",
        "Biodegradable packaging options",
        "Carbon footprint reduction",
        "Waste minimization strategies",
        "Life cycle assessments",
        "Circular economy solutions",
      ],
      benefits: [
        "Reduce environmental impact",
        "Meet sustainability goals",
        "Improve brand reputation",
        "Comply with regulations",
      ],
      process: [
        "Sustainability assessment",
        "Material and design optimization",
        "Environmental impact analysis",
        "Implementation and testing",
        "Certification and validation",
        "Continuous improvement",
      ],
    },
    {
      id: "testing",
      title: "Testing & Quality Assurance",
      icon: Shield,
      description: "Comprehensive testing and quality control services",
      features: [
        "ISTA package testing",
        "Drop and vibration testing",
        "Compression testing",
        "Environmental testing",
        "Material testing",
        "Performance validation",
      ],
      benefits: [
        "Ensure product protection",
        "Reduce damage claims",
        "Validate packaging performance",
        "Meet industry standards",
      ],
      process: [
        "Test planning and protocol development",
        "Sample preparation and conditioning",
        "Test execution and data collection",
        "Analysis and reporting",
        "Recommendations and improvements",
        "Certification and documentation",
      ],
    },
  ]

  const currentService = services.find((s) => s.id === activeService) || services[0]

  const stats = [
    { number: "500+", label: "Projects Completed", icon: Package },
    { number: "99.8%", label: "Quality Rate", icon: Star },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "50+", label: "Industries Served", icon: Award },
  ]

  return (
    <div className="min-h-screen bg-offwhite text-dark font-sans">
      <Navbar />
      <section className="pt-32 pb-16 px-4 bg-offwhite text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-deepgreen mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-steel mb-8">From custom design to fast delivery, we offer end-to-end packaging solutions for every business.</p>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-offwhite border border-steel rounded-2xl p-8 text-center shadow hover:shadow-lg transition-all flex flex-col items-center">
                <service.icon className="w-12 h-12 text-deepgreen mb-4" />
                <h3 className="text-xl font-bold text-deepgreen mb-2">{service.title}</h3>
                <p className="text-steel mb-4">{service.description}</p>
                <ul className="text-steel text-sm mb-4 list-disc list-inside text-left w-full max-w-xs mx-auto">
                  {service.features.slice(0, 3).map((feature, fidx) => (
                    <li key={fidx}>{feature}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 justify-center">
                  {service.benefits.slice(0, 2).map((benefit, bidx) => (
                    <span key={bidx} className="px-3 py-1 bg-kraft/20 text-steel text-xs rounded-full border border-kraft/40">{benefit}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
