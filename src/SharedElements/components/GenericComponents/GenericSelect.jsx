import PropTypes from "prop-types";
import { Box, Select, Text } from "@chakra-ui/react";

import { useGenericStore } from "store/SharedStore/GenericStore.jsx";

const GenericSelect = ({
  onChange,
  defaultValue,
  readOnly,
  name,
  values,
  sx,
  type,
  placeholder,
  size,
}) => {
  const { modalOpen } = useGenericStore();

  return (
    <Box margin="15px 0" width="100%">
      <Text w="100%" marginLeft="7px" marginBottom="5px" fontWeight="bold">
        {modalOpen === true ? name.toUpperCase() : null}
      </Text>
      <Select
        onChange={onChange}
        defaultValue={defaultValue}
        readOnly={readOnly}
        name={name}
        size={size}
        border="1px solid lightgray"
        borderRadius={"5px"}
        colorScheme="rgba(50, 50, 93, 1)"
        fontWeight="medium"
        sx={sx}
        type={type}
        placeholder={placeholder}
      >
        {values?.map((val, i) => {
          return (
            <option value={val} key={i}>
              {val}
            </option>
          );
        })}
      </Select>
    </Box>
  );
};

GenericSelect.propTypes = {
  title: PropTypes.string,
  attribute: PropTypes.object,
  modalEditState: PropTypes.object,
  setModalEditState: PropTypes.func,
};

export default GenericSelect;
