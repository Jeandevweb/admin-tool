import { useContext } from "react";
import { useTranslate } from "@tolgee/react";
import { Flex } from "@chakra-ui/react";

import { useTableStore } from "store/SharedStore/TableStore.jsx";

import { usePost } from "SharedElements/services/usePost.js";

import GenericButton from "SharedElements/components/GenericComponents/GenericButton.jsx";

import { MdSend, MdCancel } from "SharedElements/constants/react_icons.js";
import { AuthContext } from "context/AuthContext.jsx";

const FormButton = ({ path, setModalOpen, createData }) => {
  const { t } = useTranslate();
  const { keycloakInfo } = useContext(AuthContext);

  const { setCreateData } = useTableStore();

  const { sendData } = usePost(keycloakInfo.updatedToken);

  const closeModal = () => {
    setModalOpen(false);
    setCreateData("");
  };

  const handleSubmitForm = () => {
    if (path.includes("telecom"))
      return sendData(path.substring(9, path.length), createData, "telecom");
    if (path.includes("template"))
      return sendData(path.substring(10, path.length), createData, "template");
    sendData(path, createData, "common");
  };

  return (
    <Flex direction="row" justifyContent="space-between" gap={"30px"}>
      <GenericButton
        type="submit"
        leftIcon={<MdSend />}
        sx={submitButton}
        onClick={handleSubmitForm}
        status={t("send")}
        isDisabled={createData === undefined || createData === ""}
      />
      <GenericButton
        type="button"
        leftIcon={<MdCancel />}
        sx={cancelButton}
        onClick={closeModal}
        status={t("cancel")}
      />
    </Flex>
  );
};

export default FormButton;

const submitButton = {
  border: "1px solid #14C786",
  padding: "0 15px",
  borderRadius: "5px",
  color: "#14C786",
  backgroundColor: "white",
  transition: "all 0.5s ease 0s",
  "&:hover": {
    background: "white",
    transform: "scale(1.05)",
  },
};
const cancelButton = {
  background:
    "radial-gradient(circle at 10% 20%, rgb(238, 56, 56) 0%, rgba(206, 21, 0, 0.92) 90.1%)",
  color: "white",
  borderRadius: "5px",
  padding: "0 15px",
  transition: "all 0.5s ease 0s",
  "&:hover": {
    background:
      "radial-gradient(circle at 10% 20%, rgb(238, 56, 56) 0%, rgba(206, 21, 0, 0.92) 90.1%)",
    transform: "scale(1.05)",
  },
};
