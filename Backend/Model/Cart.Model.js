const mongoose = require('mongoose');

// Define the schema for the CartItem
const cartItemSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model, reference the user who owns the cart item
    required: true
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product', // Assuming you have a Product model, reference the product in the cart
    required: true
  },
  quantity: {
    type: Number,
    default: 1,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  }
});

// Create the CartItem model
const CartItem = mongoose.model('cart', cartItemSchema);

module.exports = CartItem;
