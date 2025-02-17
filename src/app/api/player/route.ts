import { NextResponse } from 'next/server'

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    const apiKey = process.env.NEXT_PUBLIC_API_KEY
    const response = await fetch(
        `https://api.clashofclans.com/v1/players/%23${id}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
            },
        }
    )

    if (!response.ok) {
        return NextResponse.json(
            { error: `Failed to fetch player with ID ${id}` },
            { status: response.status }
        )
    }

    const data = await response.json()
    return NextResponse.json(data, { status: 200 })
}
