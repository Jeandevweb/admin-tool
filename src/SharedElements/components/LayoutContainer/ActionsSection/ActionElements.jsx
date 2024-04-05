import { Flex, HStack, Spacer } from "@chakra-ui/react";
import { useTranslate } from "@tolgee/react";

import MenuTableButton from "SharedElements/components/LayoutContainer/ActionsSection/MenuTableButton.jsx";
import GenericButton from "SharedElements/components/GenericComponents/GenericButton.jsx";
import SearchInput from "SharedElements/components/LayoutContainer/ActionsSection/SearchInput.jsx";
import Pagination from "SharedElements/components/LayoutContainer/ActionsSection/Pagination.jsx";

import { FaPlus } from "SharedElements/constants/react_icons.js";
import { useGenericStore } from "store/SharedStore/GenericStore.jsx";
import { useTableStore } from "store/SharedStore/TableStore.jsx";

const ActionElements = ({ menuTable, onOpen, dataToLoad }) => {
  const { t } = useTranslate();

  const { setSearchInputValue, setModalOpen } = useGenericStore();
  const { setCreateData, setEditingId } = useTableStore();

  const openModal = () => {
    setModalOpen(true);
    setSearchInputValue("");
    setCreateData("");
  };
  return (
    <Flex
      justify="space-between"
      padding="10px 11px"
      direction={{ base: "column", sm: "column", md: "row", xl: "row" }}
    >
      <HStack marginBottom={{ base: "5px", sm: "5px", md: "0", xl: "0" }}>
        <MenuTableButton menuTable={menuTable} />
        <GenericButton
          leftIcon={<FaPlus />}
          onClick={() => {
            onOpen(), openModal(), setEditingId(null);
          }}
          sx={adminButton}
          status={t("addElement")}
        />
      </HStack>
      <Spacer />
      <HStack display="flex" gap="6">
        <SearchInput />
        <Pagination data={dataToLoad} />
      </HStack>
    </Flex>
  );
};

export default ActionElements;

const adminButton = {
  bgColor: "blue.500",
  color: "white",
  "&:hover": {
    bgColor: "#1F5AA4",
  },
  fontSize: { base: "small", sm: "small", md: "small", xl: "xl" },
  padding: { base: "2px", sm: "5px", md: "5px", xl: "0 16px" },
};
