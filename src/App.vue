<script setup lang="ts">
import HeaderMain from './components/HeaderMain/HeaderMain.vue'
import FooterMain from './components/FooterMain/FooterMain.vue'
import { useStore } from './store/store'

const store = useStore()
store.commit('initialiseStore')
</script>

<template>
	<HeaderMain />
	<router-view />
	<FooterMain />
</template>

<style></style>
