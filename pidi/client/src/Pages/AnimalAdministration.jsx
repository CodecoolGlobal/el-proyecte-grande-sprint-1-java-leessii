import React from 'react'
import AnimalTableCom from '../Components/AnimalTableCom/AnimalTableCom'
import AnimalsApi from '../Api/AnimalsApi'
import {useMutation, useQuery} from '@tanstack/react-query'
import {CircularProgress, Box} from '@mui/material'
import '../index.css'
import AnimalDataGridCom from '../Components/AnimalTableCom/AnimalsDataGridCom'

const AnimalAdministration = () => {

  const getQuery = useQuery({
    queryKey: ['animals'],
    queryFn: () => AnimalsApi.get(),
  })

  const deleteMutation = useMutation({
    mutationFn: (id) => AnimalsApi.delete(id),
    onSuccess: getQuery.refetch,
  })

  return (
    <div>
      <Box sx={{margin: 8}}>
        {getQuery.isLoading ? <CircularProgress/> :
          <AnimalTableCom animals={getQuery.data} onDelete={deleteMutation.mutate}/>}
      </Box>
    </div>
  )
}

export default AnimalAdministration