import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // Import BrowserRouter
import "./index.css";
import App from "./App.jsx";
import AutherProvider from "./context/autherProvider.jsx";

localStorage.clear();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>         
      <AutherProvider>
        <App />
      </AutherProvider>
    </BrowserRouter>
  </StrictMode>
);
