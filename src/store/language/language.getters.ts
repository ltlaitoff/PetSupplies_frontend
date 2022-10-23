import { GetterTree } from 'vuex'
import { LanguageState } from './language.interfaces'
import { RootState } from '../store.interfaces'

export const languageGetters: GetterTree<LanguageState, RootState> = {
	getLanguage(state: LanguageState): LanguageState {
		return state
	}
}
