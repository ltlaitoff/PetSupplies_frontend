import * as vuex from 'vuex'
import { useStore, store, key } from './store'
import { getValue, setValue } from '../utils/storage'

vi.mock('../utils/storage', () => ({
	getValue: vi.fn(),
	setValue: vi.fn()
}))

vi.mock('./theme', () => ({
	themeModule: {}
}))

describe('store', () => {
	afterEach(() => {
		vi.clearAllMocks()
	})

	it('store should export key as Symbol', () => {
		expect(typeof key).toBe('symbol')
	})

	it('On call useStore, vux useStore should be called with key', () => {
		const vuexUseStore = vi.spyOn(vuex, 'useStore')
		useStore()

		expect(vuexUseStore).toBeCalledWith(key)
	})

	describe('On call store.mutatuions.initialiseStore', () => {
		it('Storage getValue should be called', () => {
			store.commit('initialiseStore')

			expect(getValue).toBeCalledTimes(1)
		})

		it('State should to mutate to getValue value assign', () => {
			// @ts-expect-error Set mockImplementation
			getValue.mockImplementation(() => ({ testField: 'test' }))

			expect(store.state).not.toContain({ testField: 'test' })

			store.commit('initialiseStore')
			expect(getValue).toBeCalledTimes(1)

			expect(store.state).toContain({ testField: 'test' })
		})
	})

	it('On change store.state value, storage setValue should be called with state', () => {
		// @ts-expect-error Set mockImplementation
		getValue.mockImplementation(() => ({ testField: 'test' }))

		store.commit('initialiseStore')
		expect(getValue).toBeCalledTimes(1)

		expect(store.state).toContain({ testField: 'test' })

		expect(setValue).toBeCalledTimes(1)

		// @ts-expect-error Get setValue calls
		expect(setValue.calls[0][0]).toContain({ testField: 'test' })
	})
})
