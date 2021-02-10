import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Store from "./useReducerTest/store";
import Counter from "./useReducerTest/Counter";
import List from "./useReducerTest/List";
import Add from "./useReducerTest/Add";

function App() {
  return (
    <div className="App">
      <Store>
        <Counter />
        <hr />
        <List />
        <Add />
      </Store>
      hello world
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
