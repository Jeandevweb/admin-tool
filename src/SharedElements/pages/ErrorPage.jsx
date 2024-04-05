import { Navigate } from "react-router-dom";

import { useAuthStore } from "store/SharedStore/AuthStore.jsx";

import ErrorComponent from "SharedElements/components/ErrorComponent.jsx";

const ErrorPage = () => {
  const { accessToken } = useAuthStore();

  return accessToken !== null ? <ErrorComponent /> : <Navigate to="/" />;
};

export default ErrorPage;
