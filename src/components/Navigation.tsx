import Image from 'next/image'
import logo from '@/assets/logo.png'
import ThemeToggle from './ThemeToggle'

const Navigation = () => {
    return (
        <nav className="flex justify-between items-center bg-zinc-300 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 px-4 py-2 shadow-xl w-full">
            <a
                href="/"
                className="flex items-center gap-2 uppercase pr-2 py-1 hover:bg-zinc-100 hover:dark:bg-zinc-600 hover:shadow-md rounded-md"
            >
                <Image
                    alt="Back to the Homepage."
                    src={logo}
                    className="object-contain"
                    height={48}
                    priority
                />
                <h1 className="text-lg sm:text-xl pt-2">Clash Stats</h1>
            </a>
            <ThemeToggle />
        </nav>
    )
}

export default Navigation
