import { Fragment, memo } from "react";
import { Tbody, Td, Tr, useDisclosure } from "@chakra-ui/react";

import { useTableStore } from "store/SharedStore/TableStore.jsx";
import { useGenericStore } from "store/SharedStore/GenericStore.jsx";

import ButtonsEditionMode from "SharedElements/components/LayoutContainer/TableLayout/EditionMode/ButtonsEditionMode.jsx";
import ButtonNormalMode from "SharedElements/components/LayoutContainer/TableLayout/NormalMode/ButtonsNormalMode.jsx";
import TdCellEditMode from "SharedElements/components/LayoutContainer/TableLayout/EditionMode/TdCellEditMode.jsx";
import TdCellNormalMode from "SharedElements/components/LayoutContainer/TableLayout/NormalMode/TdCellNormalMode.jsx";
import AsideAdditionalData from "SharedElements/components/LayoutContainer/TableLayout/NormalMode/AsideAdditionalData.jsx";

const TableBodyContainer = ({ path, dataRows, table_name }) => {
  const {
    columnsTitle,
    getJsonSchema,
    recordsPerPage,
    currentPage,
    editingId,
  } = useTableStore();

  const { searchInputValue, filterValue, editAdditionalData } =
    useGenericStore();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = dataRows.slice(indexOfFirstRecord, indexOfLastRecord);

  const validCss = (id) => editAdditionalData === id && isOpen === true;

  return (
    <Tbody
      position="relative"
      fontSize={{
        base: "x-small",
        sm: "small",
        md: "small",
        xl: "medium",
      }}
    >
      {currentRecords &&
        currentRecords
          ?.filter((val) => {
            if (searchInputValue === "") return val;
            return filterValue(val, searchInputValue);
          })
          ?.map((row, index) => (
            <Fragment key={`${row.id}-${index}`}>
              <Tr
                key={`${row.id}-${index}`}
                fontWeight={validCss(row.id) && "bold"}
                bg={validCss(row.id) && "#a5bdcb"}
              >
                <Td display="contents" alignContent="center">
                  {editingId === row.id ? (
                    <ButtonsEditionMode
                      path={path}
                      row={row}
                      table_name={table_name}
                    />
                  ) : (
                    <ButtonNormalMode
                      path={path}
                      row={row}
                      table_name={table_name}
                    />
                  )}
                </Td>
                {columnsTitle()?.map((tit) => {
                  return (
                    <Fragment key={`${tit}-${index}`}>
                      {editingId === row.id ? (
                        <TdCellEditMode
                          row={row}
                          path={path}
                          tit={tit}
                          readOnly={getJsonSchema.properties[tit].readOnly}
                          values={getJsonSchema.properties[tit].enum}
                          onOpen={onOpen}
                        />
                      ) : (
                        <TdCellNormalMode row={row} tit={tit} onOpen={onOpen} />
                      )}
                    </Fragment>
                  );
                })}
                <Td>
                  <AsideAdditionalData
                    row={row}
                    isOpen={isOpen}
                    onClose={onClose}
                  />
                </Td>
              </Tr>
            </Fragment>
          ))}
    </Tbody>
  );
};

export default memo(TableBodyContainer);
