const express = require("express");
const router = express.Router();
const Stripe = require("stripe")(process.env.PAYMENT);

router.post("/checkout", async (req, res) => {
  try {
    const { products } = req.body;

    // Validate request body
    if (!Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ error: "Products array is required" });
    }

    const lineItems = products.map((product) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: product.product_name,
          images: [product.product_img],
        },
        unit_amount: Math.round(product.product_price * 100), // Amount in cents
      },
    //   quantity: product.product_qty,
    }));

    const session = await Stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://192.168.2.61:3000/", // Replace with actual URLs
      cancel_url: "http://192.168.2.61:300/signIn",   // Replace with actual URLs
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

module.exports = router;
