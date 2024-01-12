import { useSelector } from 'react-redux';
import Box1 from './component/Box1';
import './styles/Box.css';

function App2() {
  const number = useSelector((state) => state.counter.number);

  return (
    <>
      <h1>React Redux Ex 2</h1>
      <h2>{number}</h2>
      <Box1 />
    </>
  );
}

export default App2;
