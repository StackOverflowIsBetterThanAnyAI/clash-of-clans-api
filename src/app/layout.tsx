import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Clash Stats',
    description: 'Clash of Clans API',
}

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <html lang="en">
            <body className="flex justify-center bg-gradient-to-b from-zinc-200 to-zinc-300 dark:from-zinc-600 dark:to-zinc-500 min-h-svh antialiased">
                {children}
            </body>
        </html>
    )
}

export default RootLayout
