import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./Store";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };

  const decrement = () => {
    dispatch(actions.decrement());
  };

  const addBy = () => {
    dispatch(actions.addBy(10));
  };
  return (
    <div>
      <div className="bg-green-300 h-screen w-full px-4 py-8">
        <h1 className="text-black font-bold text-4xl text-center ">
          Counter App
        </h1>
        <h2 className="text-center font-medium text-2xl mt-8">
          Result: {counter}
        </h2>
        <div className="flex justify-center py-2">
          <button
            className="border bg-white rounded m-1 w-[100px]  p-1 hover:text-red-600 "
            onClick={increment}
          >
            Increment
          </button>
          <button
            className="border bg-white rounded m-1 w-[100px]  p-1 hover:text-red-600 "
            onClick={decrement}
          >
            Decrement
          </button>
          <button
            className="border bg-white rounded m-1 w-[100px]  p-1 hover:text-red-600 "
            onClick={addBy}
          >
            Add By 10
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
