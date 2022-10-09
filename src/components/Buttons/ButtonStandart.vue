<script setup lang="ts">
import ButtonBase from './ButtonBase.vue'

const props = defineProps<{
	disabled?: boolean
}>()

const emits = defineEmits<{ (e: 'click'): void }>()

function onClick() {
	if (props.disabled) return

	emits('click')
}
</script>

<template>
	<ButtonBase
		variant="standart"
		:disabled="disabled"
		@click="onClick"
	>
		<slot />
	</ButtonBase>
</template>

<style></style>
