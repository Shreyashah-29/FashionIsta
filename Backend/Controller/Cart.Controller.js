// const cartService = require('../Services/Cart.Service');

// const createCart = async (req, res) => {
//     const { userId } = req.body;
//     try {
//         const cart = await cartService.createCart(userId);
//         res.status(201).json(cart);
//     } catch (error) {
//         console.error('Error creating cart:', error);
//         res.status(500).json({ error: 'Failed to create cart' });
//     }
// };

// const addToCart = async (req, res) => {
//     const { userId, productId, quantity, selectedColor, selectedSize } = req.body;
//     try {
//         const cart = await cartService.addToCart(userId, productId, quantity, selectedColor, selectedSize);
//         res.status(200).json(cart);
//     } catch (error) {
//         console.error('Error adding to cart:', error);
//         res.status(500).json({ error: 'Failed to add product to cart' });
//     }
// };

// const removeFromCart = async (req, res) => {
//     const { userId, productId } = req.body;
//     try {
//         const cart = await cartService.removeFromCart(userId, productId);
//         res.status(200).json(cart);
//     } catch (error) {
//         console.error('Error removing from cart:', error);
//         res.status(500).json({ error: 'Failed to remove product from cart' });
//     }
// };

// module.exports = {
//     createCart,
//     addToCart,
//     removeFromCart
// };


// Example cartController.js
const CartItem = require('../Model/Cart.Model'); // Assuming you have a CartItem model

// Add item to cart
exports.addToCart = async (req, res) => {
  const { productId } = req.body;
  try {
    // Check if item exists in cart, update quantity if so; otherwise, add new item
    let cartItem = await CartItem.findOne({ productId });
    if (cartItem) {
      cartItem.quantity++;
    } else {
      cartItem = new CartItem({ productId, quantity: 1 });
    }
    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Remove item from cart
exports.removeFromCart = async (req, res) => {
  const { productId } = req.params;
  try {
    await CartItem.deleteOne({ productId });
    res.status(200).json({ message: 'Item removed from cart' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Increment quantity of item in cart
exports.incrementQuantity = async (req, res) => {
  const { productId } = req.params;
  try {
    let cartItem = await CartItem.findOne({ productId });
    if (cartItem) {
      cartItem.quantity++;
      await cartItem.save();
      res.status(200).json(cartItem);
    } else {
      res.status(404).json({ error: 'Item not found in cart' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Decrement quantity of item in cart
exports.decrementQuantity = async (req, res) => {
  const { productId } = req.params;
  try {
    let cartItem = await CartItem.findOne({ productId });
    if (cartItem) {
      if (cartItem.quantity > 1) {
        cartItem.quantity--;
        await cartItem.save();
        res.status(200).json(cartItem);
      } else {
        res.status(400).json({ error: 'Minimum quantity reached' });
      }
    } else {
      res.status(404).json({ error: 'Item not found in cart' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Clear all items from cart
exports.clearCart = async (req, res) => {
  try {
    await CartItem.deleteMany({});
    res.status(200).json({ message: 'Cart cleared' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
