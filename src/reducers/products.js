import {
  GET_PRODUCT,
  ERROR_PRODUCT,
  NEW_ADDED_PRODUCTS,
  NEW_ADDED_ERROR,
  GET_PRODUCT_ID,
  ERROR_PRODUCT_ID,
  FEATURED_PRODUCTS,
} from "../actions/action.type";

const initialState = {
  loading: true,
  products: "",
  error: false,
  newAddedProducts: "",
  newLoading: true,
  newAddedError: false,
  productById: "",
  errorProductById: false,
  featuredProducts: "",
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      };

    case ERROR_PRODUCT:
      return {
        ...state,
        loading: false,
        products: "",
        error: action.payload,
      };

    case NEW_ADDED_PRODUCTS:
      return {
        ...state,
        newAddedProducts: action.payload,
        newLoading: false,
      };

    case NEW_ADDED_ERROR:
      return {
        ...state,
        newAddedError: true,
        newLoading: false,
        newAddedProducts: "",
      };

    case GET_PRODUCT_ID:
      return {
        ...state,
        productById: action.payload,
        loading: false,
      };

    case ERROR_PRODUCT_ID:
      return {
        ...state,
        productById: "",
        error: true,
      };

    case FEATURED_PRODUCTS:
      return {
        ...state,
        featuredProducts: action.payload,
      };
    default:
      return state;
  }
};

export default product;
