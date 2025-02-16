import Navigation from '@/components/Navigation'

const apiKey = process.env.NEXT_PUBLIC_API_KEY

const test = async () => {
    const response = await fetch(
        'https://api.clashofclans.com/v1/players/%23RGC9YYGQ',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
            },
        }
    )

    const result = await response.json()
}

export default function Home() {
    test()
    return (
        <div className="w-full max-w-screen-2xl uppercase">
            <Navigation />
        </div>
    )
}
