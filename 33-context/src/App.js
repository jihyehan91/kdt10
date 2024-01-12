import { createContext } from 'react';
import UserProvider from './context/UserProvider';
import UserProfile from './components/UserProfile';
import UserProvider2 from './context/UserProvider2';
import Form from './components/Form';

export const ThemeContext = createContext(null);

function App() {
  const MyContext = createContext('defaultValue');

  console.log(MyContext);
  return (
    <div className="App">
      {/* UserProvider에서 value prop으로 넘겨준 값을 UserProfile에서
      Consumer or UseContext 사용해서 context 값을 쓸 수 있음 */}
      <UserProvider>
        <UserProfile />
        <h2>context</h2>

        <UserProvider2>
          <UserProfile />
        </UserProvider2>
      </UserProvider>

      {/* react dev */}
      <ThemeContext.Provider value="dark">
        <Form />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
