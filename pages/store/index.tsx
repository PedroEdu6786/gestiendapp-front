import {
  Box,
  Icon,
  SimpleGrid,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import Feature from "../../src/components/atoms/Feature";
import Footer from "../../src/components/molecules/Footer";
import Navbar from "../../src/components/molecules/Navbar";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

const index = () => (
  <>
    <Navbar />
    <Box
      alignItems="flex-start"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      mt="20px"
      h="93vh"
      w="100%"
    >
      <SimpleGrid
        border="2px solid"
        borderColor="pink.400"
        borderRadius="30px"
        row={{ base: 1, md: 3 }}
        spacing={10}
        justifySelf="start"
        p="10px"
        mx="10px"
        width="30%"
      >
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={"Clientes"}
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={"Productos"}
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"Proveedores"}
        />
      </SimpleGrid>
      <Box
        border="2px solid"
        borderColor="pink.400"
        borderRadius="30px"
        h="80%"
        mx="10px"
        width="70%"
      >
        <Table variant="simple">
          <TableCaption>Productos disponibles</TableCaption>
          <Thead>
            <Tr>
              <Th>Prodcuto</Th>
              <Th>Cantidad</Th>
              <Th isNumeric>ID</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Pepsi</Td>
              <Td>20</Td>
              <Td isNumeric>1</Td>
            </Tr>
            <Tr>
              <Td>Coca</Td>
              <Td>20</Td>
              <Td isNumeric>1</Td>
            </Tr>
            <Tr>
              <Td>Seven Up</Td>
              <Td>20</Td>
              <Td isNumeric>1</Td>
            </Tr>
            <Tr>
              <Td>Snickers</Td>
              <Td>20</Td>
              <Td isNumeric>1</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
    <Box pos="absolute" bottom="0" w="100%">
      <Footer />
    </Box>
  </>
);

export default index;
