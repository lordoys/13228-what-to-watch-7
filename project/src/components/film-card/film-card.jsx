import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import filmProp from '../../props/film.prop';
import {AppRoute} from '../../const';

function FilmCard({film, onSetCurrentFilm}) {
  const history = useHistory();

  function handleMouseEnter() {
    onSetCurrentFilm(film);
  }

  function handleClick() {
    history.push(`${AppRoute.FILMS}/${film.id}`);
  }

  return (
    <article className="small-film-card catalog__films-card">
      <div onMouseEnter={handleMouseEnter} className="small-film-card__image">
        <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" onClick={handleClick} to={`${AppRoute.FILMS}/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  film: filmProp,
  onSetCurrentFilm: PropTypes.func.isRequired,
};

export default FilmCard;
