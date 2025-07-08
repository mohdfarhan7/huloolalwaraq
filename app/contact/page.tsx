"use client"

import React from "react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-deepgreen/90 via-kraft/30 to-offwhite py-16 px-4">
      <h1 className="text-4xl font-extrabold text-kraft mb-8 text-center">Contact Us</h1>
      <div className="max-w-xl mx-auto bg-white/90 border border-kraft rounded-2xl p-8 shadow">
        <form className="space-y-6">
          <div>
            <label className="block mb-1 font-semibold text-steel">Name</label>
            <input className="w-full px-4 py-3 border border-kraft/30 rounded-xl bg-offwhite focus:ring-2 focus:ring-deepgreen focus:outline-none transition" />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-steel">Email</label>
            <input className="w-full px-4 py-3 border border-kraft/30 rounded-xl bg-offwhite focus:ring-2 focus:ring-deepgreen focus:outline-none transition" />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-steel">Message</label>
            <textarea className="w-full px-4 py-3 border border-kraft/30 rounded-xl bg-offwhite focus:ring-2 focus:ring-deepgreen focus:outline-none transition" rows={5} />
          </div>
          <button type="submit" className="w-full bg-deepgreen text-offwhite py-3 rounded-xl font-extrabold text-lg shadow-lg hover:bg-kraft hover:text-deepgreen transition-all">Send Message</button>
        </form>
      </div>
    </main>
  )
}
