<script setup lang="ts">
import MainLogo from '../../components/LogoMain/LogoMain.vue'
import SearchBox from '../../components/SearchBox/SearchBox.vue'

function onSearchBoxSubmit(value: string) {
	console.log(`SearchBox @submit: ${value}`)
}
</script>

<template>
	<div :class="$style.perf">
		<MainLogo />
		<SearchBox @submit="onSearchBoxSubmit" />
	</div>
</template>

<style module src="./PerformancePage.module.scss"></style>
