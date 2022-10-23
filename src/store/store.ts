import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { RootState } from './store.interfaces'
import { themeModule } from './theme'

// https://vuex.vuejs.org/guide/typescript-support.html#typing-usestore-composition-function
export const key: InjectionKey<Store<RootState>> = Symbol()

export const store = createStore<RootState>({
	modules: {
		theme: themeModule
	},
	mutations: {
		initialiseStore(state, value) {
			this.replaceState(Object.assign(state, value))
		}
	}
})

export function useStore() {
	return baseUseStore(key)
}
