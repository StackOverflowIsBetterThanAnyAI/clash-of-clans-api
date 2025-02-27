'use client'

import { useContext } from 'react'
import { ContextPlayer } from '@/context/PlayerContext'
import { useSetPlayer } from '@/hooks/useSetPlayer'
import Image from 'next/image'
import barbarian from '@/assets/barbarian.png'
import king from '@/assets/king.png'

const Main = () => {
    const contextPlayer = useContext(ContextPlayer)
    if (!contextPlayer) {
        throw new Error(
            'ContextPlayer must be used within a ContextPlayer.Provider'
        )
    }
    const [player, setPlayer] = contextPlayer

    useSetPlayer([player, setPlayer])

    return (
        <>
            {player.name && (
                <main
                    className="flex justify-center items-center flex-wrap gap-3 bg-zinc-300 dark:bg-zinc-600 shadow-lg mt-2 px-2 py-4 w-full"
                    data-testid="main-player"
                >
                    <Image
                        src={king}
                        alt=""
                        height={256}
                        className="drop-shadow-lg hidden lg:block"
                        loading="lazy"
                    />
                    <div className="flex flex-col">
                        <p className="flex justify-center text-xl sm:text-2xl pb-2">
                            {player.name}
                        </p>
                        <div className="flex flex-wrap text-sm sm:text-base items-center justify-center">
                            <div className="flex items-center">
                                Player Level{' '}
                                <p className="bg-blue-600 text-zinc-50 outline outline-2 outline-zinc-400 dark:outline-zinc-100 m-2 p-1 rounded-md">
                                    {player.expLevel}
                                </p>
                            </div>{' '}
                            <div className="flex items-center">
                                Townhall Level{' '}
                                <p className="bg-red-600 text-zinc-50 outline outline-2 outline-zinc-400 dark:outline-zinc-100 m-2 p-1 rounded-md">
                                    {player.townHallLevel}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap text-sm sm:text-base items-center justify-center">
                            <div className="flex items-center">
                                Trophies{' '}
                                <p className="bg-purple-700 text-zinc-50 outline outline-2 outline-zinc-400 dark:outline-zinc-100 m-2 p-1 rounded-md">
                                    {player.trophies}
                                </p>
                            </div>{' '}
                            <div className="flex items-center justify-center flex-wrap">
                                Builder Base Trophies{' '}
                                <p className="bg-green-700 text-zinc-50 outline outline-2 outline-zinc-400 dark:outline-zinc-100 m-2 p-1 rounded-md">
                                    {player.builderBaseTrophies}
                                </p>
                            </div>
                        </div>
                        <p className="flex flex-wrap gap-2 text-sm sm:text-base items-center justify-center">
                            {player.clanName}
                            <Image
                                src={player.clanBadgeUrl}
                                alt={player.clanName}
                                height={48}
                                width={48}
                                loading="lazy"
                            />
                            {player.clanTag}
                        </p>
                    </div>
                    <Image
                        src={barbarian}
                        alt=""
                        height={256}
                        className="scale-x-[-1] drop-shadow-lg h-48 sm:h-64 object-contain"
                        loading="lazy"
                    />
                </main>
            )}
        </>
    )
}

export default Main
