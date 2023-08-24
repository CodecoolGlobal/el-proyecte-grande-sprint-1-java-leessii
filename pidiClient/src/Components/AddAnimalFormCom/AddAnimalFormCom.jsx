import {
  Button,
  FormGroup,
} from '@mui/material'
import TextField from '@mui/material/TextField'
import {useMutation} from '@tanstack/react-query'
import AnimalsApi from '../../Api/AnimalsApi'
import {DatePicker} from '@mui/x-date-pickers'
import {Controller, useForm} from 'react-hook-form'
import AdoptionStatusSelectCom from '../AdoptionStatusSelectCom/AdoptionStatusSelectCom'

function AddAnimalFormCom() {
  const saveAnimalMutation = useMutation(async (newData) => {
    const response = await AnimalsApi.saveAnimal(newData)
    return response.data
  })

  const {control, watch, handleSubmit} = useForm({
    defaultValues: {
      name: '',
      age: '',
      species: '',
      adoptionStatus: null,
      admissionDate: null,
    },
  })

  console.log(watch())

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <form onSubmit={handleSubmit(saveAnimalMutation.mutateAsync)} style={{width: '50%'}}>
        <FormGroup sx={{padding: 2, borderRadius: 2, border: '1px solid', borderColor: 'primary.main'}}>
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
              inputFormat="E MMM dd yyyy HH:MM:SS O"
              {...field}
            />}
          />

          <Button color={'secondary'} variant={'contained'} type="submit">Submit</Button>
        </FormGroup>
      </form>
    </div>
  )
}

export default AddAnimalFormCom
