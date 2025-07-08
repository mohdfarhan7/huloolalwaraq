"use client"

import Link from "next/link"
import { Package, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation()

  const footerSections = [
    {
      title: t("Products"),
      links: [
        { label: t("Corrugated Boxes"), href: "/packaging-products" },
        { label: t("Bubble Wrap"), href: "/packaging-products" },
        { label: t("Packing Tape"), href: "/packaging-products" },
        { label: t("Custom Solutions"), href: "/contact" },
      ],
    },
    {
      title: t("Company"),
      links: [
        { label: t("About Us"), href: "/about" },
        { label: t("Our Story"), href: "/about" },
        { label: t("Careers"), href: "/contact" },
        { label: t("News & Updates"), href: "/about" },
      ],
    },
    {
      title: t("Support"),
      links: [
        { label: t("Contact Us"), href: "/contact" },
        { label: t("Help Center"), href: "/contact" },
        { label: t("Shipping Info"), href: "/contact" },
        { label: t("Returns"), href: "/contact" },
      ],
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: t("Facebook") },
    { icon: Twitter, href: "#", label: t("Twitter") },
    { icon: Instagram, href: "#", label: t("Instagram") },
    { icon: Linkedin, href: "#", label: t("LinkedIn") },
  ]

  return (
    <footer className="bg-offwhite border-t border-steel/30 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Package className="w-8 h-8 text-deepgreen mr-2" />
              <span className="text-2xl font-black text-deepgreen tracking-tight">HuloolAlWaraq</span>
            </div>
            <p className="text-steel mb-4">{t('Premium Packaging Solutions')}</p>
            <div className="flex flex-col gap-2 text-steel text-sm">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@huloolalwaraq.com</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> +966 53 541 4997</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {t('Riyadh, Saudi Arabia')}</div>
            </div>
          </div>
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-bold text-deepgreen mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, lidx) => (
                  <li key={lidx}>
                    <Link href={link.href} className="text-steel hover:text-deepgreen transition-all duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="text-lg font-bold text-deepgreen mb-3">{t('Follow Us')}</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a key={idx} href={social.href} className="text-steel hover:text-deepgreen transition-all duration-200" title={social.label}>
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center text-steel text-xs mt-10">&copy; {currentYear} HuloolAlWaraq. {t('All rights reserved.')}</div>
      </div>
    </footer>
  )
}
