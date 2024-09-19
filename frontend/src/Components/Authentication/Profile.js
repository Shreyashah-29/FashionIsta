// Profile.js

import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, TextField, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../Redux/User/authSlice'; // Import action from authSlice
import axios from 'axios';

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const [userData, setUserData] = useState({ name: '', email: '' });

  useEffect(() => {
    // Initialize user data when component mounts
    setUserData({
      name: user.name || '',
      email: user.email || '',
    });
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://192.168.2.61:8080/api/users/${user._id}`, userData);
      dispatch(setUser(userData)); // Update Redux state
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Grid container spacing={3} sx={{ padding: '20px' }}>
      {/* Left side: User details */}
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2, mb: 2 }}>
          <Typography variant="h5" gutterBottom>
            User Details
          </Typography>
          <Typography variant="subtitle1">Name: {userData.name}</Typography>
          <Typography variant="subtitle1">Email: {userData.email}</Typography>
          {/* Add other user details here */}
        </Paper>
      </Grid>

      {/* Right side: Update profile form */}
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2, mb: 2 }}>
          <Typography variant="h5" gutterBottom>
            Update Profile
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              id="name"
              name="name"
              label="Name"
              fullWidth
              value={userData.name}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              id="email"
              name="email"
              label="Email"
              fullWidth
              value={userData.email}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              required
            />
            {/* Add other fields as needed */}
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
              Update
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Profile;
