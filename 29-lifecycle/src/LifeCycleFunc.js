import { useState } from 'react';
import LifeCycleFuncChild from './LifeCycleFuncChild';

function LifeCycleFunc() {
  const [number, setNumber] = useState(0);
  const [visible, setVisibel] = useState(true);

  const changeNumber = () => {
    setNumber(number + 1);
  };
  const changeVisible = () => {
    setVisibel(!visible);
  };
  return (
    <>
      <h1>함수형 컴포넌트 라이프사이클</h1>
      <button onClick={changeNumber}>Plus</button>
      <button onClick={changeVisible}>On/Off</button>
      {visible && <LifeCycleFuncChild number={number} />}
    </>
  );
}

export default LifeCycleFunc;
