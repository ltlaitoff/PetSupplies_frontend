<script setup lang="ts">
import LogoMain from '../LogoMain/LogoMain.vue'
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch.vue'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch.vue'
</script>

<template>
	<footer :class="$style.footer">
		<div :class="$style.body">
			<LogoMain />
			<div :class="$style.wrapper">
				<LanguageSwitch />
				<ThemeSwitch />
			</div>
			<a>Privacy Policy</a>
		</div>
	</footer>
</template>

<style module src="./FooterMain.module.scss"></style>
