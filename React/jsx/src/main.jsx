import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { Function } from "./Function.jsx";

const name = "React";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* {new App().render()} */}
    {/* <App name={name} /> */}
    <Function />
  </StrictMode>
);
