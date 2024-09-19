const CartItemService = require("../Services/CartIem.Service");
const CartItem = require("../Model/CartItem.Model");

const CartItemController = {
  async addToCart(req, res) {
    const { product, size, qty } = req.body;

    try {
      if (!product || !size || !qty) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Create a new cart item
      const newCartItem = new CartItem({
        product,
        size,
        qty,
        // Add any additional fields needed
      });

      await newCartItem.save();

      // You may want to calculate and update cart totals here

      res.status(201).json(newCartItem);
    } catch (error) {
      console.error("Error adding product to cart:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  async createCartItem(req, res) {
    try {
      const { cartId, product, size, qty, price, discountPrice, userId } =
        req.body;
      const newCartItem = await CartItemService.createCartItem(
        cartId,
        product,
        size,
        qty,
        price,
        discountPrice,
        userId
      );
      res.status(201).json(newCartItem);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  async updateCartItem(req, res) {
    try {
      const { id } = req.params;
      const updates = req.body;
      const updatedCartItem = await CartItemService.updateCartItem(id, updates);
      res.status(200).json(updatedCartItem);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  async removeCartItem(req, res) {
    try {
      const { id } = req.params;
      const deletedCartItem = await CartItemService.removeCartItem(id);
      res.status(200).json(deletedCartItem);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = CartItemController;
