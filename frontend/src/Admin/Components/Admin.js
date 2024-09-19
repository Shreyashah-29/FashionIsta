import React from "react";
import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import CategoryIcon from "@mui/icons-material/Category";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import FolderIcon from "@mui/icons-material/Folder";

const Admin = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box sx={{ mt: 4, mb: 2 }}>
            <Typography variant="h6" component="div">
              Welcome Admin
            </Typography>
          </Box>
          <List>
            <ListItem button component={Link} to="/admin/addProducts">
              <ListItemAvatar>
                <Avatar>
                  <AddToPhotosIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Create Product" />
            </ListItem>
            <ListItem button component={Link} to="/admin/products">
              <ListItemAvatar>
                <Avatar>
                  <CategoryIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="View Products" />
            </ListItem>
            <ListItem button component={Link} to="/admin/customers">
              <ListItemAvatar>
                <Avatar>
                  <GroupsOutlinedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="View Customers" />
            </ListItem>
            <ListItem button component={Link} to="/admin/orders">
              <ListItemAvatar>
                <Avatar>
                  <CardGiftcardIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="View Orders" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={8}>
          {/* Render dynamic content based on nested routes */}
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
};

export default Admin;
