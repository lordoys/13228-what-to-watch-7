import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from '@reduxjs/toolkit';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import App from './components/app/app';
import films from './mocks/films';
import {reducer} from './store/reducer';
import {createAPI} from './api'
import thunk from '@reduxjs/toolkit';

const api = createAPI();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App films={films} genre={'Drama'} year={2014}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
