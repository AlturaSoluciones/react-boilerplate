import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
// generate redux logs
import logger from 'redux-logger';
// dispatch actions based on redux promise execution
import ReduxPromise from 'redux-promise';
import App from './App';
import './index.css';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  reducers,
  applyMiddleware(ReduxPromise, logger)
);

ReactDOM.render(
  <Provider>
    <App />
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();
