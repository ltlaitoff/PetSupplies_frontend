<script lang="ts" setup>
/// <reference types="vite-svg-loader" />
import Search from '../../assets/icons/search.svg?component'

import { ref, watch } from 'vue'

const inputText = ref('')
const inputError = ref(false)

function onSubmit() {
	if (inputText.value === '') {
		inputError.value = true
		return
	}
}

watch(inputText, async (newText: string) => {
	if (newText === '') {
		inputError.value = true
		return
	}

	inputError.value = false
})
</script>

<template>
	<form
		:class="$style.form"
		@submit="onSubmit"
	>
		<label :class="$style.label">
			<button
				:class="$style.iconButton"
				tabindex="-1"
				@click="onSubmit"
			>
				<Search :class="$style.icon" />
			</button>
			<input
				v-model="inputText"
				:class="[$style.input, `${inputError ? $style.inputError : ''}`]"
				placeholder="Write something"
			/>
			{{ inputText }}
		</label>
	</form>
</template>

<style module src="./SearchBox.module.scss"></style>
