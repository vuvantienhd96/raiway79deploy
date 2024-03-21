import { useState } from 'react';
import './homePage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { incrementByAmount, decrementByAmount } from '../feature/count/count';

function HomePage({ title, content }) {
  // UseState
  const [colorTitle, setColorTitle] = useState('red');
  const [text, setText] = useState('HELLO');
  // colorTitle là giá trị khởi tạo init ban đầu và dùng để hiển thị giá trị đó
  // logic code
  const onColor = () => {
    console.log('onClick !');
    // logic change here !
    setColorTitle('green');
  };

  const value = useSelector((state) => state.counter.value);

  const dispath = useDispatch();

  return (
    <>
      state value number: <span style={{ color: 'red' }}>{value}</span>
      <hr />
      <header style={{ color: colorTitle }}>{title}</header>
      <article>{content}</article>
      <input
        type="text"
        value={text}
        onChange={(event) => {
          console.log(event, 'event');

          setText(event.target.value);
        }}
      />
      <button onClick={() => dispath(incrementByAmount(text))}>
        tang ? number
      </button>
      <button onClick={() => dispath(decrementByAmount(text))}>
        giam ? number
      </button>
      <hr />
      hello: {text}
      {/* style inline css */}
      <hr />
      <button className="bgButon" onClick={() => onColor()}>
        change title
      </button>
      <hr />
    </>
  );
}

export default HomePage;
