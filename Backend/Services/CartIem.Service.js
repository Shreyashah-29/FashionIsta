const CartItem = require('../Model/CartItem.Model');

const CartItemService = {
  async createCartItem(cartId, product, size, qty, price, discountPrice, userId) {
    try {
      const newCartItem = new CartItem({
        cart: cartId,
        product,
        size,
        qty,
        price,
        discountPrice,
        userId
      });

      await newCartItem.save();
      return newCartItem;
    } catch (error) {
      throw error;
    }
  },

  async updateCartItem(id, updates) {
    try {
      const updatedCartItem = await CartItem.findByIdAndUpdate(id, updates, { new: true });
      return updatedCartItem;
    } catch (error) {
      throw error;
    }
  },

  async removeCartItem(id) {
    try {
      const deletedCartItem = await CartItem.findByIdAndDelete(id);
      return deletedCartItem;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = CartItemService;
