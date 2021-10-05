import { getAllCategories } from "../helpers/categories";
import { ERROR_CATEGORIES, GET_CATEGORIES } from "./action.type";

export const getCategories = () => (disptch) => {
  getAllCategories()
    .then((res) => {
      if (res.data) {
        disptch({
          type: GET_CATEGORIES,
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      disptch({
        type: ERROR_CATEGORIES,
        payload: true,
      });
    });
};
