import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthContext } from "context/AuthContext.jsx";

import { AnimatePresence } from "framer-motion";

import HomePage from "SharedElements/pages/HomePage.jsx";
{
  /* temporary disabled for insert keycloak authentication */
}
// import LoginPage from "SharedElements/pages/LoginPage.jsx";
import CommonPage from "Common/pages/CommonPage.jsx";
import TelecomPage from "Telecom/pages/TelecomPage.jsx";
import TemplatePage from "Template/pages/TemplatePage.jsx";

import {
  pathsCommon,
  pathsTelecom,
  pathsTemplate,
} from "SharedElements/constants/paths.js";

import ProtectedRoute from "SharedElements/authentication/ProtectedRoute.jsx";
import ErrorPage from "SharedElements/pages/ErrorPage.jsx";

const App = () => {
  const urlBaseName = import.meta.env.VITE_URL_BASENAME;

  {
    /* temporary disabling for insert keycloak authentication */
  }

  // const { initKeycloak } = useContext(AuthContext);
  // useEffect(() => {
  //   initKeycloak();
  // }, []);

  return (
    <BrowserRouter basename={urlBaseName}>
      <AnimatePresence mode="wait">
        <Routes>
          {/* temporary disabling for insert keycloak authentication */}
          {/* <Route path="/" element={<LoginPage title={"Login"} />} /> */}{" "}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/"
              element={<HomePage title={"General"} path={"general"} />}
            />
            {pathsCommon.map((path) => (
              <Route
                key={path}
                path={path}
                element={
                  <CommonPage
                    title={path.substring(1).replace("_", " ").toUpperCase()}
                    path={path.substring(1)}
                  />
                }
              />
            ))}
            {pathsTelecom.map((path) => (
              <Route
                key={path}
                path={path}
                element={<TelecomPage title={path} path={path} />}
              />
            ))}
            {pathsTemplate.map((path) => (
              <Route
                key={path}
                path={path}
                element={<TemplatePage title={path} path={path} />}
              />
            ))}
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
