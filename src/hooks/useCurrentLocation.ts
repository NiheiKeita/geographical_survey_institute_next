

import { useCallback, useState } from "react"

type Location = {
    lon: number,
    lat: number
}
//位置情報を取得する
export const useCurrentLocation = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string>()
    const [location, setLocation] = useState<Location>()

    const getCurrentLocation = useCallback(async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords
                    setLocation({ lat: latitude, lon: longitude })
                },
                error => {
                    setErrorMessage(error.message)
                }
            )
        } else {
            setErrorMessage('Geolocation is not supported by this browser.')
        }
        setIsLoading(true)
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords
            console.log(latitude)
            console.log(longitude)
            setLocation({ lon: longitude, lat: latitude })
        })
        setIsLoading(false)
    }, [])

    return { isLoading, errorMessage, getCurrentLocation, location }
}