import { Box, Select, Text } from "@chakra-ui/react";

import { useGenericStore } from "store/SharedStore/GenericStore.jsx";

const GenericBoolean = ({ onChange, name, sx, defaultValue, type, size }) => {
  const { modalOpen } = useGenericStore();

  return (
    <Box margin="15px 0" width="100%">
      <Text w="100%" marginLeft="7px" marginBottom="5px" fontWeight="bold">
        {modalOpen === true ? name.toUpperCase() : null}
      </Text>
      <Select
        onChange={onChange}
        name={name}
        defaultValue={defaultValue}
        sx={sx}
        size={size}
        type={type}
        border="1px solid lightgray"
        borderRadius={"5px"}
      >
        <option value={true}>true</option>
        <option value={false}>false</option>
        );
      </Select>
    </Box>
  );
};

export default GenericBoolean;
