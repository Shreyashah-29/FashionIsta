const express = require("express");
// // const upload = require("../Config/Multer.js");
const CartItemController = require("../Controller/CartItem.Controller.js");
// // const auth = require("../Config/Auth.js").auth;
const router = express.Router();

router.put("/add", CartItemController.addToCart);
router.put("/:id", CartItemController.updateCartItem);
router.delete("/:id", CartItemController.removeCartItem);

module.exports = router;
