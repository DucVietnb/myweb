import axios from "axios";
import _ from "lodash";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,

  withCredentials: true,
  // handle send token cookie into backend
});

instance.interceptors.response.use((response) => {
  const { data } = response;
  return response.data;
});

export default instance;
