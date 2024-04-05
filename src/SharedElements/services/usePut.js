import { useGenericStore } from "store/SharedStore/GenericStore.jsx";
import { UseToast } from "hooks/useToast.js";

export const usePut = () => {
  const apiKey = import.meta.env.VITE_BASE_URL;
  const access_token = sessionStorage.getItem("access_token");
  const controller = new AbortController();
  const { setError, setSuccess } = useGenericStore();
  const { Toast } = UseToast();

  /**
   * Edit data for each path after user modifying,
   * @param {string} for the path
   * @param {number} for the id
   * @param {object} for the data
   **/
  const editData = async (path, id, data, table_name) => {
    try {
      const response = await fetch(`${apiKey}/${path}?id=eq.${id}`, {
        signal: controller.signal,
        method: "PUT",
        body: JSON.stringify({
          ...data,
        }),
        headers: {
          "Content-Profile": table_name,
          "Content-Type": "application/json",
          Authorization: "Bearer" + " " + access_token,
        },
      });
      if (response.ok === true || response.status === 204) {
        setSuccess(true);
        Toast("Modification effectué", "top", "success", 3000);
      }
    } catch (error) {
      Toast(results.message, "top", "error", 3000);
      console.log(error.message);
      setError(error.message);
      setSuccess(false);
    }
    return () => controller.abort();
  };

  return { editData };
};
