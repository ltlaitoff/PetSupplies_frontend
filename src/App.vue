<script setup lang="ts">
import HeaderMain from './components/HeaderMain/HeaderMain.vue'
import FooterMain from './components/FooterMain/FooterMain.vue'
import { useStore } from './store/store'
import { RootState } from './store/store.interfaces'
import { setColorScheme } from './utils/colorScheme'
import { onMounted, ref } from 'vue'
import {
	getValue as getValueFromStorage,
	setValue as setValueToStorage,
	initialize as initializeStore
} from './utils/storage'

const refToRoot = ref<HTMLDivElement | null>(null)

const store = useStore()
const data = getValueFromStorage()

store.commit('initialiseStore', data)

initializeStore()
store.subscribe((_, state) => {
	const stateTheme = state?.theme?.type || 'auto'
	setColorScheme(stateTheme, document.documentElement)
	setValueToStorage(state)
})

onMounted(() => {
	const stateTheme = (data as RootState).theme?.type || 'auto'
	setColorScheme(stateTheme, document.documentElement)
})
</script>

<template>
	<main ref="refToRoot">
		<HeaderMain />
		<router-view />
		<FooterMain />
	</main>
</template>

<style></style>
