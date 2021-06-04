import React from 'react';
import MainPage from '../mainPage/mainPage';
import PropTypes from 'prop-types';

function App({genre, year}) {
  return (
    <MainPage genre={genre} year={year} />
  );
}

App.propTypes = {
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default App;
