// // import React from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import {
// //   removeFromCart,
// //   incrementQuantity,
// //   decrementQuantity,
// //   clearCart,
// // } from "../../Redux/Cart/cartSlice";
// // import { Button, Grid, Typography, Paper } from "@mui/material";
// // import { useNavigate } from "react-router-dom";

// // const Cart = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const cartItems = useSelector((state) => state.cart.cartItems);

// //   const handleRemoveFromCart = (cartId) => {
// //     dispatch(removeFromCart({ cartId }));
// //   };

// //   const handleIncrementQuantity = (cartId) => {
// //     dispatch(incrementQuantity({ cartId }));
// //   };

// //   const handleDecrementQuantity = (cartId) => {
// //     dispatch(decrementQuantity({ cartId }));
// //   };

// //   const handleClearCart = () => {
// //     dispatch(clearCart());
// //   };

// //   const handlePlaceOrder = () => {
// //     navigate("/order");
// //   };

// //   return (
// //     <Grid container spacing={3} sx={{ padding: "20px" }}>
// //       {/* Left side: Cart items */}
// //       <Grid item xs={12} md={8}>
// //         <Typography variant="h5" gutterBottom>
// //           Cart
// //         </Typography>
// //         {cartItems.map((item) => (
// //           <Paper key={item.cartId} sx={{ p: 2, mb: 2 }}>
// //             <Grid container alignItems="center" spacing={2}>
// //               <Grid item>
// //                 <img
// //                   src={`http://192.168.2.61:8080/uploads/${item.img}`}
// //                   alt={`Product ${item.productId}`}
// //                   className="h-15 w-15 object-cover object-center"
// //                 />
// //               </Grid>
// //               <Grid item xs>
// //                 <Typography variant="subtitle1">Name: {item.name}</Typography>
// //                 <Typography variant="body1">Price: ${item.price}</Typography>
// //                 <Typography variant="body1">
// //                   Quantity: {item.quantity}
// //                 </Typography>
// //                 <Typography variant="body1">
// //                   Color: {item.color} {/* Display selected color */}
// //                 </Typography>
// //                 <Typography variant="body1">
// //                   Size: {item.size} {/* Display selected size */}
// //                 </Typography>
// //               </Grid>
// //               <Grid item>
// //                 <Button onClick={() => handleIncrementQuantity(item.cartId)}>
// //                   +
// //                 </Button>
// //                 <Typography>{item.quantity}</Typography>
// //                 <Button onClick={() => handleDecrementQuantity(item.cartId)}>
// //                   -
// //                 </Button>
// //                 <Button onClick={() => handleRemoveFromCart(item.cartId)}>
// //                   Remove
// //                 </Button>
// //               </Grid>
// //             </Grid>
// //           </Paper>
// //         ))}
// //         <Button onClick={handleClearCart} variant="outlined">
// //           Clear Cart
// //         </Button>
// //       </Grid>

// //       {/* Right side: Total price */}
// //       <Grid item xs={12} md={4}>
// //         <Paper
// //           sx={{
// //             backgroundColor: "#f0f0f0",
// //             padding: "20px",
// //             borderRadius: "5px",
// //           }}
// //         >
// //           <Typography variant="h6" gutterBottom>
// //             Total Price
// //           </Typography>
// //           <Typography variant="subtitle1">
// //             Total: $
// //             {cartItems.reduce(
// //               (total, item) => total + item.quantity * item.price,
// //               0
// //             )}
// //           </Typography>
// //           <Button
// //             onClick={handlePlaceOrder}
// //             variant="contained"
// //             color="primary"
// //             fullWidth
// //             sx={{ mt: 3 }}
// //           >
// //             Place Order
// //           </Button>
// //         </Paper>
// //       </Grid>
// //     </Grid>
// //   );
// // };

// // export default Cart;

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart, incrementQuantity, decrementQuantity, clearCart } from '../../Redux/Cart/cartSlice'; // Adjust path as needed
// import { Button, Grid, Typography, Paper } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
//   const cartItems = useSelector(state => state.cart.cartItems);

//   const handleRemoveFromCart = cartId => {
//     dispatch(removeFromCart({ cartId }));
//   };

//   const handleIncrementQuantity = cartId => {
//     dispatch(incrementQuantity({ cartId }));
//   };

//   const handleDecrementQuantity = cartId => {
//     dispatch(decrementQuantity({ cartId }));
//   };

//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

//   const handlePlaceOrder = () => {
//     navigate('/order');
//   };

//   if (!isAuthenticated) {
//     return <Typography variant="h6">Please log in to view your cart.</Typography>;
//   }

//   return (
//     <Grid container spacing={3} sx={{ padding: '20px' }}>
//       {/* Left side: Cart items */}
//       <Grid item xs={12} md={8}>
//         <Typography variant="h5" gutterBottom>
//           Cart
//         </Typography>
//         {cartItems.map(item => (
//           <Paper key={item.cartId} sx={{ p: 2, mb: 2 }}>
//             <Grid container alignItems="center" spacing={2}>
//               <Grid item>
//                 <img
//                   src={`http://192.168.2.61:8080/uploads/${item.img}`}
//                   alt={`Product ${item.productId}`}
//                   className="h-15 w-15 object-cover object-center"
//                 />
//               </Grid>
//               <Grid item xs>
//                 <Typography variant="subtitle1">Name: {item.name}</Typography>
//                 <Typography variant="body1">Price: ${item.price}</Typography>
//                 <Typography variant="body1">Quantity: {item.quantity}</Typography>
//                 <Typography variant="body1">Color: {item.color}</Typography>
//                 <Typography variant="body1">Size: {item.size}</Typography>
//               </Grid>
//               <Grid item>
//                 <Button onClick={() => handleIncrementQuantity(item.cartId)}>+</Button>
//                 <Typography>{item.quantity}</Typography>
//                 <Button onClick={() => handleDecrementQuantity(item.cartId)}>-</Button>
//                 <Button onClick={() => handleRemoveFromCart(item.cartId)}>Remove</Button>
//               </Grid>
//             </Grid>
//           </Paper>
//         ))}
//         <Button onClick={handleClearCart} variant="outlined">
//           Clear Cart
//         </Button>
//       </Grid>

//       {/* Right side: Total price */}
//       <Grid item xs={12} md={4}>
//         <Paper
//           sx={{
//             backgroundColor: '#f0f0f0',
//             padding: '20px',
//             borderRadius: '5px',
//           }}
//         >
//           <Typography variant="h6" gutterBottom>
//             Total Price
//           </Typography>
//           <Typography variant="subtitle1">
//             Total: $
//             {cartItems.reduce((total, item) => total + item.quantity * item.price, 0)}
//           </Typography>
//           <Button
//             onClick={handlePlaceOrder}
//             variant="contained"
//             color="primary"
//             fullWidth
//             sx={{ mt: 3 }}
//           >
//             Place Order
//           </Button>
//         </Paper>
//       </Grid>
//     </Grid> 
//   );
// };

// export default Cart;











import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity, clearCart } from '../../Redux/Cart/cartSlice'; // Adjust path as needed
import { Button, Grid, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const cartItems = useSelector(state => state.cart.cartItems);

  const handleRemoveFromCart = cartId => {
    dispatch(removeFromCart({ cartId }));
  };

  const handleIncrementQuantity = cartId => {
    dispatch(incrementQuantity({ cartId }));
  };

  const handleDecrementQuantity = cartId => {
    dispatch(decrementQuantity({ cartId }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handlePlaceOrder = () => {
    navigate('/order');
  };

  if (!isAuthenticated) {
    return <Typography variant="h6">Please log in to view your cart.</Typography>;
  }

  return (
    <Grid container spacing={3} sx={{ padding: '20px' }}>
      {/* Left side: Cart items */}
      <Grid item xs={12} md={8}>
        <Typography variant="h5" gutterBottom>
          Cart
        </Typography>
        {cartItems.map(item => (
          <Paper key={item.cartId} sx={{ p: 2, mb: 2 }}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <img
                  src={`http://192.168.2.61:8080/uploads/${item.img}`}
                  alt={`Product ${item.productId}`}
                  className="h-15 w-15 object-cover object-center"
                />
              </Grid>
              <Grid item xs>
                <Typography variant="subtitle1">Name: {item.name}</Typography>
                <Typography variant="body1">Price: ${item.price}</Typography>
                <Typography variant="body1">Quantity: {item.quantity}</Typography>
                <Typography variant="body1">Color: {item.color}</Typography>
                <Typography variant="body1">Size: {item.size}</Typography>
              </Grid>
              <Grid item>
                <Button onClick={() => handleIncrementQuantity(item.cartId)}>+</Button>
                <Typography>{item.quantity}</Typography>
                <Button onClick={() => handleDecrementQuantity(item.cartId)}>-</Button>
                <Button onClick={() => handleRemoveFromCart(item.cartId)}>Remove</Button>
              </Grid>
            </Grid>
          </Paper>
        ))}
        {cartItems.length > 0 && (
          <Button onClick={handleClearCart} variant="outlined">
            Clear Cart
          </Button>
        )}
      </Grid>

      {/* Right side: Total price */}
      <Grid item xs={12} md={4}>
        <Paper
          sx={{
            backgroundColor: '#f0f0f0',
            padding: '20px',
            borderRadius: '5px',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Total Price
          </Typography>
          <Typography variant="subtitle1">
            Total: $
            {cartItems.reduce((total, item) => total + item.quantity * item.price, 0)}
          </Typography>
          <Button
            onClick={handlePlaceOrder}
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
            disabled={cartItems.length === 0} // Disable button if cart is empty
          >
            Place Order
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Cart;
