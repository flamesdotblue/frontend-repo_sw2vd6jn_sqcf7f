import React from 'react'
import SimpleNavbar from './components/SimpleNavbar'
import HeroCarousel from './components/HeroCarousel'
import SectionTitle from './components/SectionTitle'
import ProductCardsMarquee from './components/ProductCardsMarquee'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/40 to-white text-gray-900">
      <SimpleNavbar />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-6 sm:py-10 space-y-8 sm:space-y-12">
        <HeroCarousel />

        <div className="space-y-3">
          <SectionTitle
            title="Trending Categories"
            subtitle="Swipe or let it scroll — optimized for mobile"
          />
          <ProductCardsMarquee />
        </div>
      </main>

      <footer className="py-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} TechShowcase. All rights reserved.
      </footer>
    </div>
  )
}

export default App
