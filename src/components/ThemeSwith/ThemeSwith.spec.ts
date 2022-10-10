import { shallowMount } from '@vue/test-utils'
import ThemeSwith from './ThemeSwith.vue'
import DATA from './ThemeSwith.data'

vi.mock('./ThemeSwith.data.ts', () => ({
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

describe('ThemeSwith', () => {
	it('ThemeSwith should be in the document', () => {
		const wrapper = shallowMount(ThemeSwith)

		expect(wrapper.exists()).toBeTruthy()
	})

	it('ThemeSwith should have 3 buttons', () => {
		const wrapper = shallowMount(ThemeSwith)

		const buttons = wrapper.findAll('button')
		expect(buttons).toHaveLength(3)
	})

	it('First button should have icon inside', () => {
		const wrapper = shallowMount(ThemeSwith)
		const button = wrapper.findAll('button')[0]
		const icon = button.find('icon')

		expect(icon.exists()).toBeTruthy()
	})

	it('Second button should have icon inside', () => {
		const wrapper = shallowMount(ThemeSwith)
		const button = wrapper.findAll('button')[1]
		const icon = button.find('icon')

		expect(icon.exists()).toBeTruthy()
	})

	it('Third button should have icon inside', () => {
		const wrapper = shallowMount(ThemeSwith)
		const button = wrapper.findAll('button')[2]
		const icon = button.find('icon')

		expect(icon.exists()).toBeTruthy()
	})

	it('On click on first button, emit.change should not be called', async () => {
		const wrapper = shallowMount(ThemeSwith)

		const button = wrapper.findAll('button')[0]
		await button.trigger('click')

		expect(wrapper.emitted()).not.toHaveProperty('change')
	})

	it(`On click on second button, emit.change should be called with {id: ${DATA[1].id}, type: ${DATA[1].type}}`, async () => {
		const wrapper = shallowMount(ThemeSwith)

		const button = wrapper.findAll('button')[1]
		await button.trigger('click')

		expect(wrapper.emitted()).toHaveProperty('change')
		expect(wrapper.emitted().change[0]).toEqual([
			{ id: DATA[1].id, type: DATA[1].type }
		])
	})

	it(`On click on third button, emit.change should be called with {id: ${DATA[2].id}, type: ${DATA[2].type}}`, async () => {
		const wrapper = shallowMount(ThemeSwith)

		const button = wrapper.findAll('button')[2]
		await button.trigger('click')

		expect(wrapper.emitted()).toHaveProperty('change')
		expect(wrapper.emitted().change[0]).toEqual([
			{ id: DATA[2].id, type: DATA[2].type }
		])
	})

	describe('With defaultThemeId prop = 1', () => {
		it(`With defaultThemeId prop = 1, on click on first button, emit.change should be called with {id: ${DATA[0].id}, type: ${DATA[0].type}}`, async () => {
			const wrapper = shallowMount(ThemeSwith, {
				props: {
					'default-theme-id': 1
				}
			})

			const button = wrapper.findAll('button')[0]
			await button.trigger('click')

			expect(wrapper.emitted()).toHaveProperty('change')
			expect(wrapper.emitted().change[0]).toEqual([
				{ id: DATA[0].id, type: DATA[0].type }
			])
		})

		it('With defaultThemeId prop = 1, on click on second button, emit.change should not be called', async () => {
			const wrapper = shallowMount(ThemeSwith, {
				props: {
					'default-theme-id': 1
				}
			})

			const button = wrapper.findAll('button')[1]
			await button.trigger('click')

			expect(wrapper.emitted()).not.toHaveProperty('change')
		})

		it(`With defaultThemeId prop = 1, on click on third button, emit.change should be called with {id: ${DATA[2].id}, type: ${DATA[2].type}}`, async () => {
			const wrapper = shallowMount(ThemeSwith, {
				props: {
					'default-theme-id': 1
				}
			})

			const button = wrapper.findAll('button')[2]
			await button.trigger('click')

			expect(wrapper.emitted()).toHaveProperty('change')
			expect(wrapper.emitted().change[0]).toEqual([
				{ id: DATA[2].id, type: DATA[2].type }
			])
		})
	})

	describe('With defaultThemeId prop = 2', () => {
		it(`With defaultThemeId prop = 2, on click on first button, emit.change should be called with {id: ${DATA[0].id}, type: ${DATA[0].type}}`, async () => {
			const wrapper = shallowMount(ThemeSwith, {
				props: {
					'default-theme-id': 2
				}
			})

			const button = wrapper.findAll('button')[0]
			await button.trigger('click')

			expect(wrapper.emitted()).toHaveProperty('change')
			expect(wrapper.emitted().change[0]).toEqual([
				{ id: DATA[0].id, type: DATA[0].type }
			])
		})

		it(`With defaultThemeId prop = 2, on click on second button, emit.change should be called with {id: ${DATA[1].id}, type: ${DATA[1].type}}`, async () => {
			const wrapper = shallowMount(ThemeSwith, {
				props: {
					'default-theme-id': 2
				}
			})

			const button = wrapper.findAll('button')[1]
			await button.trigger('click')

			expect(wrapper.emitted()).toHaveProperty('change')
			expect(wrapper.emitted().change[0]).toEqual([
				{ id: DATA[1].id, type: DATA[1].type }
			])
		})

		it('With defaultThemeId prop = 2, on click on second button, emit.change should not be called', async () => {
			const wrapper = shallowMount(ThemeSwith, {
				props: {
					'default-theme-id': 2
				}
			})

			const button = wrapper.findAll('button')[2]
			await button.trigger('click')

			expect(wrapper.emitted()).not.toHaveProperty('change')
		})
	})
})
