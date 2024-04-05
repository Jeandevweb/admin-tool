import { memo } from "react";

import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useTranslate } from "@tolgee/react";

import { useGenericStore } from "store/SharedStore/GenericStore.jsx";

import {
  FaMagnifyingGlass,
  RxCross2,
} from "SharedElements/constants/react_icons.js";

function SearchInput() {
  const { t } = useTranslate();

  const { searchInputValue, setSearchInputValue } = useGenericStore();

  return (
    <>
      <InputGroup maxWidth="300px">
        <InputLeftElement pointerEvents="none">
          <FaMagnifyingGlass color="gray.300" />
        </InputLeftElement>
        <InputRightElement pointerEvents="auto">
          <RxCross2 onClick={() => setSearchInputValue("")} color="gray.300" />
        </InputRightElement>
        <Input
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.target.value)}
          placeholder={t("search_value")}
          variant="filled"
        />
      </InputGroup>
    </>
  );
}

export default memo(SearchInput);
