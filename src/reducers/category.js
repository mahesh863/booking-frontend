import { GET_CATEGORIES, ERROR_CATEGORIES } from "../actions/action.type";

const initialState = {
  loading: true,
  categories: "",
  error: false,
};

const category = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        loading: false,
        categories: action.payload,
        error: false,
      };

    case ERROR_CATEGORIES:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default category;
