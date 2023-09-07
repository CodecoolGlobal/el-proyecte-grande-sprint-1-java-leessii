import axios from 'axios'
const token = localStorage.getItem('jwtToken');

const animalsApi = {
  getAllAnimals: () => axios.get('http://localhost:8080/animals', {
    headers: { Authorization: `Bearer ${token}` },
  }).then(({data}) => data),
  getAnimalsForAdoption: () => axios.get('http://localhost:8080/animals/adoption', {
    headers: { Authorization: `Bearer ${token}` },
  }).then(({data}) => data),
  saveAnimal: (newData) => axios.post('http://localhost:8080/animals', newData, {
    headers: { Authorization: `Bearer ${token}` },
  }),
  delete: (id) => axios.delete(`http://localhost:8080/animals/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

export default animalsApi