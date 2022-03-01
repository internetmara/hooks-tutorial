import React, {useReducer} from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {count: state.count + 1, text: state.text}
    case "toggleText":
      return {count: state.count, text: !state.text}
    case "reset":
      return {count: 0, text: true}
    default:
      return state
  }
};

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, 
    {count: 0, text: true})

  return (
    <div align="center">
      <br/>
        <h1>UseReducer</h1>
        <h2>{state.count}</h2>
      <br/>
      <div className="state-buttons">
        <button onClick={() => {
          dispatch({ type: "INCREMENT"})
          dispatch({ type: "toggleText"})
        }}>
          {state.text ? "Even" : "Odd" }
        </button>
        <button onClick={() => {
          dispatch({ type: "reset"})
        }}>Reset
        </button>
        </div>
      <hr/>
    </div>
  )
};

export default ReducerTutorial;