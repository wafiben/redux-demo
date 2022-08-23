import logo from "./logo.svg";
import "./App.css";
import List from "./Components/List";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { addUser } from "./Redux/Actions";
function App() {
  const dispatch = useDispatch();
  const [state, setState] = useState(" ");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(state));
  };
  return (
    <>
      <form className="App" onSubmit={handleSubmit}>
        <input onChange={(e) => setState(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <List />
    </>
  );
}

export default App;
