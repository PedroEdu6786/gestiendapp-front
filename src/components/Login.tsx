import { VStack, Center } from "@chakra-ui/react";
import ButtonSubmit from "./atoms/ButtonSubmit";
import Title from "./atoms/Title";
import FormField from "./molecules/FormField";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/dist/client/router";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    router.push("store");
  };

  return (
    <VStack
      border="1px"
      borderColor="gray.200"
      borderRadius="1rem"
      h="100vh"
      justifyContent="center"
      pb="30px"
      spacing="1.5rem"
    >
      <Center>
        <Title>Sign In</Title>
      </Center>
      <VStack
        as="form"
        align="flex-start"
        spacing="1rem"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          fieldId="email"
          label="Email"
          placeholder="john@email.com"
          register={register("email", { required: true })}
          error={errors.email}
        />
        <FormField
          fieldId="password"
          label="Password"
          placeholder="Enter your password"
          register={register("password", { required: true })}
          error={errors.password}
        />
        <ButtonSubmit>Sign in</ButtonSubmit>
      </VStack>
    </VStack>
  );
};

export default Login;
