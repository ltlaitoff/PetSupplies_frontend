<script setup lang="ts">
import { useStore } from '../../store'
import { ref, watch } from 'vue'
import { LanguageState } from '../../store/language/language.interfaces'
import StarsMain from '../StarsMain/StarsMain.vue'
import ProductCardTypeLabel from './ProductCardTypeLabel.vue'

const store = useStore()
const languageCode = ref(
	(store.getters.getLanguage as LanguageState).languageCode
)

watch(store.getters.getLanguage, () => {
	languageCode.value = (store.getters.getLanguage as LanguageState).languageCode
})

interface ProductCardProps {
	_id: string
	title: {
		en: string
		ua: string
	}
	description: {
		en: string
		ua: string
	}
	price: number
	stars: number
	image: string
	type: Array<{
		title: string
		description: string
	}>
	novelty: boolean
	discount: boolean
	discountValue: number
	discountPreviousValue: number

	showTypeLabel?: boolean
}

const props = defineProps<ProductCardProps>()
</script>

<template>
	<div :class="$style.card">
		<div :class="$style.labels">
			<div class="typeLabel">
				<ProductCardTypeLabel
					v-if="props.showTypeLabel || false"
					:type="props.type"
				/>
			</div>
		</div>

		<div :class="$style.head">
			<img
				:class="$style.image"
				:src="'data:image/png;base64,' + props.image"
				alt=""
			/>
		</div>

		<div :class="$style.body">
			<div :class="$style.bodyHeader">
				<div :class="$style.description">
					{{
						languageCode === 'EN' ? props.description.en : props.description.ua
					}}
				</div>
				<h3 :class="$style.title">
					{{ languageCode === 'EN' ? props.title.en : props.title.ua }}
				</h3>
			</div>

			<div :class="$style.bodyFooter">
				<div :class="$style.priceBlock">
					<div
						:class="[
							$style.currentPrice,
							props.discount ? $style.currentPriceDiscount : ''
						]"
					>
						{{ props.price }}₴
					</div>
					<div
						v-if="props.discount"
						:class="$style.oldPrice"
					>
						{{ props.discountPreviousValue }}₴
					</div>
				</div>

				<StarsMain
					:class="$style.stars"
					:active="props.stars"
				/>
			</div>
		</div>
	</div>
</template>

<style module src="./ProductCard.module.scss" />
