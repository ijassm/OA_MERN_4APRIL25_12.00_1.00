import { useReducer } from "react";
import { BiReset } from "react-icons/bi";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { reducer } from "./reducer";

export function UseReducer() {
  const [count, dispatch] = useReducer(reducer, 0);

  const incrementHandle = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrementHandle = () => {
    dispatch({ type: "DECREMENT" });
  };
  const resetHandle = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <main className="flex justify-center items-center min-h-screen">
      <section>
        <h1 className="text-7xl text-center">{count}</h1>
        <div className="flex gap-6 my-10 text-xl">
          <button
            className="flex items-center border-2 px-4 py-1 cursor-pointer active:scale-95  hover:bg-red-600 hover:text-white rounded-sm"
            onClick={decrementHandle}
          >
            <CiSquareMinus />
            Decrement
          </button>
          <button
            className="flex items-center border-2 px-4 py-1 cursor-pointer active:scale-95 hover:bg-orange-600 hover:text-white rounded-sm"
            onClick={resetHandle}
          >
            <BiReset />
            Reset
          </button>
          <button
            className="flex items-center border-2 px-4 py-1 cursor-pointer active:scale-95 hover:bg-green-600 hover:text-white rounded-sm"
            onClick={incrementHandle}
          >
            <CiSquarePlus />
            Increment
          </button>
        </div>
      </section>
    </main>
  );
}
