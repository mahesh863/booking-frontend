import {
  getAllProducts,
  searchForPorducts,
  getProductsByCategory,
  getNewAddedProducts,
  searchProductsById,
  getFeaturedProducts,
} from "../helpers/products";
import {
  ERROR_PRODUCT,
  GET_PRODUCT,
  NEW_ADDED_PRODUCTS,
  GET_PRODUCT_ID,
  ERROR_PRODUCT_ID,
  FEATURED_PRODUCTS,
} from "./action.type";

export const getProducts = () => (dispatch) => {
  getAllProducts()
    .then((res) => {
      dispatch({
        type: GET_PRODUCT,
        paylaod: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ERROR_PRODUCT,
        paylaod: true,
      });
    });
};

export const searchProducts = (term) => (dispatch) => {
  searchForPorducts(term)
    .then((res) => {
      dispatch({
        type: GET_PRODUCT,
        paylaod: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: ERROR_PRODUCT,
        paylaod: true,
      });
    });
};

export const getProductByCategory = (id) => (dispatch) => {
  console.log(id);
  getProductsByCategory(id)
    .then((res) => {
      dispatch({
        type: GET_PRODUCT,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: ERROR_PRODUCT,
        payload: true,
      });
    });
};

export const getNewProducts = () => (dispatch) => {
  getNewAddedProducts()
    .then((res) => {
      dispatch({
        type: NEW_ADDED_PRODUCTS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getProductById = (id) => (dispatch) => {
  searchProductsById(id)
    .then((res) => {
      console.log(res);
      dispatch({
        type: GET_PRODUCT_ID,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: ERROR_PRODUCT_ID,
        payload: true,
      });
    });
};

export const featuredProducts = () => (dispatch) => {
  getFeaturedProducts()
    .then((res) => {
      dispatch({
        type: FEATURED_PRODUCTS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
