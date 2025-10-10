<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getMostRatingCards } from '../../api/getProductCards'
import ProductCard from '../../components/ProductCard/ProductCard.vue'

const cards = ref<null | any>(null)

onMounted(() => {
	getMostRatingCards().then(data => {
		cards.value = data
	})
})
</script>

<template>
	<div :class="$style.h1">Home page</div>
	<div :class="$style.popular">
		<div :class="$style.popularHead">
			<h2>Popular</h2>
		</div>
		<div
			v-if="cards !== null"
			:class="$style.cards"
		>
			<router-link
				v-for="card in cards"
				:key="card._id"
				:to="'/product/' + card._id"
			>
				<ProductCard
					:_id="card._id"
					:title="card.title"
					:description="card.description"
					:price="card.price"
					:stars="card.stars"
					:image="card.image"
					:type="card.type"
					:novelty="card.novelty"
					:discount="card.discount"
					:discountValue="card.discountValue"
					:discountPreviousValue="card.discountPreviousValue"
					:showTypeLabel="true"
				/>
			</router-link>
		</div>
	</div>
</template>

<style module src="./HomePage.module.scss"></style>
