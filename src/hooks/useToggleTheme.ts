import { Dispatch, SetStateAction, useEffect } from 'react'

export const useToggleTheme = (
    setTheme: Dispatch<SetStateAction<'light' | 'dark'>>
) => {
    useEffect(() => {
        const storedData = localStorage.getItem('clash-of-clans')
        if (storedData) {
            try {
                const parsedData = JSON.parse(storedData)
                if (parsedData.theme) {
                    setTheme(parsedData.theme)
                    document.documentElement.classList.add(parsedData.theme)
                }
            } catch (error) {
                console.error('Error parsing theme data:', error)
            }
        }
    }, [])
}
