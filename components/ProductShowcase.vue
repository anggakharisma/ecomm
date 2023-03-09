<template>
	<div class="w-full flex justify-center align-middle items-center
			cursor-pointer relative group">
		<h3 @click="addItemToCart" class="text-lg tracking-wide absolute z-30 bottom-1/4 opacity-0
			group-hover:opacity-100 hover:rounded-full transition-all bg-white p-2 hover:bg-red-400 ounded-full hover:text-white hover:px-6">+ CART
		</h3>
		<img class="w-[22.5vw] lg:w-1/2 group-hover:scale-110 transition-all" :src="useAssets(`${props.image}`)"
			alt="bottle banana" />
	</div>
</template>

<script setup lang="ts">
import { cartStore } from '../store/cart';
import { notificationStore } from '../store/notification';
import useAssets from '../composable/useAssets'


const props = defineProps<{
	id: number,
	image: string,
	productName: string,
	price: number
}>();

const addItemToCart = () => {
	cartStore.value.addItem({
		id: props.id,
		image: props.image,
		price: props.price,
		productName: props.productName,
		qty: 1
	});

	notificationStore.value.showNotification(`${props.productName} Added to cart`);

}

</script>
