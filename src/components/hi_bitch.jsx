import React, {useState} from "react";

const NewAccount = () => {
  const [text, setText] = useState('hi')
  const [button, setButton] = useState(true)

  const increment = () => {
    if (text == 'hi') {
      setText('bitch')
      setButton(!button)
    } else {
      setText('hi')
      setButton(!button)
    }
  };

  return (
    <div align="center">
      <br/>
      <h1>Hi Bitch!!</h1>
      <h2>{text}</h2>
      <br/>
      <button onClick={increment}>{button ? '💖' : '🔪'}</button>
      <hr/>
    </div>
  )
};

export default NewAccount