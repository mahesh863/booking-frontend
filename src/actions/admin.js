import { getAllProducts } from "../helpers/admin";
import { ERROR_GETTING_ALL_PRODUCTS, GET_ALL_PRODUCTS } from "./action.type";

export const getAllProduct = () => (dispatch) => {
  getAllProducts()
    .then((res) => {
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: ERROR_GETTING_ALL_PRODUCTS,
        dispatch: true,
      });
    });
};
