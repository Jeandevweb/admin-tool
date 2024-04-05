import { Fragment } from "react";
import { useColorMode } from "@chakra-ui/react";
import { useTableStore } from "store/SharedStore/TableStore.jsx";
import GenericAdditionnalData from "SharedElements/components/GenericComponents/GenericAdditionnalData.jsx";

const FormAdditional = ({ label_name, handleChangeModalForm, src }) => {
  const { getJsonSchema, columnsTitle } = useTableStore();
  const { colorMode } = useColorMode();

  return (
    <>
      {columnsTitle()?.map((label, index) => {
        return (
          getJsonSchema.properties[label].type === "object" &&
          label === label_name && (
            <Fragment key={`${label}-${index}`}>
              <GenericAdditionnalData
                label={label}
                src={src}
                name={label}
                onAdd={(params) => {
                  console.log(params);
                  handleChangeModalForm(label_name, params.new_value);
                }}
                onEdit={(params) => {
                  handleChangeModalForm(label_name, params.updated_src);
                }}
                collapsed={false}
                theme={colorMode === "dark" ? "google" : "rjv-default"}
              />
            </Fragment>
          )
        );
      })}
    </>
  );
};

export default FormAdditional;
