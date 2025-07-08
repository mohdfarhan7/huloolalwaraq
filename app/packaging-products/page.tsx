"use client"

import React from "react"

export default function PackagingProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-kraft/80 via-offwhite to-deepgreen/10 py-16 px-4">
      <h1 className="text-4xl font-extrabold text-deepgreen mb-8 text-center">Packaging Products</h1>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white border border-kraft rounded-2xl p-8 text-center shadow">
          <h2 className="text-2xl font-bold text-deepgreen mb-2">Corrugated Boxes</h2>
          <p className="text-steel">Durable, customizable, and perfect for shipping.</p>
        </div>
        <div className="bg-kraft/90 border border-kraft rounded-2xl p-8 text-center shadow">
          <h2 className="text-2xl font-bold text-deepgreen mb-2">Bubble Wrap</h2>
          <p className="text-steel">Protect your products with premium cushioning.</p>
        </div>
        <div className="bg-deepgreen/90 border border-deepgreen rounded-2xl p-8 text-center shadow">
          <h2 className="text-2xl font-bold text-kraft mb-2">Custom Labels</h2>
          <p className="text-offwhite">Brand your packaging with high-quality labels.</p>
        </div>
      </div>
    </main>
  )
}
