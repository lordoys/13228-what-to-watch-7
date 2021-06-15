import React, {useState} from 'react';
import FilmCard from '../film-card/film-card';
import filmsProp from '../../props/films.prop';

function FilmList({films}) {
  const [currentMovie, setCurrentMovie] = useState({id: 1});

  return (
    <div className="catalog__films-list">
      {films.map((item) => <FilmCard key={item.id} film={item} onSetCurrentFilm={setCurrentMovie}/>)}
      <span>{currentMovie.id}</span>
    </div>
  );
}

FilmList.propTypes = {
  films: filmsProp,
};

export default FilmList;
