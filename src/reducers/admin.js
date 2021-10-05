import {
  ERROR_GETTING_ALL_PRODUCTS,
  GET_ALL_PRODUCTS,
} from "../actions/action.type";

const initialState = {
  loading: true,
  allProducts: "",
  error: false,
};

const admin = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        loading: false,
        error: false,
        allProducts: action.payload,
      };

    case ERROR_GETTING_ALL_PRODUCTS:
      return {
        ...state,
        loading: false,
        error: true,
        allProducts: "",
      };

    default:
      return state;
  }
};

export default admin;
