import { createRouter, createWebHashHistory } from 'vue-router'

const HomePage = () => import('../pages/HomePage/HomePage.vue')
const CatalogPage = () => import('../pages/CatalogPage/CatalogPage.vue')
const NotFoundPage = () => import('../pages/NotFoundPage/NotFoundPage.vue')
const ShoppingCart = () => import('../pages/ShoppingCart/ShoppingCart.vue')

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomePage
	},
	{
		path: '/catalog',
		name: 'catalog',
		component: CatalogPage
	},
	{
		path: '/shopping-cart',
		name: 'shoppingCart',
		component: ShoppingCart
	},
	{
		path: '/:catchAll(.*)',
		name: 'notFound',
		component: NotFoundPage
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes: routes
})

export default router
