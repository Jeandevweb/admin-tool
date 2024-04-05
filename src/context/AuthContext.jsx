import PropTypes from "prop-types";

import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const REALM_NAME = import.meta.env.VITE_AUTH_REALM_NAME;
  const URL = import.meta.env.VITE_AUTH_URL;

  const accessToken = sessionStorage.getItem("access_token");
  const userInfo = "Bearer" + " " + accessToken;
  return (
    <AuthContext.Provider
      value={{
        REALM_NAME,
        URL,
        accessToken,
        userInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};
