// import React, { useEffect, useState } from "react";
// import {
//   Typography,
//   Popover,
//   List,
//   ListItem,
//   ListItemText,
//   Paper,
// } from "@mui/material";

// const Success = () => {
//   const [purchasedItems, setPurchasedItems] = useState([]);
//   const [anchorEl, setAnchorEl] = useState(null);

//   useEffect(() => {
//     const items = JSON.parse(localStorage.getItem("cartItems")) || [];
//     setPurchasedItems(items);
//   }, []);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? "popover" : undefined;

//   return (
//     <div style={{ marginTop: "50px", textAlign: "center" }}>
//       <Typography variant="h4" gutterBottom>
//         Purchase Successful!
//       </Typography>

//       <Typography variant="h6" style={{ marginTop: "20px" }}>
//         Purchased Items
//       </Typography>

//       <Paper
//         elevation={3}
//         style={{ padding: "10px", maxWidth: "600px", margin: "20px auto" }}
//       >
//         <List>
//           {purchasedItems.map((item, index) => (
//             <ListItem key={index} onClick={handleClick}>
//               <ListItemText
//                 primary={item.name}
//                 secondary={`Price: $${item.price} | Quantity: ${item.quantity}`}
//               />
//               <img
//                 src={`http://192.168.2.61:8080/uploads/${item.img}`}
//                 alt={item.name}
//                 style={{ width: "100px", height: "100px", objectFit: "cover" }}
//               />
//             </ListItem>
//           ))}
//         </List>
//       </Paper>

//       <Popover
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "center",
//         }}
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "center",
//         }}
//       >
//         <Typography style={{ padding: "10px" }}>
//           Deliver Soon!!!!
//         </Typography>
//       </Popover>
//     </div>
//   );
// };

// export default Success;

// SuccessPage.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Paper, Grid } from "@mui/material";
import { useSelector } from "react-redux";


const SuccessPage = () => {
  const [orders, setOrders] = useState([]);
  const userId = useSelector((state) => state.auth?.user?._id);
  
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/orders/user/${userId}`
        );
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", padding: 3 }}>
      <Typography variant="h4" align="center" fontWeight="bold" mt={5} mb={3}>
        Order History
      </Typography>

      {orders.map((order, index) => (
        <Paper key={index} sx={{ p: 2, mb: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">Order ID: {order._id}</Typography>
              <Typography variant="body1">Address: {order.address}</Typography>
            </Grid>
            <Grid item xs={12}>
              {order.items.map((item, idx) => (
                <Paper key={idx} sx={{ p: 2, mb: 1 }}>
                  <Typography variant="subtitle1">
                    Product: {item.name}
                  </Typography>
                  <Typography variant="body2">Price: ${item.price}</Typography>
                  <Typography variant="body2">
                    Quantity: {item.quantity}
                  </Typography>
                </Paper>
              ))}
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};

export default SuccessPage;
