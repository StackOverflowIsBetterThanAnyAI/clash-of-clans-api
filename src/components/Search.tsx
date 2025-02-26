'use client'

import { ContextPlayer } from '@/context/PlayerContext'
import { setItemInStorage } from '@/app/utils/setItemInStorage'
import { useContext, useEffect, useState } from 'react'

const Search = () => {
    const contextPlayer = useContext(ContextPlayer)
    if (!contextPlayer) {
        throw new Error(
            'ContextPlayer must be used within a ContextPlayer.Provider'
        )
    }
    const [player, setPlayer] = contextPlayer
    const [error, setError] = useState<string>('')
    const [playerID, setPlayerID] = useState<string>('')
    const [isDisabled, setIsDisabled] = useState<boolean>(false)

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

    const fetchPlayer = async (id: string) => {
        try {
            setIsDisabled(true)
            setError('')
            setPlayer({
                ...player,
                name: '',
                expLevel: '',
                townHallLevel: '',
                clanTag: '',
                clanName: '',
                clanBadgeUrl: '',
                trophies: '',
                builderBaseTrophies: '',
            })

            const response = await fetch(`/api/player?id=${id.substring(1)}`)
            if (response.status !== 200) {
                setError(`Unable to fetch the player with ID ${playerID}!`)
            } else {
                const data = await response.json()

                setItemInStorage({
                    id: playerID,
                    name: data.name,
                    expLevel: data.expLevel,
                    townHallLevel: data.townHallLevel,
                    clanTag: data.clan.tag,
                    clanName: data.clan.name,
                    clanBadgeUrl: data.clan.badgeUrls.medium,
                    trophies: data.trophies,
                    builderBaseTrophies: data.builderBaseTrophies,
                })
                setPlayer({
                    ...player,
                    name: data.name,
                    expLevel: data.expLevel,
                    townHallLevel: data.townHallLevel,
                    clanTag: data.clan.tag,
                    clanName: data.clan.name,
                    clanBadgeUrl: data.clan.badgeUrls.medium,
                    trophies: data.trophies,
                    builderBaseTrophies: data.builderBaseTrophies,
                })
            }
        } catch (error) {
            console.error(error)
            setError(`Unable to fetch the player with ID ${playerID}!`)
        } finally {
            setIsDisabled(false)
        }
    }

    const handleSearch = (id: string) => {
        fetchPlayer(id)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const pass = /^#[a-z0-9]{8}$/i.test(e.target.value)
        setIsDisabled(!pass)
        setPlayerID(e.target.value.toUpperCase())
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !isDisabled) handleSearch(playerID)
    }

    return (
        <>
            <label
                className="text-sm sm:text-base text-center pt-2"
                htmlFor="search"
            >
                Enter Player ID
            </label>
            <input
                id="search"
                type="search"
                onChange={(e) => handleChange(e)}
                onKeyDown={(e) => handleKeyDown(e)}
                className="text-sm sm:text-base m-auto max-w-96 outline outline-2 outline-zinc-700 dark:outline-zinc-900 focus-visible:outline-4 focus-visible:shadow-lg px-2 py-1 my-1 rounded-md w-full"
                placeholder="#RGC9YYGQ"
                autoCapitalize="true"
                autoComplete="on"
                maxLength={9}
                value={playerID}
                data-testid="search-input"
                autoFocus
            />
            <button
                onClick={() => handleSearch(playerID)}
                className="mx-auto text-xs sm:text-sm bg-zinc-100 shadow-md dark:bg-zinc-800 rounded-md px-2 py-1 mt-1 w-fit"
                disabled={isDisabled}
                data-testid="search-button"
            >
                Search
            </button>
            {error && (
                <div
                    className="flex text-red-700 underline underline-offset-2 decoration-red-700 dark:text-zinc-100 dark:decoration-zinc-100 justify-center pt-4"
                    data-testid="search-error"
                >
                    {error}
                </div>
            )}
        </>
    )
}

export default Search
