import { HStack, useColorMode } from "@chakra-ui/react";
import {
  MdDarkMode,
  MdLightMode,
} from "SharedElements/constants/react_icons.js";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack
      onClick={toggleColorMode}
      cursor="pointer"
      fontSize="2xl"
      marginRight="5px"
    >
      {colorMode === "dark" ? <MdLightMode /> : <MdDarkMode />}
    </HStack>
  );
};

export default ColorModeSwitch;
