<script setup lang="ts">
import { ref, watch } from 'vue'
import { LANGUAGES } from './LanguageSwitch.interfaces'
import { useStore } from '../../store/store'
import { LanguageType } from '../../types/languages'
import { LanguageMutations } from '../../store/language'

const store = useStore()

const currentActive = ref(store.getters.getLanguage.id)

function onItemClick(id: LanguageType['id']) {
	if (currentActive.value === id) return

	currentActive.value = id

	store.commit(LanguageMutations.SET_LANGUAGE, LANGUAGES[id])
}

watch(store.getters.getLanguage, () => {
	currentActive.value = store.getters.getLanguage.id
})
</script>

<template>
	<div :class="$style.main">
		<button
			:class="[
				$style.item,
				{ [$style.activeItem]: currentActive === LANGUAGES[0].id }
			]"
			@click="onItemClick(LANGUAGES[0].id)"
		>
			{{ LANGUAGES[0].languageCode }}
		</button>
		<div :class="$style.divider"></div>
		<button
			:class="[
				$style.item,
				{ [$style.activeItem]: currentActive === LANGUAGES[1].id }
			]"
			@click="onItemClick(LANGUAGES[1].id)"
		>
			{{ LANGUAGES[1].languageCode }}
		</button>

		<div
			:class="[
				$style.substrate,
				{ [$style.substrateSecond]: currentActive === 1 }
			]"
		></div>
	</div>
</template>

<style module src="./LanguageSwitch.module.scss"></style>
