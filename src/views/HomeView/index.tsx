"use client"

import { NoImage } from "@/components/NoImage"
import React from "react"
import { useHomeView } from "./hooks"
import { TextOrLoading } from "@/components/TextOrLoading"

export const HomeView = React.memo(function HomeView() {
  const {
    user,
    isLoading,
    handleMeasureElevation,
    response,
    errorMessage
  } = useHomeView()

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200 py-12">
      <div className="w-full max-w-4xl rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-8 flex items-center space-x-6">
          <div className=" size-24 rounded-full shadow-md">
            <NoImage />
          </div>
          <div>
            <TextOrLoading isLoading={!user?.name} >
              <h1 className="text-3xl font-bold text-gray-800">{user?.name}</h1>
            </TextOrLoading>
            <p className="text-gray-600">プロフィールページ</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="rounded-lg bg-blue-100 p-6 text-center shadow-inner">
            <h2 className="text-xl font-bold text-blue-800">次のチェックポイントの標高</h2>
            <TextOrLoading isLoading={!user?.nextCheckpointElevation} >
              <p className="mt-2 text-3xl text-blue-900">{user?.nextCheckpointElevation}m</p>
            </TextOrLoading>
          </div>
          <div className="rounded-lg bg-green-100 p-6 text-center shadow-inner">
            <h2 className="text-xl font-bold text-green-800">現在の標高</h2>
            <TextOrLoading isLoading={isLoading} >
              <p className="mt-2 text-3xl text-green-900">{response?.elevation}m</p>
            </TextOrLoading>
          </div>
        </div>
        <div className="mt-8">
          <p className="mb-2 block text-sm font-bold text-gray-700">現在の合計ポイント:</p>
          <TextOrLoading isLoading={!user?.totalPoints} >
            <div className="rounded-lg bg-gray-50 p-4 text-gray-900 shadow-inner">
              {user?.totalPoints}
            </div>
          </TextOrLoading>
        </div>
        <div className="mt-8 flex justify-center">
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none"
            onClick={handleMeasureElevation}
          >
            標高を測る
          </button>
        </div>
        <div>
          {errorMessage}
        </div>
      </div>
    </div>
  )
})
