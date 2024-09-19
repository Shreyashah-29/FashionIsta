import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
} from "@mui/material";

const AdminProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products data from backend API
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://192.168.2.61:8080/api/p/list"); // Adjust API endpoint as per your backend
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://192.168.2.61:8080/api/p/${id}`); // Adjust API endpoint for delete operation
      // Update state or fetch products again after deletion
      const updatedProducts = products.filter((product) => product._id !== id);
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  return (
    <>
    <Typography variant="h4" align="center" fontWeight="bold" mt={5} mb={3}>
        View Products
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="product table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Color</TableCell>
              <TableCell>Discount Price</TableCell>
              <TableCell>Discount Percent</TableCell>
              <TableCell>Category 1</TableCell>
              <TableCell>Category 2</TableCell>
              <TableCell>Category 3</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product._id}>
                <TableCell>{product.product_name}</TableCell>
                <TableCell><img
                  src={`http://192.168.2.61:8080/uploads/${product.product_img}`}
                  alt={product.product_img}
                  style={{
                    width: 100,
                    height: 120,
                    objectFit: "cover",
                  }}
                /></TableCell>
                <TableCell>{product.product_brand}</TableCell>
                <TableCell>{product.product_description}</TableCell>
                <TableCell>{product.product_price}</TableCell>
                <TableCell>{product.product_size.join(", ")}</TableCell>
                <TableCell>{product.product_color.join(", ")}</TableCell>
                <TableCell>{product.product_discount_price}</TableCell>
                <TableCell>{product.product_discount_percent}</TableCell>
                <TableCell>{product.product_category1}</TableCell>
                <TableCell>{product.product_category2}</TableCell>
                <TableCell>{product.product_category3}</TableCell>
                <TableCell>
                  <Button
                    component={Link}
                    to={`/admin/edit-product/${product._id}`}
                    variant="outlined"
                    color="primary"
                  >
                    Edit
                  </Button>

                  <Button
                    onClick={() => handleDeleteProduct(product._id)}
                    variant="outlined"
                    color="secondary"
                    sx={{ ml: 1 }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AdminProductList;
