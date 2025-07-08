"use client"

import React from "react"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-deepgreen/90 via-kraft/30 to-offwhite py-16 px-4">
      <h1 className="text-4xl font-extrabold text-kraft mb-8 text-center">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-kraft/90 border border-kraft rounded-2xl p-8 text-center shadow">
          <h2 className="text-2xl font-bold text-deepgreen mb-2">Packaging</h2>
          <p className="text-steel">Custom boxes, eco-friendly materials, and more.</p>
        </div>
        <div className="bg-deepgreen/90 border border-deepgreen rounded-2xl p-8 text-center shadow">
          <h2 className="text-2xl font-bold text-kraft mb-2">Logistics</h2>
          <p className="text-offwhite">Fast, reliable delivery and supply chain solutions.</p>
        </div>
        <div className="bg-offwhite border border-kraft rounded-2xl p-8 text-center shadow">
          <h2 className="text-2xl font-bold text-deepgreen mb-2">Consulting</h2>
          <p className="text-steel">Expert advice for optimizing your packaging process.</p>
        </div>
      </div>
    </main>
  )
}
