import axios from 'axios'

const animalsApi = {
  get: () => axios.get('http://localhost:8080/animals').then(({data}) => data),
  delete: (id) => axios.delete(`http://localhost:8080/animals/${id}`)
}

export default animalsApi