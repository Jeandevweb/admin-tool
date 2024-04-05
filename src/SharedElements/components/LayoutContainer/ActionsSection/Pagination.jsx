import { Button, Stack, Text } from "@chakra-ui/react";
import { useTableStore } from "store/SharedStore/TableStore.jsx";
import { useTranslate } from "@tolgee/react";

import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "SharedElements/constants/react_icons.js";

const Pagination = ({ data }) => {
  const { t } = useTranslate();

  const { setCurrentPage, currentPage, recordsPerPage } = useTableStore();

  const nPages = Math.ceil(data.length / recordsPerPage);

  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  const goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <Stack
      direction={["row"]}
      spacing="15px"
      align="center"
      whiteSpace="nowrap"
    >
      <Button
        leftIcon={<MdKeyboardArrowLeft />}
        onClick={goToPrevPage}
        variant="ghost"
        isDisabled={currentPage === 1}
        fontSize={{ base: "small", sm: "small", md: "small" }}
        padding={{ base: "2px", sm: "5px", md: "5px", xl: "0 16px" }}
      >
        {t("previous")}
      </Button>
      <Text
        whiteSpace="nowrap"
        display={{ base: "none", sm: "none", md: "block", xl: "block" }}
      >
        Page {currentPage} of {pageNumbers.length}
      </Text>
      <Button
        rightIcon={<MdKeyboardArrowRight />}
        onClick={goToNextPage}
        variant="ghost"
        isDisabled={
          currentPage === pageNumbers.length || pageNumbers.length === 0
        }
        fontSize={{ base: "small", sm: "small", md: "small" }}
        padding={{ base: "2px", sm: "5px", md: "5px", xl: "0 16px" }}
      >
        {t("next")}
      </Button>
    </Stack>
  );
};

export default Pagination;
