import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { UseEffect } from "./UseEffect";
import { UseContext } from "./UseContext";
import { UseReducer } from "./UseReducer";
import { UseRef } from "./UseRef";
import { MemoComponent } from "./MemoComponent";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <MemoComponent />
  // </StrictMode>
);
