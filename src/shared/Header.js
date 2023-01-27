import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      as="header"
      background="green.50"
      boxShadow="base"
      p="6"
      rounded="md"
      mb="24"
    >
      <Heading>movie🎥List</Heading>
    </Box>
  );
};

export default Header;
