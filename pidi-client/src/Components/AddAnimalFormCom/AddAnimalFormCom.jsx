import React from 'react'
import {
  Box,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput, Paper, Select,
  TextField,
} from '@mui/material'

function AddAnimalFormCom() {
  return (
    <form>
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
    </form>
  )
}

export default AddAnimalFormCom