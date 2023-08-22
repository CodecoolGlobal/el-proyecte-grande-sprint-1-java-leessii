import React from 'react'
import AnimalCardCom from '../Components/AnimalCardCom/AnimalCardCom'
import {useQuery} from '@tanstack/react-query'
import AnimalsApi from '../Api/AnimalsApi'
import {CircularProgress, Container, Box, Button} from '@mui/material'
import Grid from '@mui/material/Grid'
import NavbarCom from '../Components/NavbarCom/NavbarCom'
import {Link} from 'react-router-dom'

function AnimalAdoption() {

  const getAnimalsForAdoptionQuery = useQuery({
    queryKey: ['animals'],
    queryFn: () => AnimalsApi.getAnimalsForAdoption(),
  })

  const customButtons = [
    <Button key="donation" color="inherit" component={Link} to="/donate">
      DONATE
    </Button>,
  ]

  return (
    <div>
      <NavbarCom customButtons={customButtons}/>
      <Box sx={{margin: 8}}>
        <Container>
          <Grid container spacing={3}>
            {getAnimalsForAdoptionQuery.isLoading ?
              <CircularProgress/> : getAnimalsForAdoptionQuery.data.map((animal) => (
                <Grid item key={animal.id} xs={12} md={6} lg={4}>
                  <AnimalCardCom animal={animal}/>
                </Grid>
              ))}
          </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default AnimalAdoption