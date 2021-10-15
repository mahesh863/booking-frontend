import { toast } from "react-toastify";
import { signIn, signOut, signUp } from "../helpers/auth";
import { IS_AUTHENTICATED, SET_USER } from "./action.type";

export const signup = (data) => (dispatch) => {
  const { name, email, password, history } = data;
  signUp(name, email, password)
    .then((res) => {
      toast.success("Signup Success!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      history.push("/signin");
    })
    .catch((err) => {
      toast.warn(err.response.data.err, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
};

export const signin = (data) => (dispatch) => {
  const { email, password, history } = data;
  signIn(email, password)
    .then((res) => {
      toast.success("Signin Success!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      dispatch({
        type: IS_AUTHENTICATED,
        payload: true,
      });

      dispatch({
        type: SET_USER,
        payload: res.data,
      });

      history.goBack();
    })
    .catch((err) => {
      if (!err.response.data.err) {
        toast.warn("Sorry Something Went Wrong!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        return;
      }
      toast.warn(err.response.data.err, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
};

export const signout = () => (dispatch) => {
  signOut()
    .then((res) => {
      dispatch({
        type: IS_AUTHENTICATED,
        payload: false,
      });

      dispatch({
        type: SET_USER,
        payload: "",
      });

      toast.success("Signout Success!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    .catch((err) => console.log(err));
};
