import {
  Button,
  FormGroup,
} from '@mui/material'
import TextField from '@mui/material/TextField'
import {DatePicker} from '@mui/x-date-pickers'
import {Controller} from 'react-hook-form'
import AdoptionStatusSelectCom from '../AdoptionStatusSelectCom/AdoptionStatusSelectCom'

function AddAnimalFormCom({control}) {
  return (
    <FormGroup
      sx={{padding: 2, borderRadius: 2, border: '1px solid', borderColor: 'primary.main', width: '100%'}}>
      <Controller
        control={control}
        name={'name'}
        render={({field}) => <TextField
          sx={{paddingBottom: 2}}
          required={true}
          label={'Name'}
          {...field}
        />}
      />

      <Controller
        control={control}
        name={'age'}
        render={({field}) => <TextField
          sx={{paddingBottom: 2}}
          required={true}
          label={'Age'}
          type={'number'}
          {...field}
        />}
      />

      <Controller
        control={control}
        name={'species'}
        render={({field}) => <TextField
          sx={{paddingBottom: 2}}
          required={true}
          label={'Species'}
          {...field}
        />}
      />

      <Controller
        name={'adoptionStatus'}
        control={control}
        render={({field}) => <AdoptionStatusSelectCom
          sx={{paddingBottom: 2}}
          onChange={field.onChange}
          value={field.value}
        />}
      />

      <Controller
        name={'admissionDate'}
        control={control}
        render={({field}) => <DatePicker
          sx={{paddingBottom: 2}}
          disablePast={true}
          inputFormat="E MMM dd yyyy HH:MM:SS O"
          {...field}
        />}
      />

      <Button color={'secondary'} variant={'contained'} type="submit">Submit</Button>
    </FormGroup>
  )
}

export default AddAnimalFormCom

