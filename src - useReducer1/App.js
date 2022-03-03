import React, { useState, useReducer } from "react";
import "./App.css";

const initialState = [
  { id: Date.now(), name: "Rahul", email: "rahul@mailinator.com" },
];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((contact) => {
        return contact.id !== action.payload.id;
      });
    default:
      return new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addContact = (e) => {
    e.preventDefault();
    const contact = {
      id: Date.now(),
      name,
      email,
    };
    dispatch({ type: "add", payload: contact });
  };
  console.log(state);
  return (
    <div className="App border">
      <h1>useReducer Hook</h1>
      <form onSubmit={addContact}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Add Contat</button>
      </form>
      <div>
        <ul>
          {state.map((contact) => {
            return (
              <li key={contact.id} className="contact">
                <div>
                  <h2>{contact.name}</h2>
                </div>
                <div>
                  <h2>{contact.email}</h2>
                </div>

                <div>
                  <button
                    onClick={() =>
                      dispatch({ type: "delete", payload: { id: contact.id } })
                    }
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default App;
