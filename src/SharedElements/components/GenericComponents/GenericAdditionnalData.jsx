import PropTypes from "prop-types";

import { Box, Text } from "@chakra-ui/react";

import ReactJson from "@microlink/react-json-view";

const GenericAdditionnalData = ({
  name,
  onChange,
  onAdd,
  onEdit,
  onDelete,
  src,
  collapsed,
  indentWidth,
  theme,
}) => {
  return (
    <Box width="100%">
      <Text w="100%" fontWeight="bold" margin="15px 3px">
        {name.toUpperCase()}
      </Text>
      <ReactJson
        src={src}
        theme={theme}
        enableClipboard={false}
        name={name}
        collapsed={collapsed}
        onAdd={onAdd}
        onEdit={onEdit}
        onDelete={onDelete}
        onChange={onChange}
        indentWidth={indentWidth}
        width="auto"
        style={{
          padding: "10px",
          height: "auto",
          width: "auto",
          overflowX: "auto",
          overflowY: "auto",
          minHeight: "100px",
          maxHeight: "500px",
          borderRadius: "5px",
        }}
      />
    </Box>
  );
};

GenericAdditionnalData.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  modalTitle: PropTypes.object,
  setModalEditState: PropTypes.func,
};

export default GenericAdditionnalData;
