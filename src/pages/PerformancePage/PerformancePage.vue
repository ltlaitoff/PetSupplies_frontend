<script setup lang="ts">
import MainLogo from '../../components/LogoMain/LogoMain.vue'
import SearchBox from '../../components/SearchBox/SearchBox.vue'
import LanguageSwitch from '../../components/LanguageSwitch/LanguageSwitch.vue'

function onSearchBoxSubmit(value: string) {
	console.log(`SearchBox @submit: ${value}`)
}

function onLanguageChange(value: { id: number; languageCode: string }) {
	console.log(`Language switch: ${JSON.stringify(value)}`)
}
</script>

<template>
	<div :class="$style.perf">
		<MainLogo />
		<div :class="$style.divider" />
		<SearchBox @submit="onSearchBoxSubmit" />
		<div :class="$style.divider" />
		<LanguageSwitch @change="onLanguageChange" />
	</div>
</template>

<style module src="./PerformancePage.module.scss"></style>
