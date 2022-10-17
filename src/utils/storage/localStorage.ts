const STORAGE_KEY = 'petsupplies'

export const get = () => {
	return localStorage.getItem(STORAGE_KEY)
}

export const set = (value: string) => {
	localStorage.setItem(STORAGE_KEY, value)
}
