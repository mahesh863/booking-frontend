import { PAYMENT_LOADING } from "../actions/action.type";

const initialState = {
  loading: false,
};

const paymentLoading = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default paymentLoading;
