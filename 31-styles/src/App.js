import CssModuleComponent from './CssModuleComponent';
import SassComponent from './SassComponent';
import Ex1 from './Ex1';
import './styles/App.css';

function App() {
  return (
    <div className='App'>
      <h1>React styling</h1>

      <h2>CSS Module</h2>
      <CssModuleComponent />

      <h2>SASS</h2>
      <SassComponent />

      <h2>실습 1</h2>
      <Ex1 />
    </div>
  );
}

export default App;
