<script setup lang="ts">
/// <reference types="vite-svg-loader" />

import { ref, watch } from 'vue'
import { Theme } from '../../types'
import DATA from './ThemeSwitch.data'
import { useStore, ThemeMutations } from '../../store'

const store = useStore()

const currentActive = ref(store.getters.getTheme.id)

function onItemClick(id: number) {
	if (currentActive.value === id) return

	currentActive.value = id

	store.commit(ThemeMutations.SET_THEME, {
		id: DATA[id].id,
		type: DATA[id].type
	} as Theme)
}

watch(
	() => store.getters.getTheme,
	() => {
		currentActive.value = store.getters.getTheme.id
	}
)
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
