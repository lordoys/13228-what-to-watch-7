import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card';

function FilmList({films}) {
  const [currentMovie, setCurrentMovie] = useState({});

  return (
    <div className="catalog__films-list">
      {films.map((item) => <FilmCard key={item.id} film={item} setCurrentFilm={setCurrentMovie}/>)}
    </div>
  );
}

FilmList.propTypes = {
  films: PropTypes.array,
};

export default FilmList;
