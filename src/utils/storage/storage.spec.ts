import { getValue, setValue } from './storage'
import * as localStorage from './localStorage'

vi.mock('./localStorage', () => ({
	set: vi.fn(),
	get: vi.fn()
}))

describe('utils/storage', () => {
	it.each([
		{ id: 0, type: '123' },
		{ id: 1, type: 'test' }
	])(
		'On call setValue with value = %j, localstorage set should be called with stringifies value',
		value => {
			const localStorageSet = vi.spyOn(localStorage, 'set')

			setValue(value)

			expect(localStorageSet).toBeCalledWith(JSON.stringify(value))
		}
	)

	describe('On call getValue', () => {
		it('On call getValue, localstorage get should be toBeCalled', () => {
			const localStorageGet = vi
				.spyOn(localStorage, 'get')
				.mockReturnValue('{"id":1,"type":"test"}')

			getValue()

			expect(localStorageGet).toBeCalled()
		})

		it('On localstorage get return {"id":1,"type":"test"}, getValue should return Object {id: 1, type: "test"}', () => {
			const localStorageGet = vi
				.spyOn(localStorage, 'get')
				.mockReturnValue('{"id":1,"type":"test"}')

			expect(getValue()).toEqual({ id: 1, type: 'test' })
			expect(localStorageGet).toBeCalled()
		})

		it('On localstorage get return null, getValue should return Object {}', () => {
			const localStorageGet = vi
				.spyOn(localStorage, 'get')
				.mockReturnValue(null)

			expect(getValue()).toEqual({})
			expect(localStorageGet).toBeCalled()
		})
	})
})
