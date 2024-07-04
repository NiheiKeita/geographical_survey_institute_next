"use client"
import React from "react"

type Props = {
  icon: React.ReactNode,
  title: string,
  description: string,
}

export const FeatureCard = React.memo<Props>(function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <div className="rounded-lg bg-gray-100 p-6 text-center shadow-lg transition-transform duration-200 hover:scale-105">
      {icon}
      <h3 className="mb-2 mt-4 text-xl font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  )
})
