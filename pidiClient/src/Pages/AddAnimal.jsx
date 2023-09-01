import React from 'react'
import NavbarCom from '../Components/NavbarCom/NavbarCom'
import {Button, Container} from '@mui/material'
import {Link} from 'react-router-dom'
import AddAnimalFormCom from '../Components/AddAnimalFormCom/AddAnimalFormCom'
import Grid from '@mui/material/Grid'
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

    const {control, watch, handleSubmit, setValue} = useForm({
        defaultValues: {
            animal: {
                name: '',
                age: '',
                species: '',
                adoptionStatus: null,
                admissionDate: null,
            },
            animalImage: '',
        },
    })

    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('animal', data.animal)
        formData.append('animalImage', data.animalImage)
        console.log(formData)
        saveAnimalMutation.mutateAsync(formData)
    }

    const handleImageUpload = (uploadedFiles) => {
    }

    console.log(watch())

    return (
        <div>
            <NavbarCom
                customButtons={customButtons}/>
            <form
                onSubmit={handleSubmit(onSubmit)}>
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