"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Package, Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    {
      href: "/packaging-products",
      label: "Products",
      hasDropdown: true,
      dropdownItems: [
        { href: "/packaging-products?category=corrugated", label: "Corrugated Boxes" },
        { href: "/packaging-products?category=protective", label: "Protective Packaging" },
        { href: "/packaging-products?category=industrial", label: "Industrial Packaging" },
        { href: "/packaging-products?category=food", label: "Food Packaging" },
        { href: "/packaging-products?category=retail", label: "Retail Packaging" },
        { href: "/packaging-products?category=specialty", label: "Specialty Products" },
      ],
    },
    { href: "/services", label: "Services" },
    { href: "/box-details", label: "Box Details" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="bg-offwhite border-b border-steel/30 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <img
              src="/placeholder-logo.png"
              alt="HuloolAlWaraq Logo"
              className="h-12 w-12 object-contain rounded bg-white p-1 border border-steel"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-black text-deepgreen tracking-tight">HuloolAlWaraq</span>
              <span className="text-xs text-steel font-medium">Premium Packaging Solutions</span>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 text-steel hover:text-deepgreen transition-all duration-200 font-medium flex items-center gap-1 ${
                    pathname === item.href || (item.hasDropdown && pathname.startsWith("/packaging-products"))
                      ? "text-deepgreen border-b-2 border-deepgreen"
                      : ""
                  }`}
                  onMouseEnter={() => item.hasDropdown && setIsProductsOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setIsProductsOpen(false)}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div
                    className={`absolute top-full left-0 mt-2 w-64 bg-offwhite border border-steel rounded-2xl shadow-lg transition-all duration-200 ${
                      isProductsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
                    }`}
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <div className="p-2">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-steel hover:text-deepgreen hover:bg-kraft/20 rounded-xl transition-all duration-200"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-steel hover:text-deepgreen transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-steel/20 animate-fade-slide-down bg-offwhite">
            <div className="space-y-2">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 text-steel hover:text-deepgreen hover:bg-kraft/20 rounded-lg transition-all duration-200 ${
                      pathname === item.href ? "text-deepgreen bg-kraft/10" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-4 py-2 text-steel hover:text-deepgreen hover:bg-kraft/20 rounded-lg transition-all duration-200 text-sm"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
