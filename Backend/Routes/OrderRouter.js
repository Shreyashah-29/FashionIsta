const express = require("express");
const OrderController = require("../Controller/Order.controller.js");

const router = express.Router();

router.post('/create', OrderController.createOrder);
router.get('/user/:userId', OrderController.getOrdersByUserId);
router.get("/", OrderController.getAllOrder);

module.exports = router;
