import { get, set } from './localStorage'
import { LOCAL_STORAGE_KEY } from '../../data'

vi.mock('../../data', () => ({
	LOCAL_STORAGE_KEY: 'mocked_local_storage_key'
}))

describe('utils/storage/localStorage', () => {
	it.each([
		{
			value: '{id:0,type:"test"}'
		},
		{
			value: 'value'
		}
	])(
		`On call "set" function with value = $value, localStorage setItem should be called with (${LOCAL_STORAGE_KEY}, $value)`,
		() => {
			const setItem = vi.spyOn(window.localStorage, 'setItem')

			set('test')

			expect(setItem).toBeCalledWith(LOCAL_STORAGE_KEY, 'test')
		}
	)

	it(`On call "get" function, localStorage getItem should be called with ${LOCAL_STORAGE_KEY}`, () => {
		const getItem = vi.spyOn(window.localStorage, 'getItem')

		get()

		expect(getItem).toBeCalledWith(LOCAL_STORAGE_KEY)
	})
})
