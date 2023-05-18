import axios from "axios";

export const getAuthorizationHeader = () =>
  `${window.localStorage.token ? window.localStorage.token : ""}`;
export const instance = axios.create({
  baseURL: "http://localhost:7000/",
  headers: {
    authorization: getAuthorizationHeader(),
  },
});
