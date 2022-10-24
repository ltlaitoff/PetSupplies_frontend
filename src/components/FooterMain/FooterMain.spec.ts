import { shallowMount } from '@vue/test-utils'
import FooterMain from './FooterMain.vue'
import LogoMain from '../LogoMain/LogoMain.vue'
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch.vue'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch.vue'

describe.todo('FooterMain', () => {
	it('FooterMain should be in the document', () => {
		const wrapper = shallowMount(FooterMain)

		expect(wrapper.exists()).toBeTruthy()
	})

	it('FooterMain should have LogoMain component', () => {
		const wrapper = shallowMount(FooterMain)
		const component = wrapper.findComponent(LogoMain)

		expect(component.exists()).toBeTruthy()
	})

	it('FooterMain should have LanguageSwitch component', () => {
		const wrapper = shallowMount(FooterMain)
		const component = wrapper.findComponent(LanguageSwitch)

		expect(component.exists()).toBeTruthy()
	})

	it('FooterMain should have ThemeSwitch component', () => {
		const wrapper = shallowMount(FooterMain)
		const component = wrapper.findComponent(ThemeSwitch)

		expect(component.exists()).toBeTruthy()
	})

	it('FooterMain should have <a> with text = "Privacy Policy"', () => {
		const wrapper = shallowMount(FooterMain)
		const a = wrapper.find('a')

		expect(a.text()).toBe('Privacy Policy')
	})
})
