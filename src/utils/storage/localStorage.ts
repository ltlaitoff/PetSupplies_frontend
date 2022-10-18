import { LOCAL_STORAGE_KEY } from '../../data'

export const get = () => {
	return localStorage.getItem(LOCAL_STORAGE_KEY)
}

export const set = (value: string) => {
	localStorage.setItem(LOCAL_STORAGE_KEY, value)
}
