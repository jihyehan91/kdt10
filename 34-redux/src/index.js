import React from 'react';
import ReactDOM from 'react-dom/client';
import App2 from './App2';
import App from './App3';
import { createStore } from 'redux';
import isVisibleReducer from './store/isVisibleReducer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store';
import { composeWithDevTools } from 'redux-devtools-extension';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = createStore(isVisibleReducer);
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <App2 />
    </Provider>
  </React.StrictMode>
);
