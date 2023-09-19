import axios from "axios";
import config from "./JwtTokenConfig";

const animalsApi = {
  getAllAnimals: () =>
    axios
      .get("http://localhost:8080/api/v1/animals", config)
      .then(({ data }) => data),
  getAnimalsForAdoption: () =>
    axios
      .get("http://localhost:8080/api/v1/auth/animals/adoption", config)
      .then(({ data }) => data),
  saveAnimal: (newData) =>
    axios.post("http://localhost:8080/api/v1/animals", newData, config),
  delete: (id) =>
    axios.delete(`http://localhost:8080/api/v1/animals/${id}`, config),
};

export default animalsApi;
