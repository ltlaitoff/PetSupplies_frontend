import { ThemeMutations, ThemeState } from './theme.interfaces'
import { themeMutations } from './theme.mutations'

vi.mock('./theme.interfaces', () => ({
	ThemeMutations: {
		SET_THEME: 'mocked_set_theme'
	}
}))

describe('store/theme.mutations', () => {
	it.each([
		{
			stateId: 0,
			stateType: 'dark',
			payloadId: 1,
			payloadType: 'auto'
		},
		{
			stateId: 1,
			stateType: 'auto',
			payloadId: 2,
			payloadType: 'light'
		},
		{
			stateId: 0,
			stateType: 'dark',
			payloadId: 2,
			payloadType: 'light'
		}
	])(
		'SET_THEME with state = {id: $stateId, type: $stateType, someArg: "arg"} and payload = {id: $payloadId, type: $payloadType} should mutate state to{id: $payloadId, type: $payloadType}',
		({ stateId, stateType, payloadId, payloadType }) => {
			const state = {
				id: stateId,
				type: stateType,
				someArg: 'arg'
			}

			const payload = {
				id: payloadId,
				type: payloadType
			}

			themeMutations[ThemeMutations.SET_THEME](
				state as ThemeState,
				payload as ThemeState
			)

			expect(state.id).toBe(payloadId)
			expect(state.type).toBe(payloadType)
		}
	)
})
