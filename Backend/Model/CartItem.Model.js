const mongoose = require("mongoose")

const cartItemSchema = new mongoose.Schema({

    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cart",
        // required: true
    },
    product: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        // required: true
    }],
    size: {
        type: String,
        // required: true,
    },
    qty: {
        type: Number,
        // required: true,
        default: 1
    },
    price: {
        type: Number,
        // required: true,
    },
    discountPrice: {
        type: Number,
        // required: true,
   
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        // required: true
    }
})

const cartItem = mongoose.model("cartItems", cartItemSchema)
module.exports = cartItem;   