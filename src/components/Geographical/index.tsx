"use client"

import { useGetElevation } from "@/api/useGetElevation"
import React from "react"

export const Geographical = React.memo(function LoadingIcon() {

  const { isLoading, getElevation, response } = useGetElevation()


  return (
    <p className="text-black">
      <button onClick={() => getElevation(135, 35)}>ボタン</button>
      {isLoading ? "ローディング" : "OK"}
      {response?.elevation}
    </p>
  )
})
