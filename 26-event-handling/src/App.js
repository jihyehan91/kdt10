import './App.css';
import ClassBind from './ClassBind';
import SyntheticEvent from './SyntheticEvent';
import Counter from './Counter';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Ex3 from './Ex3';
import ExAll from './exAll/ExAll';

function App() {
  return (
    <div className='App'>
      <SyntheticEvent />
      <hr />

      <ClassBind />
      <hr />

      <Counter />
      <hr />

      <Ex1 />
      <hr />

      <Ex2 />
      <hr />

      <Ex3 />
      <hr />

      {/* 전체 실습 */}
      <ExAll />
    </div>
  );
}

export default App;
