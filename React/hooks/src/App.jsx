import { useState } from "react";

// export function App() {
//   // let name = "React JS👑";
//   let state = useState("React JS👑");

//   console.log(state);

//   function handleChange() {
//     // name = "React JS🔥";
//     // console.log(name);
//     state[1]("React JS🔥");
//   }

//   return (
//     <main>
//       <h1>Hello {state[0]}</h1>
//       <button onClick={handleChange}>Change</button>
//     </main>
//   );
// }

export function Card({ name }) {
  return <h1>Hello {name}</h1>;
}

export function App() {
  let [state, setState] = useState("React JS👑");

  function handleChange() {
    setState("React JS🔥");
  }

  return (
    <main style={{ textAlign: "center" }}>
      <Card name={state} />
      <button onClick={handleChange}>Change</button>
    </main>
  );
}
