'use client'

import Main from '@/components/Main'
import Navigation from '@/components/Navigation'
import Search from '@/components/Search'
import { PlayerProps } from '@/types/PlayerProps'
import {
    createContext,
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from 'react'

export const ContextPlayer = createContext<
    [PlayerProps, Dispatch<SetStateAction<PlayerProps>>] | undefined
>(undefined)

const Home = () => {
    const [player, setPlayer] = useState<PlayerProps>({
        id: '',
        name: '',
        expLevel: '',
        townHallLevel: '',
        clanTag: '',
        clanName: '',
        clanBadgeUrl: '',
        trophies: '',
        builderBaseTrophies: '',
    })

    const focusTrap = (e: KeyboardEvent) => {
        const focusable = Array.from(
            document.querySelectorAll('button, input, a')
        ) as HTMLElement[]
        const firstElement = focusable[0]
        const lastElement = focusable.at(-1)

        if (e.key !== 'Tab') return

        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
                e.preventDefault()
                lastElement?.focus()
            }
        } else {
            if (document.activeElement === lastElement) {
                e.preventDefault()
                firstElement?.focus()
            }
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', (e) => focusTrap(e))

        return () => {
            window.removeEventListener('keydown', (e) => focusTrap(e))
        }
    }, [])

    return (
        <div className="flex flex-col w-full max-w-screen-2xl">
            <ContextPlayer.Provider value={[player, setPlayer]}>
                <Navigation />
                <Search />
                <Main />
            </ContextPlayer.Provider>
        </div>
    )
}

export default Home
