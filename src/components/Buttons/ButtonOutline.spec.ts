import { shallowMount } from '@vue/test-utils'
import ButtonBase from './ButtonBase.vue'
import ButtonOutline from './ButtonOutline.vue'

import { config } from '@vue/test-utils'
config.renderStubDefaultSlot = true

describe('ButtonOutline', () => {
	it('ButtonOutline should be in the document', () => {
		const wrapper = shallowMount(ButtonOutline)

		expect(wrapper.exists()).toBe(true)
	})

	it('ButtonOutline should have ButtonBase component', () => {
		const wrapper = shallowMount(ButtonOutline)
		const button = wrapper.findComponent(ButtonBase)

		expect(button.exists()).toBe(true)
	})

	it('ButtonOutline should have ButtonBase component with props: {variant: "outline", disabled: false}', () => {
		const wrapper = shallowMount(ButtonOutline)
		const button = wrapper.findComponent(ButtonBase)

		expect(button.props()).toEqual({ variant: 'outline', disabled: false })
	})

	it('ButtonOutline with disabled = true, should have ButtonBase component with props: {variant: "outline", disabled: true}', () => {
		const wrapper = shallowMount(ButtonOutline, {
			props: {
				disabled: true
			}
		})
		const button = wrapper.findComponent(ButtonBase)

		expect(button.props()).toEqual({ variant: 'outline', disabled: true })
	})

	it.each([{ text: 'test' }, { text: 'random' }])(
		'ButtonOutline with slot-default = $text should have ButtonBase with text = $text',
		({ text }) => {
			const wrapper = shallowMount(ButtonOutline, {
				slots: {
					default: text as string
				}
			})

			const button = wrapper.findComponent(ButtonBase)

			expect(button.text()).toBe(text)
		}
	)

	it('After button click, "click" emit should be called', async () => {
		const wrapper = shallowMount(ButtonOutline)
		const button = wrapper.findComponent(ButtonBase)

		button.vm.$emit('click')

		await wrapper.vm.$nextTick()

		expect(wrapper.emitted()).toHaveProperty('click')
	})

	it('After button click with disabled prop = true, "click" emit should not be called', async () => {
		const wrapper = shallowMount(ButtonOutline, {
			props: {
				disabled: true
			}
		})
		const button = wrapper.findComponent(ButtonBase)

		button.vm.$emit('click')

		await wrapper.vm.$nextTick()

		expect(wrapper.emitted()).not.toHaveProperty('click')
	})
})
