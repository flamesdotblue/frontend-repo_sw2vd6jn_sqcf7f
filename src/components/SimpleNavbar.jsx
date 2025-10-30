import React from 'react'

export default function SimpleNavbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-pink-500" />
          <span className="font-semibold text-gray-900">TechShowcase</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">Computers</a>
          <a href="#" className="hover:text-gray-900">Laptops</a>
          <a href="#" className="hover:text-gray-900">Security</a>
          <a href="#" className="hover:text-gray-900">Networking</a>
        </nav>
      </div>
    </header>
  )
}
