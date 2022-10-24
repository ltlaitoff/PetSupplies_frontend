/// <reference types="vite-svg-loader" />

import { shallowMount, mount, VueWrapper } from '@vue/test-utils'

import HeaderMain from './HeaderMain.vue'

import LogoMain from '../LogoMain/LogoMain.vue'
import SearchBox from '../SearchBox/SearchBox.vue'
import ButtonStandart from '../Buttons/ButtonStandart.vue'
import ButtonOutline from '../Buttons/ButtonOutline.vue'
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch.vue'

import ShoppingCart from '../../assets/icons/shopping-cart.svg?component'
import { createRouter, createWebHistory, Router } from 'vue-router'

import { config } from '@vue/test-utils'
config.renderStubDefaultSlot = true

let router: null | Router

beforeEach(async () => {
	router = createRouter({
		history: createWebHistory(),
		routes: [
			{
				path: '/',
				component: { template: 'Home' }
			},
			{
				path: '/test',
				component: { template: 't' }
			}
		]
	})

	await router.push('/test')
	history.replaceState(history.state, '', '/test')

	await router.isReady()
})

function findByText(wrap: VueWrapper, selector: string, text: string) {
	return wrap.findAll(selector).filter(n => n.text().includes(text))[0]
}

describe.todo('HeaderMain', () => {
	it('HeaderMain should be in the document', () => {
		const wrapper = shallowMount(HeaderMain)

		expect(wrapper.exists()).toBe(true)
	})

	it('HeaderMain should have LogoMain component', () => {
		const wrapper = shallowMount(HeaderMain)

		const component = wrapper.findComponent(LogoMain)
		expect(component.exists()).toBe(true)
	})

	it('HeaderMain should have SearchBox component', () => {
		const wrapper = shallowMount(HeaderMain)

		const component = wrapper.findComponent(SearchBox)
		expect(component.exists()).toBe(true)
	})

	it('HeaderMain should have LanguageSwitch component', () => {
		const wrapper = shallowMount(HeaderMain)

		const component = wrapper.findComponent(LanguageSwitch)
		expect(component.exists()).toBe(true)
	})

	it('HeaderMain should have ButtonStandart component', () => {
		const wrapper = shallowMount(HeaderMain)

		const component = wrapper.findComponent(ButtonStandart)
		expect(component.exists()).toBe(true)
	})

	it('HeaderMain should have ButtonOutline component', () => {
		const wrapper = shallowMount(HeaderMain)

		const component = wrapper.findComponent(ButtonOutline)
		expect(component.exists()).toBe(true)
	})

	it('HeaderMain should have " Catalog " link', () => {
		const wrapper = mount(HeaderMain, {
			shallow: true,
			global: {
				plugins: [router as Router],
				stubs: {
					RouterLink: false
				}
			}
		})

		const link = findByText(wrapper, 'a', 'Catalog')

		expect(link.exists()).toBe(true)
	})

	it('On click on catalog link, "/catalog" page should be opened', async () => {
		const wrapper = mount(HeaderMain, {
			shallow: true,
			global: {
				plugins: [router as Router],
				stubs: {
					RouterLink: false
				}
			}
		})

		const link = findByText(wrapper, 'a', 'Catalog')
		const push = vi.spyOn(router as Router, 'push')

		await link.trigger('click')

		expect(push).toHaveBeenCalledTimes(1)
		expect(push).toHaveBeenCalledWith('/catalog')
	})

	it('HeaderMain should have link with ShoppingCart icon-component', () => {
		const wrapper = mount(HeaderMain, {
			shallow: true,
			global: {
				plugins: [router as Router],
				stubs: {
					RouterLink: false
				}
			}
		})

		const link = wrapper
			.findAll('a')
			.filter(el => el.findComponent(ShoppingCart).exists())[0]

		expect(link.exists()).toBe(true)
	})

	it('On click on shopping-cart link, "/shopping-cart" page should be opened', async () => {
		const wrapper = mount(HeaderMain, {
			shallow: true,
			global: {
				plugins: [router as Router],
				stubs: {
					RouterLink: false
				}
			}
		})

		const link = wrapper
			.findAll('a')
			.filter(el => el.findComponent(ShoppingCart).exists())[0]

		const push = vi.spyOn(router as Router, 'push')

		await link.trigger('click')

		expect(push).toHaveBeenCalledTimes(1)
		expect(push).toHaveBeenCalledWith('/shopping-cart')
	})
})
