"use client"

import { useGetElevation } from "@/api/useGetElevation";
import { LoadingIcon } from "@/components/LoadingIcon";
import { useCurrentLocation } from "@/hooks/useCurrentLocation";
import React, { useEffect } from "react"

export const HomeView = React.memo(function HomeView() {
  const user = {
    name: "山田太郎",
    nextCheckpointElevation: "2000m",
    currentElevation: "1500m",
    totalPoints: 350
  };
  const { isLoading, getElevation, response } = useGetElevation()
  const { getCurrentLocation, location } = useCurrentLocation()
  useEffect(() => {
    if (!location?.lon || !location?.lat) return
    getElevation(location.lon, location.lat)
  }, [getElevation, location?.lat, location?.lon])
  const handleMeasureElevation = () => {
    getCurrentLocation(1)
  }
  useEffect(() => {
    getCurrentLocation(0)
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200 py-12">
      <div className="w-full max-w-4xl rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-8 flex items-center space-x-6">
          <img
            className="size-24 rounded-full shadow-md"
            src="https://via.placeholder.com/150"
            alt="User Avatar" />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-600">プロフィールページ</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="rounded-lg bg-blue-100 p-6 text-center shadow-inner">
            <h2 className="text-xl font-bold text-blue-800">次のチェックポイントの標高</h2>
            <p className="mt-2 text-3xl text-blue-900">{user.nextCheckpointElevation}</p>
          </div>
          <div className="rounded-lg bg-green-100 p-6 text-center shadow-inner">
            <h2 className="text-xl font-bold text-green-800">現在の標高</h2>
            {isLoading && <div className="mt-4 flex justify-center align-middle"><LoadingIcon /></div>}
            {!isLoading && <p className="mt-2 text-3xl text-green-900">{response?.elevation}</p>}
          </div>
        </div>
        <div className="mt-8">
          <p className="mb-2 block text-sm font-bold text-gray-700">現在の合計ポイント:</p>
          <div className="rounded-lg bg-gray-100 p-4 text-gray-900 shadow-inner">{user.totalPoints}</div>
        </div>
        <div className="mt-8 flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleMeasureElevation}
          >
            標高を測る
          </button>
        </div>
      </div>
    </div>
  );
})
