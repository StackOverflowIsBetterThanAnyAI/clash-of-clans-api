'use client'

import { useToggleTheme } from '@/hooks/useToggleTheme'
import { setToggleTheme } from '@/utils/setToggleTheme'
import { useState } from 'react'

const ThemeToggle = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    useToggleTheme(setTheme)

    return (
        <button
            onClick={() => setToggleTheme([theme, setTheme])}
            className="flex items-center p-2 h-fit text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 shadow-md rounded-md"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode.`}
            data-testid="theme-toggle"
        >
            {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
        </button>
    )
}

export default ThemeToggle
