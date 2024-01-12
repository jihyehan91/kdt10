import { useSelector, useDispatch } from 'react-redux';
import './styles/Box.css';

function App() {
  const isVisible = useSelector((state) => state.isVisible.boolean);

  return (
    <div className="App">
      <h1>React Redux Ex 3</h1>
      <h2>isVisible 값은 "{isVisible ? '참' : '거짓'}"입니다.</h2>
      <Box1 />
    </div>
  );
}

const Box1 = () => {
  return (
    <div className="Box">
      <h2>Box1</h2>
      <Box2 />
    </div>
  );
};
const Box2 = () => {
  return (
    <div className="Box">
      <h2>Box2</h2>
      <Box3 />
    </div>
  );
};
const Box3 = () => {
  return (
    <div className="Box">
      <h2>Box3</h2>
      <Box4 />
    </div>
  );
};
const Box4 = () => {
  const isVisible = useSelector((state) => state.isVisible.boolean);
  const dispatch = useDispatch();

  return (
    <div className="Box">
      <h2>Box4 : isVisible의 값은 {isVisible ? '참' : '거짓'}"입니다.</h2>
      <button onClick={() => dispatch({ type: 'isVisible/change' })}>
        change
      </button>
    </div>
  );
};

export default App;
