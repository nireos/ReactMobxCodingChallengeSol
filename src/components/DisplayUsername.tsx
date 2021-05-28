import React from "react";
import userStore from "../stores/CurrentUser.store";
import { observer } from "mobx-react";
import { Box, Flex } from "@chakra-ui/react";

const DisplayUserName = () => {
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
            {userStore.currentUser.Name + userStore.currentUser.Age}
        </Box>
      </Box>
    </Flex>
  );
};

const ObservedDisplayUserName = observer(DisplayUserName);

function UserDetails() {
  return (
      <ObservedDisplayUserName />
  );
}
export default UserDetails;
