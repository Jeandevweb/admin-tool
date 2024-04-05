import { Fragment } from "react";
import { useTableStore } from "store/SharedStore/TableStore.jsx";

import GenericSelect from "SharedElements/components/GenericComponents/GenericSelect.jsx";
import GenericInput from "SharedElements/components/GenericComponents/GenericInput.jsx";
import GenericBoolean from "SharedElements/components/GenericComponents/GenericBoolean.jsx";

const FormGenericInput = ({ handleChangeModalForm }) => {
  const { getJsonSchema, columnsTitle } = useTableStore();

  return (
    <>
      {columnsTitle()?.map((label, index) => {
        return getJsonSchema.properties[label].type === "string" &&
          getJsonSchema.properties[label].enum ? (
          <Fragment key={`${label}-${index}`}>
            <GenericSelect
              onChange={(e) => handleChangeModalForm(label, e.target.value)}
              size="sm"
              type="select"
              name={label}
              values={getJsonSchema.properties[label].enum}
              placeholder="Select a value"
            />
          </Fragment>
        ) : getJsonSchema.properties[label].format === "date" ? (
          <Fragment key={`${label}-${index}`}>
            <GenericInput
              size="sm"
              type="date"
              name={label}
              readOnly={getJsonSchema.properties[label].readOnly}
              onChange={(e) => {
                handleChangeModalForm(label, e.target.value);
              }}
            />
          </Fragment>
        ) : getJsonSchema.properties[label].type === "boolean" ? (
          <Fragment key={`${label}-${index}`}>
            <GenericBoolean
              onChange={(e) => handleChangeModalForm(label, e.target.value)}
              size="sm"
              name={label}
            />
          </Fragment>
        ) : getJsonSchema.properties[label].type === "integer" ? (
          <Fragment key={`${label}-${index}`}>
            <GenericInput
              size="sm"
              type="number"
              name={label}
              onChange={(e) => handleChangeModalForm(label, e.target.value)}
            />
          </Fragment>
        ) : (getJsonSchema.properties[label].type === "object" &&
            label === "additional_data") ||
          label === "jsonschema" ? null : (
          <Fragment key={`${label}-${index}`}>
            {label === "create_user" ? null : (
              <>
                <GenericInput
                  size="sm"
                  type="text"
                  name={label}
                  onChange={(e) => {
                    handleChangeModalForm(label, e.target.value);
                  }}
                />
              </>
            )}
          </Fragment>
        );
      })}
    </>
  );
};

export default FormGenericInput;
