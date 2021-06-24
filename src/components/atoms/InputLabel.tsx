import { FC } from 'react'
import { Props } from '../../utils/interfaces'
import { FormLabel } from '@chakra-ui/react'

const InputLabel: FC<Props> = ({ children, ...rest }) => {
  return <FormLabel {...rest}>{children}</FormLabel>
}

export default InputLabel
