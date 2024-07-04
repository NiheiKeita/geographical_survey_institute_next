"use client"
import React from "react"

type Props = {
  text: string,
  user: string,
}

export const TestimonialCard = React.memo<Props>(function TestimonialCard({
  text,
  user,
}) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <p className="mb-4 text-lg">{text}</p>
      <p className="text-sm text-gray-500">- {user}</p>
    </div>
  )
})
