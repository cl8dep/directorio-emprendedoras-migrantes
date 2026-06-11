"use client";

import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Creamos un tema elegante con colores que transmitan calidez y profesionalismo
const theme = createTheme({
  palette: {
    primary: {
      main: "#0f172a", // slate-900 para una estética corporativa y limpia
    },
    secondary: {
      main: "#0d9488", // teal-600 para resaltar botones, tags y acentos de diseño
    },
  },
  typography: {
    fontFamily: "var(--font-geist-sans), Arial, sans-serif",
    button: {
      textTransform: "none", // Desactiva la capitalización automática en los botones de MUI
      fontWeight: 600,
    },
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}