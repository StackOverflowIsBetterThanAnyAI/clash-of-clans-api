import { Dispatch, SetStateAction, useEffect } from 'react'
import { PlayerProps } from '@/types/PlayerProps'

export const useSetPlayer = ([player, setPlayer]: [
    PlayerProps,
    Dispatch<SetStateAction<PlayerProps>>
]) => {
    useEffect(() => {
        const storage = JSON.parse(sessionStorage.getItem('clash-of-clans')!)
        setPlayer({
            ...player,
            name: storage?.name,
            expLevel: storage?.expLevel,
            townHallLevel: storage?.townHallLevel,
            clanTag: storage?.clanTag,
            clanName: storage?.clanName,
            clanBadgeUrl: storage?.clanBadgeUrl,
            trophies: storage?.trophies,
            builderBaseTrophies: storage?.builderBaseTrophies,
        })
    }, [])
}
