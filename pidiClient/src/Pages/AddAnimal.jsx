import React from 'react'
import NavbarCom from '../Components/NavbarCom/NavbarCom'
import {Button} from '@mui/material'
import {Link} from 'react-router-dom'
import AddAnimalFormCom from '../Components/AddAnimalFormCom/AddAnimalFormCom'

const customButtons = [<Button key="allAnimlas" color="inherit" component={Link} to="/admin">
  ALL ANIMALS
</Button>]

function AddAnimal() {

  return (<div>
    <NavbarCom customButtons={customButtons}/>
    <AddAnimalFormCom/>
  </div>)
}

export default AddAnimal