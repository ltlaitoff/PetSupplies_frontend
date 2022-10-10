<script setup lang="ts">
import MainLogo from '../../components/LogoMain/LogoMain.vue'
import SearchBox from '../../components/SearchBox/SearchBox.vue'
import LanguageSwitch from '../../components/LanguageSwitch/LanguageSwitch.vue'
import ButtonOutline from '../../components/Buttons/ButtonOutline.vue'
import ButtonStandart from '../../components/Buttons/ButtonStandart.vue'
import ThemeSwith from '../../components/ThemeSwith/ThemeSwith.vue'

function onSearchBoxSubmit(value: string) {
	console.log(`SearchBox @submit: ${value}`)
}

function onLanguageChange(value: { id: number; languageCode: string }) {
	console.log(`Language switch: ${JSON.stringify(value)}`)
}

function onThemeSwithChange(value: { id: number; type: string }) {
	console.log(`ThemeSwitch: ${JSON.stringify(value)}`)
}
</script>

<template>
	<div :class="$style.perf">
		<MainLogo />
		<div :class="$style.divider" />
		<SearchBox @submit="onSearchBoxSubmit" />
		<div :class="$style.divider" />
		<LanguageSwitch @change="onLanguageChange" />
		<div :class="$style.divider" />

		<ButtonStandart>Sign in</ButtonStandart>
		<div :class="$style.divider" />

		<ButtonOutline>Sign up</ButtonOutline>
		<div :class="$style.divider" />
		<ThemeSwith @change="onThemeSwithChange" />
		<ThemeSwith :default-theme-id="1" />
	</div>
</template>

<style module src="./PerformancePage.module.scss"></style>
