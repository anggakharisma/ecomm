<template>
	<div class="z-[100] bg-green-500 px-8 py-2 fixed top-14 rounded-lg left-1/2 transform -translate-x-1/2 -translate-y-1/2
		">
		<h4 class="text-lg font-medium text-white">{{ notificationStore.text }}</h4>
	</div>
</template>

<script setup lang="ts">
import { notificationStore } from "../store/notification";

const prpos = defineProps<{
	text?: { type: string, required: false },
	isVisible?: { type: boolean, required: false }
}>();
</script>