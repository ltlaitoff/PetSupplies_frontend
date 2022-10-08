<script lang="ts" setup>
/// <reference types="vite-svg-loader" />
import Search from '../../assets/icons/search.svg?component'

import { ref, watch, defineEmits } from 'vue'

const emit = defineEmits({
	submit: (value: string) => {
		if (value === '') {
			console.warn('Invalid submit event payload!')
			return false
		}

		return true
	}
})

const inputText = ref('')
const inputError = ref(false)
const inputTemplate = ref<HTMLInputElement | null>(null)

function onSubmitButton() {
	if (inputTemplate.value) {
		inputTemplate.value.focus()
	}

	onSubmit()
}

function onSubmit() {
	if (inputText.value === '') {
		inputError.value = true
		return
	}

	emit('submit', inputText.value)
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
				type="button"
				@click="onSubmitButton"
			>
				<Search :class="$style.icon" />
			</button>
			<input
				ref="inputTemplate"
				v-model="inputText"
				:class="[$style.input, `${inputError ? $style.inputError : ''}`]"
				placeholder="Write something"
			/>
			{{ inputText }}
		</label>
	</form>
</template>

<style module src="./SearchBox.module.scss"></style>
