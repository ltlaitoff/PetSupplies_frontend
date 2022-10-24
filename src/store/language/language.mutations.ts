import { MutationTree } from 'vuex'
import { LanguageMutations } from './language.config'
import { LanguageState } from './language.interfaces'

export const languageMutations: MutationTree<LanguageState> = {
	[LanguageMutations.SET_LANGUAGE](
		state: LanguageState,
		payload: LanguageState
	) {
		Object.assign(state, payload)
	}
}
