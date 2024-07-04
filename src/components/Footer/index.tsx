"use client"
import React from "react"

export const Footer = React.memo(function Footer() {
  return (
    <footer className="bg-gray-800 py-6 text-white">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">アニグラフ</h3>
            <p>&copy; 2024 アニグラフ. All rights reserved.</p>
          </div>
          <div className="mb-4 flex space-x-4 md:mb-0">
            <a href="#" className="hover:text-pink-500">Twitter</a>
            <a href="#" className="hover:text-pink-500">Facebook</a>
            <a href="#" className="hover:text-pink-500">Instagram</a>
          </div>
          <div>
            <a href="#" className="hover:text-pink-500">お問い合わせ</a>
          </div>
        </div>
      </div>
    </footer>
  )
})
