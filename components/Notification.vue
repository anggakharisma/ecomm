<template>
	<div class="bg-green-500 px-8 py-2 z-30 fixed top-14 rounded-lg left-1/2 transform -translate-x-1/2 -translate-y-1/2
">
		<h4 class="text-lg font-medium text-white">{{ text }}</h4>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	text: string;
}>();
</script>