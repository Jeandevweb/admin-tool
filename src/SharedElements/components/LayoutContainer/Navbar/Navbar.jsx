import { useContext } from "react";
import { Flex, HStack, StackDivider, Text, Tooltip } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FreeLogo } from "assets/Icons.jsx";
import LinkPath from "SharedElements/components/LayoutContainer/Navbar/LinkPath.jsx";
import { AuthContext } from "context/AuthContext.jsx";
import ColorModeSwitch from "SharedElements/components/LayoutContainer/Navbar/ColorModeSwith.jsx";

import { FaRegUserCircle } from "SharedElements/constants/react_icons.js";

const Navbar = ({ path, table_name }) => {
  const { keycloakInfo } = useContext(AuthContext);

  return (
    <Flex
      direction={["column", "row"]}
      flex="1"
      align="center"
      justify="space-between"
      padding={{
        base: "10px 5px",
        sm: "10px 5px",
        md: "10px 11px",
        xl: "10px 11px",
      }}
      gap={3}
      borderBottom="1px solid #a5bdcb"
    >
      <HStack
        color="red"
        divider={
          <StackDivider
            display={{ base: "none", sm: "none", md: "block", xl: "block" }}
            borderColor="red.200"
            padding="11px 0px"
            alignSelf="auto"
          />
        }
      >
        <Tooltip label={`Page D'accueil`} fontSize="md" placement="right">
          <Link to="/">
            <FreeLogo
              padding="0 11px 0 0"
              height="30px"
              fontSize="100px"
              textAlign="center"
            />
          </Link>
        </Tooltip>
        <LinkPath table_name={table_name} path={path} />
      </HStack>

      <Flex
        direction="row"
        flex="0"
        align="center"
        justify="space-between"
        padding={{ base: "0 18px" }}
        gap={3}
        width={"100%"}
      >
        <FaRegUserCircle width="10px" height="10px" />
        <Text marginRight="30px" whiteSpace="nowrap">
          {keycloakInfo.name}
        </Text>
        <ColorModeSwitch />
      </Flex>
    </Flex>
  );
};

export default Navbar;
