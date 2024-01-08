import { useState, useMemo } from 'react';

// useMemo: 연산의 결과 값을 기억
function UseMemoEx() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // [before]
  // 임의의 큰 연산을 하는 함수(가정)
  // 버튼을 누를 때, input 입력할 때 둘 다 연산이 이뤄짐 (calc 함수 호출)
  // input 값이 바뀔 때는 연산 필요 x => useMemo 이용해서 렌더링 과정에서 특정 값을 기억해서 그 값이 바뀔 때만 연산되도록 최적화
  // const calc = () => {
  //   console.log('열심히 계산중');
  //   for (let i = 0; i < 100000000; i++) return count ** 2;
  // };

  // [after]
  // calc 실행됐을 때 return 값이 count와 관련
  // 의존 배열에 count를 넣어주면 count의 값이 바뀔 때만 calc 함수를 실행
  // input 값이 바뀔 때는 실행x (컴포넌트는 리렌더링 O)
  const calc = useMemo(() => {
    console.log('열심히 계산 중');
    for (let i = 0; i < 100000000; i++) return count ** 2;
  }, [count]);

  return (
    <>
      <h1>UseMemo Ex</h1>
      <button onClick={() => setCount(() => count + 1)}>Plus</button>
      {/* input 태그에 값 입력할 때마다 input state 값이 바뀜 -> 리렌더링 -> 함수 호출 */}
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>count: {count}</p>

      {/* before */}
      {/* <p>calc: {calc()}</p> */}

      {/* after */}
      <p>calc: {calc}</p>
    </>
  );
}

export default UseMemoEx;
