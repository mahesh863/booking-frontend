import { combineReducers } from "redux";
import user from "./user";
import category from "./category";
import product from "./products";
import seats from "./seats";
import admin from "./admin";
import paymentLoading from "./paymentLoading";

export default combineReducers({
  user,
  category,
  product,
  seats,
  admin,
  paymentLoading,
});
