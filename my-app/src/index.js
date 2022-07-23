import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { GlobalProvider } from './context/context';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, legacy_createStore } from 'redux';

import reducers from './reducers';

const initialState = {};

const store = legacy_createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </Provider>
  </React.StrictMode>
);