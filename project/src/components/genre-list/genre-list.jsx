import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../routes';
import PropTypes from 'prop-types';

function GenreList({genres}) {
  console.log(genres);
  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <Link className="catalog__genres-link" to={AppRoute.ROOT}>All genres</Link>
      </li>
      {genres.map((item) => (
        <li key={item} className="catalog__genres-item">
          <Link className="catalog__genres-link" to={AppRoute.ROOT}>{item}</Link>
        </li>
      ))}
    </ul>
  );
}

GenreList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default GenreList;
