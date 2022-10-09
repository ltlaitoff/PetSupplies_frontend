import { mount } from '@vue/test-utils'
import LanguageSwith from './LanguageSwitch.vue'
import { LANGUAGES } from './LanguageSwitch.interfaces'

vi.mock(`./LanguageSwitch.interfaces.ts`, () => ({
	LANGUAGES: [
		{
			id: 0,
			language: `ukrainian_mock`,
			languageCode: `UA_mock`
		},
		{
			id: 1,
			language: `english_mock`,
			languageCode: `EN_mock`
		}
	]
}))

describe(`LanguageSwitch`, () => {
	it(`LanguageSwith should be in the document`, () => {
		const wrapper = mount(LanguageSwith)

		expect(wrapper.exists()).toBe(true)
	})

	it(`Two buttons should be in the document`, () => {
		const wrapper = mount(LanguageSwith)

		const buttons = wrapper.findAll(`button`)

		expect(buttons.length).toBe(2)
	})

	it(`First button should have text = ${LANGUAGES[0].languageCode}`, () => {
		const wrapper = mount(LanguageSwith)
		const button = wrapper.findAll(`button`)[0]

		expect(button.text()).toBe(LANGUAGES[0].languageCode)
	})

	it(`Second button should have text = ${LANGUAGES[1].languageCode}`, () => {
		const wrapper = mount(LanguageSwith)
		const button = wrapper.findAll(`button`)[1]

		expect(button.text()).toBe(LANGUAGES[1].languageCode)
	})

	it(`On click on first button, emit change should not be called`, async () => {
		const wrapper = mount(LanguageSwith)
		const button = wrapper.findAll(`button`)[0]

		await button.trigger('click')

		expect(wrapper.emitted()).not.toHaveProperty('change')
	})

	it(`On click on second button, emit change should be called with ${LANGUAGES[1]}`, async () => {
		const wrapper = mount(LanguageSwith)
		const button = wrapper.findAll(`button`)[1]

		await button.trigger('click')

		expect(wrapper.emitted()).toHaveProperty('change')
		expect(wrapper.emitted().change).toHaveLength(1)
		expect(wrapper.emitted().change[0]).toEqual([LANGUAGES[1]])
	})

	it(`On props defaultLanguage = 1, on click on first button, emit change should be called with ${LANGUAGES[0]}`, async () => {
		const wrapper = mount(LanguageSwith, {
			props: {
				defaultLanguage: 1
			}
		})
		const button = wrapper.findAll(`button`)[0]

		await button.trigger('click')

		expect(wrapper.emitted()).toHaveProperty('change')
		expect(wrapper.emitted().change).toHaveLength(1)
		expect(wrapper.emitted().change[0]).toEqual([LANGUAGES[0]])
	})

	it(`On props defaultLanguage = 1, on click on second button, emit change should not be called`, async () => {
		const wrapper = mount(LanguageSwith, {
			props: {
				defaultLanguage: 1
			}
		})
		const button = wrapper.findAll(`button`)[1]

		await button.trigger('click')

		expect(wrapper.emitted()).not.toHaveProperty('change')
	})
})
