import { useGenericStore } from "store/SharedStore/GenericStore.jsx";
import { useTableStore } from "store/SharedStore/TableStore.jsx";

import { UseToast } from "hooks/useToast.js";

export const usePost = () => {
  const apiKey = import.meta.env.VITE_BASE_URL;
  const access_token = sessionStorage.getItem("access_token");
  const controller = new AbortController();
  const { setError, setSuccess, setModalOpen } = useGenericStore();
  const { setCreateData } = useTableStore();

  const { Toast } = UseToast();

  /**
   * Send data for each path after user creation,
   * @param {string} for the path
   * @param {object} for the data
   **/
  const sendData = async (path, data, table_name) => {
    try {
      const response = await fetch(`${apiKey}/${path}`, {
        signal: controller.signal,
        method: "POST",
        body: JSON.stringify({
          ...data,
        }),
        headers: {
          "Accept-Profile": table_name,
          "Content-Profile": table_name,
          Prefer: "return=representation",
          "Content-Type": "application/json",
          Authorization: "Bearer" + " " + access_token,
        },
      });
      if (response.ok === true || response.status === 201) {
        setSuccess(true);
        setModalOpen(false);
        setCreateData("");
        Toast("Ajout validé", "top", "success", 3000);
      }
      const results = await response.json();
      if (response.ok === false) {
        const message = results.message.replace("column", "input");
        Toast(message, "top", "error", 3000);
        setModalOpen(true);
      }
      return results;
    } catch (error) {
      console.log(error);
      setError(error);
      setSuccess(false);
    }
    return () => controller.abort();
  };
  return { sendData };
};
