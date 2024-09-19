// const OrderService = require("../Services/Order.Service");

// const CreateOrders = async (req, res) => {
//   const user = req.user; // Assuming user is attached to req object by middleware
//   try {
//     const createOrder = await OrderService.CreateOrder(user, req.body);
//     return res.status(200).json(createOrder);
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// };

// // Get a single order by ID
// const GetOrder = async (req, res) => {
//   try {
//     const getOrder = await OrderService.GetOrder(req.params.id);
//     return res.status(200).json(getOrder);
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// };

// // Get orders for a specific user
// const UserOrders = async (req, res) => {
//   const user = req.user; // Assuming authentication middleware attaches user to req object
//   try {
//     const userOrders = await OrderService.userOrders(user._id);
//     return res.status(200).json(userOrders);
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// };

// // Get all orders
// const GetAllOrders = async (req, res) => {
//   try {
//     const orders = await OrderService.GetAllOrder();
//     res.status(200).json(orders);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = {
//   CreateOrders,
//   GetOrder,
//   UserOrders,
//   GetAllOrders,
// };










// Order.Controller.js

const orderService = require('../Services/Order.Service');

const createOrder = async (req, res) => {
  const { userId, address, items } = req.body;

  try {
    const order = await orderService.createOrder(userId, address, items);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOrdersByUserId = async (req, res) => {
  const userId = req.params.userId;

  try {
    const orders = await orderService.getOrdersByUserId(userId);
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Error fetching orders' });
  }
};

const getAllOrder = async (req, res) => {
  try {
    const order = await orderService.getAllOrders();
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    // res.status(500).json({ error: "Failed to fetch order" });
    return sendError(res, "Failed to fetch order");
  }
};

module.exports = {
  createOrder,
  getOrdersByUserId,
  getAllOrder
};
