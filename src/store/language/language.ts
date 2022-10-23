import { Module } from 'vuex'
import { RootState } from '../store.interfaces'
import { LanguageState } from './language.interfaces'
import { languageGetters } from './language.getters'
import { languageMutations } from './language.mutations'

const state: LanguageState = {
	id: 0,
	language: 'ukrainian',
	languageCode: 'UA'
}

export const language: Module<LanguageState, RootState> = {
	state,
	getters: languageGetters,
	mutations: languageMutations
}
