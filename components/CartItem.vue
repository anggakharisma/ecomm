<template>
  <div class="flex justify-around align-middle items-center my-8 border-solid border-b-gray-200 pb-4 border-b-2">
    <img class="w-24 ml-4" :src="`_nuxt/assets/images/${props.image}`" alt="from" />
    <p class="max-w-[24px] mr-8 font-semibold">{{ productName }}</p>
    <p>{{ qty }}</p>
    <p>
      {{
        (qty * price).toLocaleString('id-ID', {
          style: 'currency',
          currency: 'IDR',
        })
      }}
    </p>
    <p class="text-red-500 cursor-pointer">x</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string
  productName: string
  qty: number
  price: number
}>()

</script>
