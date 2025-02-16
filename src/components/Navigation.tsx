import Image from 'next/image'
import logo from '@/assets/logo.png'
import ThemeToggle from './ThemeToggle'

const Navigation = () => {
    return (
        <nav className="flex justify-between items-center bg-zinc-300 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 px-4 pt-1 pb-2 shadow-lg w-full">
            <a href="/" className="flex items-center gap-2">
                <Image
                    alt="Back to the Homepage."
                    src={logo}
                    className="object-contain"
                    height={64}
                    priority
                />
                <h1 className="text-lg sm:text-xl pt-2">Clash Stats</h1>
            </a>
            <ThemeToggle />
        </nav>
    )
}

export default Navigation
