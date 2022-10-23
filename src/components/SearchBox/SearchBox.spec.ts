/// <reference types="vite-svg-loader" />

import { mount } from '@vue/test-utils'
import SearchBox from './SearchBox.vue'

import Search from '../../assets/icons/search.svg?component'

describe.todo('SearchBox', () => {
	describe('Element exists', () => {
		it('SearchBox should be in the document', () => {
			const wrapper = mount(SearchBox)

			expect(wrapper.exists()).toBe(true)
		})

		it('SearchBox should have form', () => {
			const wrapper = mount(SearchBox)

			const form = wrapper.find('form')
			expect(form.exists()).toBe(true)
		})

		it('SearchBox should have button', () => {
			const wrapper = mount(SearchBox)

			const button = wrapper.find('button')
			expect(button.exists()).toBe(true)
		})

		it('SearchBox should have button with icon', () => {
			const wrapper = mount(SearchBox)
			const button = wrapper.find('button')

			expect(button.exists()).toBe(true)

			const icon = button.findComponent(Search)
			expect(icon.exists()).toBe(true)
		})

		it('SearchBox should have input with placeholder', () => {
			const wrapper = mount(SearchBox)
			const input = wrapper.find('input')

			expect(input.exists()).toBe(true)
			expect(input.attributes().placeholder).not.toBe('')
		})
	})

	it('On click on button with with input.value = ""(empty), nothing should be', async () => {
		const wrapper = mount(SearchBox)

		const input = wrapper.find('input')
		await input.setValue('')

		const button = wrapper.find('button')
		button.trigger('click')

		expect(wrapper.emitted()).not.toHaveProperty('submit')
	})

	it('On press enter on input with input.value = ""(empty), nothing should be', async () => {
		const wrapper = mount(SearchBox)

		const input = wrapper.find('input')
		await input.setValue('')

		await input.trigger('keydown', {
			key: 'Enter'
		})

		expect(wrapper.emitted()).not.toHaveProperty('submit')
	})

	it.each([
		{ value: 'test' },
		{ value: 'inputValue' },
		{ value: 'random-123' }
	])(
		'On click on button with input.value = "$value", submit emit should be called',
		async ({ value }) => {
			const wrapper = mount(SearchBox)

			const input = wrapper.find('input')
			await input.setValue(value)

			const button = wrapper.find('button')
			await button.trigger('click')

			expect(wrapper.emitted()).toHaveProperty('submit')
			expect(wrapper.emitted().submit[0]).toEqual([value])
		}
	)

	it.each([
		{ value: 'test' },
		{ value: 'inputValue' },
		{ value: 'random-123' }
	])(
		'On press enter on input with input.value = "$value", submit emit should be called',
		async ({ value }) => {
			const wrapper = mount(SearchBox)

			const input = wrapper.find('input')
			await input.setValue(value)

			await input.trigger('keydown', {
				key: 'Enter'
			})

			expect(wrapper.emitted()).toHaveProperty('submit')
			expect(wrapper.emitted().submit[0]).toEqual([value])
		}
	)

	it('On type text = "test" in input, clear and after click on button, nothing should be', async () => {
		const wrapper = mount(SearchBox)

		const input = wrapper.find('input')
		await input.setValue('test')
		await input.setValue('')

		const button = wrapper.find('button')

		await button.trigger('click')

		expect(wrapper.emitted()).not.toHaveProperty('submit')
	})

	it('On type text = "test" in input, clear and after press enter key, nothing should be', async () => {
		const wrapper = mount(SearchBox)

		const input = wrapper.find('input')
		await input.setValue('test')
		await input.setValue('')

		await input.trigger('keydown', {
			key: 'Enter'
		})

		expect(wrapper.emitted()).not.toHaveProperty('submit')
	})
})
