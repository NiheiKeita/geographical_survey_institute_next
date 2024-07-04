"use client"
import React from "react"
import { StepCard } from "./components/StepCard"

export const HowItWorks = React.memo(function HowItWorks() {
  return (
    <section className="bg-white py-20 text-gray-700">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="mb-12 text-center text-3xl font-bold">使い方</h2>
        <div className="space-y-10">
          <StepCard step="1" title="アカウント作成" description="まずはアカウントを作成して、プロフィールを設定しましょう。" />
          <StepCard step="2" title="アニメを評価" description="見たアニメに評価をつけ、感想を書き込みましょう。" />
          <StepCard step="3" title="グラフで可視化" description="評価変遷や六角形グラフを楽しみましょう。" />
        </div>
      </div>
    </section>
  )
})
