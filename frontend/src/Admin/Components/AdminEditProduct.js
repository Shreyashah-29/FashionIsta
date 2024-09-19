import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Container,
  Box,
  OutlinedInput,
  Chip,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { categories1, categories2, categories3 } from "./Category"; // Import categories data

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [selectedLevel1, setSelectedLevel1] = useState("");
  const [selectedLevel2, setSelectedLevel2] = useState("");
  const [image, setImage] = useState(null); // State to hold the selected image file

  useEffect(() => {
    // Fetch product details based on ID
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://192.168.2.61:8080/api/p/${id}`
        ); // Adjust API endpoint to fetch product details
        setProduct(response.data);
        setSelectedLevel1(response.data.product_category1);
        setSelectedLevel2(response.data.product_category2);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const validationSchema = yup.object().shape({
    product_name: yup
      .string()
      .required("Name is required")
      .max(120, "Name must be 120 characters or less")
      .min(3, "Name must be at least 3 characters long"),
    product_brand: yup
      .string()
      .required("Brand is required")
      .max(50, "Brand must be 50 characters or less")
      .min(10, "Brand must be at least 10 characters long"),
    product_description: yup.string().required("Description is required"),
    product_price: yup
      .number()
      .required("Price is required")
      .positive("Price must be positive")
      .integer("Price must be an integer"),
    product_size: yup.array().of(yup.string()).required("Size is required"),
    product_color: yup.array().of(yup.string()).required("Color is required"),
    product_discount_price: yup
      .number()
      .positive("Discount price must be positive")
      .integer("Discount price must be an integer"),
    product_discount_percent: yup
      .number()
      .positive("Discount percent must be positive")
      .max(100, "Discount percent must be 100 or less"),
    product_category1: yup.string().required("Category Level 1 is required"),
    product_category2: yup.string().required("Category Level 2 is required"),
    product_category3: yup.string().required("Category Level 3 is required"),
  });

  const handleEditProduct = async (values, { setSubmitting }) => {
    try {
      const formData = new FormData();
      // Append product data to FormData
      for (const key in values) {
        if (Array.isArray(values[key])) {
          values[key].forEach((item) => formData.append(key, item));
        } else {
          formData.append(key, values[key]);
        }
      }
      // Append image file if it's defined
      if (image) {
        formData.append("product_img", image);
      }
      // Send formData to backend API for update
      const response = await axios.put(
        `http://192.168.2.61:8080/api/p/products/${id}`, // Adjust API endpoint for update
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log(response.data);
      toast.success("Product updated successfully!");
      // Redirect to product page after successful update
    //   navigate(`products`); // Adjust URL as per your application
    } catch (error) {
      console.error("Failed to update product:", error);
      toast.error("Failed to update product.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleLevel1Change = (e) => {
    const level1Value = e.target.value;
    setSelectedLevel1(level1Value);
    setSelectedLevel2(""); // Reset Level 2 selection when Level 1 changes
  };

  const handleLevel2Change = (e) => {
    setSelectedLevel2(e.target.value);
  };

  const onImageUpdate = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  if (!product) {
    return <p>Loading...</p>; // Add a loading state until product details are fetched
  }

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 className="text-center m-5">EDIT PRODUCT</h1>
        <Formik
          initialValues={{
            product_name: product.product_name,
            product_brand: product.product_brand,
            product_description: product.product_description,
            product_price: product.product_price,
            product_size: product.product_size,
            product_color: product.product_color,
            product_discount_price: product.product_discount_price,
            product_discount_percent: product.product_discount_percent,
            product_category1: product.product_category1,
            product_category2: product.product_category2,
            product_category3: product.product_category3,
          }}
          validationSchema={validationSchema}
          onSubmit={handleEditProduct}
        >
          {({ setFieldValue, values, isSubmitting }) => (
            <Form>
              <Box sx={{ mt: 3 }}>
                <Field name="product_name">
                  {({ field }) => (
                    <TextField
                      {...field}
                      label="Name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="product_name"
                  component="div"
                  className="text-danger"
                />

                <Field name="product_brand">
                  {({ field }) => (
                    <TextField
                      {...field}
                      label="Brand"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="product_brand"
                  component="div"
                  className="text-danger"
                />

                <Field name="product_description">
                  {({ field }) => (
                    <TextField
                      {...field}
                      label="Description"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="product_description"
                  component="div"
                  className="text-danger"
                />

                <Field name="product_price">
                  {({ field }) => (
                    <TextField
                      {...field}
                      label="Price"
                      type="number"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="product_price"
                  component="div"
                  className="text-danger"
                />

                <FormControl variant="outlined" fullWidth margin="normal">
                  <InputLabel>Size</InputLabel>
                  <Select
                    name="product_size"
                    multiple
                    value={values.product_size}
                    onChange={(e) =>
                      setFieldValue("product_size", e.target.value)
                    }
                    input={<OutlinedInput label="Size" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} sx={{ m: 0.5 }} />
                        ))}
                      </Box>
                    )}
                  >
                    {["S", "M", "L", "XL"].map((size) => (
                      <MenuItem key={size} value={size}>
                        {size}
                      </MenuItem>
                    ))}
                  </Select>
                  <ErrorMessage
                    name="product_size"
                    component="div"
                    className="text-danger"
                  />
                </FormControl>

                <FormControl variant="outlined" fullWidth margin="normal">
                  <InputLabel>Color</InputLabel>
                  <Select
                    name="product_color"
                    multiple
                    value={values.product_color}
                    onChange={(e) =>
                      setFieldValue("product_color", e.target.value)
                    }
                    input={<OutlinedInput label="Color" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} sx={{ m: 0.5 }} />
                        ))}
                      </Box>
                    )}
                  >
                    {["Red", "Green", "Blue", "Black", "Pink", "Natural"].map(
                      (color) => (
                        <MenuItem key={color} value={color}>
                          {color}
                        </MenuItem>
                      )
                    )}
                  </Select>
                  <ErrorMessage
                    name="product_color"
                    component="div"
                    className="text-danger"
                  />
                </FormControl>

                <Field name="product_discount_price">
                  {({ field }) => (
                    <TextField
                      {...field}
                      label="Discount Price"
                      type="number"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="product_discount_price"
                  component="div"
                  className="text-danger"
                />

                <Field name="product_discount_percent">
                  {({ field }) => (
                    <TextField
                      {...field}
                      label="Discount Percent"
                      type="number"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="product_discount_percent"
                  component="div"
                  className="text-danger"
                />

                <FormControl variant="outlined" fullWidth margin="normal">
                  <InputLabel>Category Level 1</InputLabel>
                  <Select
                    name="product_category1"
                    value={values.product_category1}
                    onChange={(e) => {
                      setFieldValue("product_category1", e.target.value);
                      setFieldValue("product_category2", "");
                      setFieldValue("product_category3", "");
                      handleLevel1Change(e);
                    }}
                    label="Category Level 1"
                  >
                    {categories1.map((category) => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                  <ErrorMessage
                    name="product_category1"
                    component="div"
                    className="text-danger"
                  />
                </FormControl>

                {selectedLevel1 && (
                  <FormControl variant="outlined" fullWidth margin="normal">
                    <InputLabel>Category Level 2</InputLabel>
                    <Select
                      name="product_category2"
                      value={values.product_category2}
                      onChange={(e) => {
                        setFieldValue("product_category2", e.target.value);
                        setFieldValue("product_category3", "");
                        handleLevel2Change(e);
                      }}
                      label="Category Level 2"
                    >
                      {categories2[selectedLevel1]?.map((category) => (
                        <MenuItem key={category} value={category}>
                          {category}
                        </MenuItem>
                      ))}
                    </Select>
                    <ErrorMessage
                      name="product_category2"
                      component="div"
                      className="text-danger"
                    />
                  </FormControl>
                )}

                {selectedLevel2 && (
                  <FormControl variant="outlined" fullWidth margin="normal">
                    <InputLabel>Category Level 3</InputLabel>
                    <Select
                      name="product_category3"
                      value={values.product_category3}
                      onChange={(e) => {
                        setFieldValue("product_category3", e.target.value);
                      }}
                      label="Category Level 3"
                    >
                      {categories3[selectedLevel2]?.map((category) => (
                        <MenuItem key={category} value={category}>
                          {category}
                        </MenuItem>
                      ))}
                    </Select>
                    <ErrorMessage
                      name="product_category3"
                      component="div"
                      className="text-danger"
                    />
                  </FormControl>
                )}

                <input
                  id="contained-button-file"
                  multiple
                  type="file"
                  style={{ display: "none" }}
                  onChange={onImageUpdate}
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" component="span">
                    Upload Image
                  </Button>
                </label>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  fullWidth
                  sx={{ mt: 3, mb: 2 }}
                >
                  Update Product
                  <ToastContainer />
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default EditProduct;
