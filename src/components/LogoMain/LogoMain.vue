<script setup lang="ts"></script>

<template>
	<router-link
		to="/"
		:class="$style.logo"
	>
		<span :class="$style.highlight">Pet</span>
		Supplies
	</router-link>
</template>

<style module src="./LogoMain.module.scss"></style>
