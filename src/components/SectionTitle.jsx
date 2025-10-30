import React from 'react'

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="px-4 sm:px-6 md:px-8">
      <h2 className="text-lg sm:text-2xl font-semibold text-gray-900">{title}</h2>
      {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
    </div>
  )
}
