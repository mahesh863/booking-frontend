import { IS_AUTHENTICATED, SET_USER } from "../actions/action.type";

const initialState = {
  loading: true,
  user: "",
  isAuthenticated: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTHENTICATED:
      return {
        ...state,
        loading: false,
        isAuthenticated: action.payload,
      };

    case SET_USER:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default user;
