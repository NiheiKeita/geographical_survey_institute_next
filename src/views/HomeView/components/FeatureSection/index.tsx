"use client"
import React from "react"
import { FeatureCard } from "./components/FeatureCard"
import { ChartBarIcon, ChartPieIcon, StarIcon } from "@heroicons/react/16/solid"

export const FeatureSection = React.memo(function FeatureSection() {
  return (
    <section className="bg-white py-20 text-gray-700">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="mb-12 text-center text-3xl font-bold">機能紹介</h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<StarIcon className="mx-auto size-12 text-pink-500" />}
            title="評価をつける"
            description="見たアニメに評価をつけて、自分だけの評価リストを作成しましょう。"
          />
          <FeatureCard
            icon={<ChartBarIcon className="mx-auto size-12 text-pink-500" />}
            title="評価変遷をグラフ化"
            description="クールごとにアニメの話数が進むごとに変わる評価をグラフで確認できます。"
          />
          <FeatureCard
            icon={<ChartBarIcon className="mx-auto size-12 text-pink-500" />}
            title="各話の感想を書く"
            description="各話の感想を自由に書き込んで、他のユーザーと共有しましょう。"
          />
          <FeatureCard
            icon={<ChartPieIcon className="mx-auto size-12 text-pink-500" />}
            title="六角形の評価グラフ"
            description="各アニメの評価を六角形のレーダーチャートで視覚的に表現できます。"
          />
        </div>
      </div>
    </section>
  )
})
