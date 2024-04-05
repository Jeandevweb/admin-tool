import React, { memo } from "react";
import { Td, useColorMode } from "@chakra-ui/react";

import GenericSelect from "SharedElements/components/GenericComponents/GenericSelect.jsx";
import GenericInput from "SharedElements/components/GenericComponents/GenericInput.jsx";
import GenericBoolean from "SharedElements/components/GenericComponents/GenericBoolean.jsx";
import GenericModal from "SharedElements/components/GenericComponents/GenericModal.jsx";
import GenericAdditionnalData from "SharedElements/components/GenericComponents/GenericAdditionnalData.jsx";
import IconSvgComponent from "SharedElements/components/LayoutContainer/TableLayout/IconSvgComponent.jsx";

import { useTableStore } from "store/SharedStore/TableStore.jsx";

const TdCellEditMode = ({ row, tit, readOnly, values }) => {
  const { getJsonSchema, handleChange, cellData } = useTableStore();

  const { colorMode } = useColorMode();

  return (
    <Td padding="0 10px" overflow="hidden" width="auto" textAlign="center">
      {getJsonSchema.properties[tit].type === "string" &&
      getJsonSchema.properties[tit].enum ? (
        <GenericSelect
          onChange={(e) => handleChange(tit, e.target.value)}
          size="sm"
          defaultValue={row[tit]}
          readOnly={readOnly}
          values={values}
          name={tit}
          sx={{
            height: "30px",
            padding: "0 10px",
            minWidth: "130px",
            maxWidth: "fit-content",
          }}
        />
      ) : getJsonSchema.properties[tit].format === "date" ? (
        <GenericInput
          size="sm"
          type="date"
          readOnly={readOnly}
          defaultValue={row.deprecated}
          onChange={(e) => handleChange(tit, e.target.value)}
          name={tit}
        />
      ) : getJsonSchema.properties[tit].type === "boolean" ? (
        <GenericBoolean
          defaultValue={row[tit]}
          onChange={(e) => handleChange(tit, e.target.value)}
          size="medium"
          name={tit}
          sx={{ height: "30px", padding: "0 10px" }}
        />
      ) : tit === "id_parent" ? null : getJsonSchema.properties[tit].type ===
        "integer" ? (
        <GenericInput
          size="sm"
          type="number"
          defaultValue={row[tit]}
          onChange={(e) => handleChange(tit, e.target.value)}
          name={tit}
        />
      ) : getJsonSchema.properties[tit].type === "object" ? (
        <GenericModal
          title={tit === "additional_data" ? "Additional Data" : "Jsonschema"}
        >
          <GenericAdditionnalData
            src={
              tit === "additional_data"
                ? { ...cellData.additional_data } || row[tit]
                : { ...cellData.jsonschema } || row[tit]
            }
            name={""}
            onEdit={(params) => {
              handleChange(tit, params.updated_src);
            }}
            onAdd={(params) => {
              handleChange(tit, params.updated_src);
            }}
            theme={colorMode === "dark" ? "google" : "rjv-default"}
          />
        </GenericModal>
      ) : tit === "create_user" ? null : tit === "icon" ? (
        <IconSvgComponent
          data={row[tit]}
          fill={colorMode === "dark" ? "white" : "dark"}
        />
      ) : (
        <GenericInput
          size="sm"
          sx={{ maxWidth: "200px" }}
          type="text"
          defaultValue={row[tit]}
          onChange={(e) => handleChange(tit, e.target.value)}
          name={tit}
        />
      )}
    </Td>
  );
};

export default memo(TdCellEditMode);
