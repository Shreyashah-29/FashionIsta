
// import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/Footer/Footer";
// import Products from "./Components/Product/Products";
// import ProductDetails from "./Components/ProductDetails/ProductDetails";
// import OrderList from './Components/Order/OrderList'
// import HomePage from "./Pages/HomePage/HomePage";
// import SignIn from "./Components/Authentication/SignIn";
// import SignUp from "./Components/Authentication/SignUp";
// import VerifyMail from "./Components/Authentication/VerifyMAil";
// import Success from "./Success";
// import Cancel from "./Cancel";
// import Order from "./Components/Order/Order"
// import Cart from "./Components/Cart/Cart"
// import Error from "./Components/Error"

// import Admin from "./Admin/Components/Admin"; // Import the Admin component here
// import AdminProducts from "./Admin/Components/AdminProducts";
// import AdminAddProducts from "./Admin/Components/AdminAddProducts";
// import AdminCustomers from "./Admin/Components/AdminCustomers";
// import AdminOrders from "./Admin/Components/AdminOrders";
// import ProfilePage from "./Components/Authentication/Profile";

// function App() {
//   return (
//     <>
//       <div>
//         <Navbar />
//       </div>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<HomePage />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/order" element={<Order />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="products/:category" element={<Products />} />
//         <Route path="/signIn" element={<SignIn />} />
//         <Route path="/signUp" element={<SignUp />} />
//         <Route path="/profile" element={<ProfilePage />} />

//         <Route path="/verify/:userId/:token" element={<VerifyMail />} />
//         <Route path="/success" element={<Success />} />
//         <Route path="/cancel" element={<Cancel />} />
//           <Route path="/order/:id" render={(props) => <OrderList orderId={props.match.params.id} />} />

//         Admin Routes
//         <Route path="/admin" element={<Admin />}>
//           <Route path="/admin/products" element={<AdminProducts />} />
//           <Route path="/admin/addProducts" element={<AdminAddProducts />} />
//           <Route path="/admin/customer" element={<AdminCustomers />} />
//           <Route path="admin//orders" element={<AdminOrders />} />
//           </Route>
//           {/* Add more admin routes as needed */} 
//           {/* Example: <Route path="editProduct/:id" element={<AdminEditProducts />} />
      


//         {/* Not Found Route */}
//         <Route path="*" element={<Error />} />
//       </Routes> 
//       <div>
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default App;







import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Product/Products";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import OrderList from './Components/Order/OrderList'
import HomePage from "./Pages/HomePage/HomePage";
import SignIn from "./Components/Authentication/SignIn";
import SignUp from "./Components/Authentication/SignUp";
import VerifyMail from "./Components/Authentication/VerifyMAil";
import Success from "./Success";
import Cancel from "./Cancel";
import Order from "./Components/Order/Order"
import Cart from "./Components/Cart/Cart"
import Error from "./Components/Error"

import Admin from "./Admin/Components/Admin"; // Import the Admin component here
import AdminProducts from "./Admin/Components/AdminProducts";
import AdminAddProducts from "./Admin/Components/AdminAddProducts";
import AdminCustomers from "./Admin/Components/AdminCustomers";
import AdminOrders from "./Admin/Components/AdminOrders";
import ProfilePage from "./Components/Authentication/Profile";
import AdminEditProduct from './Admin/Components/AdminEditProduct'

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="products/:category" element={<Products />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/verify/:userId/:token" element={<VerifyMail />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/order/:id" render={(props) => <OrderList orderId={props.match.params.id} />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />}>
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/addProducts" element={<AdminAddProducts />} />
          <Route path="/admin/customers" element={<AdminCustomers />} />
          <Route exact path="/admin/edit-product/:id" element={<AdminEditProduct />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          {/* Add more admin routes as needed */}
        </Route>

        {/* Not Found Route */}
        <Route path="*" element={<Error />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
