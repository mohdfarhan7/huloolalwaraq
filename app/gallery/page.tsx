import React from "react"

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-deepgreen/80 via-kraft/20 to-offwhite py-16 px-4">
      <h1 className="text-4xl font-extrabold text-kraft mb-8 text-center">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {[1,2,3,4,5,6,7,8].map((i) => (
          <div key={i} className="rounded-2xl overflow-hidden shadow-lg bg-white border border-kraft/20">
            <img src={`/public/images/placeholder.jpg`} alt={`Gallery ${i}`} className="w-full h-56 object-cover" />
          </div>
        ))}
      </div>
    </main>
  )
} 