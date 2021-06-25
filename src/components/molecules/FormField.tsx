import { FC } from 'react'
import { FormControl } from '@chakra-ui/react'
import { IField } from '../../utils/interfaces'
import InputLabel from '../atoms/InputLabel'
import InputForm from '../atoms/InputForm'

const FormField: FC<IField> = ({ fieldId, label, placeholder }) => {
  return (
    <FormControl id={fieldId}>
      <InputLabel>{label}</InputLabel>
      <InputForm placeholder={placeholder} />
    </FormControl>
  )
}

export default FormField
