

import { useCallback, useState } from "react"

type Location = {
    lon: number,
    lat: number
}
//位置情報を取得する
export const useCurrentLocation = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [location, setLocation] = useState<Location>()

    const getCurrentLocation = useCallback(async (a: number) => {
        setIsLoading(true)
        sleep(1);
        setIsLoading(false)
        setLocation({
            lon: 135 + a,
            lat: 35
        })
    }, [])

    return { isLoading, getCurrentLocation, location }
}
const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time)); 