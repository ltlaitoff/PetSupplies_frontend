<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
	type: Array<{
		title: string
		description: string
	}>
}>()

const labelInfo = computed(() => {
	const type = props.type

	const typeData = {
		All: {
			class: 'all',
			text: 'All'
		},
		Cats: {
			class: 'cats',
			text: 'Cats'
		},
		Dogs: {
			class: 'dogs',
			text: 'Dogs'
		}
	}

	if (type.length === 1) {
		// @ts-expect-error test
		return typeData[type[0].title]
	}

	return typeData['All']
})
</script>

<template>
	<div :class="[$style.typeLabel, $style[labelInfo.class]]">
		{{ labelInfo.text }}
	</div>
</template>

<style module src="./ProductCardTypeLabel.module.scss" />
