import { Theme } from '../../types'

export function setColorScheme(
	theme: Theme['type'],
	element: HTMLElement | null
) {
	if (element === null) return

	if (theme === 'auto') {
		element.style.removeProperty('color-scheme')
	}

	element.style.setProperty('color-scheme', theme)
}
