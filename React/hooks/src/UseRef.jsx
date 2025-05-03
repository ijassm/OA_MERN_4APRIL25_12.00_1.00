import { useEffect, useRef, useState } from "react";

// export function UseRef() {
//   const [inputValue, setInputValue] = useState("");
//   // const count = useRef(0);
//   const [count, setCount] = useState(0);

//   // console.log(count, "count");

//   useEffect(() => {
//     // count.current = count.current + 1;
//     setCount((count) => count + 1);
//   }, [inputValue]);

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h1>Render Count: {count}</h1>
//     </>
//   );
// }

// export function UseRef() {
//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);

//   console.log(count);

//   useEffect(() => {
//     count.current = count.current + 1;
//   });

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h1>Render Count: {count.current}</h1>
//     </>
//   );
// }

export function UseRef() {
  const inputElement = useRef();

  console.log(inputElement);

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

// export  function UseRef() {
//   const [inputValue, setInputValue] = useState("");
//   const previousInputValue = useRef("");

//   useEffect(() => {
//     console.log("useEffect is called");
//     previousInputValue.current = inputValue;
//     console.log("previousInputValue.current : ", previousInputValue.current);
//   }, [inputValue]);

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h2>Current Value: {inputValue}</h2>
//       <h2>Previous Value: {previousInputValue.current}</h2>
//     </>
//   );
// }
