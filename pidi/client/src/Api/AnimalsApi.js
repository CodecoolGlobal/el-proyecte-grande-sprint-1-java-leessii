import axios from 'axios'

const animalsApi = {
  getAllAnimals: () => axios.get('http://localhost:8080/animals').then(({data}) => data),
  getAnimalsForAdoption: () => axios.get('http://localhost:8080/animals/adoption').then(({data}) => data),
  delete: (id) => axios.delete(`http://localhost:8080/animals/${id}`)
}

export default animalsApi