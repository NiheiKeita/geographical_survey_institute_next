"use client"
import React, { useState } from "react"

export const NextCheckPoint = React.memo(function NextCheckPoint() {
  const [nextAltitude, setNextAltitude] = useState(500)

  return (
    <div className="rounded bg-white p-8 text-center shadow-md">
      <h1 className="mb-4 text-2xl font-bold">次のチェックポイントの標高</h1>
      <p className="text-xl">{nextAltitude}</p>
    </div>
  )
})
