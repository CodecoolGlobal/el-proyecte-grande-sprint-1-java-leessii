import React from 'react'
import AnimalCardCom from '../Components/AnimalCardCom/AnimalCardCom'
import {useQuery} from '@tanstack/react-query'
import AnimalsApi from '../Api/AnimalsApi'
import {CircularProgress, Container, Box} from '@mui/material'
import Grid from '@mui/material/Grid'

function AnimalAdoption() {

  const getAnimalsForAdoptionQuery = useQuery({
    queryKey: ['animals'],
    queryFn: () => AnimalsApi.getAnimalsForAdoption(),
  })

  console.log(getAnimalsForAdoptionQuery.data)

  return (
    <Box sx={{margin : 8}}>
      <Container>
        <Grid container spacing={3}>
          {getAnimalsForAdoptionQuery.isLoading ? <CircularProgress/> : getAnimalsForAdoptionQuery.data.map((animal) => (
            <Grid item key={animal.id} xs={12} md={6} lg={4}>
              <AnimalCardCom animal={animal}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default AnimalAdoption