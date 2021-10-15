import axios from "axios";
import { API } from "./backend.config";

export const getAllProducts = () => {
  return axios({
    method: "GET",
    url: `${API}/get/all/products`,
  });
};

export const searchForPorducts = (term) => {
  return axios({
    method: "POST",
    url: `${API}/search/products`,
    data: {
      productName: term,
    },
  });
};

export const getProductsByCategory = (id) => {
  return axios({
    method: "POST",
    url: `${API}/get/products/category`,
    data: {
      categoryId: id,
    },
  });
};

export const getNewAddedProducts = () => {
  return axios({
    method: "GET",
    url: `${API}/new/addition/products`,
  });
};

export const searchProductsById = (id) => {
  return axios({
    url: `${API}/search/product/id`,
    method: "POST",
    data: {
      productId: id,
    },
  });
};

export const getFeaturedProducts = () => {
  return axios({
    url: `${API}/featured/products`,
    method: "GET",
  });
};
