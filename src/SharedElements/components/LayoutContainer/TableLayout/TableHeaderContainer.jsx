import { Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react";
import { useTableStore } from "store/SharedStore/TableStore.jsx";

const TableHeaderContainer = () => {
  const { columnsTitle } = useTableStore();
  const colorMode = useColorModeValue("gray.600", "white");

  return (
    <Thead>
      <Tr>
        <Th
          color={colorMode}
          overflow="hidden"
          textAlign="center"
          padding="8px 20px"
          position="sticky"
          top={0}
          zIndex={1}
          bg="white.400"
          fontSize={{
            base: "x-small",
            sm: "small",
            md: "small",
            xl: "medium",
          }}
        >
          Actions
        </Th>
        {columnsTitle()?.map((column) => (
          <Th
            color={colorMode}
            overflow="hidden"
            textAlign="center"
            key={column}
            padding="8px 20px"
            position="sticky"
            top={0}
            zIndex={1}
            bg="white.100"
            fontSize={{
              base: "x-small",
              sm: "small",
              md: "small",
              xl: "medium",
            }}
          >
            {column}
          </Th>
        ))}
      </Tr>
    </Thead>
  );
};

export default TableHeaderContainer;
