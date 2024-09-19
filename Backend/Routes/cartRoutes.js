// const express = require("express");
// // // const upload = require("../Config/Multer.js");
// const CartController = require("../Controller/Cart.Controller.js");

// // // const auth = require("../Config/Auth.js").auth;
// const router = express.Router();

// router.put("/", CartController.addToCart);
// router.delete("/:id", CartController.removeFromCart);

// module.exports = router;

const express = require('express');
const router = express.Router();

// Example cart controller
const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = require('../Controller/Cart.Controller');

router.post('/add', addToCart);
router.delete('/remove/:productId', removeFromCart);
router.put('/increment/:productId', incrementQuantity);
router.put('/decrement/:productId', decrementQuantity);
router.delete('/clear', clearCart);

module.exports = router;
