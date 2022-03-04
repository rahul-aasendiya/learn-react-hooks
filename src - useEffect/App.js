import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import FComponent from "./FComponent";

function App() {
  // useEffect
  const [flag, setFlag] = useState(flase);

  return (
    <div className="App">
      <div>
        <button onClick={() => setFlag(!flag)}>
          Toggle function Component
        </button>
      </div>
      {flag ? <FComponent /> : ""}
    </div>
  );
}

export default App;
