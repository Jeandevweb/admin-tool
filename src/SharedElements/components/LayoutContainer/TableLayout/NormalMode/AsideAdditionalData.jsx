import { Box, DrawerCloseButton, useColorMode } from "@chakra-ui/react";
import { useGenericStore } from "store/SharedStore/GenericStore.jsx";

import GenericAdditionnalData from "SharedElements/components/GenericComponents/GenericAdditionnalData.jsx";
import GenericDrawer from "SharedElements/components/GenericComponents/GenericDrawer.jsx";

const AsideAdditionalData = ({ row, isOpen, onClose }) => {
  const { editAdditionalData } = useGenericStore();
  const { colorMode } = useColorMode();

  return (
    <Box>
      {editAdditionalData === row.id && isOpen && (
        <GenericDrawer
          placement="left"
          onClose={onClose}
          isOpen={isOpen}
          sx={{ borderBottomWidth: "1px" }}
          drawerCloseButton={<DrawerCloseButton />}
          text={
            row["jsonschema"]
              ? row?.value
              : row.additional_data.reference || "additional data"
          }
        >
          <GenericAdditionnalData
            onEdit={false}
            indentWidth={3}
            src={row["jsonschema"] ? row.jsonschema : row.additional_data}
            name={row["jsonschema"] ? "jsonschema" : "additional_data"}
            theme={colorMode === "dark" ? "google" : "rjv-default"}
          />
        </GenericDrawer>
      )}
    </Box>
  );
};

export default AsideAdditionalData;
