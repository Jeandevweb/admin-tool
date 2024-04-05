import { useGenericStore } from "store/SharedStore/GenericStore.jsx";
import GenericButton from "SharedElements/components/GenericComponents/GenericButton.jsx";
import IconSvgComponent from "SharedElements/components/LayoutContainer/TableLayout/IconSvgComponent.jsx";
import { Td, useColorModeValue } from "@chakra-ui/react";

const TdCellNormalMode = ({ row, tit, onOpen }) => {
  const { setEditData, isShow, editAdditionalData } = useGenericStore();

  const rowCellValue = (cell) => {
    return row && Object.keys(cell || {}).length === 0;
  };

  const colorMode = useColorModeValue("black", "white");

  return (
    <>
      <Td
        textAlign="center"
        overflow="hidden"
        width="max-content"
        padding={"5px 0"}
      >
        {tit === "additional_data" ? (
          <>
            {isShow === true &&
            editAdditionalData === row.id ? null : isShow === true &&
              editAdditionalData !== row.id ? null : (
              <GenericButton
                onClick={() => {
                  rowCellValue(row.additional_data) ? null : onOpen();
                  setEditData(row.id);
                }}
                status={
                  rowCellValue(row.additional_data)
                    ? "no data"
                    : "see more details"
                }
                sx={{
                  cursor: rowCellValue(row.additional_data)
                    ? "auto"
                    : "pointer",
                  fontSize: {
                    base: "small",
                    sm: "small",
                    md: "small",
                    xl: "medium",
                  },
                }}
                variant={
                  rowCellValue(row.additional_data) ? "unstyled" : "link"
                }
                colorScheme={"blue"}
              />
            )}
          </>
        ) : tit === "jsonschema" ? (
          <>
            {isShow === true &&
            editAdditionalData === row.id ? null : isShow === true &&
              editAdditionalData !== row.id ? null : (
              <GenericButton
                onClick={() => {
                  rowCellValue(row.jsonschema) ? null : onOpen();
                  setEditData(row.id);
                }}
                status={
                  rowCellValue(row.jsonschema) ? "no data" : "see more details"
                }
                sx={{
                  cursor: rowCellValue(row.jsonschema) ? "auto" : "pointer",
                }}
                variant={rowCellValue(row.jsonschema) ? "unstyled" : "link"}
                colorScheme={rowCellValue(row.jsonschema) ? "" : "blue"}
              />
            )}
          </>
        ) : tit === "icon" ? (
          <IconSvgComponent data={row[tit]} fill={colorMode} />
        ) : row[tit] === null ? (
          row[tit]
        ) : (
          String(row[tit])
        )}
      </Td>
    </>
  );
};

export default TdCellNormalMode;
