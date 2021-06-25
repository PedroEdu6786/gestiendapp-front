import { FC } from 'react'
import { IInput } from '../../utils/interfaces'
import { Input } from '@chakra-ui/react'

const InputForm: FC<IInput> = ({ placeholder, ...rest }) => {
  return <Input placeholder={placeholder} {...rest} />
}

export default InputForm
