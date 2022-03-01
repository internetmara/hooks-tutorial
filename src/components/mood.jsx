import React, {useState} from "react";

const Mood = () => {
  const [text, setText] = useState('If you click me, I\'ll be big mad')
  const [button, setButton] = useState(true)

  const increment = () => {
    if (button) {
      setText('I\'m fucking pissed bro!!')
      setButton(!button)
    } else {
      setText('If you click me, I\'ll be big mad')
      setButton(!button)
    }
  };

  return (
    <div align="center">
      <br/>
      <h1>Mood Button</h1>
      <h2>{text}</h2>
      <br/>
      <button onClick={increment}>{button ? '😎' : '🤬'}</button>
      <hr/>
    </div>
  )
};

export default Mood;