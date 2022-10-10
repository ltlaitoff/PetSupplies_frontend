<script setup lang="ts">
/// <reference types="vite-svg-loader" />

import LogoMain from '../LogoMain/LogoMain.vue'
import SearchBox from '../SearchBox/SearchBox.vue'
import ButtonStandart from '../Buttons/ButtonStandart.vue'
import ButtonOutline from '../Buttons/ButtonOutline.vue'
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch.vue'

import ShoppingCart from '../../assets/icons/shopping-cart.svg?component'
</script>

<template>
	<header :class="$style.header">
		<div :class="$style.headerBody">
			<LogoMain />
			<router-link
				:class="$style.link"
				to="/catalog"
			>
				Catalog
			</router-link>
			<SearchBox />
			<LanguageSwitch />
			<router-link
				:class="$style.shoppingCart"
				to="/shopping-cart"
			>
				<ShoppingCart :class="$style.shoppingCartIcon" />
			</router-link>
			<div :class="$style.buttons">
				<ButtonStandart>Sign in</ButtonStandart>
				<ButtonOutline>Sign up</ButtonOutline>
			</div>
		</div>
	</header>
</template>

<style module src="./HeaderMain.module.scss"></style>
