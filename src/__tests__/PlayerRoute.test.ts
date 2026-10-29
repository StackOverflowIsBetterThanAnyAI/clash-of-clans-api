/**
 * @jest-environment node
 */
import { beforeEach, describe, expect, it, jest } from '@jest/globals'
import { GET } from '../app/api/player/route'

describe('GET /api/player', () => {
    const fetchMock = jest.fn<typeof fetch>()

    beforeEach(() => {
        global.fetch = fetchMock
        delete process.env.COC_API_BASE_URL
    })

    const request = (id: string) =>
        new Request(
            `http://localhost/api/player?id=${encodeURIComponent(id)}`
        )

    it.each([
        '',
        'RG',
        'ABCDEFGH',
        '12345678',
        'RGC9YYGQ/../../clans',
        'RGC9YYGQ?limit=1',
        '0289PYLQGRJCU',
    ])('rejects invalid player id %p without calling the api', async (id) => {
        const response = await GET(request(id))

        expect(response.status).toBe(400)
        expect(fetchMock).not.toHaveBeenCalled()
    })

    it('rejects a missing id', async () => {
        const response = await GET(new Request('http://localhost/api/player'))

        expect(response.status).toBe(400)
        expect(fetchMock).not.toHaveBeenCalled()
    })

    it('forwards valid (lowercase) player ids to the api', async () => {
        fetchMock.mockResolvedValue(
            new Response(JSON.stringify({ name: 'Player' }), { status: 200 })
        )

        const response = await GET(request('rgc9yygq'))

        expect(response.status).toBe(200)
        expect(await response.json()).toEqual({ name: 'Player' })
        expect(fetchMock).toHaveBeenCalledWith(
            'https://api.clashofclans.com/v1/players/%23RGC9YYGQ',
            expect.any(Object)
        )
    })

    it('uses COC_API_BASE_URL when set', async () => {
        process.env.COC_API_BASE_URL = 'https://cocproxy.royaleapi.dev/v1'
        fetchMock.mockResolvedValue(
            new Response(JSON.stringify({ name: 'Player' }), { status: 200 })
        )

        await GET(request('RGC9YYGQ'))

        expect(fetchMock).toHaveBeenCalledWith(
            'https://cocproxy.royaleapi.dev/v1/players/%23RGC9YYGQ',
            expect.any(Object)
        )
    })
})
