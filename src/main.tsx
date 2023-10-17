import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./context/themeContext";
import "tailwindcss/tailwind.css";
import { ModalProvider } from "./context/modalInstructionStats.tsx";
import { KeyPressedProvider } from "./context/keyPressedContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <KeyPressedProvider>
      <ModalProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ModalProvider>
    </KeyPressedProvider>
  </React.StrictMode>
);
