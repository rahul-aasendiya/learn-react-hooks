import React, { useRef, useState, useEffect } from "react";
import "./App.css";

function App() {
  /*
  1. DOM reference
  2. useRef for storing the previous state
  3. hold mutable value prevent re-render of conponent
  */
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);
  const inputEl = useRef("");
  const previousCountrRef = useRef(0);

  useEffect(() => {
    previousCountrRef.current = counter;
  }, [counter]);

  const resetInput = () => {
    setName("");
    inputEl.current.focus();
  };

  return (
    <div className="App">
      <div>
        <input
          ref={inputEl}
          name="name"
          autoComplete="off"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={resetInput}>Reset</button>
        <div>My name is {name}</div>
        <div>
          <h1>Random Counter: {counter}</h1>{" "}
          {previousCountrRef.current !== "undefined" && (
            <h2>Previous Number: {previousCountrRef.current}</h2>
          )}
          <button onClick={(e) => setCounter(Math.ceil(Math.random() * 100))}>
            Generate Number
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
