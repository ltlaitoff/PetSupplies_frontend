<script setup lang="ts">
/// <reference types="vite-svg-loader" />

import LogoMain from '../LogoMain/LogoMain.vue'
import SearchBox from '../SearchBox/SearchBox.vue'
import ButtonStandart from '../Buttons/ButtonStandart.vue'
import ButtonOutline from '../Buttons/ButtonOutline.vue'
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch.vue'

import ShoppingCart from '../../assets/icons/shopping-cart.svg?component'
import { useStore } from '../../store'
import { ref, watch } from 'vue'
import { LanguageState } from '../../store/language/language.interfaces'
import BurgerButton from '../BurgerButton/BurgerButton.vue'

const opened = ref(true)

const store = useStore()
const languageCode = ref(
	(store.getters.getLanguage as LanguageState).languageCode
)

watch(store.getters.getLanguage, () => {
	languageCode.value = (store.getters.getLanguage as LanguageState).languageCode
})
</script>

<template>
	<header
		:class="[$style.header, opened === true ? $style.headerFullScreen : '']"
	>
		<div :class="$style.headerBody">
			<LogoMain />
			<router-link
				:class="$style.link"
				to="/catalog"
			>
				{{ languageCode === 'EN' ? 'Catalog' : 'Каталог' }}
			</router-link>
			<SearchBox :class="$style.search" />
			<LanguageSwitch :class="$style.language" />
			<router-link
				:class="$style.shoppingCart"
				to="/shopping-cart"
			>
				<ShoppingCart :class="$style.shoppingCartIcon" />
			</router-link>
			<div :class="$style.buttons">
				<ButtonStandart>
					{{ languageCode === 'EN' ? 'Sign in' : 'Вхід' }}
				</ButtonStandart>
				<ButtonOutline>
					{{ languageCode === 'EN' ? 'Sign up' : 'Реєстрація' }}
				</ButtonOutline>
			</div>
			<BurgerButton
				:activated="opened"
				:class="$style.burger"
				@click="opened = !opened"
			/>
		</div>
	</header>
</template>

<style module src="./HeaderMain.module.scss"></style>
