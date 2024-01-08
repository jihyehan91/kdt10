import { useState } from 'react';

const Ex2 = () => {
  let [textColor, chageColor] = useState({
    color: 'black',
    text: '검정색',
  });
  // textcolor: {color: 'black', text: '검정색'}
  const setColor = (color, obj) => {
    // obj: e.target
    chageColor({ color: color, text: obj.innerText });
  };

  return (
    <div>
      {/* <h2 style={{ color: 'black' }}>검정색 글씨</h2> */}
      <h2 style={{ color: textColor.color }}> {textColor.text}글씨</h2>
      <button
        onClick={(e) => {
          setColor('red', e.target);
        }}
      >
        빨간색
      </button>
      <button
        onClick={(e) => {
          setColor('blue', e.target);
        }}
      >
        파란색
      </button>
    </div>
  );
};

export default Ex2;
