import {
  Input,
  Box,
  FormControl,
  FormLabel,
  Heading,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import userStore from "../stores/CurrentUser.store";

export const EditUser = () => {
  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Box
          p={8}
          maxWidth="500px"
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
        >
          <Box textAlign="center">
            <Heading>Update Details</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  color="black"
                  type="name"
                  placeholder="Tznonit"
                  onChange={(event) => userStore.setName(event.target.value)}
                />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>Age</FormLabel>
                <Input
                  color="black"
                  type="number"
                  placeholder="40"
                  onChange={(event) =>
                    userStore.setAge(parseInt(event.target.value))
                  }
                />
              </FormControl>
            </form>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
