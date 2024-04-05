import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const MenuTableButton = ({ menuTable }) => {
  const mainMenu = menuTable.map((sideMenu) => (
    <MenuItem as={NavLink} width="100%" key={sideMenu.path} to={sideMenu.path}>
      {sideMenu.title}
    </MenuItem>
  ));
  const subMenu = menuTable?.map((menu) =>
    menu.submenu?.map((sub) => (
      <MenuItem as={NavLink} width="100%" key={sub.path} to={sub.path}>
        {sub.title}
      </MenuItem>
    ))
  );
  return (
    <Menu overflowX="auto" isLazy width="100%">
      <MenuButton
        as={Button}
        colorScheme="pink"
        fontSize={{ base: "small", sm: "small", md: "small", xl: "xl" }}
        padding={{ base: "2px", sm: "5px", md: "5px", xl: "0 16px" }}
      >
        Sélectionner une table
      </MenuButton>
      <Portal>
        <MenuList zIndex="100" height="auto" display="flex">
          <Box width="100%">{mainMenu}</Box>
          <Box width="100%">{subMenu}</Box>
        </MenuList>
      </Portal>
    </Menu>
  );
};

export default MenuTableButton;
