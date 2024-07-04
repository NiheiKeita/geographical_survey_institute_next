
import { useCallback, useState } from "react"
const apiURL: string | undefined = process.env.NEXT_PUBLIC_BACKEND_URL ?? ''

type elevationResponse = {
    elevation: string,
    hsrc: string
}

export const useGetElevation = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState<elevationResponse>()

    const getElevation = useCallback(async (lon: number, lat: number) => {
        setIsLoading(true)
        await fetch(apiURL + '/api/elevation', {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
            },
            mode: 'cors',
            body: JSON.stringify({
                "lon": lon,
                "lat": lat
            }),
        })
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                console.log(data.data)
                setResponse({
                    elevation: data.data.elevation,
                    hsrc: data.data.hsrc
                })
            })
            .catch(() => {
                setIsLoading(false)
            })
    }, [])

    return { isLoading, getElevation, response }
}
