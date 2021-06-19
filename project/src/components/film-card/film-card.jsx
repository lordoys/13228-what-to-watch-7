import React, {useRef} from 'react';
import { Link, useHistory } from 'react-router-dom';
import filmProp from '../../props/film.prop';
import {AppRoute} from '../../routes';
import FilmVideo from "../film-video/film-video";

function FilmCard({film}) {
  const history = useHistory();
  const cardRef = useRef(null);
  let cardIsHovered = false;

  function handleMouseEnter() {
    cardIsHovered = true;
    setTimeout(() => cardIsHovered && cardRef.current.firstChild.play(), 1000);
  }

  function handleMouseLeave() {
    cardIsHovered = false;
    cardRef.current.firstChild.load();
  }

  function handleClick() {
    cardIsHovered = false;
    history.push(`${AppRoute.FILM_BASE_IRL}/${film.id}`);
  }

  return (
    <article ref={cardRef} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className="small-film-card catalog__films-card">
      <FilmVideo src={film.previewVideoLink} poster={`img/${film.previewImage}`}/>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" onClick={handleClick} to={`${AppRoute.FILM_BASE_IRL}/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  film: filmProp,
};

export default FilmCard;
