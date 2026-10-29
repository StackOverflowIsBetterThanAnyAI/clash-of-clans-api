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

    const stats = [
        {
            label: 'Player Level',
            value: player.expLevel,
            accent: 'bg-blue-500',
        },
        {
            label: 'Townhall Level',
            value: player.townHallLevel,
            accent: 'bg-red-500',
        },
        {
            label: 'Trophies',
            value: player.trophies,
            accent: 'bg-purple-500',
        },
        {
            label: 'Builder Base Trophies',
            value: player.builderBaseTrophies,
            accent: 'bg-green-500',
        },
    ]

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
                    <div className="flex flex-col gap-4 w-full max-w-2xl">
                        <h2 className="text-center text-xl sm:text-2xl">
                            {player.name}
                        </h2>
                        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                            {stats.map(({ label, value, accent }) => (
                                <div
                                    key={label}
                                    className="flex flex-col justify-between gap-1 bg-white/80 dark:bg-zinc-700 shadow-sm rounded-xl px-3 py-2"
                                >
                                    <dt className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-300">
                                        <span
                                            className={`${accent} size-2 shrink-0 rounded-full`}
                                            aria-hidden="true"
                                        />
                                        {label}
                                    </dt>
                                    <dd className="text-2xl">{value}</dd>
                                </div>
                            ))}
                        </dl>
                        <div className="flex items-center gap-3 self-center bg-white/80 dark:bg-zinc-700 shadow-sm rounded-xl px-4 py-2">
                            <Image
                                src={player.clanBadgeUrl}
                                alt={player.clanName}
                                height={48}
                                width={48}
                                loading="lazy"
                            />
                            <div className="flex flex-col">
                                <p className="text-sm sm:text-base">
                                    {player.clanName}
                                </p>
                                <p className="text-xs text-zinc-500 dark:text-zinc-300">
                                    {player.clanTag}
                                </p>
                            </div>
                        </div>
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
