import axios from 'axios';
const token = localStorage.getItem('jwtToken');

const adoptionStatusApi = {
  get: () => axios.get('http://localhost:8080/adoptionstatus', {
    headers: { Authorization: `Bearer ${token}` },
  }).then(({ data }) => data),
};

export default adoptionStatusApi;