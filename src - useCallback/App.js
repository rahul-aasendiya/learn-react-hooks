import React, { useState, useMemo, useEffect, useCallback } from "react";
import "./App.css";

function App() {
  /*
  1. Memoize the function (useCallback) vs memoize the value (useMemo)
  2. Referential equality for function
  */

  const [counter, setCounter] = useState(1);

  const result = useMemo(() => {
    return factorial(counter);
  }, [counter]);
  // console.log("useMemo: ", result);

  const [name, setName] = useState("");

  const displayName = useCallback(
    (greeting) => {
      return greeting + " " + name;
    },
    [name]
  );
  // console.log("useCallback: ", displayName);

  return (
    <div className="App">
      <h1>
        Factorial of {counter} is: {result}
      </h1>
      <div>
        <button onClick={() => setCounter(counter - 1)}>Descrment</button>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
      <hr></hr>
      <div>
        <div>
          <label>Enter Name</label>
        </div>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <hr></hr>
        <DisplayName displayName={displayName}></DisplayName>
      </div>
    </div>
  );
}

const DisplayName = ({ displayName }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(displayName("Hello"));
    console.log("component rendered!");
  }, [displayName]);
  return <p>{`My name is ${value}`}</p>;
};

function factorial(n) {
  let i = 0;
  while (i < 2000000) i++;
  if (n < 0) {
    return -1;
  }
  if (n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
export default App;
