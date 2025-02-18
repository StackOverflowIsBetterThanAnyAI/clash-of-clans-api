'use client'

import { useEffect, useState } from 'react'

const ThemeToggle = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

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

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(newTheme)
        const storage = localStorage.getItem('clash-of-clans')
        const parsedTracker = storage ? JSON.parse(storage) : {}
        parsedTracker['theme'] = newTheme
        localStorage.setItem('clash-of-clans', JSON.stringify(parsedTracker))
    }

    return (
        <button
            onClick={toggleTheme}
            className="flex items-center p-2 h-fit text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 shadow-md rounded-md"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode.`}
            data-testid="theme-toggle"
        >
            {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
        </button>
    )
}

export default ThemeToggle
