const CART_STORAGE_KEY = "cartItems";

export const cartService = {
  getCartItems: () => {
    const cartItems = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
    return cartItems;
  },

  setCartItems: (cartItems) => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  },

  addToCart: (product) => {
    const cartItems = cartService.getCartItems();
    const newItem = {
      ...product,
      cartId: Date.now() + Math.random().toString(36).substr(2, 9), // unique cart item ID
      quantity: 1,
    };
    cartItems.push(newItem);
    cartService.setCartItems(cartItems);
  },

  removeFromCart: (cartId) => {
    let cartItems = cartService.getCartItems();
    cartItems = cartItems.filter((item) => item.cartId !== cartId);
    cartService.setCartItems(cartItems);
  },

  incrementQuantity: (cartId) => {
    let cartItems = cartService.getCartItems();
    const index = cartItems.findIndex((item) => item.cartId === cartId);
    if (index !== -1) {
      cartItems[index].quantity += 1;
      cartService.setCartItems(cartItems);
    }
  },

  decrementQuantity: (cartId) => {
    let cartItems = cartService.getCartItems();
    const index = cartItems.findIndex((item) => item.cartId === cartId);
    if (index !== -1 && cartItems[index].quantity > 1) {
      cartItems[index].quantity -= 1;
      cartService.setCartItems(cartItems);
    }
  },

  clearCart: () => {
    localStorage.removeItem(CART_STORAGE_KEY);
  },
};
