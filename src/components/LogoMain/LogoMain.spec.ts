import { mount } from '@vue/test-utils'
import LogoMain from './LogoMain.vue'

import { createRouter, createWebHistory, Router } from 'vue-router'

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

describe('LogoMain', () => {
	it('LogoMain should have "Pet Supplies" text', () => {
		const wrapper = mount(LogoMain, {
			global: {
				plugins: [router as Router]
			}
		})
		expect(wrapper.text()).toBe('Pet Supplies')
	})

	it('After click on router-link, home page should be opened', async () => {
		const wrapper = mount(LogoMain, {
			global: {
				plugins: [router as Router]
			}
		})
		const push = vi.spyOn(router as Router, 'push')
		const link = wrapper.find('a')

		await link.trigger('click')

		expect(push).toHaveBeenCalledTimes(1)
		expect(push).toHaveBeenCalledWith('/')
	})
})
