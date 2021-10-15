import {
  SELECT_SEATS,
  GET_SEATS,
  ERROR_SEAT,
  REMOVE_SEATS,
} from "../actions/action.type";

const initialState = {
  loading: true,
  seats: "",
  error: false,
  selectedSeats: [],
};

const seats = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SEATS:
      return {
        ...state,
        selectedSeats: [...state.selectedSeats, action.payload],
      };

    case REMOVE_SEATS:
      return {
        ...state,
        selectedSeats: state.selectedSeats.filter(
          (val) => val.id !== action.payload
        ),
      };

    case GET_SEATS:
      return {
        ...state,
        loading: false,
        error: false,
        seats: action.payload,
        selectedSeats: [],
      };

    case ERROR_SEAT:
      return {
        ...state,
        loading: false,
        error: true,
        seats: "",
        selectedSeats: [],
      };

    default:
      return state;
  }
};

export default seats;
