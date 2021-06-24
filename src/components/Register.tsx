import { VStack, Center } from '@chakra-ui/react'
import ButtonSubmit from './atoms/ButtonSubmit'
import Title from './atoms/Title'
import FormField from './molecules/FormField'

const Register = () => {
  return (
    <VStack
      p="5rem"
      border="1px"
      borderColor="gray.200"
      borderRadius="1rem"
      spacing="1.5rem"
    >
      <Center>
        <Title>Sign Up</Title>
      </Center>
      <VStack align="flex-start" spacing="1rem">
        <FormField fieldId="firstName" label="First Name" placeholder="John" />
        <FormField fieldId="lastName" label="Last Name" placeholder="Doe" />
        <FormField fieldId="email" label="Email" placeholder="john@email.com" />
        <FormField
          fieldId="password"
          label="Password"
          placeholder="Enter your password"
        />
        <ButtonSubmit>Sign Up</ButtonSubmit>
      </VStack>
    </VStack>
  )
}

export default Register
