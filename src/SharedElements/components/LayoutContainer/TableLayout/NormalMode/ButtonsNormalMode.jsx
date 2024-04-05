import { useContext } from "react";
import { ButtonGroup } from "@chakra-ui/react";
import GenericButton from "SharedElements/components/GenericComponents/GenericButton.jsx";
import { useGenericStore } from "store/SharedStore/GenericStore.jsx";
import { useDelete } from "SharedElements/services/useDelete.js";
import { useTableStore } from "store/SharedStore/TableStore.jsx";
import {
  FaRegEdit,
  BsFillTrashFill,
} from "SharedElements/constants/react_icons.js";
import { AuthContext } from "context/AuthContext.jsx";

const ButtonsNormalMode = ({ path, row, table_name }) => {
  const { keycloakInfo } = useContext(AuthContext);

  const { setModalOpen } = useGenericStore();

  const { deleteData } = useDelete(keycloakInfo.updatedToken);
  const { handleEdit } = useTableStore();

  const handleDeleteForm = () => {
    const lengthToSubstr = path.includes("telecom")
      ? 9
      : path.includes("template")
      ? 10
      : 0;
    const newPath = path.substring(lengthToSubstr, path.length);
    deleteData(newPath, row.id, row, table_name);
  };

  return (
    <ButtonGroup direction="row" spacing={3} align="center">
      <>
        {path.includes("link") ? null : (
          <GenericButton
            onClick={() => {
              handleEdit(row.id, row), setModalOpen(false);
            }}
            variant="ghost"
            sx={{ color: "green" }}
            status={<FaRegEdit />}
          />
        )}
        <GenericButton
          onClick={() => handleDeleteForm()}
          variant="ghost"
          sx={{ color: "red" }}
          status={<BsFillTrashFill />}
        />
      </>
    </ButtonGroup>
  );
};

export default ButtonsNormalMode;
