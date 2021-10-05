import { getSeats } from "../helpers/seats";
import { ERROR_SEAT, GET_SEATS } from "./action.type";

export const getAllSeats = (data) => (dispatch) => {
  const { id, date } = data;
  console.log(id);
  console.log(date);
  getSeats(id, date)
    .then((res) => {
      dispatch({
        type: GET_SEATS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: ERROR_SEAT,
        payload: true,
      });
    });
};
