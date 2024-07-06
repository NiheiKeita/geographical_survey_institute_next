
import { User } from "@/types/User"
import { useCallback, useState } from "react"
const apiURL: string | undefined = process.env.NEXT_PUBLIC_BACKEND_URL ?? ''


export const useGetUser = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState<User>()

    const getUser = useCallback(async (userId: number) => {
        setIsLoading(true)
        await fetch(apiURL + '/api/user/' + userId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            mode: 'cors',
        })
            .then(res => res.json())
            .then(res => res.data)
            .then(data => {
                setIsLoading(false)
                console.log(data.data)
                setResponse({
                    name: data.name,
                    nextCheckpointElevation: data.nextCheckpointElevation,
                    totalPoints: data.totalPoints
                })
            })
            .catch(() => {
                setIsLoading(false)
            })
    }, [])

    return { isLoading, getUser, response }
}
