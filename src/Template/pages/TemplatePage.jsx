import { useEffect, memo, useMemo, useContext } from "react";
import PropTypes from "prop-types";

import { useGenericStore } from "store/SharedStore/GenericStore.jsx";
import { useTableStore } from "store/SharedStore/TableStore.jsx";
import { useTemplatePageStore } from "store/TemplateStore/TemplatePageStore.jsx";
import { useGet } from "SharedElements/services/useGet.js";
import { useFetchJsonSchema } from "SharedElements/services/useFetchJsonSchema.js";
import ContainerTemplateManagement from "Template/components/ContainerTemplateManagement.jsx";
import ContainerForm from "SharedElements/components/LayoutContainer/AsideCreateData/ContainerForm.jsx";
import { useDisclosure } from "@chakra-ui/react";
import { AuthContext } from "context/AuthContext.jsx";

function TemplatePage({ path }) {
  const { keycloakInfo } = useContext(AuthContext);
  const { getData } = useGet(keycloakInfo.updatedToken);
  const { fetchJsonSchema } = useFetchJsonSchema(keycloakInfo.updatedToken);
  const { setTemplateRows } = useTemplatePageStore();
  const { setCurrentPage, handleEdit } = useTableStore();
  const {
    error,
    success,
    setSearchInputValue,
    setModalOpen,
    modalOpen,
    setSuccess,
  } = useGenericStore();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const memoizedJsonSchema = useMemo(async () => {
    if (!keycloakInfo.updatedToken) return;
    fetchJsonSchema("template", path.substring(10, path.length));
  }, [path, success, keycloakInfo.updatedToken]);

  useEffect(() => {
    if (!keycloakInfo.updatedToken) return;
    const displayData = async () => {
      await memoizedJsonSchema;
      await getData(
        path.substring(10, path.length),
        "template",
        setTemplateRows
      );
    };
    setSuccess(null);
    displayData();
    setModalOpen(false);
    setCurrentPage(1);
    setSearchInputValue("");
    handleEdit(null);
  }, [path, error, success, keycloakInfo.updatedToken]);

  return (
    <>
      {path && <ContainerTemplateManagement path={path} onOpen={onOpen} />}
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

TemplatePage.propTypes = {
  path: PropTypes.string,
};

export default memo(TemplatePage);
