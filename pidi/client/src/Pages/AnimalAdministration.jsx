import React from 'react'
import AnimalTableCom from '../Components/AnimalTableCom/AnimalTableCom'
import AnimalsApi from '../Api/AnimalsApi'
import {useMutation, useQuery} from '@tanstack/react-query'
import {CircularProgress, Box} from '@mui/material'
import '../index.css'
import AnimalDataGridCom from '../Components/AnimalTableCom/AnimalsDataGridCom'
import AdoptionStatusApi from '../Api/AdoptionStatusApi'

const AnimalAdministration = () => {

  const getAnimalsQuery = useQuery({
    queryKey: ['animals'],
    queryFn: () => AnimalsApi.get(),
  })

  const getAdoptionStatusQuery = useQuery({
    queryKey: ['adoptionstatus'],
    queryFn: () => AdoptionStatusApi.get(),
  })

  const deleteMutation = useMutation({
    mutationFn: (id) => AnimalsApi.delete(id),
    onSuccess: getAnimalsQuery.refetch,
  })

  return (
    <div>
      <Box sx={{margin: 8}}>
        {getAnimalsQuery.isLoading || getAdoptionStatusQuery.isLoading ? <CircularProgress/> : <AnimalDataGridCom animals={getAnimalsQuery.data} adoptionStatus={getAdoptionStatusQuery.data} onDelete={deleteMutation.mutate}/>}
      </Box>
    </div>
  )
}

export default AnimalAdministration