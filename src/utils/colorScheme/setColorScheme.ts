import { Theme } from '../../types'

export function setColorScheme(
	theme: Theme['type'],
	element: HTMLElement | null
) {
	if (theme === undefined) return
	if (element === null) return

	element.dataset.colorTheme = theme
}
