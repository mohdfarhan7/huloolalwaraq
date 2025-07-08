"use client"

import Link from "next/link"
import { Package, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Products",
      links: [
        { label: "Corrugated Boxes", href: "/packaging-products" },
        { label: "Bubble Wrap", href: "/packaging-products" },
        { label: "Packing Tape", href: "/packaging-products" },
        { label: "Custom Solutions", href: "/contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Story", href: "/about" },
        { label: "Careers", href: "/contact" },
        { label: "News & Updates", href: "/about" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact Us", href: "/contact" },
        { label: "Help Center", href: "/contact" },
        { label: "Shipping Info", href: "/contact" },
        { label: "Returns", href: "/contact" },
      ],
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-kraft border-t border-steel mt-20">
      <div className="max-w-8xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <img
                src="/placeholder-logo.png"
                alt="HuloolAlWaraq Logo"
                className="h-12 w-12 object-contain rounded shadow bg-offwhite p-1 border border-steel"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-deepgreen tracking-tight">
                  HuloolAlWaraq
                </span>
                <span className="text-xs text-steel font-medium">Premium Packaging Solutions</span>
              </div>
            </Link>
            <p className="text-steel leading-relaxed mb-6">
              Leading the packaging industry with innovative solutions and exceptional service since 2005. Your trusted
              partner for all packaging needs.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-offwhite hover:bg-kraft border border-steel hover:border-deepgreen rounded-lg flex items-center justify-center text-steel hover:text-deepgreen transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold text-deepgreen mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-steel hover:text-deepgreen transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 py-8 border-t border-steel mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-kraft rounded-lg flex items-center justify-center">
              <Phone className="w-6 h-6 text-deepgreen" />
            </div>
            <div>
              <p className="text-deepgreen font-medium">Call Us</p>
              <p className="text-steel">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-kraft rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-deepgreen" />
            </div>
            <div>
              <p className="text-deepgreen font-medium">Email Us</p>
              <p className="text-steel">info@huloolalwaraq.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-kraft rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-deepgreen" />
            </div>
            <div>
              <p className="text-deepgreen font-medium">Visit Us</p>
              <p className="text-steel">123 Packaging Street, NY</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-steel">
          <p className="text-steel text-sm mb-4 md:mb-0">
            © {currentYear} HuloolAlWaraq. All rights reserved. Crafted with ❤️ for better packaging.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/contact" className="text-steel hover:text-deepgreen transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-steel hover:text-deepgreen transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-steel hover:text-deepgreen transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
