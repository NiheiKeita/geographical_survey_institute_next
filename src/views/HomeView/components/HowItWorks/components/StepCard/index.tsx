"use client"
import React from "react"

type Props = {
  step: string,
  title: string,
  description: string,
}

export const StepCard = React.memo<Props>(function StepCard({
  step,
  title,
  description,
}) {
  return (
    <div className="flex items-center space-x-6">
      <div className="flex size-12 items-center justify-center rounded-full bg-pink-500 text-xl font-bold text-white">{step}</div>
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
})
