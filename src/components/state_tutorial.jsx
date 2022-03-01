import React, {useState} from "react";

const StateTutorial = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter+1);
  }
  
  return (
    <div align="center">
      <br/>
        <h1>UseState</h1>
        <h2>{counter}</h2>
      <br/>
        <button onClick={increment}>Increment</button>
      <hr/>
    </div>
  )
};

export default StateTutorial;