import { useGetElevation } from "@/api/useGetElevation"
import { useGetUser } from "@/api/useGetUser"
import { useCurrentLocation } from "@/hooks/useCurrentLocation"
import { User } from "@/types/User"
import { useCallback, useEffect, useState } from "react"
import { useEffectOnce } from "react-use"

export const useHomeView = () => {
    const [user, setUser] = useState<User>()
    const { isLoading, getElevation, response } = useGetElevation()
    const { getCurrentLocation, errorMessage, location } = useCurrentLocation()
    const { getUser, response: userResponse } = useGetUser()
    useEffect(() => {
        setUser(userResponse)
    }, [userResponse])
    useEffect(() => {
        if (!location?.lon || !location?.lat) return
        getElevation(location.lon, location.lat)
    }, [getElevation, location?.lat, location?.lon])
    const handleMeasureElevation = useCallback(() => {
        getCurrentLocation()
    }, [getCurrentLocation])
    useEffectOnce(() => {
        getUser(1)
        getCurrentLocation()
    })

    return {
        user,
        isLoading,
        handleMeasureElevation,
        response,
        errorMessage
    }
}