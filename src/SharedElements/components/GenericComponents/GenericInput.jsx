import { Box, Input, Text } from "@chakra-ui/react";

import { useGenericStore } from "store/SharedStore/GenericStore.jsx";

const GenericInput = ({
  type,
  defaultValue,
  readOnly,
  onChange,
  sx,
  name,
  size,
}) => {
  const { modalOpen } = useGenericStore();

  return (
    <Box margin="15px 0" width="100%">
      <Text w="100%" marginLeft="7px" marginBottom="5px" fontWeight="bold">
        {modalOpen === true ? name.toUpperCase() : null}
      </Text>
      <Input
        type={type}
        defaultValue={defaultValue}
        readOnly={readOnly}
        onChange={onChange}
        size={size}
        sx={sx}
        name={name}
        border="1px solid lightgray"
        borderRadius="5px"
      />
    </Box>
  );
};

export default GenericInput;
