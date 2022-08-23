import React from "react";
import { useSelector } from "react-redux";

function List() {
  const state = useSelector((state) => state);
  return (
    <div>
      {state.map((elt, index) => (
        <h1 key={index}>{elt}</h1>
      ))}
    </div>
  );
}

export default List;
