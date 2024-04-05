import { useEffect, memo, useMemo, useContext } from "react";
import PropTypes from "prop-types";

import { useGet } from "SharedElements/services/useGet.js";
import { useFetchJsonSchema } from "SharedElements/services/useFetchJsonSchema.js";
import { useGenericStore } from "store/SharedStore/GenericStore.jsx";
import { useTableStore } from "store/SharedStore/TableStore.jsx";
import { useAdminPageStore } from "store/CommonStore/AdminPageStore.jsx";
import ContainerCommonManagement from "Common/components/ContainerCommonManagement.jsx";
import ContainerForm from "SharedElements/components/LayoutContainer/AsideCreateData/ContainerForm.jsx";
import { useDisclosure } from "@chakra-ui/react";
import { AuthContext } from "context/AuthContext.jsx";

function CommonPage({ path }) {
  const { keycloakInfo } = useContext(AuthContext);
  const { setCurrentPage, handleEdit } = useTableStore();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    error,
    success,
    setModalOpen,
    setSearchInputValue,
    modalOpen,
    setSuccess,
  } = useGenericStore();

  const { getData } = useGet(keycloakInfo.updatedToken);
  const { fetchJsonSchema } = useFetchJsonSchema(keycloakInfo.updatedToken);
  const { setDataRows } = useAdminPageStore();

  const memoizedJsonSchema = useMemo(async () => {
    if (!keycloakInfo.updatedToken) return;
    fetchJsonSchema("common", path);
  }, [path, success, keycloakInfo.updatedToken]);

  useEffect(() => {
    if (!keycloakInfo.updatedToken) return;
    const displayData = async () => {
      await memoizedJsonSchema;
      await getData(path, "common", setDataRows);
    };
    displayData();
    setSuccess(null);
    setModalOpen(false);
    setCurrentPage(1);
    setSearchInputValue("");
    handleEdit(null);
  }, [success, path, error, keycloakInfo.updatedToken]);

  return (
    <>
      {path && <ContainerCommonManagement path={path} onOpen={onOpen} />}
      {modalOpen && path && (
        <ContainerForm
          path={path}
          setModalOpen={setModalOpen}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </>
  );
}

CommonPage.propTypes = {
  path: PropTypes.string,
};

export default memo(CommonPage);
