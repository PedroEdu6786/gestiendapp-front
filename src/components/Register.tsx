import { VStack, Center } from '@chakra-ui/react'
import ButtonSubmit from './atoms/ButtonSubmit'
import Title from './atoms/Title'
import FormField from './molecules/FormField'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  firstName: string
  lastName: string
  email: string
  password: string
}

export const onSubmit: SubmitHandler<Inputs> = (data) => {
  console.log(data)
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

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
      <VStack
        as="form"
        align="flex-start"
        spacing="1rem"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          fieldId="firstName"
          label="First Name"
          placeholder="John"
          register={register('firstName', { required: true })}
          error={errors.firstName}
        />
        <FormField
          fieldId="lastName"
          label="Last Name"
          placeholder="Doe"
          register={register('lastName', { required: true })}
          error={errors.lastName}
        />
        <FormField
          fieldId="email"
          label="Email"
          placeholder="john@email.com"
          register={register('email', { required: true })}
          error={errors.email}
        />
        <FormField
          fieldId="password"
          label="Password"
          placeholder="Enter your password"
          register={register('password', { required: true })}
          error={errors.password}
        />
        <ButtonSubmit>Sign Up</ButtonSubmit>
      </VStack>
    </VStack>
  )
}

export default Register
