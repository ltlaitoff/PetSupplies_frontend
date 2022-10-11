import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
	theme: 'light'
}

// https://vuex.vuejs.org/guide/typescript-support.html#typing-usestore-composition-function
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
	state: {
		theme: 'light'
	}
})

export function useStore() {
	return baseUseStore(key)
}
