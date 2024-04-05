import ReactDOM from "react-dom/client";
import React, { StrictMode } from "react";

import {
  Tolgee,
  DevTools,
  TolgeeProvider,
  FormatSimple,
  LanguageDetector,
  BackendFetch,
} from "@tolgee/react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import { theme } from "./theme.js";
import { AuthProvider } from "context/AuthContext.jsx";

import Fonts from "assets/Fonts.jsx";
import App from "./App.jsx";

const appVersion = ` - ${import.meta.env.VITE_VERSION}`;
document.title += appVersion;

const tolgee = () => {
  const appMode = import.meta.env.MODE;
  const apiUrl = import.meta.env.VITE_TOLGEE_API_URL;
  const apiKey = import.meta.env.VITE_TOLGEE_API_KEY;
  const lngSettings = {
    availableLanguages: ["en", "fr", "pl"],
    fallbackLanguage: "en",
    defaultLanguage: "fr",
  };
  const fetchSwitcher = (appMode) => {
    const fetch = {
      production: BackendFetch(),
      default: () => {
        lngSettings["apiUrl"] = apiUrl;
        lngSettings["apiKey"] = apiKey;
        return undefined;
      },
    };
    return fetch[appMode] || fetch["default"]();
  };
  const tolgee = Tolgee()
    .use(DevTools())
    .use(FormatSimple())
    .use(LanguageDetector())
    .use(fetchSwitcher(appMode))
    .init({
      ...lngSettings,
    });
  return tolgee;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <TolgeeProvider tolgee={tolgee()}>
    <ChakraProvider resetCSS={true} theme={theme}>
      <AuthProvider>
        <StrictMode>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Fonts />
          <App />
        </StrictMode>
      </AuthProvider>
    </ChakraProvider>
  </TolgeeProvider>
);
