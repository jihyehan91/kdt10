import './App.css';
import Counter from './Counter';
import SayFunction from './SayFunction';
import CounterFunc from './CounterFunc';
import DoubleCounter from './StateEx2';

function App() {
  return (
    <div className='App'>
      <Counter />
      <hr />

      <SayFunction />
      <hr />

      <CounterFunc />
      <hr />

      {/* 실습1 */}
      <StateEx1 />

      {/* 실습2 */}
      <DoubleCounter />
    </div>
  );
}

export default App;
