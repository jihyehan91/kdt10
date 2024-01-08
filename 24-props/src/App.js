import './App.css';
import FuncComponent from './FuncComponent';
import Button from './Button';
import ClassComponent from './ClassComponent';
import Food from './Food';
import Book from './Book';
import ClassCom_prac from './ClassCom_prac';

function App() {
  const my_func = () => {
    console.log('콘솔 띄우기 성공!');
  };
  return (
    <div className='App'>
      <FuncComponent name={3} />
      {/* 오류 발생 - name은 string만 가능하다. */}
      <FuncComponent />

      <hr />
      <Button link='https://wwww.google.com'>Google</Button>

      <hr />
      <ClassComponent name={3} />
      <ClassComponent />

      <hr />
      <Food />
      <Food name='빵' />

      <hr />
      <Book />

      <hr />
      <ClassCom_prac
        text='App 컴포넌트에서 넘겨준 text props'
        valid={my_func}
      />
    </div>
  );
}

export default App;
