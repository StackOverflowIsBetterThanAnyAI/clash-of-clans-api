'use client'

import { useState } from 'react'
import { useToggleTheme } from '@/hooks/useToggleTheme'
import { setToggleTheme } from '@/utils/setToggleTheme'

const ThemeToggle = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    useToggleTheme(setTheme)

    return (
        <button
            onClick={() => setToggleTheme([theme, setTheme])}
            className="flex items-center gap-1 p-2 h-fit text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 shadow-md rounded-md"
            data-testid="theme-toggle"
        >
            <span className="sr-only">Theme: </span>
            <span aria-hidden="true">{theme === 'dark' ? '🌙' : '☀️'}</span>
            {theme === 'dark' ? 'Dark' : 'Light'}
        </button>
    )
}

export default ThemeToggle
