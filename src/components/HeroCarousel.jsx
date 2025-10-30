import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    key: 'computers',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    label: 'Computers',
  },
  {
    key: 'laptops',
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop',
    label: 'Laptops',
  },
  {
    key: 'security',
    img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop',
    label: 'Security Solutions',
  },
  {
    key: 'network',
    img: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1600&auto=format&fit=crop',
    label: 'Network Products',
  },
]

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 3500)
    return () => clearInterval(timerRef.current)
  }, [])

  const next = () => setIndex((prev) => (prev + 1) % slides.length)
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl">
      {/* Animated, modern background glow */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          className="absolute -inset-10 blur-3xl"
          style={{
            background:
              'radial-gradient(60% 60% at 20% 30%, rgba(59,130,246,0.35), transparent), radial-gradient(50% 50% at 80% 60%, rgba(236,72,153,0.35), transparent)',
          }}
          animate={{ x: [0, 25, -20, 0], y: [0, -15, 20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Slides */}
      <div className="relative h-[56vh] sm:h-[70vh]">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={slides[index].key}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.div
              className="absolute inset-0"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -60) next()
                else if (info.offset.x > 60) prev()
              }}
            >
              <img
                src={slides[index].img}
                alt={slides[index].label}
                className="h-full w-full object-cover select-none"
                draggable={false}
              />
              {/* Subtle gradient at bottom for readability on larger screens */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent sm:from-black/30" />

              {/* Title only on larger screens; on mobile only image as requested */}
              <div className="hidden sm:flex absolute bottom-6 left-6 right-6 items-end justify-between">
                <div>
                  <h2 className="text-white text-3xl sm:text-4xl font-semibold drop-shadow-md">
                    {slides[index].label}
                  </h2>
                  <p className="text-white/80 text-sm mt-1">Swipe or wait to explore</p>
                </div>
                <div className="flex gap-2">
                  {slides.map((s, i) => (
                    <span
                      key={s.key}
                      className={`h-2 w-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
