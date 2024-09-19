import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Paper, Grid } from "@mui/material";
import { useSelector } from "react-redux";


const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  
  
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/orders/`
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
      View  Order 
      </Typography>

      {orders.map((order, index) => (
        <Paper key={index} sx={{ p: 2, mb: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">Order ID: {order._id}</Typography>
              <Typography variant="h6">User ID: {order.userId}</Typography>
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

export default AdminOrders;
