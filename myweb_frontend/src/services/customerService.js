import axios from "../axios";

const customerSignup = (data) => {
  return axios.post("/api/sign-up", data);
};
export { customerSignup };
