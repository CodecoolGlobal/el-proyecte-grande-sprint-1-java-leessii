import axios from 'axios';

const adoptionStatusApi = {
  get: () => axios.get('http://localhost:8080/adoptionstatus').then(({ data }) => data),
};

export default adoptionStatusApi;