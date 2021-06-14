import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import filmProp from '../../props/film.prop';

function FilmCard({film, onSetCurrentFilm}) {
  const baseUrl = '/films/';
  const link = baseUrl + film.id;
  function handleMouseEnter() {
    onSetCurrentFilm(film);
  }

  return (
    <article className="small-film-card catalog__films-card">
      <div onMouseEnter={handleMouseEnter} className="small-film-card__image">
        <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={{pathname: link}}>{film.name}</Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  film: filmProp,
  onSetCurrentFilm: PropTypes.func.isRequired,
};

export default FilmCard;
