import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

function FComponent() {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div className="border">
      <h1>Functional Component</h1>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <hr></hr>
      <FChild />
    </div>
  );
}
function FChild() {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div className="border">
      <h1>Functional Child Component</h1>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <h2>{counter}</h2>
    </div>
  );
}
export default FComponent;
