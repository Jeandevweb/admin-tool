import PropTypes from "prop-types";
import { Divider, VStack } from "@chakra-ui/react";
import { useTranslate } from "@tolgee/react";

import { useTableStore } from "store/SharedStore/TableStore.jsx";

import FormAdditional from "SharedElements/components/LayoutContainer/AsideCreateData/FormAdditional.jsx";
import FormGenericInput from "SharedElements/components/LayoutContainer/AsideCreateData/FormGenericInput.jsx";
import FormButton from "SharedElements/components/LayoutContainer/AsideCreateData/FormButton.jsx";
import GenericDrawer from "SharedElements/components/GenericComponents/GenericDrawer.jsx";

const ContainerForm = ({ path, setModalOpen, isOpen, onClose }) => {
  const { t } = useTranslate();

  const { createData, setCreateData } = useTableStore();

  const handleChangeModalForm = (name, value) => {
    const newData = {
      [name]: value,
    };
    setCreateData({ ...createData, ...newData });
  };

  return (
    <GenericDrawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      sx={{ p: "12px 20px" }}
      styleBody={{ p: "0 " }}
      text={t("addElement")}
    >
      <VStack key={path} sx={formModal}>
        <FormGenericInput handleChangeModalForm={handleChangeModalForm} />
        <FormAdditional
          label_name={"additional_data"}
          handleChangeModalForm={handleChangeModalForm}
          src={{ ...createData.additional_data } || {}}
        />
        <FormAdditional
          label_name={"jsonschema"}
          handleChangeModalForm={handleChangeModalForm}
          src={{ ...createData.jsonschema } || {}}
        />
        <Divider width="100%" m="20px auto" borderColor="gray.300" />
        <FormButton
          path={path}
          setModalOpen={setModalOpen}
          createData={createData}
        />
      </VStack>
    </GenericDrawer>
  );
};

ContainerForm.propTypes = {
  path: PropTypes.string,
  setModalOpen: PropTypes.func,
  modalEditState: PropTypes.object,
  values: PropTypes.object,
};

export default ContainerForm;

const formModal = {
  borderRadius: "15px",
  padding: "10px",
  height: "100%",
  width: "100%",
  overflow: "auto",
  "::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "rgba(128,128,128,0.5)",
    marginRight: "3px",
    borderRadius: "24px",
  },
};
