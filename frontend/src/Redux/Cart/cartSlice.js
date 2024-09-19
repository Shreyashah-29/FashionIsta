import { createSlice } from "@reduxjs/toolkit";
import { cartService } from "./cartService";

const initialState = {
  cartItems: cartService.getCartItems(),
  cartCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId, name, img, price, color, size } = action.payload;
      const newItem = {
        productId,
        name,
        img,
        price,
        color,
        size,
        quantity: 1,
        cartId: Date.now() + Math.random().toString(36).substr(2, 9), // unique cart item ID
      };
      state.cartItems.push(newItem);
      state.cartCount += 1;
      cartService.setCartItems(state.cartItems);
    },
    removeFromCart: (state, action) => {
      const { cartId } = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.cartId !== cartId
      );
      cartService.setCartItems(state.cartItems);
    },
    incrementQuantity: (state, action) => {
      const { cartId } = action.payload;
      const index = state.cartItems.findIndex((item) => item.cartId === cartId);
      if (index !== -1) {
        state.cartItems[index].quantity += 1;
        cartService.setCartItems(state.cartItems);
      }
    },
    decrementQuantity: (state, action) => {
      const { cartId } = action.payload;
      const index = state.cartItems.findIndex((item) => item.cartId === cartId);
      if (index !== -1 && state.cartItems[index].quantity > 1) {
        state.cartItems[index].quantity -= 1;
        cartService.setCartItems(state.cartItems);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      cartService.clearCart();
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
