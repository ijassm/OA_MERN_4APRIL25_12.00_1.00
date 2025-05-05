import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ControlledForm } from "./ControlledForm";
import { UnControlledForm } from "./UnControllerForm";
import { ReactHookForm } from "./ReactHookForm";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactHookForm />
  </StrictMode>
);
