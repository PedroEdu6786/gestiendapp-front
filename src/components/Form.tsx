import { VStack, Center } from '@chakra-ui/react'
import ButtonSubmit from './atoms/ButtonSubmit'
import Title from './atoms/Title'
import FormField from './molecules/FormField'

const Form = () => {
  return (
    <VStack
      p="5rem"
      border="1px"
      borderColor="gray.200"
      borderRadius="1rem"
      spacing="1.5rem"
    >
      <Center>
        <Title>Sign In</Title>
      </Center>
      <VStack align="flex-start" spacing="1rem">
        <FormField fieldId="email" label="Email" placeholder="john@email.com" />
        <FormField
          fieldId="password"
          label="Password"
          placeholder="Enter your password"
        />
        <ButtonSubmit>Sign in</ButtonSubmit>
      </VStack>
    </VStack>
  )
}

export default Form
