import CssModuleComponent from './CssModuleComponent';
import SassComponent from './SassComponent';
import './styles/App.css';

function App() {
  return (
    <div className='App'>
      <h1>React styling</h1>

      <h2>CSS Module</h2>
      <CssModuleComponent />

      <h2>SASS</h2>
      <SassComponent />
    </div>
  );
}

export default App;
