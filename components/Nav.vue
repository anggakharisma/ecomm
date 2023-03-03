<template>
  <nav
    class="w-[90vw] mx-auto p-4 mt-4 mb-0 pb-0 flex justify-between align-middle items-center"
  >
    <LogoPart />
    <div class="flex align-middle items-center p-2 relative">
      <div
        class="flex mr-2 align-middle items-center cursor-pointer"
        @click="toggleMenu"
      >
        <h4 class="mr-1 text-white text-2xl">Menu</h4>
        <img
          :class="[isMenuOpen ? 'rotate-180' : 'rotate-0']"
          src="../assets/images/chevron.svg"
          alt="chevron menu"
          class="p-2 transition-all"
        />

        <div
          ref="dropDownRef"
          :class="[isMenuOpen ? 'block' : 'hidden']"
          class="absolute top-14 right-0 left-0 bg-white w-full py-4"
        >
          <p
            class="text-center text-md text-black hover:bg-gray-400 hover:text-white transition-colors py-1"
          >
            About
          </p>
          <p
            class="text-center text-md text-black my-2 hover:bg-gray-400 hover:text-white transition-colors py-1"
          >
            Privacy Policy
          </p>
        </div>
      </div>
      <div
        class="flex relative align-middle items-center cursor-pointer"
        @click="cartStore.showCartModal = true"
      >
        <img width="40" height="40" src="../assets/images/bi_bag.svg" />
        <span
          class="text-center font-semibold hover:bg-red-300 absolute text-black w-5 h-5 rounded-full text-xs bg-white p-[2px] top-0 right-[-5px]"
          >{{ cartStore.cart.length }}</span
        >
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { cartStore } from '../store/cart'

const isMenuOpen = ref(false)
const dropDownRef = ref(null)

onClickOutside(dropDownRef, () => {
  isMenuOpen.value = false
})
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value)
</script>
