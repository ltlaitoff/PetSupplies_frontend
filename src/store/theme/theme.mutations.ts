import { MutationTree } from 'vuex'
import { ThemeMutations, ThemeState } from './theme.interfaces'

export const themeMutations: MutationTree<ThemeState> = {
	[ThemeMutations.SET_THEME](state: ThemeState, payload: ThemeState) {
		Object.assign(state, payload)
	}
}
