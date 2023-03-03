<template>
  <div class="w-full flex justify-center align-middle items-center">
    <img class="w-[22.5vw] lg:w-1/2 hover:scale-110 transition-all" :src="`_nuxt/assets/images/${props.image}`"
      alt="bottle banana" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string
}>();

</script>
