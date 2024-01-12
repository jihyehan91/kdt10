import { useState } from 'react';
import { UserContext2 } from './UserContext';

function UserProvider(props) {
  const children = props.children;
  // props 객체 형태의 children을 인자로 받아서 하위 요소로 삽입

  // defaultUser로 설정한 값 (name, setName)
  // 이름 변경 할 수 있게 useState 사용
  const [name, setName] = useState('고길동');

  return (
    <UserContext2.Provider
      value={{
        name,
        setName,
      }}
    >
      {children}
    </UserContext2.Provider>
  );
}

export default UserProvider;
