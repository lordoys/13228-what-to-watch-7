import React from 'react';
import FilmCard from '../film-card/film-card';
import filmsProp from '../../props/films.prop';
import PropTypes from 'prop-types';

function FilmList({films, genre}) {
  return (
    <div className="catalog__films-list">
      {(genre) ?
        films.filter((film) => film.genre === genre).map((item) => <FilmCard key={item.id} film={item}/>) :
        films.map((item) => <FilmCard key={item.id} film={item}/>)}
    </div>
  );
}

FilmList.propTypes = {
  films: filmsProp,
  genre: PropTypes.string,
};

export default FilmList;
