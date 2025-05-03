import { useState } from "react";

export function UseState() {
  let [state, setState] = useState("React JS👑");

  function handleChange() {
    setState("React JS🔥");
  }

  return (
    <main style={{ textAlign: "center" }}>
      <h1>State : {state}</h1>
      <button onClick={handleChange}>Change</button>
    </main>
  );
}
