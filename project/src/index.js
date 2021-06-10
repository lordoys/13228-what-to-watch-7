import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mocks/films';

ReactDOM.render(
  <React.StrictMode>
    <App films={films} genre={'Drama'} year={2014}/>
  </React.StrictMode>,
  document.getElementById('root'));
