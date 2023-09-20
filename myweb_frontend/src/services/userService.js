import axios from "../axios";

const handleLoginApi = (email, password) => {
  return axios.post("/api/login", { email, password });
};

const getAllUsers = (id) => {
  return axios.get(`/api/get-all-users?id=${id}`);
}

const createNewUserService = (data) => {
  return axios.post("/api/create-users",data)
}

const deleteUserService = (id) => {
  return axios.delete("/api/delete-user", {
    data: {
      id: id
    }
  })
}

const editUserService = (data) => {
  return axios.put("/api/update-user", data)
}
export {
  handleLoginApi,
  getAllUsers,
  createNewUserService,
  deleteUserService,
  editUserService
};