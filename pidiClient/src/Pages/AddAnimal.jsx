import React from 'react'
import NavbarCom from '../Components/NavbarCom/NavbarCom'
import {Button, Container} from '@mui/material'
import {Link} from 'react-router-dom'
import AddAnimalFormCom from '../Components/AddAnimalFormCom/AddAnimalFormCom'
import SaveButtonCom from '../Components/SaveButtonCom/SaveButtonCom'
import Grid from '@mui/material/Grid'
import UploadImageCom from '../Components/UploadImageCom/UploadImageCom'
import {useMutation} from '@tanstack/react-query'
import AnimalsApi from '../Api/AnimalsApi'
import {useForm} from 'react-hook-form'

const customButtons = [<Button key="allAnimlas" color="inherit" component={Link} to="/admin">
  ALL ANIMALS
</Button>]

function AddAnimal() {
  const saveAnimalMutation = useMutation(async (newData) => {
    const response = await AnimalsApi.saveAnimal(newData)
    return response.data
  })

  const saveAnimalImage = useMutation(async (newData) => {
    const response = await AnimalsApi.saveAnimalImage(newData)
    return response.data
  })

  const {control, watch, handleSubmit, setValue} = useForm({
    defaultValues: {
      name: '',
      age: '',
      species: '',
      adoptionStatus: null,
      admissionDate: null,
      animalImage: null,
    },
  })

  const handleImageUpload = (uploadedFiles) => {
    if (uploadedFiles.length > 0) {
      const uploadedImage = uploadedFiles[0];
      console.log(uploadedImage)
      setValue('animalImage', {
        "name": uploadedImage.name,
        "type": uploadedImage.type,
        "imageSize": uploadedImage.size,
      },);
    }
  };

  console.log(watch())

  return (
    <div>
      <NavbarCom
        customButtons={customButtons}/>
      <form
        onSubmit={handleSubmit(saveAnimalMutation.mutateAsync, saveAnimalImage.mutateAsync)}>
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
              <UploadImageCom onImageUpload={handleImageUpload}/>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}>
              <AddAnimalFormCom control={control}/>
            </Grid>
          </Grid>
        </Container>
      </form>
    </div>
  )
}

export default AddAnimal