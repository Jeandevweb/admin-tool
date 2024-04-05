import { useGenericStore } from "store/SharedStore/GenericStore.jsx";

export const useGet = () => {
  const apiKey = import.meta.env.VITE_BASE_URL;
  const access_token = sessionStorage.getItem("access_token");
  const controller = new AbortController();
  const { setIsLoading, setError } = useGenericStore();
  /**
   * Get the data for each path,
   * @param {string} for the name table
   * @param {string} for the path
   **/
  const getData = async (path, table_name, setData) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${apiKey}/${path}`, {
        signal: controller.signal,
        method: "GET",
        headers: {
          "Accept-Profile": table_name,
          "Content-Profile": table_name,
          Prefer: "return=representation",
          "Content-Type": "application/json",
          Authorization: "Bearer" + " " + access_token,
        },
      });
      const result = await response.json();
      if (response.status === 200) {
        setData(result);
        setIsLoading(false);
      }
    } catch (error) {
      if (error.name === "AbortError") setError(error);
    }
    return () => controller.abort();
  };

  return { getData };
};
