"use client"
import React from "react"
import { LoadingIcon } from "../LoadingIcon"

type Props = {
  children: React.ReactNode,
  isLoading: boolean,
}

export const TextOrLoading = React.memo<Props>(function TextOrLoading({
  children,
  isLoading,
}) {

  return (
    <>
      {isLoading && <div className="mt-4 flex justify-center align-middle"><LoadingIcon /></div>}
      {!isLoading && <>{children}</>}
    </>
  )
})
