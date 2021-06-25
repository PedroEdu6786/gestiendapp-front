import { FC } from 'react'
import { FormControl, FormHelperText } from '@chakra-ui/react'
import { IField } from '../../utils/interfaces'
import InputLabel from '../atoms/InputLabel'
import InputForm from '../atoms/InputForm'

const FormField: FC<IField> = ({
  fieldId,
  label,
  placeholder,
  register,
  error,
}) => {
  return (
    <FormControl id={fieldId}>
      <InputLabel>{label}</InputLabel>
      <InputForm placeholder={placeholder} {...register} />
      {error && (
        <FormHelperText color="red.300">This field is required</FormHelperText>
      )}
    </FormControl>
  )
}

export default FormField
