import { useContext } from "react";
import { ButtonGroup } from "@chakra-ui/react";
import GenericButton from "SharedElements/components/GenericComponents/GenericButton.jsx";
import { useTableStore } from "store/SharedStore/TableStore.jsx";
import { usePut } from "SharedElements/services/usePut.js";
import { ImCross, FaSave } from "SharedElements/constants/react_icons.js";
import { AuthContext } from "context/AuthContext.jsx";

const ButtonsEditionMode = ({ row, path, table_name }) => {
  const { keycloakInfo } = useContext(AuthContext);

  const { handleUpdate, setCellData, setEditingId, cellData } = useTableStore();
  const { editData } = usePut(keycloakInfo.updatedToken);

  const handleEditForm = () => {
    const lengthToSubstr = path.includes("telecom")
      ? 9
      : path.includes("template")
      ? 10
      : 0;
    const newPath = path.substring(lengthToSubstr, path.length);
    editData(newPath, row.id, cellData, table_name);
  };

  return (
    <ButtonGroup direction="row" spacing={3} align="center">
      <GenericButton
        sx={{ color: "blue" }}
        variant="ghost"
        onClick={() => {
          handleUpdate(path, row.id, cellData);
          handleEditForm();
          setCellData(cellData);
        }}
        status={<FaSave />}
      />
      <GenericButton
        sx={{ color: "red" }}
        variant="ghost"
        onClick={() => setEditingId(null)}
        status={<ImCross />}
      />
    </ButtonGroup>
  );
};

export default ButtonsEditionMode;
