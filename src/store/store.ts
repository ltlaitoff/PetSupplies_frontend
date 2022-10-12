import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { RootState } from './store.interfaces'
import { themeModule } from './theme'

// https://vuex.vuejs.org/guide/typescript-support.html#typing-usestore-composition-function
export const key: InjectionKey<Store<RootState>> = Symbol()

export const store = createStore<RootState>({
	// state: {
	// 	theme: {
	// 		id: 1,
	// 		type: 'auto'
	// 	}
	// },
	modules: {
		theme: themeModule
	}
	// mutations: {
	// 	changeTheme(state, data: Theme) {
	// 		state.theme = data
	// 	}
	// },
	// actions: {
	// 	changeTheme(state, data: Theme) {
	// 		this.commit('changeTheme', data)
	// 	}
	// }
})

export function useStore() {
	return baseUseStore(key)
}
