<template>
	<div class="flex justify-around align-middle items-center my-8 border-solid border-b-gray-200 pb-4 border-b-2">
		<img class="w-24 ml-4" :src="useAssets(`${item.image}`)" alt="from" />
		<p class="max-w-[24px] mr-8 font-semibold">{{ item.productName }}</p>
		<p>{{ item.qty }}</p>
		<p v-if="item.qty">
			{{
				(item!.qty * item.price).toLocaleString('id-ID', {
					style: 'currency',
					currency: 'IDR',
				})
			}}
		</p>
		<p class="text-red-500 cursor-pointer" @click="deleteItem">x</p>
	</div>
</template>

<script setup lang="ts">
import { notificationStore } from '~/store/notification';
import { cartStore } from '../store/cart'
import useAssets from '../composable/useAssets'

const props = defineProps<{ item: CartItem }>();

const deleteItem = () => {
	if (confirm("Do you wanna delete this item ?")) {
		const { item } = props;
		cartStore.value.deleteItem(item);

		notificationStore.value.showNotification("Item deleted");
	}
}

</script>
