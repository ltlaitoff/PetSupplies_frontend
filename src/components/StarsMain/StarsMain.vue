<script setup lang="ts">
/// <reference types="vite-svg-loader" />
import StarIcon from '../../assets/icons/star.svg?component'

const props = defineProps<{
	active: number
}>()
</script>

<template>
	<div :class="$style.stars">
		<StarIcon :class="[$style.star, props.active >= 1 ? $style.active : '']" />
		<StarIcon :class="[$style.star, props.active >= 2 ? $style.active : '']" />
		<StarIcon :class="[$style.star, props.active >= 3 ? $style.active : '']" />
		<StarIcon :class="[$style.star, props.active >= 4 ? $style.active : '']" />
		<StarIcon :class="[$style.star, props.active == 5 ? $style.active : '']" />
	</div>
</template>

<style module src="./StarsMain.module.scss"></style>
