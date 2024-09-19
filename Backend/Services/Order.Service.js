// const Order = require("../Model/Order.Model");
// const orderItem = require("../Model/OrderItem.Model");
// const CartService = require("../Services/Cart.Service");

// // Create a new order
// const CreateOrder = async (user, shippingAddress) => {
//   try {
//     // Create or find the shipping address
//     let address;

//     // Retrieve user's cart items
//     const cart = await CartService.FindUserCart(user._id);
//     const orderItems = [];

//     // Create order items from cart items
//     for (const item of cart.cartItems) {
//       const orderItem = new orderItem({
//         price: item.price,
//         product: item.product,
//         qty: item.qty,
//         // Add more fields as per your OrderItem model
//       });
//       const createdOrderItem = await orderItem.save();
//       orderItems.push(createdOrderItem);
//     }

//     // Calculate total price, discount, etc.
//     const totalPrice = cart.totalPrice;
//     const discountPrice = cart.discountPrice;
//     const discount = cart.discount;
//     const totalItem = cart.totalItem;

//     // Create the order
//     const newOrder = new Order({
//       user,
//       orderItems,
//       totalPrice,
//       discountPrice,
//       discount,
//       totalItem,
//       shippingAddress: address,
//     });

//     const savedOrder = await newOrder.save();
//     return savedOrder;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// // Find an order by ID
// const GetOrder = async (orderId) => {
//   const mongoose = require("mongoose");
//   const ObjectId = mongoose.Types.ObjectId; // Import ObjectId from mongoose

//   try {
//     const order = await Order.findById(ObjectId(orderId)) // Convert orderId to ObjectId
//       .populate("user")
//       .populate({ path: "orderItems", populate: { path: "product" } })
//       .populate("shippingAddress");

//     return order;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// // Get all orders
// const GetAllOrder = async () => {
//   try {
//     return await Order.find()
//       .populate({ path: 'orderItems', populate: { path: 'product' } })
//       .populate('shippingAddress')
//       .populate('user')
//       .lean(); // Use lean() for lightweight objects if you don't need to modify them
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// // Find orders for a specific user
// const userOrders = async (userId) => {
//   try {
//     const order = await Order.find({
//       user: userId,
//       orderStatus: "Placed",
//     })
//       .populate({ path: "orderItems", populate: { path: "product" } })
//       .lean();
//     return order;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// // Delete an order by ID
// const DeleteOrder = async (orderId) => {
//   const order = await GetOrder(orderId);
//   if (!order) {
//     throw new Error("Order not found");
//   }
//   await Order.findByIdAndDelete(order._id);
// };

// module.exports = {
//   CreateOrder,
//   GetOrder,
//   GetAllOrder,
//   userOrders,
//   DeleteOrder,
// };








// Order.Service.js

const Order = require('../Model/Order.Model');

const createOrder = async (userId, address, items) => {
  try {
    const order = new Order({
      userId,
      address,
      items
    });
    await order.save();
    return order;
  } catch (error) {
    throw new Error('Error creating order');
  }
};


const getOrdersByUserId = async (userId) => {
  try {
    const orders = await Order.find({ userId }).sort({ createdAt: -1 });
    return orders;
  } catch (error) {
    throw new Error('Error fetching orders');
  }
};

const getAllOrders = async () => {
  try {
    const fetchedOrders = await Order.find().lean().exec();
    return fetchedOrders;
  } catch (error) {
    console.error(error);
    throw error; 
  }
};

module.exports = {
  createOrder,
  getOrdersByUserId,
  getAllOrders
};
