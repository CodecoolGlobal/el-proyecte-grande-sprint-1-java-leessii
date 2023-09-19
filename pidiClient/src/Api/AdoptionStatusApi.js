import axios from "axios";
import config from "./JwtTokenConfig";

const adoptionStatusApi = {
  get: () =>
    axios
      .get("http://localhost:8080/api/v1/adoption/status", config)
      .then(({ data }) => data),
};

export default adoptionStatusApi;
