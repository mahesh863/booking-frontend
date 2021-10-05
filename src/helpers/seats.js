import axios from "axios";
import { API } from "./backend.config";

export const getSeats = (productId, date) => {
  console.log(">>>", productId);
  console.log(">>>", date);
  return axios({
    method: "POST",
    url: `${API}/view/seats`,
    data: {
      productId: productId,
      seatDate: date,
    },
  });
};
