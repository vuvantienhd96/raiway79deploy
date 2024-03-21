// component Test
// props
// child

// hook basic
import { useState } from 'react';

function Test(props) {
  // syntax === cu phap
  const [color, setColor] = useState(true);

  return (
    <>
      <h2 style={{ color: color ? 'green' : 'red' }}>flag</h2>
      <p>this is test {props.name}</p>
      <button onClick={() => setColor(false)}>change flag red</button>
      <button onClick={() => setColor(true)}>change flag green</button>
      <button onClick={() => setColor(!color)}>change flag</button>
    </>
  );
}

export default Test;

// state === trang thai
