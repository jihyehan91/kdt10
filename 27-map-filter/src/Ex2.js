import { useState } from 'react';

const Practice2 = () => {
  const [data, setData] = useState([
    { id: 1, user: '코디', email: 'codee@gmail.com' },
    { id: 2, user: '윤소희', email: 'yoonsohee@gmail.com' },
  ]);

  const [inputUser, setInputUser] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [nextId, setNextId] = useState(data.length + 1); // useState(3)

  const onChangeUser = (e) => setInputUser(e.target.value);
  const onChangeEmail = (e) => setInputEmail(e.target.value);
  const onKeyDownEnter = (e) => {
    if (e.key === 'Enter') {
      eventClick();
    }
  };

  const onRemoveData = (id) => {
    const NextData = data.filter((data) => data.id !== id);
    setData(NextData);
  };

  const eventClick = () => {
    const nextData = data.concat({
      id: nextId,
      user: inputUser,
      email: inputEmail,
    });

    setNextId(nextId + 1);
    setData(nextData);
    setInputUser('');
    setInputEmail('');
  };

  const dataList = data.map((data) => (
    <h2 key={data.id} onDoubleClick={() => onRemoveData(data.id)}>
      {data.user}: {data.email}
    </h2>
  ));

  return (
    <div>
      <input
        type='text'
        name='user'
        placeholder='이름'
        value={inputUser}
        onChange={onChangeUser}
      />

      <input
        type='text'
        name='email'
        placeholder='이메일'
        value={inputEmail}
        onChange={onChangeEmail}
        onKeyDown={onKeyDownEnter}
      />

      <button onClick={eventClick}>등록</button>

      <div>{dataList}</div>
    </div>
  );
};

export default Practice2;
