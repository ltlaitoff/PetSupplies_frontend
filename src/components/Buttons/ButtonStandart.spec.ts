import { shallowMount } from '@vue/test-utils'
import ButtonBase from './ButtonBase.vue'
import ButtonStandart from './ButtonStandart.vue'

import { config } from '@vue/test-utils'
config.renderStubDefaultSlot = true

describe('ButtonStandart', () => {
	it('ButtonStandart should be in the document', () => {
		const wrapper = shallowMount(ButtonStandart)

		expect(wrapper.exists()).toBe(true)
	})

	it('ButtonStandart should have ButtonBase component', () => {
		const wrapper = shallowMount(ButtonStandart)
		const button = wrapper.findComponent(ButtonBase)

		expect(button.exists()).toBe(true)
	})

	it('ButtonStandart should have ButtonBase component with props: {variant: "standart", disabled: false}', () => {
		const wrapper = shallowMount(ButtonStandart)
		const button = wrapper.findComponent(ButtonBase)

		expect(button.props()).toEqual({ variant: 'standart', disabled: false })
	})

	it('ButtonStandart with disabled = true, should have ButtonBase component with props: {variant: "standart", disabled: true}', () => {
		const wrapper = shallowMount(ButtonStandart, {
			props: {
				disabled: true
			}
		})
		const button = wrapper.findComponent(ButtonBase)

		expect(button.props()).toEqual({ variant: 'standart', disabled: true })
	})

	it.each([{ text: 'test' }, { text: 'random' }])(
		'ButtonStandart with slot-default = $text should have ButtonBase with text = $text',
		({ text }) => {
			const wrapper = shallowMount(ButtonStandart, {
				slots: {
					default: text as string
				}
			})

			const button = wrapper.findComponent(ButtonBase)

			expect(button.text()).toBe(text)
		}
	)

	it('After button click, "click" emit should be called', async () => {
		const wrapper = shallowMount(ButtonStandart)
		const button = wrapper.findComponent(ButtonBase)

		button.vm.$emit('click', { preventDefault: vi.fn() })

		await wrapper.vm.$nextTick()

		expect(wrapper.emitted()).toHaveProperty('click')
	})

	it('After button click with disabled prop = true, "click" emit should not be called', async () => {
		const wrapper = shallowMount(ButtonStandart, {
			props: {
				disabled: true
			}
		})
		const button = wrapper.findComponent(ButtonBase)

		button.vm.$emit('click', { preventDefault: vi.fn() })

		await wrapper.vm.$nextTick()

		expect(wrapper.emitted()).not.toHaveProperty('click')
	})
})
