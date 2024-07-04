
import { Anime } from "@/views/AnimationsListView/types"
import { useCallback, useState } from "react"
const apiURL: string | undefined = process.env.NEXT_PUBLIC_BACKEND_URL ?? ''

export const useGetAnimationList = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [animations, setAnimations] = useState<Anime[]>()
    const getAnimationList = useCallback(async () => {
        setIsLoading(true)
        await fetch(apiURL + '/api/animations', {
            mode: 'cors'
        })
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                console.log(data.animations)
                const getAnimations = data.animations.map((animation: any) => {
                    return {
                        id: animation.id,
                        title: animation.title,
                        title_kana: animation.title_kana,
                        title_en: animation.title_en,
                        media: animation.media,
                        official_site_url: animation.official_site_url,
                        wikipedia_url: animation.wikipedia_url,
                        facebook_image_url: animation.facebook_image_url,
                        season_name: animation.season_name,
                    }
                })
                setAnimations(getAnimations)
                console.log(getAnimations)
            }).catch((e) => {
                console.log("error" + e)
                setIsLoading(false)
            })
    }, [])

    return { isLoading, getAnimationList, animations }
}
