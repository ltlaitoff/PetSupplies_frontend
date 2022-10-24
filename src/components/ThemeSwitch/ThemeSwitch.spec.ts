import { createStore, useStore as baseUseStore } from 'vuex'
import { shallowMount } from '@vue/test-utils'
import ThemeSwitch from './ThemeSwitch.vue'
import DATA from './ThemeSwitch.data'
import { key } from '../../store'

vi.mock('./ThemeSwitch.data.ts', () => ({
	default: [
		{
			id: 0,
			type: 'dark',
			icon: 'icon'
		},
		{
			id: 1,
			type: 'auto',
			icon: 'icon'
		},
		{
			id: 2,
			type: 'light',
			icon: 'icon'
		}
	]
}))

vi.mock('../../store', () => {
	const key = Symbol()

	return {
		key: key,
		useStore: () => {
			return baseUseStore(key)
		},
		ThemeMutations: {
			SET_THEME: 'mocked_set_theme'
		}
	}
})

const mountStore = (
	initialValue: { id: number; type: string } = { id: 0, type: 'dark' }
) => {
	return createStore({
		state() {
			return { theme: initialValue }
		},
		getters: {
			getTheme(state) {
				// console.log('getter', state)
				return state.theme
			}
		},
		mutations: {
			mocked_set_theme(state, payload) {
				state.theme = payload
			}
		}
	})
}

describe.todo('ThemeSwitch', () => {
	it('ThemeSwitch should be in the document', () => {
		const store = mountStore()

		const wrapper = shallowMount(ThemeSwitch, {
			global: {
				provide: {
					[key as symbol]: store
				}
			}
		})

		expect(wrapper.exists()).toBeTruthy()
	})

	it('ThemeSwitch should have 3 buttons', () => {
		const store = mountStore()

		const wrapper = shallowMount(ThemeSwitch, {
			global: {
				provide: {
					[key as symbol]: store
				}
			}
		})

		const buttons = wrapper.findAll('button')
		expect(buttons).toHaveLength(3)
	})

	it('First button should have icon inside', () => {
		const store = mountStore()

		const wrapper = shallowMount(ThemeSwitch, {
			global: {
				provide: {
					[key as symbol]: store
				}
			}
		})
		const button = wrapper.findAll('button')[0]
		const icon = button.find('icon')

		expect(icon.exists()).toBeTruthy()
	})

	it('Second button should have icon inside', () => {
		const store = mountStore()

		const wrapper = shallowMount(ThemeSwitch, {
			global: {
				provide: {
					[key as symbol]: store
				}
			}
		})
		const button = wrapper.findAll('button')[1]
		const icon = button.find('icon')

		expect(icon.exists()).toBeTruthy()
	})

	it('Third button should have icon inside', () => {
		const store = mountStore()

		const wrapper = shallowMount(ThemeSwitch, {
			global: {
				provide: {
					[key as symbol]: store
				}
			}
		})
		const button = wrapper.findAll('button')[2]
		const icon = button.find('icon')

		expect(icon.exists()).toBeTruthy()
	})

	it('On click on first button, storage.commit should not be called', async () => {
		const store = mountStore()

		const wrapper = shallowMount(ThemeSwitch, {
			global: {
				provide: {
					[key as symbol]: store
				}
			}
		})

		const commit = vi.spyOn(store, 'commit')

		const button = wrapper.findAll('button')[0]
		await button.trigger('click')

		expect(commit).not.toBeCalled()
	})

	it(`On click on second button, storage.commit should be called with ('mocked_set_theme', {id: ${DATA[1].id}, type: ${DATA[1].type}})`, async () => {
		const store = mountStore()

		const wrapper = shallowMount(ThemeSwitch, {
			global: {
				provide: {
					[key as symbol]: store
				}
			}
		})

		const commit = vi.spyOn(store, 'commit')

		const button = wrapper.findAll('button')[1]
		await button.trigger('click')

		expect(commit).toBeCalledTimes(1)
		expect(commit).toBeCalledWith('mocked_set_theme', {
			id: DATA[1].id,
			type: DATA[1].type
		})
	})

	it(`On click on third button, store.commit should be called with ('mocked_set_theme', {id: ${DATA[2].id}, type: ${DATA[2].type}})`, async () => {
		const store = mountStore()

		const wrapper = shallowMount(ThemeSwitch, {
			global: {
				provide: {
					[key as symbol]: store
				}
			}
		})

		const commit = vi.spyOn(store, 'commit')

		const button = wrapper.findAll('button')[2]
		await button.trigger('click')

		expect(commit).toBeCalledTimes(1)
		expect(commit).toBeCalledWith('mocked_set_theme', {
			id: DATA[2].id,
			type: DATA[2].type
		})
	})

	describe('With state.theme = {id: 1, type: "auto"}', () => {
		it(`On click on first button, store.commit should be called with ('mocked_set_theme', {id: ${DATA[0].id}, type: ${DATA[0].type}})`, async () => {
			const store = mountStore({ id: 1, type: 'auto' })

			const wrapper = shallowMount(ThemeSwitch, {
				global: {
					provide: {
						[key as symbol]: store
					}
				}
			})

			const commit = vi.spyOn(store, 'commit')

			const button = wrapper.findAll('button')[0]
			await button.trigger('click')

			expect(commit).toBeCalledTimes(1)
			expect(commit).toBeCalledWith('mocked_set_theme', {
				id: DATA[0].id,
				type: DATA[0].type
			})
		})

		it('On click on second button, store.commit should not be called', async () => {
			const store = mountStore({ id: 1, type: 'auto' })

			const wrapper = shallowMount(ThemeSwitch, {
				global: {
					provide: {
						[key as symbol]: store
					}
				}
			})

			const commit = vi.spyOn(store, 'commit')

			const button = wrapper.findAll('button')[1]
			await button.trigger('click')

			expect(commit).not.toBeCalled()
		})

		it(`On click on third button, store.commit should be called with ('mocked_set_theme', {id: ${DATA[2].id}, type: ${DATA[2].type}})`, async () => {
			const store = mountStore({ id: 1, type: 'auto' })

			const wrapper = shallowMount(ThemeSwitch, {
				global: {
					provide: {
						[key as symbol]: store
					}
				}
			})

			const commit = vi.spyOn(store, 'commit')

			const button = wrapper.findAll('button')[2]
			await button.trigger('click')

			expect(commit).toBeCalledTimes(1)
			expect(commit).toBeCalledWith('mocked_set_theme', {
				id: DATA[2].id,
				type: DATA[2].type
			})
		})
	})

	describe('With store.state = {id: 2, type: "light"}', () => {
		it(`On click on first button, store.commit should be called with ('mocked_set_theme', {id: ${DATA[0].id}, type: ${DATA[0].type}})`, async () => {
			const store = mountStore({ id: 2, type: 'light' })

			const wrapper = shallowMount(ThemeSwitch, {
				global: {
					provide: {
						[key as symbol]: store
					}
				}
			})

			const commit = vi.spyOn(store, 'commit')

			const button = wrapper.findAll('button')[0]
			await button.trigger('click')

			expect(commit).toBeCalledTimes(1)
			expect(commit).toBeCalledWith('mocked_set_theme', {
				id: DATA[0].id,
				type: DATA[0].type
			})
		})

		it(`On click on second button, store.commit should be called with ('mocked_set_theme', {id: ${DATA[1].id}, type: ${DATA[1].type}})`, async () => {
			const store = mountStore({ id: 2, type: 'light' })

			const wrapper = shallowMount(ThemeSwitch, {
				global: {
					provide: {
						[key as symbol]: store
					}
				}
			})

			const commit = vi.spyOn(store, 'commit')

			const button = wrapper.findAll('button')[1]
			await button.trigger('click')

			expect(commit).toBeCalledTimes(1)
			expect(commit).toBeCalledWith('mocked_set_theme', {
				id: DATA[1].id,
				type: DATA[1].type
			})
		})

		it('On click on second button, store.commit should not be called', async () => {
			const store = mountStore({ id: 2, type: 'light' })

			const wrapper = shallowMount(ThemeSwitch, {
				global: {
					provide: {
						[key as symbol]: store
					}
				}
			})

			const commit = vi.spyOn(store, 'commit')

			const button = wrapper.findAll('button')[2]
			await button.trigger('click')

			expect(commit).not.toBeCalled()
		})
	})

	describe('On change store value outside to {id: 2, type: "light"}', () => {
		it(`On click on first button, store.commit should be called with ('mocked_set_theme', {id: ${DATA[0].id}, type: ${DATA[0].type}})`, async () => {
			const store = mountStore()

			const wrapper = shallowMount(ThemeSwitch, {
				global: {
					provide: {
						[key as symbol]: store
					}
				}
			})

			store.commit('mocked_set_theme', { id: 2, type: 'light' })
			await wrapper.vm.$nextTick()

			const commit = vi.spyOn(store, 'commit')

			const button = wrapper.findAll('button')[0]
			await button.trigger('click')

			expect(commit).toBeCalledTimes(1)
			expect(commit).toBeCalledWith('mocked_set_theme', {
				id: DATA[0].id,
				type: DATA[0].type
			})
		})

		it(`On click on second button, store.commit should be called with ('mocked_set_theme', {id: ${DATA[1].id}, type: ${DATA[1].type}})`, async () => {
			const store = mountStore()

			const wrapper = shallowMount(ThemeSwitch, {
				global: {
					provide: {
						[key as symbol]: store
					}
				}
			})

			store.commit('mocked_set_theme', { id: 2, type: 'light' })
			await wrapper.vm.$nextTick()

			const commit = vi.spyOn(store, 'commit')

			const button = wrapper.findAll('button')[1]
			await button.trigger('click')

			expect(commit).toBeCalledTimes(1)
			expect(commit).toBeCalledWith('mocked_set_theme', {
				id: DATA[1].id,
				type: DATA[1].type
			})
		})

		it(`On click on third button, store.commit should not be called`, async () => {
			const store = mountStore()

			const wrapper = shallowMount(ThemeSwitch, {
				global: {
					provide: {
						[key as symbol]: store
					}
				}
			})

			store.commit('mocked_set_theme', { id: 2, type: 'light' })
			await wrapper.vm.$nextTick()

			const commit = vi.spyOn(store, 'commit')

			const button = wrapper.findAll('button')[2]
			await button.trigger('click')

			expect(commit).not.toBeCalled()
		})
	})
})
