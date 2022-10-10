<script setup lang="ts">
/// <reference types="vite-svg-loader" />

import { ref } from 'vue'
import DarkIcon from '../../assets/icons/ThemeSwith/dark.svg?component'
import AutoIcon from '../../assets/icons/ThemeSwith/auto.svg?component'
import LightIcon from '../../assets/icons/ThemeSwith/light.svg?component'

const DATA = [
	{
		id: 0,
		type: 'dark',
		icon: DarkIcon
	},
	{
		id: 1,
		type: 'auto',
		icon: AutoIcon
	},
	{
		id: 2,
		type: 'light',
		icon: LightIcon,
		additionalClasses: ['item22']
	}
]

const props = defineProps({
	defaultThemeId: { type: Number, required: false, default: 0 }
})

const emits = defineEmits({
	change({ id, type }: { id: number; type: string }) {
		if (id < 0 || id > 3) {
			console.warn('ThemeSwitch: not correct change emit id')
			return false
		}

		if (type === '') {
			console.warn('ThemeSwitch: not correct change emit type')
			return false
		}

		return true
	}
})

const currentActive = ref(props.defaultThemeId)

function onItemClick(id: number) {
	if (currentActive.value === id) return

	currentActive.value = id

	emits('change', { id: DATA[id].id, type: DATA[id].type })
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

<style module src="./ThemeSwith.module.scss"></style>
