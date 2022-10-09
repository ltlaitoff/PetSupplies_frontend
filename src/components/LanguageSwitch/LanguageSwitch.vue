<script setup lang="ts">
import { ref } from 'vue'
import { LANGUAGES, LanguageType } from './LanguageSwitch.interfaces'

const props = defineProps({
	defaultLanguage: { type: Number, required: false, default: 0 }
})

const emits = defineEmits({
	change({ id, languageCode }: LanguageType) {
		if (id !== 0 && id !== 1) {
			console.log('1')
		}

		if (id < 0 || id > 2) {
			console.warn('LanguageSwicth: not correct change emit id')
			return false
		}

		// @ts-expect-error Check
		if (languageCode === '') {
			console.warn('LanguageSwicth: not correct change emit languageCode')
			return false
		}

		return true
	}
})

const currentActive = ref(props.defaultLanguage)

function onItemClick(id: LanguageType['id']) {
	if (currentActive.value === id) return

	currentActive.value = id

	emits('change', LANGUAGES[id])
}
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
