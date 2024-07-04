"use client"
import React from "react"
import { TestimonialCard } from "./components/TestimonialCard"

export const Testimonials = React.memo(function Testimonials() {
  return (
    <section className="bg-pink-100 py-20 text-gray-700">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="mb-12 text-center text-3xl font-bold">ユーザーの声</h2>
        <div className="space-y-10">
          <TestimonialCard
            text="アニグラフのおかげで、自分のアニメの好みがはっきり分かるようになりました！"
            user="ユーザー名1"
          />
          <TestimonialCard
            text="評価変遷グラフがとても便利です。毎週の楽しみが増えました！"
            user="ユーザー名2"
          />
        </div>
      </div>
    </section>
  )
})
