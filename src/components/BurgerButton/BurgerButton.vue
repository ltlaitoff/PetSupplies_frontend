<script setup lang="ts">
const props = defineProps<{
	activated?: boolean
}>()
</script>

<template>
	<button
		:class="[
			$style.button,
			props.activated === true ? $style.buttonActivated : ''
		]"
	>
		<span :class="[$style.line, $style.line1]" />
		<span :class="[$style.line, $style.line2]" />
		<span :class="[$style.line, $style.line3]" />
		<span :class="[$style.line, $style.line4]" />
	</button>
</template>

<style module src="./BurgerButton.module.scss"></style>
