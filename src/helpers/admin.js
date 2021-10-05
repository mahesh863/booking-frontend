import axios from "axios";
import { API } from "./backend.config";

export const addCategory = (name) => {
  return axios({
    url: `${API}/create/category`,
    method: "POST",
    data: {
      categoryName: name,
    },
  });
};

export const editCategory = (newName, categoryId) => {
  return axios({
    method: "PUT",
    url: `${API}/edit/category`,
    data: {
      newName: newName,
      categoryId: categoryId,
    },
  });
};

export const deleteCategory = (categoryId) => {
  return axios({
    method: "DELETE",
    url: `${API}/delete/category`,
    data: {
      categoryId: categoryId,
    },
  });
};

export const addProduct = (name, address, seats, price, category) => {
  return axios({
    method: "POST",
    url: `${API}/create`,
    data: {
      productName: name,
      productAddress: address,
      totalNumberOfSeats: seats,
      pricePerSeat: price,
      category: category,
    },
  });
};

export const editProduct = (name, address, seats, price, category) => {
  axios({
    method: "PUT",
    url: `${API}/edit`,
    data: {
      productName: name,
      productAddress: address,
      totalNumberOfSeats: seats,
      pricePerSeat: price,
      category: category,
    },
  });
};

export const deleteProduct = (id) => {
  axios({
    method: "DELETE",
    url: `${API}/delete`,
    data: {
      productId: id,
    },
  });
};

export const getAllProducts = () => {
  return axios({
    method: "GET",
    url: `${API}/get/all/products`,
  });
};

export const createSeats = (productId, showTime, showDate) => {
  console.log(productId);
  console.log(showDate);
  console.log(showTime);

  return axios({
    method: "POST",
    url: `${API}/create/seats/${productId}`,
    data: {
      productId: productId,
      showTime: showTime,
      showDate: showDate,
    },
  });
};
