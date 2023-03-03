<template>
  <div class="w-full flex justify-center align-middle items-center
        cursor-pointer relative group">
    <h3 class="text-lg tracking-wide absolute z-30 bottom-1/4 opacity-0
        group-hover:opacity-100 transition-all bg-white p-2 hover:bg-red-400
        hover:rounded-full hover:text-white hover:px-6">+ CART</h3>
    <img class="w-[22.5vw] lg:w-1/2 group-hover:scale-110 transition-all" :src="`_nuxt/assets/images/${props.image}`"
      alt="bottle banana" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string
}>();

</script>
