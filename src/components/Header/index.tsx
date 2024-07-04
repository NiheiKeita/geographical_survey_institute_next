"use client"
import React from "react"

export const Header = React.memo(function Header() {
  return (
    <header className="flex items-center justify-between bg-pink-500 p-4 text-white">
      <div className="text-xl font-bold">アニグラフ</div>
      <nav>
        <ul className="flex space-x-4">
          <li>ホーム</li>
          <li>アニメ一覧</li>
          <li>評価一覧</li>
          <li>コミュニティ</li>
          <li>お問い合わせ</li>
        </ul>
      </nav>
    </header>
  )
})
