<script setup lang="ts">
/// <reference types="vite-svg-loader" />

import { ref, watch } from 'vue'
import { Theme } from '../../types'
import DATA from './ThemeSwitch.data'
import { useStore } from '../../store/store'
import { ThemeMutations } from '../../store/theme/theme.interfaces'

const props = defineProps({
	defaultThemeId: { type: Number, required: false, default: 0 }
})

const emits = defineEmits<{ (e: 'change', data: Theme): void }>()

const store = useStore()

const currentActive = ref(props.defaultThemeId)

function onItemClick(id: number) {
	if (currentActive.value === id) return

	currentActive.value = id

	console.log(store.getters.getTheme)

	store.commit(ThemeMutations.SET_THEME, {
		id: DATA[id].id,
		type: DATA[id].type
	} as Theme)

	emits('change', { id: DATA[id].id, type: DATA[id].type } as Theme)
}

watch(store.getters.getTheme, () => {
	currentActive.value = store.getters.getTheme.id
})
</script>

<template>
	<div :class="$style.main">
		<button
			v-for="element in DATA"
			:key="element.id"
			:class="[
				$style.item,
				element.additionalClasses?.map(item => $style[item]),
				{ [$style.activeItem]: currentActive === element.id }
			]"
			@click="onItemClick(element.id)"
		>
			<component :is="element.icon" />
		</button>

		<div
			:class="[$style.substrate, $style[`substrate-${currentActive}`]]"
		></div>
	</div>
</template>

<style module src="./ThemeSwitch.module.scss"></style>
