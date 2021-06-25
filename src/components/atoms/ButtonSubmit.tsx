import { FC } from 'react'
import { Button } from '@chakra-ui/react'
import { Props } from '../../utils/interfaces'

const ButtonSubmit: FC<Props> = ({ children, ...rest }) => {
  return (
    <Button bgColor="blue.300" color="white" type="submit" {...rest}>
      {children}
    </Button>
  )
}

export default ButtonSubmit
