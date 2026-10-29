# Clash of Clans API

Enter your player ID and receive your Clash of Clans Statistics.

![Clash Stats Preview](https://github.com/StackOverflowIsBetterThanAnyAI/clash-of-clans-api/blob/master/preview.png)

## Environment Variables

| Variable           | Description                                                                         |
| ------------------ | ----------------------------------------------------------------------------------- |
| `COC_API_KEY`      | API key from [developer.clashofclans.com](https://developer.clashofclans.com)       |
| `COC_API_BASE_URL` | Optional, defaults to `https://api.clashofclans.com/v1`                             |

Clash of Clans API keys are bound to whitelisted IP addresses. Serverless hosts like Vercel have no static IP, so set `COC_API_BASE_URL` to `https://cocproxy.royaleapi.dev/v1` and create a key for the IP `45.79.218.79` of the [RoyaleAPI proxy](https://docs.royaleapi.com/proxy.html).
