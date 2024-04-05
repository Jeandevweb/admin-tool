import { useTableStore } from "store/SharedStore/TableStore.jsx";
import { useGenericStore } from "store/SharedStore/GenericStore.jsx";

export const useFetchJsonSchema = () => {
  const apiKey = import.meta.env.VITE_BASE_URL;
  const controller = new AbortController();

  const { setJsonData } = useTableStore();
  const { setError } = useGenericStore();
  const access_token = sessionStorage.getItem("access_token");

  /**
   * Get json schema for each path,
   * @param {string} for the schema name
   * @param {string} for the table name
   **/
  const fetchJsonSchema = async (schema_name, table_name) => {
    try {
      const response = await fetch(`${apiKey}/rpc/jsonschema`, {
        signal: controller.signal,
        method: "POST",
        body: JSON.stringify({ schema_name, table_name }),
        headers: {
          "Content-Profile": "common",
          "Content-Type": "application/json",
          Authorization: "Bearer" + " " + access_token,
        },
        redirect: "follow",
      });
      const results = await response.json();
      setJsonData(results, Object.keys(results.properties));
    } catch (error) {
      setError(error);
    }
    return () => controller.abort();
  };
  return { fetchJsonSchema };
};
