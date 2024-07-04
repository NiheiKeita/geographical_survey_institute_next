"use client"

import React from "react"
import { AnimeCard } from "./components/AnimeCard";
import { useQuestionView } from "./hooks";

export const AnimationsListView = React.memo(function AnimationsListView() {

  const { animations } = useQuestionView()
  return (
    <section className="bg-gray-50 py-20 text-gray-700">
      <div className="container mx-auto px-6 md:px-20">
        <h2 className="mb-12 text-center text-3xl font-bold">アニメ一覧</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {animations?.map(anime => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </div>
    </section>
  );
})
