import React, {useState} from 'react'
import {
  Button,
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'
import TextField from '@mui/material/TextField'
import {useMutation} from '@tanstack/react-query'
import AnimalsApi from '../../Api/AnimalsApi'
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';



function AddAnimalFormCom({adoptionStatus}) {
  const [data, setData] = useState({adoptionStatus: '', admissionDate: null})
  const updateData = (value) => setData(data => ({...data, ...value}))

  const saveAnimalMutation = useMutation(async (newData) => {
    const response = await AnimalsApi.saveAnimal(newData)
    return response.data
  })

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const newData = {
      name: formData.get('name'),
      age: formData.get('age'),
      species: formData.get('species'),
      adoptionStatus: data.adoptionStatus,
      admissionDate: data.admissionDate
    }

    try {
      console.log(newData)
      await saveAnimalMutation.mutateAsync(newData)
    } catch (error) {
      // Handle error
    }
  }


  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <form onSubmit={handleSubmit} style={{width: '50%'}}>
        <FormGroup sx={{padding: 2, borderRadius: 2, border: '1px solid', borderColor: 'primary.main'}}>
          <TextField sx={{paddingBottom: 2}} name="name" variant="outlined" placeholder="Name..."/>
          <TextField type="number" sx={{paddingBottom: 2}} name="age" variant="outlined" placeholder="Age..."/>
          <TextField sx={{paddingBottom: 2}} name="species" variant="outlined" placeholder="Speccies..."/>
          <FormControl fullWidth sx={{paddingBottom: 2}}>
            <InputLabel id="adoptionStatus">Adoption Status</InputLabel>
            <Select
              labelId="adoptionStatus"
              id="adoptionStatus"
              label="Adoption Status"
              value={data.adoptionStatus}
              onChange={(e) => updateData({ adoptionStatus: e.target.value })}
            >
              {adoptionStatus.map((status) => (
                <MenuItem key={status.id} value={status}>
                  {status.status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{paddingBottom: 2}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                views={["year", "month", "day"]}
                format="DD-MM-YYYY"
                value={data.admissionDate}
                onChange={(newDate) => updateData({admissionDate: newDate})}
              />
            </LocalizationProvider>
          </FormControl>
          <Button type="submit" variant="outlined">Submit</Button>
        </FormGroup>
      </form>
    </div>
  )
}

export default AddAnimalFormCom


/*
<Paper>
        <FormControl sx={{m: 1, width: '25ch'}}>
          <InputLabel htmlFor="name">Name</InputLabel>
          <OutlinedInput
            id="name"
            label="Name"
          />
        </FormControl>
        <FormControl sx={{m: 1, width: '25ch'}}>
          <InputLabel htmlFor="weight">Weight</InputLabel>
          <OutlinedInput
            id="weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            label="Weight"
          />
        </FormControl>
        <FormControl fullWidth sx={{m: 1}}>
          <InputLabel htmlFor="amount">Amount</InputLabel>
          <OutlinedInput
            id="amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
      </Paper>
 */