import React, { useState, useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Content5 = () => {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>useState / useRedecur</h3>
      <p>Count:{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        1 Ekle
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        1 Azalt
      </button>
      <hr></hr>
      <p>Count:{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>1 Ekle</button>
      <button onClick={() => dispatch({ type: "decrement" })}>1 Azalt</button>
    </div>
  );
};

export default Content5;
