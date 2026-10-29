# Clash Stats

Look up any Clash of Clans player by their player tag and see their level, Town Hall, trophies and clan at a glance.

**Live:** [clash-of-clans-api-alpha.vercel.app](https://clash-of-clans-api-alpha.vercel.app)

![Clash Stats Preview](preview.png)

## Features

-   Player search by tag, e.g. `#RGC9YYGQ`
-   Player level, Town Hall level, trophies, Builder Base trophies and clan
-   Light and dark mode, remembered across visits
-   Responsive layout, built with WCAG 2.2 AA in mind

## Tech Stack

[Next.js](https://nextjs.org) 15, React 19, TypeScript, Tailwind CSS, Jest and Cypress

## Getting Started

```bash
npm install
npm run dev
```

The app runs on [localhost:3000](http://localhost:3000). It needs an API key in `.env.local`:

```bash
COC_API_KEY=your-api-key
```

### Environment Variables

| Variable           | Description                                                                   |
| ------------------ | ----------------------------------------------------------------------------- |
| `COC_API_KEY`      | API key from [developer.clashofclans.com](https://developer.clashofclans.com) |
| `COC_API_BASE_URL` | Optional, defaults to `https://api.clashofclans.com/v1`                       |

### Why the RoyaleAPI Proxy?

Clash of Clans API keys only work from whitelisted IP addresses. Vercel has no static IP, so the deployed app sends its requests through the free [RoyaleAPI proxy](https://docs.royaleapi.com/proxy.html), which has a fixed IP. In production `COC_API_BASE_URL` is set to `https://cocproxy.royaleapi.dev/v1` and the API key is created for the IP `45.79.218.79`.

Locally you can use the official API directly with a key for your own IP.

## Tests

```bash
npm test             # Jest unit tests
npx cypress open     # Cypress e2e tests, requires npm run dev
```

## License

[MIT](LICENSE)
