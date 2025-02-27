import { Dispatch, SetStateAction, useEffect } from 'react'

export const useSearchPlayer = (
    setPlayerID: Dispatch<SetStateAction<string>>,
    setIsDisabled: Dispatch<SetStateAction<boolean>>
) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedData = sessionStorage.getItem('clash-of-clans')
            if (storedData) {
                try {
                    const parsedData = JSON.parse(storedData)
                    setPlayerID(parsedData.id || '')
                    setIsDisabled(!parsedData.id)
                } catch (error) {
                    console.error(error)
                }
            }
        }
    }, [])
}
