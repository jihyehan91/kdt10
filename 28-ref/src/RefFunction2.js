import { useRef, useState } from 'react';

const RefFunction2 = () => {
  const idRef = useRef(1);
  const [id, setId] = useState(10);

  const plusIdRef = () => {
    // idRef값 증가
    idRef.current += 1;
    console.log(idRef.current);
    // ref 로컬 변수값은 바뀌지만 컴포넌트가 다시 렌더링 되지 않음
  };

  const plusIdState = () => setId(id + 1);

  return (
    <>
      <p>(함수형 컴포넌트) ref 로컬변수 사용</p>
      <h2>{idRef.current}</h2>
      <button onClick={plusIdRef}>plus idRef</button>

      <h2>{id}</h2>
      <button onClick={plusIdState}>plus IdState</button>
    </>
  );
};

export default RefFunction2;
