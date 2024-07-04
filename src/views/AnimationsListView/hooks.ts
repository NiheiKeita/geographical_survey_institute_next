
import { useGetAnimationList } from "@/api/useGetAnimationList"
import { useEffect } from "react"

export const useQuestionView = () => {
    const { isLoading, getAnimationList, animations } = useGetAnimationList()
    useEffect(() => {
        getAnimationList()
    }, [getAnimationList])

    return {
        isLoading,
        animations,
    }
}