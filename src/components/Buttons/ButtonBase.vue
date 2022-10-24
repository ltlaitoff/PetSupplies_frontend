<script setup lang="ts">
import { VariantProp } from './ButtonBase.interfaces'

const defaultVariantProp: VariantProp = 'outline'
const props = defineProps<{
	variant?: VariantProp
	disabled?: boolean
}>()

const emits = defineEmits<{ (e: 'click'): void }>()

function onClick() {
	if (props.disabled) return

	emits('click')
}
</script>

<template>
	<button
		:class="[$style.button, $style[props.variant || defaultVariantProp]]"
		:disabled="disabled"
		@click.prevent="onClick"
	>
		<slot />
	</button>
</template>

<style module src="./ButtonBase.module.scss"></style>
