import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./component/App.jsx";
import Header from "./component/Header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <App />
  </StrictMode>
);
