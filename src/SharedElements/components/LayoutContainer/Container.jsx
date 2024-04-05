import { memo } from "react";
import PropTypes from "prop-types";
import { Table, TableContainer, Box, Text, Flex } from "@chakra-ui/react";
import { useTranslate } from "@tolgee/react";

import { useGenericStore } from "store/SharedStore/GenericStore.jsx";

import Navbar from "SharedElements/components/LayoutContainer/Navbar/Navbar.jsx";

import ActionElements from "SharedElements/components/LayoutContainer/ActionsSection/ActionElements.jsx";

const Container = ({
  path,
  dataToLoad,
  menuTable,
  table_name,
  onOpen,
  children,
}) => {
  const { t } = useTranslate();
  const { isLoading } = useGenericStore();

  return (
    <Flex
      direction="column"
      height="100vh"
      width="100%"
      margin="0 auto"
      position="relative"
      maxWidth="3000px"
      gap={0}
      borderLeft="1px solid #a5bdcb"
      borderRight="1px solid #a5bdcb"
      overflow="hidden"
    >
      <Box>
        <Navbar table_name={table_name} path={path} />
        <ActionElements
          menuTable={menuTable}
          onOpen={onOpen}
          dataToLoad={dataToLoad}
        />
      </Box>
      <Box
        border="1px solid #a5bdcb"
        borderRadius="10px"
        flex="1"
        display="flex"
        flexDirection="column"
        margin=" 0 10px 10px"
        padding="5px 0"
        height={{ base: "60%", sm: "60%", md: "75%", xl: "75%" }}
        bg="white.400"
      >
        {isLoading ? (
          <div>Chargement en cours</div>
        ) : (
          <TableContainer sx={scrollbar} overflowY="auto" flex="1">
            {dataToLoad?.length === 0 ? (
              <Text textAlign="center" fontSize="4xl">
                Table Vide
              </Text>
            ) : (
              <>
                <Table
                  size={{
                    base: "sm",
                    sm: "sm",
                    md: "sm",
                    xl: "xl",
                  }}
                  textAlign="center"
                  variant="simple"
                  width="100%"
                >
                  {children}
                </Table>
              </>
            )}
          </TableContainer>
        )}
      </Box>
    </Flex>
  );
};

Container.propTypes = {
  title: PropTypes.string,
  setModalOpen: PropTypes.func,
  path: PropTypes.string,
  link: PropTypes.any,
  setLink: PropTypes.func,
};

export default memo(Container);

const scrollbar = {
  "::-webkit-scrollbar": {
    width: "8px",
    height: "8px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "rgba(128,128,128,0.4)",
    borderRadius: "24px",
  },
};
