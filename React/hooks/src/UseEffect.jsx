import { useEffect, useState } from "react";

export const UseEffect = () => {
  const [count, setCount] = useState(1);
  let [state, setState] = useState("React JS👑");
  let [data, setData] = useState([]);

  console.log("Component rendered");

  const increamentHandle = () => {
    setCount(count + 1);
  };

  const changeStateHandle = () => {
    setState("React JS🔥");
  };

  useEffect(() => {
    // setCount(count + 1); ❌
    console.log("Effect triggered");
  }, [state]); // Dependency array

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      });
  }, []);

  return (
    <div>
      <h1>{state}</h1>
      <h2>Count : {count}</h2>
      <button onClick={increamentHandle}>Increment</button>
      <button onClick={changeStateHandle}>Change State</button>
      {data.map((data) => {
        return (
          <main key={data.id}>
            <p>Title : {data.title}</p>
            <p>Status : {data.completed.toString()}</p>
            <hr />
          </main>
        );
      })}
    </div>
  );
};
