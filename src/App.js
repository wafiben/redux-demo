import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";

import { incrementAction } from "./Redux/Actions";
import { decrementAction } from "./Redux/Actions";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state);
  console.log(count);
  const handleIncrement = () => {
    dispatch(incrementAction());
  };
  const handleDecrement = () => {
    dispatch(decrementAction());
  };
  return (
    <div className="App">
      <button onClick={handleIncrement}>+</button>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default App;
