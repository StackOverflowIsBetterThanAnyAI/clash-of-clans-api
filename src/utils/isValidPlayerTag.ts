// Clash of Clans tags only consist of these characters (without the leading #)
export const isValidPlayerTag = (tag: string) =>
    /^[0289PYLQGRJCUV]{3,12}$/.test(tag)
