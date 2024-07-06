import { useGetElevation } from "@/api/useGetElevation"
import { useCurrentLocation } from "@/hooks/useCurrentLocation"
import { useEffect } from "react"

export const useHomeView = () => {
    const user = {
        name: "山田太郎",
        nextCheckpointElevation: "2000",
        totalPoints: 350
    }
    const { isLoading, getElevation, response } = useGetElevation()
    const { getCurrentLocation, errorMessage, location } = useCurrentLocation()
    useEffect(() => {
        if (!location?.lon || !location?.lat) return
        getElevation(location.lon, location.lat)
    }, [getElevation, location?.lat, location?.lon])
    const handleMeasureElevation = () => {
        console.log("dd")
        getCurrentLocation()
    }
    useEffect(() => {
        getCurrentLocation()
    }, [])

    return {
        user,
        isLoading,
        handleMeasureElevation,
        response,
        errorMessage
    }
}