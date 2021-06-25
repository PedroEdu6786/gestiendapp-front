import { FC } from 'react'
import { Props } from '../../utils/interfaces'
import { Heading } from '@chakra-ui/react'

const Title: FC<Props> = ({ children, ...rest }) => {
  return <Heading {...rest}>{children}</Heading>
}

export default Title
