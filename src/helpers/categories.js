import axios from "axios";
import { API } from "./backend.config";

export const getAllCategories = () => {
  return axios({
    url: `${API}/get/all/categories`,
    method: "GET",
  });
};
