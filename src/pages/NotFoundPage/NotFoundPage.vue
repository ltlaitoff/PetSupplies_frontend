<script setup lang="ts"></script>

<template>
	<div :class="$style.notFound">
		<h2 :class="$style.h2">Not found</h2>
		<router-link
			:class="$style.goToHome"
			to="/"
		>
			← Go to Home
		</router-link>
	</div>
</template>

<style module src="./NotFoundPage.module.scss"></style>
