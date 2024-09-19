import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Paper, Grid } from "@mui/material";
import { useSelector } from "react-redux";


const AdminCustomers = () => {
  const [users, setUsers] = useState([]);
  
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/users/`
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", padding: 3 }}>
      <Typography variant="h4" align="center" fontWeight="bold" mt={5} mb={3}>
      View Users
      </Typography>

      {users.map((user, index) => (
        <Paper key={index} sx={{ p: 2, mb: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">user ID: {user._id}</Typography>
              <Typography variant="body1">Name: {user.name}</Typography>
              <Typography variant="body1">Email: {user.email}</Typography>

            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};

export default AdminCustomers;
