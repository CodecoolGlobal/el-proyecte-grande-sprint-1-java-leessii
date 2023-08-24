import React from 'react'
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material'
import {useQuery} from '@tanstack/react-query'
import AdoptionStatusApi from '../../Api/AdoptionStatusApi'

function AdoptionStatusSelectCom({onChange, value, sx}) {
  const {data, isLoading} = useQuery({
    queryKey: ['adoptionStatus'],
    queryFn: () => AdoptionStatusApi.get(),
  })

  const selectValue = value?.id || ''
  const selectOnChange = (e) => onChange(data.find(item => item.id === e.target.value))

  return (
    <FormControl
      sx={sx}
      disabled={isLoading}>
      <InputLabel>Adoption Status</InputLabel>
      <Select
        disabled={isLoading}
        label={'Adoption Status'}
        onChange={selectOnChange}
        value={selectValue}
      >
        {data?.map(({id, status}) => (<MenuItem key={id} value={id}>
          {status}
        </MenuItem>))}
      </Select>
    </FormControl>
  )
}

export default AdoptionStatusSelectCom