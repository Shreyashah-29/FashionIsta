// Order.Model.js

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  address: {
    type: String,
    required: true
  },
  items: [{
    name: String,
    price: Number,
    quantity: Number,
    description: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
