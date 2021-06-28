import React, { ReactElement } from "react";
import { Stack, Flex, Text, HStack } from "@chakra-ui/react";

interface FeatureProps {
  title: string;
  icon: ReactElement;
}

const Feature = ({ title, icon }: FeatureProps) => {
  return (
    <HStack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
    </HStack>
  );
};

export default Feature;
