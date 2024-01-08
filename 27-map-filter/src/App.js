import Alphabet from './Alphabet';
import Practice1 from './Ex1';
import Practice2 from './Ex2';
import Practice3 from './Ex3';
import Practice4 from './Ex4';

function App() {
  return (
    <div className='App'>
      <Alphabet />
      <hr />

      {/* 실습1 */}
      <Practice1 />
      <hr />

      {/* 실습2 */}
      <Practice2 />
      <hr />
      <br />

      {/* 실습3 */}
      <h2>실습3</h2>
      <Practice3 />
      <br />
      <hr />
      <br />

      {/* 실습4 */}
      <h2>실습4</h2>
      <Practice4 />
    </div>
  );
}

export default App;
