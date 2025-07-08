import React from "react"

export default function PortalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-kraft/80 via-offwhite to-deepgreen/10 py-16 px-4">
      <h1 className="text-4xl font-extrabold text-deepgreen mb-8 text-center">Client Portal</h1>
      <div className="max-w-xl mx-auto bg-white/90 border border-kraft rounded-2xl p-8 shadow text-center">
        <p className="text-steel mb-4">Welcome to the client portal. Please log in to access your dashboard and manage your orders.</p>
        <button className="w-full bg-deepgreen text-offwhite py-3 rounded-xl font-extrabold text-lg shadow-lg hover:bg-kraft hover:text-deepgreen transition-all">Log In</button>
      </div>
    </main>
  )
} 