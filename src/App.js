import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { StyledEngineProvider } from "@mui/material/styles";
import React from "react";
import { RouterProvider } from "react-router";

import router from "./router";

export function App() {
  return (
    <React.StrictMode>
      <StyledEngineProvider enableCssLayer>
        <CssBaseline />
        <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
        <RouterProvider router={router} />
      </StyledEngineProvider>
    </React.StrictMode>
  );
}
