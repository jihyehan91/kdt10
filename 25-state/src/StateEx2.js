import { useState } from 'react';

const DoubleCounter = () => {
  const [number, setNumber] = useState(0);
  const onClickPlus = () => {
    setNumber(number + 2);
  };
  const onClickMinus = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onClickPlus}>+2</button>
      <button onClick={onClickMinus}>-1</button>
    </div>
  );
};

export default DoubleCounter;
