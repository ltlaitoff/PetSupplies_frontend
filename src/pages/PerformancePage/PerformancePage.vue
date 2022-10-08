<script setup lang="ts">
import MainLogo from '../../components/LogoMain/LogoMain.vue'
import SearchBox from '../../components/SearchBox/SearchBox.vue'
</script>

<template>
	<div :class="$style.perf">
		<MainLogo />
		<SearchBox />
	</div>
</template>

<style module src="./PerformancePage.module.scss"></style>
