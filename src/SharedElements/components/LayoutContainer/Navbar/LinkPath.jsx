import {
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { linkCard } from "SharedElements/constants/linkCard.js";

const LinkPath = ({ path, table_name }) => {
  return (
    <Heading fontSize="large" margin="0 11px">
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              variant="link"
              isActive={isOpen}
              as={Button}
              fontSize="large"
            >{`${table_name} : ${path}`}</MenuButton>
            <MenuList zIndex="2" marginTop="7px">
              {linkCard?.map((link) => (
                <MenuItem
                  key={link.link}
                  fontWeight="normal"
                  fontSize="large"
                  as={Link}
                  href="#"
                  to={link.link}
                >
                  {link.text}
                </MenuItem>
              ))}
            </MenuList>
          </>
        )}
      </Menu>
    </Heading>
  );
};

export default LinkPath;
