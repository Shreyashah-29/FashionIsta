const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  product_price: {
    type: Number,
    required: true,
  },
  product_brand: {
    type: String,
    required: true,
  },
  product_description: {
    type: String,
    required: true,
  },
  product_color: {
    type: [String], // Accepts an array of strings
    required: true,
  },
  product_size: {
    type: [String], // Accepts an array of strings
    required: true,
  },
  product_discount_price: {
    type: Number,
  },
  product_discount_percent: {
    type: Number,
  },
  product_img: {
    type: String,
    required: true,
  },
  ratings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "ratings",
  }],
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "reviews",
  }],
  numRate: {
    type: Number,
    default: 0,
  },
  product_category1: {
    type: String,
    required: true,
  },
  product_category2: {
    type: String,
    required: true,
  },
  product_category3: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
