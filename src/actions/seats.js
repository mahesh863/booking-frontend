import { getSeats } from "../helpers/seats";
import {
  ERROR_SEAT,
  GET_SEATS,
  REMOVE_SEATS,
  SELECT_SEATS,
} from "./action.type";

export const getAllSeats = (data) => (dispatch) => {
  const { id, date } = data;
  getSeats(id, date)
    .then((res) => {
      let seats = res.data.data.sort((a, b) => {
        return a.seatNumber - b.seatNumber;
      });
      dispatch({
        type: GET_SEATS,
        payload: seats,
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

export const selectSeats = (data) => (dispatch) => {
  dispatch({
    type: SELECT_SEATS,
    payload: data,
  });
};

export const removeSeats = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_SEATS,
    payload: id,
  });
};
