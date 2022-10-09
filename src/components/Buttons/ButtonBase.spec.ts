import { mount } from '@vue/test-utils'
import ButtonBase from './ButtonBase.vue'

describe('ButtonBase', () => {
	it('ButtonBase should be in the document', () => {
		const wrapper = mount(ButtonBase)

		expect(wrapper.exists()).toBe(true)
	})

	it('ButtonBase should have button', () => {
		const wrapper = mount(ButtonBase)
		const button = wrapper.find('button')

		expect(button.exists()).toBe(true)
	})

	it.each([{ text: 'test' }, { text: 'random' }])(
		'ButtonBase with slot-default = $text should have button with text = $text',
		({ text }) => {
			const wrapper = mount(ButtonBase, {
				slots: {
					default: text as string
				}
			})

			const button = wrapper.find('button')

			expect(button.text()).toBe(text)
		}
	)

	it('After button click, "click" emit should be called', async () => {
		const wrapper = mount(ButtonBase)
		const button = wrapper.find('button')

		await button.trigger('click')

		expect(wrapper.emitted()).toHaveProperty('click')
	})

	it('After button click with disabled prop = true, "click" emit should not be called', async () => {
		const wrapper = mount(ButtonBase, {
			props: {
				disabled: true
			}
		})
		const button = wrapper.find('button')

		await button.trigger('click')

		expect(wrapper.emitted()).not.toHaveProperty('click')
	})

	it('After button click with disabled prop = true and programly settet attribute disabled = false, "click" emit should not be called', async () => {
		const wrapper = mount(ButtonBase, {
			props: {
				disabled: true
			}
		})
		const button = wrapper.find('button')

		button.element.disabled = false

		console.log(button.html())

		await button.trigger('click')

		expect(wrapper.emitted()).not.toHaveProperty('click')
	})
})
