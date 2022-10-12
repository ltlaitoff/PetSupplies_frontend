import { Module } from 'vuex'
import { RootState } from '../store.interfaces'
import { ThemeState } from './theme.interfaces'
import { themeGetters } from './theme.getters'
import { themeMutations } from './theme.mutations'

const state: ThemeState = {
	id: 1,
	type: 'auto'
}

export const theme: Module<ThemeState, RootState> = {
	state,
	getters: themeGetters,
	mutations: themeMutations
}
