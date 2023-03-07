<template>
  <!-- Design inspiration: https://dribbble.com/shots/4828084/attachments/4828084-Shopping-Cart-UI?mode=media -->
  <Transition name="fade">
    <div
      v-if="cartStore.showCartModal"
      class="bg-black top-0 left-0 right-0 bottom-0 fixed h-screen w-full z-40 flex justify-around align-middle items-center bg-opacity-80"
    >
      <div
        ref="cartRef"
        class="bg-white max-h-[90vh] opacity-100 w-[80vw] lg:w-1/2 m-auto p-4 px-8 overflow-y-scroll"
      >
        <div class="flex justify-between w-full bg-red">
          <h1 class="text-md my-4 font-semibold">Shopping Cart</h1>
        </div>
        <h4 v-if="cartStore.cart.length < 1" class="text-center">Empty cart</h4>
        <CartItem
          v-for="item in cartStore.cart"
          :key="item.id"
          :image="item.image"
          :product-name="item.productName"
          :qty="item.qty"
          :price="item.price"
        />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
import { cartStore } from '../store/cart'

const cartRef = ref(null)

onClickOutside(cartRef, () => {
  cartStore.value.showCartModal = false
})
</script>

<style>
.fade-enter {
  opacity: 0.5;
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transition: opacity 0.25s ease;
}
</style>
