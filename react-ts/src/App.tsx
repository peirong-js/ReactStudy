import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Store from "./useReducerTest/store";
import Counter from "./useReducerTest/Counter";
import List from "./useReducerTest/List";
import Add from "./useReducerTest/Add";
import { ProjectListScreen } from "./screens/projectaList";
import { TsReactTest } from "./useArray/useArray";
import { LoginScreen } from "./screens/login";
import { AuthenticatedApp } from "./authenticated-app";
import { UnauthenticatedApp } from "./unauthenticated-app";
import { useAuth } from "./context/auth-context";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? (
        <div>
          <AuthenticatedApp />
          <Store>
            <Counter />
            <hr />
            <List />
            <Add />
          </Store>
          <hr />
          <ProjectListScreen />
          <hr />
          <TsReactTest />
          <hr />
          <LoginScreen />
        </div>
      ) : (
        <UnauthenticatedApp />
      )}

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
