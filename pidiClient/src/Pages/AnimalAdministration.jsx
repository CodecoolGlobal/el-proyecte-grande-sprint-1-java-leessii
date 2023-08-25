import React from 'react'
import AnimalsApi from '../Api/AnimalsApi'
import {useMutation, useQuery} from '@tanstack/react-query'
import {CircularProgress, Box, Button} from '@mui/material'
import '../index.css'
import AnimalDataGridCom from '../Components/AnimalDataGridCom/AnimalsDataGridCom'
import NavbarCom from '../Components/NavbarCom/NavbarCom'
import AddIcon from '@mui/icons-material/Add'
import {Link} from 'react-router-dom'

const AnimalAdministration = () => {

  const getAllAnimalsQuery = useQuery({
    queryKey: ['animals'],
    queryFn: () => AnimalsApi.getAllAnimals(),
  })

  console.log(getAllAnimalsQuery.data)

  const deleteMutation = useMutation({
    mutationFn: (id) => AnimalsApi.delete(id),
    onSuccess: getAllAnimalsQuery.refetch,
  })

  const customButtons = [
    <Button key="addAnimal" color="inherit" startIcon={<AddIcon/>} component={Link} to="/add">
      ADD ANIMAL
    </Button>,
  ]

  return (
    <div>
      <NavbarCom customButtons={customButtons}/>
      <Box sx={{margin: 8}}>
        {getAllAnimalsQuery.isLoading ?
          <CircularProgress/> :
          <AnimalDataGridCom
            animals={getAllAnimalsQuery.data}
            onDelete={deleteMutation.mutate}
          />
        }
      </Box>
    </div>
  )
}

export default AnimalAdministration