import { useState } from 'react';

// 로직은 파일명, 함수명이 대문자로 시작하든 소문자로 시작하든 상관없다.
// useToggle이라는 함수
function useToggle(initValue = false) {
  // value: 토글의 상태
  // setValue: 토글 상태를 변화시키는 setter
  const [value, setValue] = useState(initValue);

  const toggleValue = () => {
    setValue(!value);
  };
  return [value, toggleValue];
}

export default useToggle;
