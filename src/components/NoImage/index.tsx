"use client"

import React from "react"
import Image from 'next/image'


export const NoImage = React.memo(function NoImage() {

  return (
    <Image src="/third_crown.svg"
      alt="noimage"
      width={0}
      height={0}
      className="block w-full rounded-full shadow-md"
    />
  )
})
