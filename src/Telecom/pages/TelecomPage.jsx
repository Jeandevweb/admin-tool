import { useEffect, memo, useMemo, useContext } from "react";
import PropTypes from "prop-types";

import { useGet } from "SharedElements/services/useGet.js";
import { useGenericStore } from "store/SharedStore/GenericStore.jsx";
import { useTableStore } from "store/SharedStore/TableStore.jsx";
import { useTelecomPageStore } from "store/TelecomStore/TelecomPageStore.jsx";
import { useFetchJsonSchema } from "SharedElements/services/useFetchJsonSchema.js";
import ContainerTelecomManagement from "Telecom/components/ContainerTelecomManagement.jsx";
import ContainerForm from "SharedElements/components/LayoutContainer/AsideCreateData/ContainerForm.jsx";
import { useDisclosure } from "@chakra-ui/react";
import { AuthContext } from "context/AuthContext.jsx";

const TelecomPage = ({ path }) => {
  const { keycloakInfo } = useContext(AuthContext);
  const { getData } = useGet(keycloakInfo.updatedToken);
  const { setCurrentPage, handleEdit } = useTableStore();
  const { setTelecomRows } = useTelecomPageStore();
  const { fetchJsonSchema } = useFetchJsonSchema(keycloakInfo.updatedToken);
  const {
    error,
    success,
    modalOpen,
    setModalOpen,
    setSearchInputValue,
    setSuccess,
  } = useGenericStore();

  const { isOpen, onClose, onOpen } = useDisclosure();

  const memoizedJsonSchema = useMemo(async () => {
    if (!keycloakInfo.updatedToken) return;
    fetchJsonSchema("telecom", path.substring(9, path.length));
  }, [path, success, keycloakInfo.updatedToken]);

  useEffect(() => {
    if (!keycloakInfo.updatedToken) return;
    const displayData = async () => {
      memoizedJsonSchema;
      await getData(path.substring(9, path.length), "telecom", setTelecomRows);
    };
    displayData();
    setSuccess(null);
    setModalOpen(false);
    setCurrentPage(1);
    setSearchInputValue("");
    handleEdit(null);
  }, [path, error, success, keycloakInfo.updatedToken]);

  return (
    <>
      {path && <ContainerTelecomManagement path={path} onOpen={onOpen} />}
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
};

TelecomPage.propTypes = {
  path: PropTypes.string,
};

export default memo(TelecomPage);
