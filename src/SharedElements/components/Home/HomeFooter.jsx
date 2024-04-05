import { Flex, Text } from "@chakra-ui/react";
import { currentDate } from "SharedElements/constants/currentDate.js";

const HomeFooter = ({ keycloakInfo }) => {
  return (
    <Flex
      maxWidth="3000px"
      bg="aliceblue"
      w="100%"
      position="fixed"
      bottom={0}
      p="10px"
      backdropFilter="blur(10px)"
      borderRadius="20px 20px 0px 0px"
      padding="10px"
      justify="center"
      gap={7}
      fontWeight="500"
      color="black"
      display={{
        base: "none",
        md: "block",
        xl: "block",
      }}
      textAlign="center"
    >
      <Text>{currentDate("long", "numeric", "long", "numeric")}</Text>
      <Text>{keycloakInfo.email}</Text>
    </Flex>
  );
};

export default HomeFooter;
