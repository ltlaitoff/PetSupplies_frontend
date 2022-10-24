<script setup lang="ts">
import LogoMain from '../LogoMain/LogoMain.vue'
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch.vue'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch.vue'
import { useStore } from '../../store'
import { LanguageState } from '../../store/language/language.interfaces'
import { ref, watch } from 'vue'

const store = useStore()
const languageCode = ref(
	(store.getters.getLanguage as LanguageState).languageCode
)

watch(store.getters.getLanguage, () => {
	languageCode.value = (store.getters.getLanguage as LanguageState).languageCode
})
</script>

<template>
	<footer :class="$style.footer">
		<div :class="$style.body">
			<LogoMain />
			<div :class="$style.wrapper">
				<LanguageSwitch />
				<ThemeSwitch />
			</div>
			<a :class="$style.privacy">
				{{
					languageCode === 'EN' ? 'Privacy Policy' : 'Політика конфіденційності'
				}}
			</a>
		</div>
	</footer>
</template>

<style module src="./FooterMain.module.scss"></style>
