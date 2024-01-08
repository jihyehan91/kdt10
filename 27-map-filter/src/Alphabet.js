import React, { useState } from 'react';

function Alphabet() {
  const [alphabet, setAlphabet] = useState(['b', 'a', 'n', 'a', 'n', 'a']);
  const [inputAlpha, setInputAlpha] = useState('');

  const [alphabet2, setAlphabet2] = useState([
    {
      id: 1,
      alpha: 'a',
    },
    {
      id: 2,
      alpha: 'p',
    },
    {
      id: 3,
      alpha: 'p',
    },
    {
      id: 4,
      alpha: 'l',
    },
    {
      id: 5,
      alpha: 'e',
    },
  ]);
  const addAlpha = () => {
    // input 값이 빈칸일 때 alphabet2 상태가 변경되지 않도록 하기
    if (inputAlpha.trim().length === 0) return;

    const newAlpha = alphabet2.concat({
      id: alphabet2.length + 1,
      alpha: inputAlpha,
    });

    setAlphabet2(newAlpha);
    setInputAlpha('');
  };

  const handleKeyDown = (e) => {
    console.log(e);

    // bugfix: IME 문제 해결 (한글 마지막 한 글자가 더 나옴)
    if (e.nativeEvent.isComposing) return;
    if (e.code === 'Enter') addAlpha();
  };

  const deleteAlpha = (targetId) => {
    // targetId: 삭제할 요소의 id
    const newAlpha = alphabet2.filter((alpha) => {
      return alpha.id !== targetId;
    });

    setAlphabet2(newAlpha);
  };
  return (
    <>
      <ol>
        {/* map */}
        {/* {alphabet.map((value, idx) => {
          return <li key={idx}>{value}</li>;
        })} */}
        {/* 한 줄일 때 return과 함께 {} 생략 가능 */}
        {/* {alphabet.map((value, idx) => (
          <li key={idx}>{value}</li>
        ))} */}

        {alphabet2.map((value) => {
          return (
            <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)}>
              {value.alpha}
            </li>
          );
        })}
      </ol>

      <input
        type='text'
        placeholder='알파벳 입력'
        value={inputAlpha}
        onChange={(e) => {
          setInputAlpha(e.target.value);
        }}
        // 실습 Enter 입력
        onKeyDown={handleKeyDown}
      />
      <button onClick={addAlpha}>Add</button>

      {/* 단축평가 */}
      {inputAlpha.length === 0 && <span>알파벳을 입력해주세요!</span>}
      <br />
      {null || <span>정의된 값이 없어요!</span>}
    </>
  );
}

export default Alphabet;
