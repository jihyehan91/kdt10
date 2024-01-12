import { useSelector, useDispatch } from 'react-redux';
import { plus, minus } from '../store/counterReducer';

function Box4() {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  return (
    <div className="Box">
      <h2>Box4 : {number}</h2>
      <button onClick={() => dispatch({ type: 'counter/plus' })}>PLUS</button>
      <button onClick={() => dispatch({ type: 'counter/minus' })}>MINUS</button>
      <button onClick={() => dispatch(plus())}>PLUS</button>
      <button onClick={() => dispatch(minus())}>MINUS</button>
    </div>
  );
}

export default Box4;
