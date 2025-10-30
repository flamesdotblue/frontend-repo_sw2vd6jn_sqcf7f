import React from 'react'

const items = [
  {
    title: 'Computers',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Laptops',
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Security Solutions',
    img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Network Products',
    img: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd1?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function ProductCardsMarquee() {
  // Duplicate for seamless loop
  const loopItems = [...items, ...items]
  return (
    <div className="relative w-full overflow-hidden">
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div
        className="flex gap-4 py-4"
        style={{
          width: '200%',
          animation: 'marqueeScroll 18s linear infinite',
        }}
      >
        {loopItems.map((item, idx) => (
          <article
            key={idx}
            className="w-[72%] xs:w-[60%] sm:w-60 flex-shrink-0 rounded-xl overflow-hidden bg-white shadow-md"
          >
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-3">
              <h3 className="text-sm font-semibold text-gray-800">{item.title}</h3>
              <p className="text-xs text-gray-500">Explore now</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
