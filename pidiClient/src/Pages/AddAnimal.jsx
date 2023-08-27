import React from 'react'
import NavbarCom from '../Components/NavbarCom/NavbarCom'
import {Button, Container} from '@mui/material'
import {Link} from 'react-router-dom'
import AddAnimalFormCom from '../Components/AddAnimalFormCom/AddAnimalFormCom'
import UploadButtonCom from '../Components/UploadButtonCom/UploadButtonCom'
import Grid from '@mui/material/Grid'
import UploadImageCom from '../Components/UploadImageCom/UploadImageCom'

const customButtons = [<Button key="allAnimlas" color="inherit" component={Link} to="/admin">
  ALL ANIMALS
</Button>]

function AddAnimal() {

  return (
    <div>
      <NavbarCom
        customButtons={customButtons}/>
      <Container>
        <Grid
          container
          spacing={5}
          justifyContent="center"
          style={{marginTop: '20px'}}>
          <Grid
            item
            xs={12}
            sm={6}>
            <UploadImageCom/>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}>
            <AddAnimalFormCom/>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default AddAnimal