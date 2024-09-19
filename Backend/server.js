const connect = require("./Connection/db");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

// const stripe = require("stripe")(process.env.PAYMENT);

const userRouter = require("./Routes/userRoutes.js");
const productRouter = require("./Routes/productRoutes.js");
const cartRouter = require("./Routes/cartRoutes.js");
const orderRouter = require("./Routes/OrderRouter.js");
const adminOrderRouter = require("./Routes/Route.js");
const cartItemRouter = require("./Routes/cartItemRoutes.js");
const ratingRouter = require("./Routes/Route.js");
const reviewRating = require("./Routes/Route.js");
const ProductsRoutes = require("./Routes/ProductsRoutes.js");
const checkout = require("./Routes/Checkout.js");
const Payment = require("./Routes/PaymentsRoutes.js");


const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/orders", orderRouter);
app.use("/api/cartItem", cartItemRouter);
app.use("/api/rating", ratingRouter);
app.use("/api/review", reviewRating);
app.use("/api/adminOrder", adminOrderRouter);
app.use("/api/p", ProductsRoutes);
app.use("/api", checkout);
app.use("/api", Payment);


const PORT = process.env.PORT || 5051;

app.listen(PORT, async () => {
  try {
    console.log(
      `Server is running on PORT ${PORT}, database connected successfully`
    );
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
});
