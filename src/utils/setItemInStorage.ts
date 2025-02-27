export const setItemInStorage = (items: Record<string, string>) => {
    const storage = sessionStorage.getItem('clash-of-clans')
    const parsedTracker = storage ? JSON.parse(storage) : {}
    Object.assign(parsedTracker, items)
    sessionStorage.setItem('clash-of-clans', JSON.stringify(parsedTracker))
}
