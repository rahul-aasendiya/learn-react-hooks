import React, { useState } from "react";
import "./App.css";

function initialValue() {
  console.log("Function Called!");
  return 0;
}

function App() {
  const [name, setName] = useState("Rahul");
  const [names, setNames] = useState([]);
  const [flag, setFlag] = useState(false);
  const [steps, setSteps] = useState(0);

  function changeName() {
    console.log("clicked");
    return setFlag(!flag);
  }
  function increment() {
    return setSteps(steps + 2);
  }
  function decrement() {
    return setSteps(steps - 2);
  }
  function addNames(e) {
    e.preventDefault();
    setNames([...names, { id: names.length, name }]);
    setName("");
  }
  return (
    <div className="App">
      <h1>Hello {flag ? name : ""}</h1>
      <button onClick={changeName}>Click</button>
      <hr></hr>
      <button onClick={increment}>+</button>
      <h1>{steps}</h1>
      <button onClick={decrement}>-</button>
      <hr></hr>
      <form onSubmit={addNames}>
        <input
          focus
          type="text"
          value={name}
          placeholder="add names"
          onChange={(e) => setName(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <hr></hr>
      <ul>
        {names.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
