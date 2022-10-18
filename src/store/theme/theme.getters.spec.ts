import { themeGetters } from './theme.getters'
import { ThemeState } from './theme.interfaces'

describe('store/theme.getters', () => {
	it.each([
		{ id: 0, type: 'dark' },
		{
			id: 1,
			type: 'auto'
		},
		{ id: 2, type: 'light' }
	])(
		'themeGetters.getTheme with store = {id: $id, type: $type} should return {id: $id, type: $type}',
		store => {
			expect(
				themeGetters.getTheme(store as ThemeState, null, {}, null)
			).toEqual(store)
		}
	)
})
