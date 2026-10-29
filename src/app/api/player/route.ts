import { NextResponse } from 'next/server'
import { isValidPlayerTag } from '@/utils/isValidPlayerTag'

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')?.toUpperCase() ?? ''

    if (!isValidPlayerTag(id)) {
        return NextResponse.json(
            { error: 'Invalid player ID' },
            { status: 400 }
        )
    }

    const apiKey = process.env.COC_API_KEY
    // Serverless hosts have no static IP, so a proxy with a fixed IP can be used
    const baseUrl =
        process.env.COC_API_BASE_URL || 'https://api.clashofclans.com/v1'
    const response = await fetch(
        `${baseUrl}/players/%23${id}`,
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
