import axios from "axios";

const usersApi = {
  authUser: (newData) =>
    axios.post("http://localhost:8080/api/v1/auth/authenticate", newData),
};

export default usersApi;
