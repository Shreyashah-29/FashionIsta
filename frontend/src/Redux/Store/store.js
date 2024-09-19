// // store.js
// import { createStore, applyMiddleware, combineReducers } from "redux";
// import { thunk } from "redux-thunk";
// import authReducer from "../User/authReducer";
// // import { ProductReducer } from "../Products/Reducer";
// import { cartReducer } from "../Cart/cartSlice";
// // import { OrderReducer } from "../Order/Reducer";

// const rootReducer = combineReducers({
//   auth: authReducer,
//   // products: ProductReducer,
//   cart: cartReducer,
//   // order:OrderReducer
// });

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;

// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Cart/cartSlice";
import authReducer from "../User/authSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

export default store;
