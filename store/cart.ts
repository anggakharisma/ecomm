import { ref } from 'vue'

export const cartStore = ref({
  showCartModal: false,
  cart: [] as Array<CartItem>,
  addItem(item: CartItem) {
    if (!this.cart.find((cartItem) => item.productName === cartItem.productName)) {
      this.cart.push(item)
    } else {
      this.cart.forEach((cartItem) =>
        item.productName === cartItem.productName
          ? { ...cartItem, qty: ++cartItem.qty }
          : { ...item, qty: 1 }
      )
    }
  },
  deleteItem(item: CartItem) {
    this.cart = this.cart.filter((cartItem) => cartItem.id !== item.id)
  },
})
