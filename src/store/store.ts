import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { RootState } from './store.interfaces'
import { themeModule } from './theme'
import { getValue } from '../utils/storage'
import { setValue } from '../utils/storage/storage'

// https://vuex.vuejs.org/guide/typescript-support.html#typing-usestore-composition-function
export const key: InjectionKey<Store<RootState>> = Symbol()

export const store = createStore<RootState>({
	modules: {
		theme: themeModule
	},
	mutations: {
		initialiseStore(state) {
			const data = getValue()

			this.replaceState(Object.assign(state, data))
		}
	}
})

store.subscribe((_, state) => {
	setValue(state)
})

export function useStore() {
	return baseUseStore(key)
}
