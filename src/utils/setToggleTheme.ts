import { Dispatch, SetStateAction } from 'react'

export const setToggleTheme = ([theme, setTheme]: [
    'dark' | 'light',
    Dispatch<SetStateAction<'dark' | 'light'>>
]) => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(newTheme)
    const storage = localStorage.getItem('clash-of-clans')
    const parsedTracker = storage ? JSON.parse(storage) : {}
    parsedTracker['theme'] = newTheme
    localStorage.setItem('clash-of-clans', JSON.stringify(parsedTracker))
}
