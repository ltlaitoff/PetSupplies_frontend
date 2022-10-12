import { GetterTree } from 'vuex'
import { ThemeState } from './theme.interfaces'
import { RootState } from '../store.interfaces'

export const themeGetters: GetterTree<ThemeState, RootState> = {
	getTheme(state: ThemeState): ThemeState {
		return state
	}
}
