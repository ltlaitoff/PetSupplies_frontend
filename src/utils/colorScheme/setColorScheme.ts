import { Theme } from '../../types'

export function setColorScheme(
	theme: Theme['type'],
	element: HTMLElement | null
) {
	if (element === null) return

	element.dataset.colorTheme = theme
}
