
// // // // const express = require('express');
// // // // const router = express.Router();
// // // // const Stripe = require("stripe")(process.env.PAYMENT);

// // // // router.post("/create-checkout-session",async(req,res)=>{
// // // //     const {product} = req.body;
// // // //     console.log("here2");
// // // //     console.log(product);
// // // //     const lineItems = product.map((product) => ({
// // // //         price_data: {
// // // //             currency: "inr",
// // // //             product_data: {
// // // //                 name: product.name
// // // //             },
// // // //             unit_amount: product.price * 100
// // // //         },
// // // //         quantity: product.quantity
// // // //     }));

// // // //     const session = await Stripe.checkout.sessions.create({
// // // //         payment_methods_types : ["card"],
// // // //         line_items:lineItems,
// // // //           mode:"payment",
// // // //           success_url:"http://192.168.2.61:3000/success",
// // // //           cancel_url:"http://192.168.2.61:3000/cancel",

// // // //     })
// // // // console.log("here1");
// // // //     res.json({id: session.id})
// // // // }) 

// // // // module.exports = router;


// // const express = require('express');
// // const router = express.Router();
// // const Stripe = require("stripe")("sk_test_51PT2PmRxgLrT02fVu6iRJbJ9M0w5CZ42gdTNMcbC0uU2A03cLBuW8GHlTwbfFe9ldDgYKA0iMSWQNqsQR8lOmUr7002pkzxcKb");

// // router.post("/create-checkout-session", async (req, res) => {
// //     try {
// //         const { products } = req.body;
// //         console.log("Received products:", products);

// //         const lineItems = products.map((prod) => ({
// //             price_data: {
// //                 currency: "inr",
// //                 product_data: {
// //                     name: prod.name
// //                 },
// //                 unit_amount: prod.price * 100
// //             },
// //             quantity: prod.quantity
// //         }));

// //         const session = await Stripe.checkout.sessions.create({
// //             payment_method_types: ["card"],
// //             line_items: lineItems,
// //             mode: "payment",
// //             success_url: "http://192.168.2.61:3000/success",
// //             cancel_url: "http://192.168.2.61:3000/cancel",
// //         });

// //         console.log("Stripe session created:", session.id);
// //         res.json({ id: session.id });
// //     } catch (error) {
// //         console.error("Error creating Stripe session:", error);
// //         res.status(500).json({ error: "Failed to create Stripe session" });
// //     }
// // });

// // module.exports = router;

// const express = require('express');
// const router = express.Router();
// const Stripe = require("stripe")("sk_test_51PT2PmRxgLrT02fVu6iRJbJ9M0w5CZ42gdTNMcbC0uU2A03cLBuW8GHlTwbfFe9ldDgYKA0iMSWQNqsQR8lOmUr7002pkzxcKb");

// router.post("/create-checkout-session", async (req, res) => {
//   try {
//     const { lineItems, successUrl, cancelUrl } = req.body;
    
//     const session = await Stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: lineItems,
//       mode: "payment",
//       success_url: successUrl,
//       cancel_url: cancelUrl,
//     });

//     console.log("Stripe session created:", session.id);
//     res.json({ id: session.id });
//   } catch (error) {
//     console.error("Error creating Stripe session:", error);
//     res.status(500).json({ error: "Failed to create Stripe session" });
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const Stripe = require("stripe")("sk_test_51PT2PmRxgLrT02fVu6iRJbJ9M0w5CZ42gdTNMcbC0uU2A03cLBuW8GHlTwbfFe9ldDgYKA0iMSWQNqsQR8lOmUr7002pkzxcKb");

router.post("/create-checkout-session", async (req, res) => {
  try {
    const { lineItems, successUrl, cancelUrl } = req.body;
    
    const session = await Stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    console.log("Stripe session created:", session.id);
    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating Stripe session:", error);
    res.status(500).json({ error: "Failed to create Stripe session" });
  }
});

router.get("/success", (req, res) => {
  // Fetch items from localStorage
  const purchasedItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  res.render("success", { purchasedItems }); // Render success page with purchased items
});

module.exports = router;
