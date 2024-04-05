import { useContext } from "react";

import { useTranslate } from "@tolgee/react";
import { Flex, Text, Button, Box } from "@chakra-ui/react";

import { AuthContext } from "context/AuthContext.jsx";

import { HiOutlineLogout } from "SharedElements/constants/react_icons.js";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  const { t } = useTranslate();

  const { keycloakInfo } = useContext(AuthContext);

  return (
    <Flex
      maxWidth="3000px"
      width="100vw"
      padding="15px 30px"
      justify="space-between"
      color="aliceblue"
      h="8%"
      alignItems="center"
    >
      <Text
        marginRight="40px"
        fontSize={{ base: "large", sm: "xl", md: "2xl", lg: "3xl", xl: "3xl" }}
      >
        Odyssée Administration
      </Text>
      <Flex
        as={Button}
        padding="0"
        onClick={keycloakInfo.keycloakInstance.logout}
        direction="row"
        justify="space-between"
        gap="12px"
        alignItems="center"
        variant="ghost"
        fontWeight="500"
        fontSize={{ base: "xl", small: "small" }}
      >
        <HiOutlineLogout style={{ fontSize: "xl", width: "100%" }} />
        <Text letterSpacing="1px" display={{ base: "none", sm: "block" }}>
          Logout
        </Text>
      </Flex>
    </Flex>
  );
};

export default HomeHeader;
