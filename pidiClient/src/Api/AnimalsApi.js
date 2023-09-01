import axios from 'axios'

const animalsApi = {
  getAllAnimals: () => axios.get('http://localhost:8080/animals').then(({data}) => data),
  getAnimalsForAdoption: () => axios.get('http://localhost:8080/animals/adoption').then(({data}) => data),
  saveAnimal: (newData) => axios.post('http://localhost:8080/animals', newData,{
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }),
  delete: (id) => axios.delete(`http://localhost:8080/animals/${id}`)
}

export default animalsApi