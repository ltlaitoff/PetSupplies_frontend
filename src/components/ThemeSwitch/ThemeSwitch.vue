<script setup lang="ts">
/// <reference types="vite-svg-loader" />

import { ref } from 'vue'
import { Theme } from '../../types'
import DATA from './ThemeSwitch.data'

const props = defineProps({
	defaultThemeId: { type: Number, required: false, default: 0 }
})

const emits = defineEmits<{ (e: 'change', data: Theme): void }>()

const currentActive = ref(props.defaultThemeId)

function onItemClick(id: number) {
	if (currentActive.value === id) return

	currentActive.value = id

	emits('change', { id: DATA[id].id, type: DATA[id].type } as Theme)
}
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
