import React, {useState} from "react";

const StateTutorial = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter+1);
  }
  
  const reset = () => {
    setCounter(0)
  }
  
  return (
    <div align="center">
      <br/>
        <h1>UseState</h1>
        <h2>{counter}</h2>
      <br/>
        <div className="state-buttons">
          <button onClick={increment}>Increment</button>
          <button onClick={reset}>Reset</button>
        </div>
      <hr/>
    </div>
  )
};

export default StateTutorial;