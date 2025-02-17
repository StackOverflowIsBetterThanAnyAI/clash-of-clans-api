'use client'

import Main from '@/components/Main'
import Navigation from '@/components/Navigation'
import Search from '@/components/Search'
import { PlayerProps } from '@/types/PlayerProps'
import { createContext, Dispatch, SetStateAction, useState } from 'react'

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
