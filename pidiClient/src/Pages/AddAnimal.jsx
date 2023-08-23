import React from 'react'
import NavbarCom from '../Components/NavbarCom/NavbarCom'
import {Button, CircularProgress} from '@mui/material'
import {Link} from 'react-router-dom';
import AddAnimalFormCom from '../Components/AddAnimalFormCom/AddAnimalFormCom'
import {useQuery} from '@tanstack/react-query'
import AdoptionStatusApi from '../Api/AdoptionStatusApi'

const customButtons = [
  <Button key="allAnimlas" color="inherit" component={Link} to="/admin">
    ALL ANIMALS
  </Button>,
]

function AddAnimal() {
  const getAdoptionStatusQuery = useQuery({
    queryKey: ['adoptionStatus'],
    queryFn: () => AdoptionStatusApi.get(),
  })

  return (
    <div>
      <NavbarCom customButtons={customButtons}/>
      {getAdoptionStatusQuery.isLoading ? <CircularProgress/> : <AddAnimalFormCom adoptionStatus={getAdoptionStatusQuery.data} />}
    </div>
  )
}

export default AddAnimal