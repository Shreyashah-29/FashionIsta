import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { TextField, Button, Container, Box } from "@mui/material";
import axios from "axios";
import { setLoading, setError } from "../../Redux/User/authSlice"; // Adjust path as per your file structure
import { toast , ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required").max(10, "Must be 10 or less characters"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required").min(6, "Must be at least 6 characters"),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required')
});

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = async (values, { setSubmitting }) => {
    try {
      dispatch(setLoading());
      const response = await axios.post(
        "http://192.168.2.61:8080/api/users/signUp",
        values
      );

      toast.success(`${values.name}, please check your email for verification`);

    } catch (error) {
  dispatch(setError("User already exists")); // Handle specific errors as needed
  toast.success(`User already exists`);
  console.error(error);
    } finally {
      setSubmitting(false);
      toast.success(`please check your credential`);
    }
  };

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
        <h1 className="text-center m-5">Sign Up</h1>
        <Formik
          initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSignup}
        >
          {({ isSubmitting }) => (
            <Form>
              <Box sx={{ mt: 3 }}>
                <Field name="name">
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
                  name="name"
                  component="div"
                  className="text-danger"
                />

                <Field name="email">
                  {({ field }) => (
                    <TextField
                      {...field}
                      label="Email"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />

                <Field name="password">
                  {({ field }) => (
                    <TextField
                      {...field}
                      label="Password"
                      variant="outlined"
                      type="password"
                      fullWidth
                      margin="normal"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-danger"
                />

                <Field name="confirmPassword">
                  {({ field }) => (
                    <TextField
                      {...field}
                      label="Confirm Password"
                      variant="outlined"
                      type="password"
                      fullWidth
                      margin="normal"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-danger"
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  fullWidth
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                  <ToastContainer />
                </Button>
                <h6 className="text-center m-3">
                  Have an account? <Link to="/signIn">Login</Link>
                </h6>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default SignUp;
