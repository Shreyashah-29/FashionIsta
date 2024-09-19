// // // // // // // // components/Order.js
// // // // // // // import React from "react";
// // // // // // // import { useSelector } from "react-redux";
// // // // // // // import StepperComponent from "./Stepper";
// // // // // // // import { Box } from "@mui/material";
// // // // // // // import { loadStripe } from "@stripe/stripe-js";
// // // // // // // import { json } from "react-router-dom";
// // // // // // // import axios from "axios";

// // // // // // // const Order = () => {
// // // // // // //   const cartItems = useSelector((state) => state.cart.cartItems);
// // // // // // //   console.log(cartItems);

// // // // // // //   const handlePayment = async () => {
// // // // // // //     const stripe = await loadStripe(
// // // // // // //       "pk_live_51PT2PmRxgLrT02fVj9TryO4AzjwqoIuUC3hi2vpT2qJG0oRVi5WKc86WOXWyh3kyyOc94dWvBVM2vdXDGRAmtGn600cq4jfpPi"
// // // // // // //     );

// // // // // // //     const body = {
// // // // // // //       products: cartItems,
// // // // // // //     };

// // // // // // //     const headers = {
// // // // // // //       "Content-Type": "application-json",
// // // // // // //     };

// // // // // // //     const response = await axios.post(
// // // // // // //       "http://localhost:8080/api/create-checkout-session",
// // // // // // //       { headers: headers, body: JSON.stringify(body) }
// // // // // // //     );

// // // // // // //     const session = await response.json();

// // // // // // //     const result = await stripe.redirectToCheckout({
// // // // // // //       sessionId: session.id,
// // // // // // //     });

// // // // // // //     if (result.error) {
// // // // // // //       console.error("Error redirecting to Checkout:", result.error);
// // // // // // //       // Handle error
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       <StepperComponent />
// // // // // // //       <h2 className="text-center m-5 fw-bold">Orders</h2>
// // // // // // //       {/* Display ordered items */}

// // // // // // //       {cartItems.map((item, index) => (
// // // // // // //         <Box
// // // // // // //           component="section"
// // // // // // //           sx={{
// // // // // // //             p: 2,
// // // // // // //             border: "1px solid grey",
// // // // // // //             width: "50%",
// // // // // // //             textAlign: "center",
// // // // // // //             margin: "auto",
// // // // // // //             mt: 2,
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           <div key={index} className="d-flex ">
// // // // // // //             <div>
// // // // // // //               <img
// // // // // // //                 src={`http://localhost:8080/uploads/${item.img}`}
// // // // // // //                 className="h-20 w-20 object-cover object-top"
// // // // // // //               />{" "}
// // // // // // //             </div>
// // // // // // //             <div className="ml-3">
// // // // // // //               <p>Name: {item.name}</p>
// // // // // // //               <p>Price: ${item.price}</p>
// // // // // // //             </div>
// // // // // // //             {/* Display other product details as needed */}
// // // // // // //           </div>
// // // // // // //         </Box>
// // // // // // //       ))}

// // // // // // //       <button
// // // // // // //         onClick={handlePayment}
// // // // // // //         type="button"
// // // // // // //         className="mt-10 mx-auto items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
// // // // // // //       >
// // // // // // //         Payment
// // // // // // //       </button>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Order;
// // // // // // import React from "react";
// // // // // // import { useSelector } from "react-redux";
// // // // // // import StepperComponent from "./Stepper";
// // // // // // import { Box } from "@mui/material";
// // // // // // import { loadStripe } from "@stripe/stripe-js";
// // // // // // import axios from "axios";

// // // // // // const Order = () => {
// // // // // //   const cartItems = useSelector((state) => state.cart.cartItems);
// // // // // //   console.log(cartItems);

// // // // // //   const handlePayment = async () => {
// // // // // //     const stripe = await loadStripe(
// // // // // //       "pk_test_51PT2PmRxgLrT02fVHwJALHBsw2OrLcJuZxYVETx9abS6mHJup77aA9AWqN8qYEFegFxRC9mrCLAWgg16ZRiUgzt800FK7jny6w"
// // // // // //     );

// // // // // //     const body = {
// // // // // //       products: cartItems,
// // // // // //     };

// // // // // //     const headers = {
// // // // // //       "Content-Type": "application/json",
// // // // // //     };

// // // // // //     try {
// // // // // //       const response = await axios.post(
// // // // // //         "http://localhost:8080/api/create-checkout-session",
// // // // // //         body,
// // // // // //         { headers: headers }
// // // // // //       );

// // // // // //       const sessionId = response.data.id;

// // // // // //       const result = await stripe.redirectToCheckout({
// // // // // //         sessionId: sessionId,
// // // // // //       });

// // // // // //       if (result.error) {
// // // // // //         console.error("Error redirecting to Checkout:", result.error);
// // // // // //         // Handle error
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       console.error("Error creating Stripe session:", error);
// // // // // //       // Handle error
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <StepperComponent />
// // // // // //       <h2 className="text-center m-5 fw-bold">Orders</h2>
// // // // // //       {/* Display ordered items */}

// // // // // //       {cartItems.map((item, index) => (
// // // // // //         <Box
// // // // // //           component="section"
// // // // // //           sx={{
// // // // // //             p: 2,
// // // // // //             border: "1px solid grey",
// // // // // //             width: "50%",
// // // // // //             textAlign: "center",
// // // // // //             margin: "auto",
// // // // // //             mt: 2,
// // // // // //           }}
// // // // // //           key={index}
// // // // // //         >
// // // // // //           <div className="d-flex ">
// // // // // //             <div>
// // // // // //               <img
// // // // // //                 src={`http://localhost:8080/uploads/${item.img}`}
// // // // // //                 alt={item.name}
// // // // // //                 className="h-20 w-20 object-cover object-top"
// // // // // //               />
// // // // // //             </div>
// // // // // //             <div className="ml-3">
// // // // // //               <p>Name: {item.name}</p>
// // // // // //               <p>Price: ${item.price}</p>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </Box>
// // // // // //       ))}

// // // // // //       <button
// // // // // //         onClick={handlePayment}
// // // // // //         type="button"
// // // // // //         className="mt-10 mx-auto items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
// // // // // //       >
// // // // // //         Payment
// // // // // //       </button>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Order;


// // // // // import React from "react";
// // // // // import { useSelector } from "react-redux";
// // // // // import StepperComponent from "./Stepper";
// // // // // import { Box, Grid, Typography, Button } from "@mui/material";
// // // // // import { loadStripe } from "@stripe/stripe-js";
// // // // // import axios from "axios";

// // // // // const Order = () => {
// // // // //   const cartItems = useSelector((state) => state.cart.cartItems);

// // // // //   const handlePayment = async () => {
// // // // //     const stripe = await loadStripe(
// // // // //       "pk_test_51PT2PmRxgLrT02fVHwJALHBsw2OrLcJuZxYVETx9abS6mHJup77aA9AWqN8qYEFegFxRC9mrCLAWgg16ZRiUgzt800FK7jny6w"
// // // // //     );

// // // // //     const body = {
// // // // //       products: cartItems,
// // // // //     };

// // // // //     const headers = {
// // // // //       "Content-Type": "application/json",
// // // // //     };

// // // // //     try {
// // // // //       const response = await axios.post(
// // // // //         "http://localhost:8080/api/create-checkout-session",
// // // // //         body,
// // // // //         { headers: headers }
// // // // //       );

// // // // //       const sessionId = response.data.id;

// // // // //       const result = await stripe.redirectToCheckout({
// // // // //         sessionId: sessionId,
// // // // //       });

// // // // //       if (result.error) {
// // // // //         console.error("Error redirecting to Checkout:", result.error);
// // // // //         // Handle error
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error("Error creating Stripe session:", error);
// // // // //       // Handle error
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <StepperComponent />
// // // // //       <Typography variant="h4" align="center" fontWeight="bold" mt={5}>
// // // // //         Orders
// // // // //       </Typography>

// // // // //       {/* Display ordered items */}
// // // // //       <Box mt={3}>
// // // // //         {cartItems.map((item, index) => (
// // // // //           <Box
// // // // //             key={index}
// // // // //             sx={{
// // // // //               display: "flex",
// // // // //               alignItems: "center",
// // // // //               justifyContent: "space-between",
// // // // //               p: 2,
// // // // //               border: "1px solid #e0e0e0",
// // // // //               borderRadius: "5px",
// // // // //               mb: 2,
// // // // //             }}
// // // // //           >
// // // // //             <Box sx={{ display: "flex", alignItems: "center" }}>
// // // // //               <img
// // // // //                 src={`http://localhost:8080/uploads/${item.img}`}
// // // // //                 alt={item.name}
// // // // //                 style={{ width: "100px", height: "100px", objectFit: "cover" }}
// // // // //               />
// // // // //               <Typography variant="body1" ml={2}>
// // // // //                 <Typography variant="h6">{item.name}</Typography>
// // // // //                 <Typography variant="body1">
// // // // //                   Price: ${item.price} | Quantity: {item.quantity}
// // // // //                 </Typography>
// // // // //               </Typography>
// // // // //             </Box>
// // // // //           </Box>
// // // // //         ))}
// // // // //       </Box>

// // // // //       {/* Payment button */}
// // // // //       <Grid container justifyContent="center">
// // // // //         <Button
// // // // //           variant="contained"
// // // // //           color="primary"
// // // // //           size="large"
// // // // //           onClick={handlePayment}
// // // // //           sx={{ mt: 5 }}
// // // // //         >
// // // // //           Proceed to Payment
// // // // //         </Button>
// // // // //       </Grid>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Order;

// // // // import React from "react";
// // // // import { useSelector } from "react-redux";
// // // // import { Box, Typography, Button, Grid } from "@mui/material";
// // // // import { loadStripe } from "@stripe/stripe-js";
// // // // import axios from "axios";

// // // // const Order = () => {
// // // //   const cartItems = useSelector((state) => state.cart.cartItems);

// // // //   const handlePayment = async () => {
// // // //     const stripe = await loadStripe(
// // // // "pk_test_51PT2PmRxgLrT02fVHwJALHBsw2OrLcJuZxYVETx9abS6mHJup77aA9AWqN8qYEFegFxRC9mrCLAWgg16ZRiUgzt800FK7jny6w" // Replace with your actual Stripe public key
// // // //     );

// // // //     const body = {
// // // //       products: cartItems,
// // // //       orderId: "1", // Replace with the actual order ID to update after payment
// // // //     };

// // // //     const headers = {
// // // //       "Content-Type": "application/json",
// // // //     };

// // // //     try {
// // // //       const response = await axios.post(
// // // //         "http://192.168.2.61:8080/api/create-checkout-session",
// // // //         body,
// // // //         { headers: headers }
// // // //       );

// // // //       const sessionId = response.data.id;

// // // //       const result = await stripe.redirectToCheckout({
// // // //         sessionId: sessionId,
// // // //       });

// // // //       if (result.error) {
// // // //         console.error("Error redirecting to Checkout:", result.error);
// // // //         // Handle error
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Error creating Stripe session:", error);
// // // //       // Handle error
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <Typography variant="h4" align="center" fontWeight="bold" mt={5}>
// // // //         Orders
// // // //       </Typography>

// // // //       {/* Display ordered items */}
// // // //       <Box mt={3}>
// // // //         {cartItems.map((item, index) => (
// // // //           <Box
// // // //             key={index}
// // // //             sx={{
// // // //               display: "flex",
// // // //               alignItems: "center",
// // // //               justifyContent: "space-between",
// // // //               p: 2,
// // // //               border: "1px solid #e0e0e0",
// // // //               borderRadius: "5px",
// // // //               mb: 2,
// // // //             }}
// // // //           >
// // // //             <Box sx={{ display: "flex", alignItems: "center" }}>
// // // //               <img
// // // //                 src={`http://192.168.2.61:8080/uploads/${item.img}`}
// // // //                 alt={item.name}
// // // //                 style={{ width: "100px", height: "100px", objectFit: "cover" }}
// // // //               />
// // // //               <Typography variant="body1" ml={2}>
// // // //                 <Typography variant="h6">{item.name}</Typography>
// // // //                 <Typography variant="body1">
// // // //                   Price: ${item.price} | Quantity: {item.quantity}
// // // //                 </Typography>
// // // //               </Typography>
// // // //             </Box>
// // // //           </Box>
// // // //         ))}
// // // //       </Box>

// // // //       {/* Payment button */}
// // // //       <Grid container justifyContent="center">
// // // //         <Button
// // // //           variant="contained"
// // // //           color="primary"
// // // //           size="large"
// // // //           onClick={handlePayment}
// // // //           sx={{ mt: 5 }}
// // // //         >
// // // //           Proceed to Payment
// // // //         </Button>
// // // //       </Grid>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Order;



// // // import React, { useState } from "react";
// // // import { useSelector } from "react-redux";
// // // import { Box, Typography, Button, Grid, TextField } from "@mui/material";
// // // import { loadStripe } from "@stripe/stripe-js";
// // // import axios from "axios";

// // // const Order = () => {
// // //   const cartItems = useSelector((state) => state.cart.cartItems);
// // //   const [address, setAddress] = useState(""); // State to hold address

// // //   const handlePayment = async () => {
// // //     const stripe = await loadStripe(
// // //       "pk_test_51PT2PmRxgLrT02fVHwJALHBsw2OrLcJuZxYVETx9abS6mHJup77aA9AWqN8qYEFegFxRC9mrCLAWgg16ZRiUgzt800FK7jny6w" // Replace with your actual Stripe public key
// // //     );

// // //     const lineItems = cartItems.map((item) => ({
// // //       price_data: {
// // //         currency: "usd", // Update currency as per your requirement
// // //         product_data: {
// // //           name: item.name,
// // //           description: `Address: ${address}`, // Include address in description
// // //         },
// // //         unit_amount: item.price * 100, // Convert price to cents or relevant currency unit
// // //       },
// // //       quantity: item.quantity,
// // //     }));

// // //     const body = {
// // //       lineItems: lineItems,
// // //       successUrl: "http://192.168.2.61:3000/success",
// // //       cancelUrl: "http://192.168.2.61:3000/cancel",
// // //     };

// // //     try {
// // //       const response = await axios.post(
// // //         "http://192.168.2.61:8080/api/create-checkout-session",
// // //         body
// // //       );

// // //       const sessionId = response.data.id;

// // //       const result = await stripe.redirectToCheckout({
// // //         sessionId: sessionId,
// // //       });

// // //       if (result.error) {
// // //         console.error("Error redirecting to Checkout:", result.error);
// // //         // Handle error
// // //       }
// // //     } catch (error) {
// // //       console.error("Error creating Stripe session:", error);
// // //       // Handle error
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <Typography variant="h4" align="center" fontWeight="bold" mt={5}>
// // //         Orders
// // //       </Typography>

// // //       {/* Display ordered items */}
// // //       <Box mt={3}>
// // //         {cartItems.map((item, index) => (
// // //           <Box
// // //             key={index}
// // //             sx={{
// // //               display: "flex",
// // //               alignItems: "center",
// // //               justifyContent: "space-between",
// // //               p: 2,
// // //               border: "1px solid #e0e0e0",
// // //               borderRadius: "5px",
// // //               mb: 2,
// // //             }}
// // //           >
// // //             <Box sx={{ display: "flex", alignItems: "center" }}>
// // //               <img
// // //                 src={`http://192.168.2.61:8080/uploads/${item.img}`}
// // //                 alt={item.name}
// // //                 style={{ width: "100px", height: "100px", objectFit: "cover" }}
// // //               />
// // //               <Typography variant="body1" ml={2}>
// // //                 <Typography variant="h6">{item.name}</Typography>
// // //                 <Typography variant="body1">
// // //                   Price: ${item.price} | Quantity: {item.quantity}
// // //                 </Typography>
// // //               </Typography>
// // //             </Box>
// // //           </Box>
// // //         ))}
// // //       </Box>

// // //       {/* Address input */}
// // //       <TextField
// // //         label="Address"
// // //         variant="outlined"
// // //         fullWidth
// // //         value={address}
// // //         onChange={(e) => setAddress(e.target.value)}
// // //         sx={{ mt: 3 }}
// // //       />

// // //       {/* Payment button */}
// // //       <Grid container justifyContent="center">
// // //         <Button
// // //           variant="contained"
// // //           color="primary"
// // //           size="large"
// // //           onClick={handlePayment}
// // //           sx={{ mt: 3 }}
// // //         >
// // //           Proceed to Payment
// // //         </Button>
// // //       </Grid>
// // //     </div>
// // //   );
// // // };

// // // export default Order;



// // import React, { useState, useEffect } from "react";
// // import { useSelector } from "react-redux";
// // import {
// //   Box,
// //   Typography,
// //   Button,
// //   Grid,
// //   TextField,
// //   Divider,
// //   List,
// //   ListItem,
// //   ListItemText,
// //   Paper,
// // } from "@mui/material";
// // import { loadStripe } from "@stripe/stripe-js";
// // import axios from "axios";

// // const Order = () => {
// //   const cartItems = useSelector((state) => state.cart.cartItems);
// //   const [address, setAddress] = useState("");
// //   const [addressError, setAddressError] = useState("");
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [suggestions, setSuggestions] = useState([]);

// //   useEffect(() => {
// //     // Load previous addresses from localStorage on component mount
// //     const savedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
// //     setSuggestions(savedAddresses);
// //   }, []);

// //   const handleAddressChange = (value) => {
// //     setAddress(value);
// //     setAddressError("");
// //     // Filter suggestions based on entered address prefix
// //     const filteredSuggestions = suggestions.filter((addr) =>
// //       addr.toLowerCase().startsWith(value.toLowerCase())
// //     );
// //     setSuggestions(filteredSuggestions);
// //   };

// //   const handleSelectSuggestion = (selectedAddress) => {
// //     setAddress(selectedAddress);
// //     setSuggestions([]); // Clear suggestions after selecting one
// //   };

// //   const handlePayment = async () => {
// //     if (!address.trim()) {
// //       setAddressError("Please enter your address.");
// //       return;
// //     }

// //     setAddressError(""); // Clear any previous errors
// //     setIsSubmitting(true);

// //     // Save current address to localStorage
// //     const updatedSuggestions = [...suggestions, address];
// //     localStorage.setItem("addresses", JSON.stringify(updatedSuggestions));

// //     const stripe = await loadStripe(
// //       "pk_test_51PT2PmRxgLrT02fVHwJALHBsw2OrLcJuZxYVETx9abS6mHJup77aA9AWqN8qYEFegFxRC9mrCLAWgg16ZRiUgzt800FK7jny6w"
// //     );

// //     const lineItems = cartItems.map((item) => ({
// //       price_data: {
// //         currency: "usd",
// //         product_data: {
// //           name: item.name,
// //           description: `Address: ${address}`,
// //         },
// //         unit_amount: item.price * 100,
// //       },
// //       quantity: item.quantity,
// //     }));

// //     const body = {
// //       lineItems: lineItems,
// //       successUrl: "http://192.168.2.61:3000/success",
// //       cancelUrl: "http://192.168.2.61:3000/cancel",
// //     };

// //     try {
// //       const response = await axios.post(
// //         "http://192.168.2.61:8080/api/create-checkout-session",
// //         body
// //       );

// //       const sessionId = response.data.id;

// //       const result = await stripe.redirectToCheckout({
// //         sessionId: sessionId,
// //       });

// //       if (result.error) {
// //         console.error("Error redirecting to Checkout:", result.error);
// //         // Handle error
// //       }
// //     } catch (error) {
// //       console.error("Error creating Stripe session:", error);
// //       // Handle error
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <div>
// //       <Typography variant="h4" align="center" fontWeight="bold" mt={5}>
// //         Orders
// //       </Typography>

// //       {/* Display ordered items */}
// //       <Box mt={3}>
// //         {cartItems.map((item, index) => (
// //           <Box
// //             key={index}
// //             sx={{
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "space-between",
// //               p: 2,
// //               border: "1px solid #e0e0e0",
// //               borderRadius: "5px",
// //               mb: 2,
// //             }}
// //           >
// //             <Box sx={{ display: "flex", alignItems: "center" }}>
// //               <img
// //                 src={`http://192.168.2.61:8080/uploads/${item.img}`}
// //                 alt={item.name}
// //                 style={{ width: "100px", height: "100px", objectFit: "cover" }}
// //               />
// //               <Typography variant="body1" ml={2}>
// //                 <Typography variant="h6">{item.name}</Typography>
// //                 <Typography variant="body1">
// //                   Price: ${item.price} | Quantity: {item.quantity}
// //                 </Typography>
// //               </Typography>
// //             </Box>
// //           </Box>
// //         ))}
// //       </Box>

// //       {/* Address input */}
// //       <TextField
// //         label="Address"
// //         variant="outlined"
// //         fullWidth
// //         value={address}
// //         onChange={(e) => handleAddressChange(e.target.value)}
// //         sx={{ mt: 3 }}
// //         error={Boolean(addressError)}
// //         helperText={addressError}
// //         required
// //         autoComplete="off" // Disable browser autocomplete to manage our own suggestions
// //       />

// //       {/* Display suggestions */}
// //       {suggestions.length > 0 && (
// //         <Paper elevation={3} sx={{ position: "absolute", zIndex: 1, width: "100%", marginTop: 8 }}>
// //           <List>
// //             {suggestions.map((addr, index) => (
// //               <ListItem button key={index} onClick={() => handleSelectSuggestion(addr)}>
// //                 <ListItemText primary={addr} />
// //               </ListItem>
// //             ))}
// //           </List>
// //         </Paper>
// //       )}

// //       <Divider sx={{ my: 2 }} />

// //       {/* Payment button */}
// //       <Grid container justifyContent="center">
// //         <Button
// //           variant="contained"
// //           color="primary"
// //           size="large"
// //           onClick={handlePayment}
// //           sx={{ mt: 25, mb: 25 }} // Adding margin bottom for spacing
// //           disabled={isSubmitting}
// //         >
// //           {isSubmitting ? "Processing..." : "Proceed to Payment"}
// //         </Button>
// //       </Grid>
// //     </div>
// //   );
// // };

// // export default Order;

// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   Box,
//   Typography,
//   Button,
//   Grid,
//   TextField,
//   Divider,
//   List,
//   ListItem,
//   ListItemText,
//   Paper,
// } from "@mui/material";
// import { loadStripe } from "@stripe/stripe-js";
// import axios from "axios";
// import { clearCart } from "../../Redux/Cart/cartSlice"; // Adjust the path as needed

// const Order = () => {
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const dispatch = useDispatch();
//   const [address, setAddress] = useState("");
//   const [addressError, setAddressError] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [suggestions, setSuggestions] = useState([]);

//   useEffect(() => {
//     const savedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
//     setSuggestions(savedAddresses);
//   }, []);

//   const handleAddressChange = (value) => {
//     setAddress(value);
//     setAddressError("");
//     const filteredSuggestions = suggestions.filter((addr) =>
//       addr.toLowerCase().startsWith(value.toLowerCase())
//     );
//     setSuggestions(filteredSuggestions);
//   };

//   const handleSelectSuggestion = (selectedAddress) => {
//     setAddress(selectedAddress);
//     setSuggestions([]);
//   };

//   const handlePayment = async () => {
//     if (!address.trim()) {
//       setAddressError("Please enter your address.");
//       return;
//     }

//     setAddressError("");
//     setIsSubmitting(true);

//     const updatedSuggestions = [...suggestions, address];
//     localStorage.setItem("addresses", JSON.stringify(updatedSuggestions));

//     const stripe = await loadStripe("pk_test_51PT2PmRxgLrT02fVHwJALHBsw2OrLcJuZxYVETx9abS6mHJup77aA9AWqN8qYEFegFxRC9mrCLAWgg16ZRiUgzt800FK7jny6w");

//     const lineItems = cartItems.map((item) => ({
//       price_data: {
//         currency: "usd",
//         product_data: {
//           name: item.name,
//           description: `Address: ${address}`,
//         },
//         unit_amount: item.price * 100,
//       },
//       quantity: item.quantity,
//     }));

//     const body = {
//       lineItems: lineItems,
//       successUrl: "http://192.168.2.61:3000/success",
//       cancelUrl: "http://192.168.2.61:3000/cancel",
//     };

//     try {
//       const response = await axios.post(
//         "http://192.168.2.61:8080/api/create-checkout-session",
//         body
//       );

//       const sessionId = response.data.id;

//       const result = await stripe.redirectToCheckout({
//         sessionId: sessionId,
//       });

//       if (result.error) {
//         console.error("Error redirecting to Checkout:", result.error);
//       } else {
//         const previousPurchasedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//         const updatedPurchasedItems = [...previousPurchasedItems, ...cartItems];
//         localStorage.setItem("purchasedItems", JSON.stringify(updatedPurchasedItems));

//         dispatch(clearCart());
//         localStorage.removeItem("cartItems");

//         window.location.href = "/success";
//       }
//     } catch (error) {
//       console.error("Error creating Stripe session:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div>
//       <Typography variant="h4" align="center" fontWeight="bold" mt={5}>
//         Orders
//       </Typography>

//       <Box mt={3}>
//         {cartItems.map((item, index) => (
//           <Box
//             key={index}
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               p: 2,
//               border: "1px solid #e0e0e0",
//               borderRadius: "5px",
//               mb: 2,
//             }}
//           >
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <img
//                 src={`http://192.168.2.61:8080/uploads/${item.img}`}
//                 alt={item.name}
//                 style={{ width: "100px", height: "100px", objectFit: "cover" }}
//               />
//               <Typography variant="body1" ml={2}>
//                 <Typography variant="h6">{item.name}</Typography>
//                 <Typography variant="body1">
//                   Price: ${item.price} | Quantity: {item.quantity}
//                 </Typography>
//               </Typography>
//             </Box>
//           </Box>
//         ))}
//       </Box>

//       <TextField
//         label="Address"
//         variant="outlined"
//         fullWidth
//         value={address}
//         onChange={(e) => handleAddressChange(e.target.value)}
//         sx={{ mt: 3 }}
//         error={Boolean(addressError)}
//         helperText={addressError}
//         required
//         autoComplete="off"
//       />

//       {suggestions.length > 0 && (
//         <Paper
//           elevation={3}
//           sx={{ position: "absolute", zIndex: 1, width: "100%", marginTop: 8 }}
//         >
//           <List>
//             {suggestions.map((addr, index) => (
//               <ListItem button key={index} onClick={() => handleSelectSuggestion(addr)}>
//                 <ListItemText primary={addr} />
//               </ListItem>
//             ))}
//           </List>
//         </Paper>
//       )}

//       <Divider sx={{ my: 2 }} />

//       <Grid container justifyContent="center">
//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           onClick={handlePayment}
//           sx={{ mt: 25, mb: 25 }}
//           disabled={isSubmitting}
//         >
//           {isSubmitting ? "Processing..." : "Proceed to Payment"}
//         </Button>
//       </Grid>
//     </div>
//   );
// };

// export default Order;







// Order.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  Divider,
  Paper,
} from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { clearCart } from "../../Redux/Cart/cartSlice";


const Order = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth?.user?._id); // Assuming userId is under state.auth.user
  const [flatNo, setFlatNo] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [stateName, setStateName] = useState("");
  const [pincode, setPincode] = useState("");
  const [addressError, setAddressError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log(userId);

  const handleAddressChange = (value) => {
    setAddressError("");
    setFlatNo(value);
  };

  const handleStreetChange = (value) => {
    setAddressError("");
    setStreet(value);
  };

  const handleCityChange = (value) => {
    setAddressError("");
    setCity(value);
  };

  const handleStateChange = (value) => {
    setAddressError("");
    setStateName(value);
  };

  const handlePincodeChange = (value) => {
    setAddressError("");
    setPincode(value);
  };

  const handlePayment = async () => {
    const address = `${flatNo}, ${street}, ${city}, ${stateName}, ${pincode}`;

    if (!flatNo || !street || !city || !stateName || !pincode) {
      setAddressError("Please enter all address fields.");
      return;
    }

    setAddressError("");
    setIsSubmitting(true);

    try {
      const stripe = await loadStripe(
        "pk_test_51PT2PmRxgLrT02fVHwJALHBsw2OrLcJuZxYVETx9abS6mHJup77aA9AWqN8qYEFegFxRC9mrCLAWgg16ZRiUgzt800FK7jny6w"
      );

      const lineItems = cartItems.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            description: `Address: ${address}`,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      }));

      const body = {
        lineItems: lineItems,
        successUrl: "http://192.168.2.61:3000/success",
        cancelUrl: "http://192.168.2.61:3000/cancel",
      };

      const response = await axios.post(
        "http://192.168.2.61:8080/api/create-checkout-session",
        body
      );

      const sessionId = response.data.id;

      // After successful payment, store order details
      const orderData = {
        userId: userId, // Use userId from Redux state
        address: address,
        items: cartItems,
      };

      await axios.post("http://localhost:8080/api/orders/create", orderData);

      const result = await stripe.redirectToCheckout({
        sessionId: sessionId,
      });

      // Clear the cart in Redux state
      dispatch(clearCart());

      // Redirect to success page
      window.location.href = "/success";
    } catch (error) {
      console.error("Error creating Stripe session:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", padding: 3 }}>
      <Typography variant="h4" align="center" fontWeight="bold" mt={5} mb={3}>
        Orders
      </Typography>

      <Box>
        {cartItems.map((item, index) => (
          <Paper key={index} sx={{ p: 2, mb: 2 }}>
            <Grid container spacing={2}>
              <Grid item>
                <img
                  src={`http://192.168.2.61:8080/uploads/${item.img}`}
                  alt={item.name}
                  style={{
                    width: 100,
                    height: 100,
                    objectFit: "cover",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body1">
                      Price: ${item.price} | Quantity: {item.quantity}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Box>

      <TextField
        label="Flat No. / Name"
        variant="outlined"
        fullWidth
        value={flatNo}
        onChange={(e) => handleAddressChange(e.target.value)}
        sx={{ mt: 3 }}
        error={Boolean(addressError && !flatNo)}
        helperText={addressError && !flatNo ? addressError : ""}
        required
        autoComplete="off"
      />

      <TextField
        label="Street/Area"
        variant="outlined"
        fullWidth
        value={street}
        onChange={(e) => handleStreetChange(e.target.value)}
        sx={{ mt: 3 }}
        error={Boolean(addressError && !street)}
        helperText={addressError && !street ? addressError : ""}
        required
        autoComplete="off"
      />

      <TextField
        label="City"
        variant="outlined"
        fullWidth
        value={city}
        onChange={(e) => handleCityChange(e.target.value)}
        sx={{ mt: 3 }}
        error={Boolean(addressError && !city)}
        helperText={addressError && !city ? addressError : ""}
        required
        autoComplete="off"
      />

      <TextField
        label="State"
        variant="outlined"
        fullWidth
        value={stateName}
        onChange={(e) => handleStateChange(e.target.value)}
        sx={{ mt: 3 }}
        error={Boolean(addressError && !stateName)}
        helperText={addressError && !stateName ? addressError : ""}
        required
        autoComplete="off"
      />

      <TextField
        label="Pincode"
        variant="outlined"
        fullWidth
        value={pincode}
        onChange={(e) => handlePincodeChange(e.target.value)}
        sx={{ mt: 3 }}
        error={Boolean(addressError && !pincode)}
        helperText={addressError && !pincode ? addressError : ""}
        required
        autoComplete="off"
      />

      <Divider sx={{ my: 3 }} />

      <Grid container justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handlePayment}
          sx={{ mt: 3, mb: 2 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Proceed to Payment"}
        </Button>
      </Grid>
    </Box>
  );
};

export default Order;
