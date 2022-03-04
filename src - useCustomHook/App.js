import React, { useState, useReducer } from "react";
import "./App.css";
import useCounter from "./useCounter";
import ScreenComponent from "./ScreenComponent";

function App() {
  // Custom hook

  const [counter, increment, decrement, reset] = useCounter(0);
  return (
    <div className="App border">
      <h1>Custom Hook Example</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <ScreenComponent />
    </div>
  );
}
export default App;
