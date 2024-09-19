// // // // // import { Formik, Form, Field, ErrorMessage } from "formik";
// // // // // import { Link, useNavigate } from "react-router-dom";
// // // // // import * as yup from "yup";
// // // // // import { useState } from "react";
// // // // // import axios from "axios";
// // // // // import {
// // // // //   TextField,
// // // // //   Button,
// // // // //   MenuItem,
// // // // //   Select,
// // // // //   InputLabel,
// // // // //   FormControl,
// // // // //   Container,
// // // // //   Box,
// // // // // } from "@mui/material";
// // // // // import { toast } from "react-toastify";
// // // // // import "react-toastify/dist/ReactToastify.css";
// // // // // import { useDispatch } from 'react-redux';
// // // // // import api from "../../Config/apiConfig";
// // // // // // import { setUserId } from '../../Redux/Cart/cartSlice'; // Adjust path as per your file structure

// // // // // const SignIn = () => {
// // // // //   const validationSchema = yup.object({
// // // // //     email: yup.string().email("invalid email").required("email is required"),
// // // // //     password: yup
// // // // //       .string()
// // // // //       .required("Password is Required")
// // // // //       .min(6, "At Least 6 Character"),
// // // // //   });
// // // // //   const navigate = useNavigate();
// // // // //   const dispatch = useDispatch()

// // // // //   const [userData, setUserData] = useState({
// // // // //     email: "",
// // // // //     password: "",
// // // // //   });

// // // // //   const handleSignIn = async (values) => {
// // // // //     try {
// // // // //       const response = await axios.post(
// // // // //         "http://localhost:8080/api/users/signIn",
// // // // //         values
// // // // //       );
// // // // //       console.log("res", response.data);
// // // // //       console.log("is", response.data.user._id);
// // // // //       // const userId = response.data.user._id;
// // // // //       // dispatch(setUserId(userId));
// // // // //       localStorage.setItem(
// // // // //         "signIn",
// // // // //         JSON.stringify({
// // // // //           signIn: true,
// // // // //           name: response.data.user.name,
// // // // //           accessToken: response.data.accessToken,
// // // // //           refreshToken: response.data.refreshToken,
// // // // //         })
// // // // //       );
// // // // //       console.log("resTOKEN", response.data.refreshToken);
// // // // //       sessionStorage.setItem("refreshToken", response.data.refreshToken);
// // // // //       let rt = sessionStorage.getItem("refreshToken");
// // // // //       console.log(rt);

// // // // //       alert("Login Successfully Done " + " " + response.data.user.name);
// // // // //       setUserData({
// // // // //         email: "",
// // // // //         password: "",
// // // // //       });
// // // // //       navigate("/");
// // // // //       //   if (response.data.user.role === "admin") {
// // // // //       //     navigate("/BlogList");
// // // // //       //   } else {
// // // // //       //     navigate("/Blogs");
// // // // //       //   }
// // // // //     } catch (error) {
// // // // //       alert("User not found");
// // // // //       console.error(error);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <>
// // // // //       <Container component="main" maxWidth="md">
// // // // //         <Box
// // // // //           sx={{
// // // // //             marginTop: 8,
// // // // //             display: "flex",
// // // // //             flexDirection: "column",
// // // // //             alignItems: "center",
// // // // //           }}
// // // // //         >
// // // // //           <h1 className="text-center m-5">SignIN</h1>
// // // // //           <Formik
// // // // //             initialValues={{
// // // // //               email: "",
// // // // //               password: "",
// // // // //             }}
// // // // //             validationSchema={validationSchema}
// // // // //             onSubmit={handleSignIn}
// // // // //           >
// // // // //             {({ values, isSubmitting }) => (
// // // // //               <Form>
// // // // //                 <Box sx={{ mt: 3 }}>
// // // // //                   <Field name="email">
// // // // //                     {({ field }) => (
// // // // //                       <TextField
// // // // //                         {...field}
// // // // //                         label="Email"
// // // // //                         variant="outlined"
// // // // //                         fullWidth
// // // // //                         margin="normal"
// // // // //                       />
// // // // //                     )}
// // // // //                   </Field>
// // // // //                   <ErrorMessage
// // // // //                     name="email"
// // // // //                     component="div"
// // // // //                     className="text-danger"
// // // // //                   />
// // // // //                   <Field name="password">
// // // // //                     {({ field }) => (
// // // // //                       <TextField
// // // // //                         {...field}
// // // // //                         label="PassWord"
// // // // //                         variant="outlined"
// // // // //                         fullWidth
// // // // //                         margin="normal"
// // // // //                       />
// // // // //                     )}
// // // // //                   </Field>
// // // // //                   <ErrorMessage
// // // // //                     name="password"
// // // // //                     component="div"
// // // // //                     className="text-danger"
// // // // //                   />

// // // // //                   {/* <input
// // // // //                     id="contained-button-file"
// // // // //                     multiple
// // // // //                     type="file"
// // // // //                     style={{ display: "none" }}
// // // // //                     onChange={onImageUpdate}
// // // // //                   /> */}
// // // // //                   {/* <label htmlFor="contained-button-file">
// // // // //                     <Button variant="contained" component="span">
// // // // //                       Upload Image
// // // // //                     </Button>
// // // // //                   </label> */}

// // // // //                   <Button
// // // // //                     type="submit"
// // // // //                     variant="contained"
// // // // //                     color="primary"
// // // // //                     disabled={isSubmitting}
// // // // //                     fullWidth
// // // // //                     sx={{ mt: 3, mb: 2 }}
// // // // //                   >
// // // // //                     SignIN
// // // // //                   </Button>
// // // // //                   <h6 className="text-center m-3">
// // // // //                     PLEASE <Link to="/signUp">SIGNUP!!</Link> FIRST
// // // // //                   </h6>
// // // // //                 </Box>
// // // // //               </Form>
// // // // //             )}
// // // // //           </Formik>
// // // // //         </Box>
// // // // //       </Container>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default SignIn;

// // // // // SignIn.js

// // // // import React, { useEffect } from "react";
// // // // import { useDispatch } from "react-redux";
// // // // import { Formik, Form, Field, ErrorMessage } from "formik";
// // // // import * as yup from "yup";
// // // // import { TextField, Button, Container, Box } from "@mui/material";
// // // // import axios from "axios";
// // // // import { setUser, setLoading, setError } from "../../Redux/User/authSlice"; // Adjust path as per your file structure
// // // // import { Link, useNavigate } from "react-router-dom";

// // // // const validationSchema = yup.object().shape({
// // // //   email: yup.string().email("Invalid email").required("Email is required"),
// // // //   password: yup
// // // //     .string()
// // // //     .required("Password is Required")
// // // //     .min(6, "At Least 6 Characters"),
// // // // });

// // // // const SignIn = () => {
// // // //   const dispatch = useDispatch();
// // // //   const navigate = useNavigate();

// // // //   const handleSignIn = async (values, { setSubmitting }) => {
// // // //     try {
// // // //       dispatch(setLoading());
// // // //       const response = await axios.post(
// // // //         "http://192.168.2.61:8080/api/users/signIn",
// // // //         values
// // // //       );
// // // //       dispatch(setUser(response.data.user)); // Assuming the API returns the user object
// // // //       localStorage.setItem(
// // // //         "signIn",
// // // //         JSON.stringify({
// // // //           signIn: true,
// // // //           name: response.data.user.name,
// // // //           accessToken: response.data.accessToken,
// // // //           refreshToken: response.data.refreshToken,
// // // //         })
// // // //       );
// // // //       sessionStorage.setItem("refreshToken", response.data.refreshToken);
// // // //       alert(`Login Successfully Done ${response.data.user.name}`);
// // // //       navigate("/");
// // // //     } catch (error) {
// // // //       dispatch(setError("User not found")); // Handle specific errors as needed
// // // //       console.error(error);
// // // //     } finally {
// // // //       setSubmitting(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <Container component="main" maxWidth="md">
// // // //       <Box
// // // //         sx={{
// // // //           marginTop: 8,
// // // //           display: "flex",
// // // //           flexDirection: "column",
// // // //           alignItems: "center",
// // // //         }}
// // // //       >
// // // //         <h1 className="text-center m-5">Login</h1>
// // // //         <Formik
// // // //           initialValues={{ email: "", password: "" }}
// // // //           validationSchema={validationSchema}
// // // //           onSubmit={handleSignIn}
// // // //         >
// // // //           {({ isSubmitting }) => (
// // // //             <Form>
// // // //               <Box sx={{ mt: 3 }}>
// // // //                 <Field name="email">
// // // //                   {({ field }) => (
// // // //                     <TextField
// // // //                       {...field}
// // // //                       label="Email"
// // // //                       variant="outlined"
// // // //                       fullWidth
// // // //                       margin="normal"
// // // //                     />
// // // //                   )}
// // // //                 </Field>
// // // //                 <ErrorMessage
// // // //                   name="email"
// // // //                   component="div"
// // // //                   className="text-danger"
// // // //                 />

// // // //                 <Field name="password">
// // // //                   {({ field }) => (
// // // //                     <TextField
// // // //                       {...field}
// // // //                       label="Password"
// // // //                       variant="outlined"
// // // //                       fullWidth
// // // //                       margin="normal"
// // // //                     />
// // // //                   )}
// // // //                 </Field>
// // // //                 <ErrorMessage
// // // //                   name="password"
// // // //                   component="div"
// // // //                   className="text-danger"
// // // //                 />

// // // //                 <Button
// // // //                   type="submit"
// // // //                   variant="contained"
// // // //                   color="primary"
// // // //                   disabled={isSubmitting}
// // // //                   fullWidth
// // // //                   sx={{ mt: 3, mb: 2 }}
// // // //                 >
// // // //                   SignIN
// // // //                 </Button>
// // // //                 <h6 className="text-center m-3">
// // // //                   please <Link to="/signUp">SIGNUP!!</Link>
// // // //                 </h6>
// // // //               </Box>
// // // //             </Form>
// // // //           )}
// // // //         </Formik>
// // // //       </Box>
// // // //     </Container>
// // // //   );
// // // // };

// // // // export default SignIn;

// // // import React, { useState } from "react";
// // // import { useDispatch } from "react-redux";
// // // import { Formik, Form, Field, ErrorMessage } from "formik";
// // // import * as yup from "yup";
// // // import { TextField, Button, Container, Box, Typography, Snackbar } from "@mui/material";
// // // import axios from "axios";
// // // import { setUser, setLoading, setError } from "../../Redux/User/authSlice";
// // // import { Link, useNavigate } from "react-router-dom";

// // // const validationSchema = yup.object().shape({
// // //   email: yup.string().email("Invalid email").required("Email is required"),
// // //   password: yup.string().required("Password is Required").min(6, "At Least 6 Characters"),
// // // });

// // // const SignIn = () => {
// // //   const dispatch = useDispatch();
// // //   const navigate = useNavigate();
// // //   const [openSnackbar, setOpenSnackbar] = useState(false);
// // //   const [snackbarMessage, setSnackbarMessage] = useState("");
// // //   const [snackbarSeverity, setSnackbarSeverity] = useState("success");

// // //   const handleSignIn = async (values, { setSubmitting }) => {
// // //     try {
// // //       dispatch(setLoading());
// // //       const response = await axios.post("http://localhost:8080/api/users/signIn", values);
// // //       dispatch(setUser(response.data.user));

// // //       // Store tokens in local storage and session storage
// // //       localStorage.setItem("signIn", JSON.stringify({
// // //         signIn: true,
// // //         name: response.data.user.name,
// // //         accessToken: response.data.accessToken,
// // //         refreshToken: response.data.refreshToken,
// // //       }));
// // //       sessionStorage.setItem("refreshToken", response.data.refreshToken);

// // //       // Show success Snackbar
// // //       setSnackbarSeverity("success");
// // //       setSnackbarMessage(`Login Successfully Done for ${response.data.user.name}`);
// // //       setOpenSnackbar(true);

// // //       navigate("/"); // Redirect to homepage after successful login
// // //     } catch (error) {
// // //       // Handle specific errors and show Snackbar for user feedback
// // //       dispatch(setError("User not found"));
// // //       setSnackbarSeverity("error");
// // //       setSnackbarMessage("Failed to sign in. Please check your credentials.");
// // //       setOpenSnackbar(true);
// // //       console.error("Error during sign-in:", error);
// // //     } finally {
// // //       setSubmitting(false);
// // //     }
// // //   };

// // //   const handleSnackbarClose = () => {
// // //     setOpenSnackbar(false);
// // //   };

// // //   return (
// // //     <Container component="main" maxWidth="md">
// // //       <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
// // //         <Typography variant="h2" align="center" gutterBottom>
// // //           Login
// // //         </Typography>
// // //         <Formik
// // //           initialValues={{ email: "", password: "" }}
// // //           validationSchema={validationSchema}
// // //           onSubmit={handleSignIn}
// // //         >
// // //           {({ isSubmitting }) => (
// // //             <Form>
// // //               <Field name="email">
// // //                 {({ field }) => (
// // //                   <TextField
// // //                     {...field}
// // //                     label="Email"
// // //                     variant="outlined"
// // //                     fullWidth
// // //                     margin="normal"
// // //                     error={Boolean(field.value && field.error)}
// // //                   />
// // //                 )}
// // //               </Field>
// // //               <ErrorMessage name="email" component="div" className="text-danger" />

// // //               <Field name="password">
// // //                 {({ field }) => (
// // //                   <TextField
// // //                     {...field}
// // //                     type="password"
// // //                     label="Password"
// // //                     variant="outlined"
// // //                     fullWidth
// // //                     margin="normal"
// // //                     error={Boolean(field.value && field.error)}
// // //                   />
// // //                 )}
// // //               </Field>
// // //               <ErrorMessage name="password" component="div" className="text-danger" />

// // //               <Button
// // //                 type="submit"
// // //                 variant="contained"
// // //                 color="primary"
// // //                 disabled={isSubmitting}
// // //                 fullWidth
// // //                 sx={{ mt: 3, mb: 2 }}
// // //               >
// // //                 Sign In
// // //               </Button>
// // //               <Typography variant="body2" align="center" sx={{ mt: 1 }}>
// // //                 Don't have an account? <Link to="/signUp">Sign Up</Link>
// // //               </Typography>
// // //             </Form>
// // //           )}
// // //         </Formik>
// // //       </Box>

// // //       {/* Snackbar for displaying notifications */}
// // //       <Snackbar
// // //         open={openSnackbar}
// // //         autoHideDuration={6000}
// // //         onClose={handleSnackbarClose}
// // //         anchorOrigin={{ vertical: "top", horizontal: "center" }}
// // //         severity={snackbarSeverity}
// // //         message={snackbarMessage}
// // //       />
// // //     </Container>
// // //   );
// // // };

// // // export default SignIn;import React, { useState } from "react";

// // import { useDispatch } from "react-redux";
// // import { Formik, Form, Field, ErrorMessage } from "formik";
// // import * as yup from "yup";
// // import { TextField, Button, Container, Box, Typography, Snackbar } from "@mui/material";
// // import axios from "axios";
// // import { setUser, setLoading, setError } from "../../Redux/User/authSlice";
// // import { Link, useNavigate } from "react-router-dom";
// // import { useState } from "react";

// // const validationSchema = yup.object().shape({
// //   email: yup.string().email("Invalid email").required("Email is required"),
// //   password: yup.string().required("Password is Required").min(6, "At Least 6 Characters"),
// // });

// // const SignIn = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const [openSnackbar, setOpenSnackbar] = useState(false);
// //   const [snackbarMessage, setSnackbarMessage] = useState("");
// //   const [snackbarSeverity, setSnackbarSeverity] = useState("success");

// //   const handleSignIn = async (values, { setSubmitting }) => {
// //     try {
// //       dispatch(setLoading());
// //       const response = await axios.post("http://192.168.2.61:8080/api/users/signIn", values);
// //       dispatch(setUser(response.data.user));

// //       // Store tokens in local storage and session storage
// //       localStorage.setItem("signIn", JSON.stringify({
// //         signIn: true,
// //         name: response.data.user.name,
// //         accessToken: response.data.accessToken,
// //         refreshToken: response.data.refreshToken,
// //       }));
// //       sessionStorage.setItem("refreshToken", response.data.refreshToken);

// //       // Show success Snackbar
// //       setSnackbarSeverity("success");
// //       setSnackbarMessage(`Login Successfully Done for ${response.data.user.name}`);
// //       setOpenSnackbar(true);

// //       navigate("/"); // Redirect to homepage after successful login
// //     } catch (error) {
// //       // Handle specific errors and show Snackbar for user feedback
// //       dispatch(setError("User not found"));
// //       setSnackbarSeverity("error");
// //       setSnackbarMessage("Failed to sign in. Please check your credentials.");
// //       setOpenSnackbar(true);
// //       console.error("Error during sign-in:", error);
// //     } finally {
// //       setSubmitting(false);
// //     }
// //   };

// //   const handleSnackbarClose = (event, reason) => {
// //     if (reason === 'clickaway') {
// //       return;
// //     }
// //     setOpenSnackbar(false);
// //   };

// //   return (
// //     <Container component="main" maxWidth="md">
// //       <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
// //         <Typography variant="h2" align="center" gutterBottom>
// //           Login
// //         </Typography>
// //         <Formik
// //           initialValues={{ email: "", password: "" }}
// //           validationSchema={validationSchema}
// //           onSubmit={handleSignIn}
// //         >
// //           {({ isSubmitting }) => (
// //             <Form>
// //               <Field name="email">
// //                 {({ field }) => (
// //                   <TextField
// //                     {...field}
// //                     label="Email"
// //                     variant="outlined"
// //                     fullWidth
// //                     margin="normal"
// //                     error={Boolean(field.value && field.error)}
// //                     helperText={<ErrorMessage name="email" />}
// //                     sx={{ "& .MuiFormHelperText-root.Mui-error": { color: "red" } }}
// //                   />
// //                 )}
// //               </Field>

// //               <Field name="password">
// //                 {({ field }) => (
// //                   <TextField
// //                     {...field}
// //                     type="password"
// //                     label="Password"
// //                     variant="outlined"
// //                     fullWidth
// //                     margin="normal"
// //                     error={Boolean(field.value && field.error)}
// //                     helperText={<ErrorMessage name="password" />}
// //                     sx={{ "& .MuiFormHelperText-root.Mui-error": { color: "red" } }}
// //                   />
// //                 )}
// //               </Field>

// //               <Button
// //                 type="submit"
// //                 variant="contained"
// //                 color="primary"
// //                 disabled={isSubmitting}
// //                 fullWidth
// //                 sx={{ mt: 3, mb: 2 }}
// //               >
// //                 Sign In
// //               </Button>

// //               <Typography variant="body2" align="center" sx={{ mt: 1 }}>
// //                 Don't have an account? <Link to="/signUp">Sign Up</Link>
// //               </Typography>
// //             </Form>
// //           )}
// //         </Formik>
// //       </Box>

// //       {/* Snackbar for displaying notifications */}
// //       <Snackbar
// //         open={openSnackbar}
// //         autoHideDuration={6000}
// //         onClose={handleSnackbarClose}
// //         anchorOrigin={{ vertical: "top", horizontal: "center" }}
// //         severity={snackbarSeverity === "success" ? "success" : "error"}
// //         message={snackbarMessage}
// //       />
// //     </Container>
// //   );
// // };

// // export default SignIn;

// import React from "react";
// import { useDispatch } from "react-redux";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as yup from "yup";
// import { TextField, Button, Container, Box, Typography } from "@mui/material";
// import axios from "axios";
// import { setUser, setLoading, setError } from "../../Redux/User/authSlice";
// import { Link, useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const validationSchema = yup.object().shape({
//   email: yup.string().email("Invalid email").required("Email is required"),
//   password: yup
//     .string()
//     .required("Password is Required")
//     .min(6, "At Least 6 Characters"),
// });

// const SignIn = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSignIn = async (values, { setSubmitting }) => {
//     try {
//       dispatch(setLoading());
//       const response = await axios.post(
//         "http://192.168.2.61:8080/api/users/signIn",
//         values
//       );
//       dispatch(setUser(response.data.user));

//       // Store tokens in local storage and session storage
//       localStorage.setItem(
//         "signIn",
//         JSON.stringify({
//           signIn: true,
//           name: response.data.user.name,
//           accessToken: response.data.accessToken,
//           refreshToken: response.data.refreshToken,
//         })
//       );
//       sessionStorage.setItem("refreshToken", response.data.refreshToken);

//       // Show success toast notification
//       toast.success(`Login Successfully Done ${response.data.user.name}`);

//       // Set a timer to navigate after toast notification
//       setTimeout(() => {
//         navigate("/"); // Redirect to homepage after successful login
//       }, 3000); // 3000 milliseconds (3 seconds) delay before navigation
//     } catch (error) {
//       // Handle specific errors and show error toast notification
//       dispatch(setError("User not found"));
//       toast.error("Failed to sign in. Please check your credentials.");
//       console.error("Error during sign-in:", error);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <Container component="main" maxWidth="md">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Typography variant="h2" align="center" gutterBottom>
//           Login
//         </Typography>
//         <Formik
//           initialValues={{ email: "", password: "" }}
//           validationSchema={validationSchema}
//           onSubmit={handleSignIn}
//         >
//           {({ isSubmitting }) => (
//             <Form>
//               <Field name="email">
//                 {({ field }) => (
//                   <TextField
//                     {...field}
//                     label="Email"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     error={Boolean(field.value && field.error)}
//                     helperText={
//                       <ErrorMessage name="email">
//                         {msg => <span style={{ color: 'red' }}>{msg}</span>}
//                       </ErrorMessage>
//                     }
//                   />
//                 )}
//               </Field>

//               <Field name="password">
//                 {({ field }) => (
//                   <TextField
//                     {...field}
//                     type="password"
//                     label="Password"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     error={Boolean(field.value && field.error)}
//                     helperText={
//                       <ErrorMessage name="password">
//                         {msg => <span style={{ color: 'red' }}>{msg}</span>}
//                       </ErrorMessage>
//                     }
//                   />
//                 )}
//               </Field>

//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 disabled={isSubmitting}
//                 fullWidth
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Sign In
//               </Button>

//               <Typography variant="body2" align="center" sx={{ mt: 1 }}>
//                 Don't have an account? <Link to="/signUp">Sign Up</Link>
//               </Typography>
//             </Form>
//           )}
//         </Formik>
//       </Box>

//       {/* Toast Container for displaying notifications */}
//       <ToastContainer />
//     </Container>
//   );
// };

// export default SignIn;

import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { TextField, Button, Container, Box, Typography } from "@mui/material";
import axios from "axios";
import { setUser, setLoading, setError } from "../../Redux/User/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is Required")
    .min(6, "At Least 6 Characters"),
});

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = async (values, { setSubmitting }) => {
    try {
      dispatch(setLoading());
      const response = await axios.post(
        "http://192.168.2.61:8080/api/users/signIn",
        values
      );

      dispatch(setUser(response.data.user));

      // Store tokens in local storage and session storage
      localStorage.setItem(
        "signIn",
        JSON.stringify({
          signIn: true,
          name: response.data.user.name,
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken,
        })
      );
      sessionStorage.setItem("refreshToken", response.data.refreshToken);

      // Show success toast notification
      toast.success(`Login Successfully Done ${response.data.user.name}`);

      // Check user role and navigate accordingly
      setTimeout(() => {
        if (response.data.user.role === "admin") {
          navigate("/admin"); // Redirect to admin page
        } else {
          navigate("/"); // Redirect to homepage after successful login
        }
      }, 3000);
    } catch (error) {
      // Handle specific errors and show error toast notification
      dispatch(setError("User not found"));
      toast.error("Failed to sign in. Please check your credentials.");
      console.error("Error during sign-in:", error);
    } finally {
      setSubmitting(false);
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
        <Typography variant="h2" align="center" gutterBottom>
          Login
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSignIn}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field name="email">
                {({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    error={Boolean(field.value && field.error)}
                    helperText={
                      <ErrorMessage name="email">
                        {(msg) => <span style={{ color: "red" }}>{msg}</span>}
                      </ErrorMessage>
                    }
                  />
                )}
              </Field>

              <Field name="password">
                {({ field }) => (
                  <TextField
                    {...field}
                    type="password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    error={Boolean(field.value && field.error)}
                    helperText={
                      <ErrorMessage name="password">
                        {(msg) => <span style={{ color: "red" }}>{msg}</span>}
                      </ErrorMessage>
                    }
                  />
                )}
              </Field>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                fullWidth
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>

              <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                Don't have an account? <Link to="/signUp">Sign Up</Link>
              </Typography>
            </Form>
          )}
        </Formik>
      </Box>

      {/* Toast Container for displaying notifications */}
      <ToastContainer />
    </Container>
  );
};

export default SignIn;
