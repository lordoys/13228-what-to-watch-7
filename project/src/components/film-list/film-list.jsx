import React from 'react';
import FilmCard from '../film-card/film-card';
import filmsProp from '../../props/films.prop';

function FilmList({films}) {
  return (
    <div className="catalog__films-list">
      {films.map((item) => <FilmCard key={item.id} film={item}/>)}
    </div>
  );
}

FilmList.propTypes = {
  films: filmsProp,
};

export default FilmList;
