import { set as setLocalStorage, get as getLocalStorage } from './localStorage'

const defaultGetValue = {}

export const initialize = () => {
	const value = getValue()
	if (value === defaultGetValue) {
		setValue(defaultGetValue)
	}
}

export const getValue = (): object => {
	const result = getLocalStorage()
	if (result === null) {
		return defaultGetValue
	}

	return JSON.parse(result)
}

export const setValue = (value: object) => {
	return setLocalStorage(JSON.stringify(value))
}
