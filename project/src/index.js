import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

ReactDOM.render(
  <React.StrictMode>
    <App genre={'Drama'} year={2014}/>
  </React.StrictMode>,
  document.getElementById('root'));
