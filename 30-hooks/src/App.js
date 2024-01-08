import UseMemoEx from './UseMemoEx';
import UseCallbackEx from './UseCallback';
import UseCallbackEx2 from './UseCallbckEx2';
import UseReducerEx from './UseReducerEx';
import Faq from './Faq';
import Form from './Form';
import Ex1Form from './Ex1';

function App() {
  return (
    <div className='App'>
      <UseMemoEx />
      <hr />

      <UseCallbackEx />
      <hr />
      <UseCallbackEx2 postId={3} />
      <hr />

      <UseReducerEx />
      <hr />

      <Faq />
      <hr />

      <Form />
      <hr />

      <Ex1Form />
    </div>
  );
}

export default App;
