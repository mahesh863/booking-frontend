import axios from "axios";
import { API } from "./backend.config";

export const signUp = (name, email, password) => {
  return axios({
    method: "POST",
    url: `${API}/signup`,
    data: {
      name,
      email,
      password,
    },
  });
};

export const signIn = (email, password) => {
  return axios({
    method: "POST",
    url: `${API}/signin`,
    data: {
      email,
      password,
    },
  });
};

export const signOut = () => {
  return axios({
    method: "GET",
    url: `${API}/signout`,
  });
};
